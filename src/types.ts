export interface Principle {
  id: string;
  title: string;
  latinTag: string;
  shortQuote: string;
  description: string;
  detailedAnalysis: string;
  imageUrl: string;
  imageAlt: string;
  keyPractices: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  year: string;
  coverImage: string;
  description: string;
  famousQuote: string;
  keyThemes: string[];
  excerpt: string;
  readTime: string;
  pages: number;
}

export interface Essay {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  content: string[];
  keyTakeaway: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  era: string;
  imageUrl: string;
  aspectRatio: 'aspect-square' | 'aspect-[3/4]' | 'aspect-[4/5]' | 'aspect-[16/9]' | 'aspect-[9/16]';
  caption: string;
}

export interface DailyPracticeItem {
  id: string;
  text: string;
  category: 'morning' | 'evening';
  subtitle: string;
}

export interface JournalEntry {
  id: string;
  date: string;
  controlled: string;
  emotion: string;
  improvement: string;
}
