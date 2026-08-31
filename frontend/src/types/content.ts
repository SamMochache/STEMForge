export interface Program {
  id: number;
  title: string;
  slug: string;
  summary: string;
  category: string;
  age_min: number;
  age_max: number;
  age_range: string;
  duration_weeks: number;
  price_per_student: number;
  features: string[];
  what_we_provide: string[];
  what_school_provides: string[];
  investment_note: string;
  is_published: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  is_published: boolean;
  content: string;
}

export interface AgeGroup {
  id: string;
  label: string;
  range: string;
  stage: string;
  description: string;
  focus: string[];
  solutions: string[];
}

export interface FaqCategory {
  category: string;
  questions: {q: string;a: string;}[];
}

export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: {title: string;paragraphs?: string[];bullets?: string[];}[];
  highlight?: boolean;
}

export interface LegalDocument {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro?: string;
  sections: LegalSection[];
}