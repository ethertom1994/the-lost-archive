import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { entries } from '../../content';
import { CATEGORY_META } from '../../types';

function parseYear(y: number | string): number {
  if (typeof y === 'number') return y;
  const s = String(y);
  const match = s.match(/-?\d+/);
  if (!match) return 0;
  const num = parseInt(match[0]);
  return s.toLowerCase().includes('bce') ? -num : num;
}

interface Era {
  label: string;
  start: number;
  end: number;
  widthPercent: number;
}

const ERAS: Era[] = [
  { label: 'Ancient', start: -300, end: 500, widthPercent: 15 },
  { label: 'Medieval', start: 500, end: 1500, widthPercent: 15 },
  { label: 'Early Modern', start: 1500, end: 1800, widthPercent: 20 },
  { label: 'Industrial', start: 1800, end: 1950, widthPercent: 25 },
  { label: 'Modern', start: 1950, end: 2025, widthPercent: 25 },
];

function yearToPercent(year: number): number {
  let offset = 0;
  for (const era of ERAS) {
    if (year <= era.end) {
      const clampedYear = Math.max(year, era.start);
      const fraction = (clampedYear - era.start) / (era.end - era.start);
      return offset + fraction * era.widthPercent;
    }
    offset += era.widthPercent;
  }
  return 100;
}

function getEraTicks(era: Era): number[] {
  const span = era.end - era.start;
  const step = span <= 100 ? 25 : span <= 500 ? 100 : 200;
  const ticks: number[] = [];
  let tick = Math.ceil(era.start / step) * step;
  while (tick <= era.end) {
    ticks.push(tick);
    tick += step;
  }
  return ticks;
}

