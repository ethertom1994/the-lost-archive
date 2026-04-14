export interface Entry {
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  subcategory?: string;
  lastKnownYear: number | string;
  lastKnownLocation: string;
  coordinates?: [number, number];
  region: string;
  status: 'extinct' | 'functionally_extinct' | 'extinct_in_wild';
  cause: string;
  imageUrl?: string;
  imageCaption?: string;
  imageCredit?: string;
  body: string;
  quickFacts: Record<string, string>;
  connections: Connection[];
  sources: Source[];
  relatedMedia?: RelatedMedia[];
  featured?: boolean;
  featuredDate?: string;
}

export interface RelatedMedia {
  type: 'video' | 'audio' | 'book' | 'documentary' | 'museum' | 'article' | 'podcast';
  title: string;
  url: string;
  description?: string;
}

export interface Trail {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  entries: TrailStop[];
}

export interface TrailStop {
  slug: string;
  transitionText: string;
}

export interface Connection {
  slug: string;
  relationship: string;
}

export interface Source {
  title: string;
  url?: string;
  author?: string;
  year?: number;
}

export type Category =
  | 'fauna'
  | 'flora'
  | 'food'
  | 'sound'
  | 'language'
  | 'material'
  | 'technology'
  | 'place'
  | 'culture';

export const CATEGORY_META: Record<Category, { label: string; icon: string; color: string; description: string }> = {
  fauna: { label: 'Fauna', icon: '\u{1F9A4}', color: 'var(--color-cat-fauna)', description: 'Extinct animals' },
  flora: { label: 'Flora', icon: '\u{1F33F}', color: 'var(--color-cat-flora)', description: 'Vanished plants and trees' },
  food: { label: 'Food & Flavor', icon: '\u{1F350}', color: 'var(--color-cat-food)', description: 'Lost fruits, recipes, and flavors' },
  sound: { label: 'Sound', icon: '\u{1F507}', color: 'var(--color-cat-sound)', description: 'Silenced songs and extinct sounds' },
  language: { label: 'Language', icon: '\u{1F4DC}', color: 'var(--color-cat-language)', description: 'Dead and dying languages' },
  material: { label: 'Material & Pigment', icon: '\u{1F3A8}', color: 'var(--color-cat-material)', description: 'Lost pigments, fabrics, and materials' },
  technology: { label: 'Technology', icon: '\u{2699}\u{FE0F}', color: 'var(--color-cat-technology)', description: 'Forgotten inventions and lost techniques' },
  place: { label: 'Place & Landscape', icon: '\u{1F3D4}\u{FE0F}', color: 'var(--color-cat-place)', description: 'Erased ecosystems and vanished landscapes' },
  culture: { label: 'Culture', icon: '\u{1F3DB}\u{FE0F}', color: 'var(--color-cat-culture)', description: 'Extinct professions, nations, and traditions' },
};
