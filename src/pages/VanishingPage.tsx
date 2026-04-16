import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { geoNaturalEarth1, geoPath, type GeoProjection } from 'd3-geo';
import { feature } from 'topojson-client';
import { entries } from '../content';
import { CATEGORY_META, type Category } from '../types';
import MetaTags from '../components/shared/MetaTags';

/* ───── Constants ───── */

const WORLD_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json';
const TOTAL_DURATION_MS = 90_000;
const FADE_MS = 1200;
const LABEL_SHOW_MS = 2000;
const HIT_RADIUS = 15;

const CAT_COLORS: Record<Category, string> = {
  fauna: '#7A9B8F',
  flora: '#6B8F6B',
  food: '#C8965A',
  sound: '#8B7AAF',
  language: '#7A8FAF',
  material: '#AF8B7A',
  technology: '#7AAFAF',
  place: '#8FAF7A',
  culture: '#AF7A8B',
};

/* ───── Helpers ───── */

function parseYear(val: number | string): number | null {
  if (typeof val === 'number') return val;
  const s = String(val).toLowerCase().trim();
  if (s.includes('million') || s.includes('billion')) return null;
  if (s.includes('ongoing') || s.includes('present')) return 2020;
  const bce = s.match(/(\d+)\s*(?:bce|bc)/);
  if (bce) return -parseInt(bce[1], 10);
  const cent = s.match(/(\d+)(?:st|nd|rd|th)\s*century/);
  if (cent) {
    const c = parseInt(cent[1], 10);
    const mid = (c - 1) * 100 + 50;
    return s.includes('bce') || s.includes('bc') ? -mid : mid;
  }
  if (s.includes('mid-')) {
    const mc = s.match(/mid[- ](\d+)/);
    if (mc) return (parseInt(mc[1], 10) - 1) * 100 + 50;
  }
  const yr = s.match(/(\d{3,4})/);
  if (yr) return parseInt(yr[1], 10);
  return null;
}

function formatYear(y: number): string {
  if (y < 0) return `${Math.abs(y)} BCE`;
  if (y < 500) return `${y} CE`;
  return String(y);
}

/* ───── Types ───── */

interface MapEntry {
  slug: string;
  name: string;
  year: number;
  category: Category;
  lng: number;
  lat: number;
  state: 'alive' | 'dying' | 'dead';
  fadeStart: number;
  px: number;
  py: number;
}

type Phase = 'loading' | 'ready' | 'playing' | 'paused' | 'done';

/* ───── Component ───── */