function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BCE`;
  return String(year);
}

export default function TimelineView() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(true);

  const sortedEntries = [...entries].sort(
    (a, b) => parseYear(a.lastKnownYear) - parseYear(b.lastKnownYear)
  );

  const TIMELINE_WIDTH = Math.max(4000, entries.length * 90);
  const AXIS_Y = 200; // vertical center where the axis sits
  const CARD_HEIGHT = 72;
  const CONNECTOR_MIN = 24;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setShowHint(false);
    el.addEventListener('scroll', onScroll, { once: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Assign vertical positions to avoid overlap
  // Cards alternate above/below, with stagger within each side
  const positioned = sortedEntries.map((entry, i) => {
    const isAbove = i % 2 === 0;
    const tier = Math.floor(i / 2) % 3; // 3 tiers per side
    const offset = CONNECTOR_MIN + tier * (CARD_HEIGHT + 8);
    return {
      entry,
      isAbove,
      yOffset: offset,
    };
  });

  return (
    <div className="relative">
      {/* Scroll hint */}
      {showHint && (
        <div className="text-text-tertiary text-sm mb-3 flex items-center gap-2 animate-pulse">
          <span>Scroll to explore</span>
          <span aria-hidden="true">&rarr;</span>
        </div>
      )}

      <div
        ref={scrollRef}
        className="overflow-x-auto pb-4 -mx-4 px-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div
          className="relative"
          style={{
            width: TIMELINE_WIDTH,
            height: AXIS_Y * 2 + 20,
            background: 'var(--color-bg-void)',
          }}
        >
          {/* Era backgrounds and labels */}
          {(() => {
            let leftPx = 0;
            return ERAS.map((era) => {
              const widthPx = (era.widthPercent / 100) * TIMELINE_WIDTH;
              const el = (
                <div
                  key={era.label}
                  className="absolute top-0 bottom-0"
                  style={{ left: leftPx, width: widthPx }}
                >
                  {/* Era separator */}
                  <div
                    className="absolute top-0 bottom-0 left-0 w-px"
                    style={{ background: 'var(--color-border-default)', opacity: 0.3 }}
                  />
                  {/* Era label at axis */}
                  <div
                    className="absolute left-3 font-mono text-[11px] uppercase tracking-widest"
                    style={{
                      top: AXIS_Y + 14,
                      color: 'var(--color-text-muted)',
                      fontVariant: 'small-caps',
                    }}
                  >
                    {era.label}
                  </div>
                  {/* Tick marks */}
                  {getEraTicks(era).map((tick) => {
                    const tickPercent = (tick - era.start) / (era.end - era.start);
                    const tickX = tickPercent * widthPx;
                    return (
                      <div key={tick} className="absolute" style={{ left: tickX }}>
                        <div
                          className="absolute w-px"
                          style={{
                            top: AXIS_Y - 4,
                            height: 8,
                            background: 'var(--color-border-default)',
                            opacity: 0.5,
                          }}
                        />
                        <div
                          className="absolute font-mono text-[9px] -translate-x-1/2"
                          style={{
                            top: AXIS_Y + 28,
                            color: 'var(--color-text-tertiary)',
                          }}
                        >
                          {formatYear(tick)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
              leftPx += widthPx;
              return el;
            });
          })()}

          {/* Main axis line */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: AXIS_Y,
              height: 1,
              background: 'var(--color-border-default)',
            }}
          />

          {/* Entry cards */}
          {positioned.map(({ entry, isAbove, yOffset }) => {
            const year = parseYear(entry.lastKnownYear);
            const xPercent = yearToPercent(year);
            const xPx = (xPercent / 100) * TIMELINE_WIDTH;
            const meta = CATEGORY_META[entry.category];
            const isHovered = hoveredSlug === entry.slug;

            const cardTop = isAbove
              ? AXIS_Y - yOffset - CARD_HEIGHT
              : AXIS_Y + yOffset;

            const connectorTop = isAbove ? cardTop + CARD_HEIGHT : AXIS_Y;
            const connectorHeight = isAbove
              ? AXIS_Y - (cardTop + CARD_HEIGHT)
              : cardTop - AXIS_Y;

            return (
              <div key={entry.slug} className="absolute" style={{ left: xPx }}>
                {/* Connector line */}
                <div
                  className="absolute w-px -translate-x-1/2"
                  style={{
                    left: 0,
                    top: connectorTop,
                    height: Math.max(connectorHeight, 0),
                    background: isHovered ? meta.color : 'var(--color-border-default)',
                    opacity: isHovered ? 0.8 : 0.4,
                    transition: 'opacity 0.2s, background 0.2s',
                  }}
                />
                {/* Dot on axis */}
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2 size-3 rounded-full"
                  style={{
                    left: 0,
                    top: AXIS_Y,
                    background: meta.color,
                    opacity: isHovered ? 1 : 0.7,
                    transition: 'opacity 0.2s',
                  }}
                />
                {/* Card */}
                <Link
                  to={`/archive/${entry.slug}`}
                  className="absolute block -translate-x-1/2 rounded-md border-l-[3px] px-2 py-1.5 no-underline transition-all duration-200"
                  style={{
                    left: 0,
                    top: cardTop,
                    width: 130,
                    height: CARD_HEIGHT,
                    background: 'var(--color-bg-card)',
                    borderLeftColor: meta.color,
                    boxShadow: isHovered
                      ? '0 4px 12px rgba(0,0,0,0.3)'
                      : '0 1px 3px rgba(0,0,0,0.15)',
                    transform: `translateX(-50%) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
                    zIndex: isHovered ? 50 : 1,
                  }}
                  onMouseEnter={() => setHoveredSlug(entry.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                >
                  <div className="flex items-center gap-1 mb-0.5">
                    <span
                      className="size-1.5 rounded-full flex-shrink-0"
                      style={{ background: meta.color }}
                    />
                    <span
                      className="text-[10px] truncate"
                      style={{ color: meta.color }}
                    >
                      {meta.label}
                    </span>
                  </div>
                  <p
                    className="text-[11px] font-medium leading-tight text-text-primary truncate"
                    title={entry.name}
                  >
                    {entry.name}
                  </p>
                  <p
                    className="font-mono text-[9px] mt-0.5"
                    style={{ color: 'var(--color-text-tertiary)' }}
                  >
                    {entry.lastKnownYear}
                  </p>
                  {/* Expanded tagline on hover */}
                  {isHovered && (
                    <p className="text-[9px] leading-snug mt-1 text-text-secondary line-clamp-2">
                      {entry.tagline}
                    </p>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