export default function VanishingPage() {
  const { timeline, yearMin, yearMax, chronoList } = useMemo(() => {
    const tl: Omit<MapEntry, 'state' | 'fadeStart' | 'px' | 'py'>[] = [];
    for (const e of entries) {
      const year = parseYear(e.lastKnownYear);
      if (year === null || !e.coordinates) continue;
      tl.push({
        slug: e.slug, name: e.name, year, category: e.category,
        lng: e.coordinates[1], lat: e.coordinates[0],
      });
    }
    tl.sort((a, b) => a.year - b.year);
    const yMin = tl.length > 0 ? tl[0].year - 200 : -3000;
    const yMax = tl.length > 0 ? tl[tl.length - 1].year + 10 : 2025;

    const cl = entries.map(e => ({
      slug: e.slug, name: e.name, category: e.category,
      year: parseYear(e.lastKnownYear),
      yearDisplay: String(e.lastKnownYear),
    })).sort((a, b) => {
      if (a.year === null) return 1;
      if (b.year === null) return -1;
      return a.year - b.year;
    });

    return { timeline: tl, yearMin: yMin, yearMax: yMax, chronoList: cl };
  }, []);

  /* State */
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [worldGeo, setWorldGeo] = useState<GeoJSON.FeatureCollection | null>(null);
  const [phase, setPhase] = useState<Phase>('loading');
  const [speed, setSpeed] = useState(1);
  const [year, setYear] = useState(yearMin);
  const [alive, setAlive] = useState(timeline.length);
  const [label, setLabel] = useState<{ name: string; year: number } | null>(null);
  const [tooltip, setTooltip] = useState<{ name: string; slug: string; year: number; x: number; y: number } | null>(null);

  /* Mutable refs for animation */
  const phaseRef = useRef<Phase>('loading');
  const speedRef = useRef(1);
  const yearRef = useRef(yearMin);
  const frameRef = useRef(0);
  const lastTimeRef = useRef(0);
  const labelTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const sizeRef = useRef({ w: 0, h: 0 });
  const projRef = useRef<GeoProjection | null>(null);
  const mapEntries = useRef<MapEntry[]>([]);
  const worldGeoRef = useRef<GeoJSON.FeatureCollection | null>(null);

  useEffect(() => { phaseRef.current = phase; }, [phase]);
  useEffect(() => { speedRef.current = speed; }, [speed]);
  useEffect(() => { worldGeoRef.current = worldGeo; }, [worldGeo]);

  useEffect(() => {
    mapEntries.current = timeline.map(e => ({
      ...e, state: 'alive' as const, fadeStart: 0, px: 0, py: 0,
    }));
  }, [timeline]);

  /* Fetch world topology */
  useEffect(() => {
    let cancelled = false;
    fetch(WORLD_URL)
      .then(r => r.json())
      .then(topo => {
        if (cancelled) return;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const land = feature(topo as any, (topo as any).objects.land) as unknown as GeoJSON.FeatureCollection;
        setWorldGeo(land);
        setPhase('ready');
      })
      .catch(() => { if (!cancelled) setPhase('ready'); });
    return () => { cancelled = true; };
  }, []);

  /* Projection + canvas sizing */
  const updateProjection = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const rect = container.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    sizeRef.current = { w, h };
    const pad = Math.min(w, h) * 0.06;
    const proj = geoNaturalEarth1().fitExtent(
      [[pad, pad * 1.5], [w - pad, h - pad * 1.5]],
      { type: 'Sphere' },
    );
    projRef.current = proj;
    for (const e of mapEntries.current) {
      const p = proj([e.lng, e.lat]);
      if (p) { e.px = p[0]; e.py = p[1]; }
    }
  }, []);

  useEffect(() => {
    updateProjection();
    window.addEventListener('resize', updateProjection);
    return () => window.removeEventListener('resize', updateProjection);
  }, [updateProjection, worldGeo]);

  /* Draw a single frame */
  const drawFrame = useCallback((now: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const { w, h } = sizeRef.current;
    const dpr = window.devicePixelRatio || 1;
    const proj = projRef.current;
    if (!proj) return;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    // Background
    ctx.fillStyle = '#0A0A0A';
    ctx.fillRect(0, 0, w, h);

    const pathGen = geoPath(proj, ctx);

    // Sphere
    ctx.beginPath();
    pathGen({ type: 'Sphere' });
    ctx.fillStyle = '#0E0E0E';
    ctx.fill();
    ctx.strokeStyle = '#1E1A18';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Land
    if (worldGeoRef.current) {
      ctx.beginPath();
      pathGen(worldGeoRef.current);
      ctx.fillStyle = '#151515';
      ctx.fill();
      ctx.strokeStyle = '#252018';
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    // Dots
    const dotR = w < 500 ? 3 : 3.5;
    let aliveCount = 0;

    for (const e of mapEntries.current) {
      if (e.state === 'alive') {
        aliveCount++;
        ctx.beginPath();
        ctx.arc(e.px, e.py, dotR, 0, Math.PI * 2);
        ctx.fillStyle = CAT_COLORS[e.category];
        ctx.shadowColor = CAT_COLORS[e.category];
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      } else if (e.state === 'dying') {
        const t = Math.min((now - e.fadeStart) / FADE_MS, 1);
        if (t >= 1) { e.state = 'dead'; continue; }
        aliveCount++;
        const flash = t < 0.15;
        const alpha = 1 - t * t;
        const r = flash ? dotR + (1 - t / 0.15) * 5 : dotR * Math.max(1 - t, 0.2);

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(e.px, e.py, Math.max(r, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = flash ? '#ffffff' : CAT_COLORS[e.category];
        ctx.shadowColor = flash ? '#ffffff' : CAT_COLORS[e.category];
        ctx.shadowBlur = flash ? 15 : 8 * alpha;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.restore();
      }
    }

    setAlive(aliveCount);
  }, []);

  /* Animation loop */
  const startAnimation = useCallback(() => {
    lastTimeRef.current = 0;
    const loop = (ts: number) => {
      if (phaseRef.current !== 'playing') return;
      if (lastTimeRef.current === 0) lastTimeRef.current = ts;
      const dt = ts - lastTimeRef.current;
      lastTimeRef.current = ts;

      const yearsPerMs = ((yearMax - yearMin) / TOTAL_DURATION_MS) * speedRef.current;
      yearRef.current = Math.min(yearRef.current + dt * yearsPerMs, yearMax);

      const now = performance.now();
      let newLabel: { name: string; year: number } | null = null;
      for (const e of mapEntries.current) {
        if (e.state === 'alive' && e.year <= yearRef.current) {
          e.state = 'dying';
          e.fadeStart = now;
          newLabel = { name: e.name, year: e.year };
        }
      }

      if (newLabel) {
        setLabel(newLabel);
        clearTimeout(labelTimerRef.current);
        labelTimerRef.current = setTimeout(() => setLabel(null), LABEL_SHOW_MS);
      }

      drawFrame(now);
      setYear(Math.round(yearRef.current));

      if (yearRef.current >= yearMax) {
        phaseRef.current = 'done';
        setPhase('done');
        return;
      }
      frameRef.current = requestAnimationFrame(loop);
    };
    frameRef.current = requestAnimationFrame(loop);
  }, [yearMin, yearMax, drawFrame]);

  useEffect(() => {
    if (phase === 'playing') startAnimation();
    return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [phase, startAnimation]);

  useEffect(() => {
    if (phase === 'ready' || phase === 'paused') drawFrame(performance.now());
  }, [phase, drawFrame, worldGeo]);

  /* Handlers */
  const handlePlay = () => { phaseRef.current = 'playing'; setPhase('playing'); };
  const handlePause = () => { phaseRef.current = 'paused'; setPhase('paused'); lastTimeRef.current = 0; };

  const handleReset = () => {
    yearRef.current = yearMin;
    setYear(yearMin);
    for (const e of mapEntries.current) { e.state = 'alive'; e.fadeStart = 0; }
    setAlive(timeline.length);
    setLabel(null);
    setTooltip(null);
    phaseRef.current = 'ready';
    setPhase('ready');
    requestAnimationFrame(() => drawFrame(performance.now()));
  };

  const handleScrub = (newYear: number) => {
    if (phase === 'playing') { phaseRef.current = 'paused'; setPhase('paused'); lastTimeRef.current = 0; }
    yearRef.current = newYear;
    setYear(newYear);
    for (const e of mapEntries.current) {
      e.state = e.year > newYear ? 'alive' : 'dead';
      e.fadeStart = 0;
    }
    setAlive(mapEntries.current.filter(e => e.state === 'alive').length);
    setTooltip(null);
    drawFrame(performance.now());
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    let closest: MapEntry | null = null;
    let minDist = HIT_RADIUS;
    for (const entry of mapEntries.current) {
      if (entry.state === 'dead') continue;
      const d = Math.hypot(entry.px - x, entry.py - y);
      if (d < minDist) { minDist = d; closest = entry; }
    }
    if (closest) {
      setTooltip({ name: closest.name, slug: closest.slug, year: closest.year, x: closest.px, y: closest.py });
    } else {
      setTooltip(null);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    let found = false;
    for (const entry of mapEntries.current) {
      if (entry.state === 'dead') continue;
      if (Math.hypot(entry.px - x, entry.py - y) < HIT_RADIUS) { found = true; break; }
    }
    canvasRef.current.style.cursor = found ? 'pointer' : 'crosshair';
  };

  /* Intersection observer for list */
  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll('[data-vi]');
    const obs = new IntersectionObserver(
      (observed) => {
        for (const e of observed) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = '1';
            (e.target as HTMLElement).style.transform = 'translateY(0)';
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: '50px' },
    );
    items.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [chronoList]);

  const showControls = phase === 'playing' || phase === 'paused' || phase === 'done';
  const isDone = phase === 'done';

  return (
    <>
      <MetaTags
        title="The Vanishing"
        description="Watch humanity's losses play out across time. An interactive timeline of everything we've lost."
        path="/vanishing"
        image="https://the-lost-archive.vercel.app/og/vanishing.png"
      />

      {/* ═══ MAP ═══ */}
      <section
        ref={containerRef}
        className="relative bg-bg-void overflow-hidden"
        style={{ height: 'calc(100dvh - 4rem)' }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          onClick={handleCanvasClick}
          onMouseMove={handleMouseMove}
        />

        {/* Loading spinner */}
        {phase === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="size-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
          </div>
        )}

        {/* Counter */}
        {phase !== 'loading' && (
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 pointer-events-none">
            <p className="font-display text-3xl sm:text-4xl font-medium text-text-primary tabular-nums">
              {alive}
            </p>
            <p className="text-text-tertiary text-xs sm:text-sm mt-1">
              {isDone ? 'lights extinguished' : alive === timeline.length ? 'lights once shone' : 'remaining'}
            </p>
          </div>
        )}

        {/* Play button */}
        {phase === 'ready' && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button onClick={handlePlay} className="group flex flex-col items-center gap-4 cursor-pointer bg-transparent border-0">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-accent/20 animate-pulse" />
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:bg-accent/20 group-hover:border-accent/50 group-hover:scale-105">
                  <Play size={28} className="text-accent ml-1" />
                </div>
              </div>
              <span className="font-display text-lg sm:text-xl text-text-secondary italic transition-colors duration-300 group-hover:text-accent">
                Watch the world go dark
              </span>
            </button>
          </div>
        )}

        {/* Vanish label */}
        {label && !isDone && (
          <div className="absolute bottom-32 sm:bottom-28 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center">
            <p className="text-text-primary text-sm sm:text-base font-medium whitespace-nowrap">{label.name}</p>
            <p className="text-text-muted text-xs mt-0.5">{formatYear(label.year)}</p>
          </div>
        )}

        {/* Dot tooltip */}
        {tooltip && (
          <div
            className="absolute z-30 bg-bg-card border border-border-subtle rounded-lg px-3 py-2 shadow-lg -translate-x-1/2 pointer-events-auto"
            style={{ left: tooltip.x, top: Math.max(tooltip.y - 55, 10) }}
          >
            <p className="text-text-primary text-sm font-medium">{tooltip.name}</p>
            <p className="text-text-muted text-xs">{formatYear(tooltip.year)}</p>
            <Link to={`/archive/${tooltip.slug}`} className="text-accent text-xs hover:underline mt-1 inline-block">
              View entry &rarr;
            </Link>
          </div>
        )}

        {/* Controls */}
        {showControls && (
          <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 pb-20 md:pb-0">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col gap-3">
              {/* Year */}
              <div className="text-center">
                <span className="font-display text-2xl sm:text-3xl text-accent tabular-nums font-medium">
                  {formatYear(year)}
                </span>
              </div>

              {/* Scrubber */}
              <input
                type="range"
                min={yearMin}
                max={yearMax}
                value={year}
                onChange={e => handleScrub(parseInt(e.target.value))}
                className="w-full h-1.5 bg-border-subtle rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(200,150,90,0.15)]
                  sm:[&::-webkit-slider-thumb]:w-3.5 sm:[&::-webkit-slider-thumb]:h-3.5 sm:[&::-webkit-slider-thumb]:shadow-none
                  [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-accent [&::-moz-range-thumb]:cursor-pointer
                  sm:[&::-moz-range-thumb]:w-3.5 sm:[&::-moz-range-thumb]:h-3.5"
              />

              {/* Play/Pause + Speed */}
              <div className="flex items-center justify-center gap-4">
                {isDone ? (
                  <button onClick={handleReset} className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-accent text-sm font-medium hover:bg-accent/20 transition-colors cursor-pointer">
                    <RotateCcw size={16} /> Reset
                  </button>
                ) : phase === 'playing' ? (
                  <button onClick={handlePause} className="flex items-center gap-2 bg-bg-card/80 border border-border-subtle rounded-full px-4 py-2 text-text-primary text-sm hover:bg-bg-card transition-colors cursor-pointer">
                    <Pause size={16} /> Pause
                  </button>
                ) : (
                  <button onClick={handlePlay} className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-accent text-sm font-medium hover:bg-accent/20 transition-colors cursor-pointer">
                    <Play size={16} /> Resume
                  </button>
                )}

                <div className="flex items-center gap-1 bg-bg-card/80 border border-border-subtle rounded-full px-1.5 py-1.5 sm:px-1 sm:py-1">
                  {[1, 2, 4].map(s => (
                    <button
                      key={s}
                      onClick={() => { setSpeed(s); speedRef.current = s; }}
                      className={`px-4 py-2 sm:px-3 sm:py-1 rounded-full text-xs font-medium transition-colors cursor-pointer active:opacity-80 ${
                        speed === s ? 'bg-accent/20 text-accent' : 'text-text-tertiary hover:text-text-secondary'
                      }`}
                    >
                      {s}x
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Final message */}
        {isDone && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none vanish-fade-in">
            <p className="font-display text-3xl sm:text-5xl text-text-primary font-medium leading-tight text-center px-4">
              These lights are not<br />coming back.
            </p>
          </div>
        )}
      </section>

      {/* ═══ CHRONOLOGICAL LIST ═══ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="font-display text-3xl font-medium text-text-primary mb-2">
          The Complete Timeline
        </h2>
        <p className="text-text-tertiary text-sm mb-8">
          {chronoList.length} losses, ordered by when they vanished.
        </p>

        <div ref={listRef} className="flex flex-col gap-2">
          {chronoList.map(item => (
            <Link
              key={item.slug}
              to={`/archive/${item.slug}`}
              data-vi=""
              className="no-underline group flex items-center gap-4 bg-bg-card border border-border-subtle rounded-lg px-4 py-3 hover:bg-bg-card-hover hover:border-border-default"
              style={{ opacity: 0, transform: 'translateY(16px)', transition: 'opacity 0.5s ease, transform 0.5s ease, background-color 0.3s, border-color 0.3s' }}
            >
              <span className="text-xs font-mono tabular-nums text-text-muted w-20 sm:w-24 shrink-0 text-right">
                {item.year !== null ? formatYear(item.year) : '\u2014'}
              </span>
              <span className="size-2 rounded-full shrink-0" style={{ backgroundColor: CAT_COLORS[item.category] }} />
              <span className="text-text-primary text-sm font-medium truncate group-hover:text-accent transition-colors">
                {item.name}
              </span>
              <span className="hidden sm:inline text-text-muted text-xs ml-auto shrink-0">
                {CATEGORY_META[item.category].label}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
