export interface BookRecommendation {
  title: string;
  author: string;
  description: string;
  reason: string;
}

export enum PageView {
  HOME = 'HOME',
  TRADE_POLICY = 'TRADE_POLICY',
  EVENTS = 'EVENTS',
  AI_BOOKSELLER = 'AI_BOOKSELLER'
}

export interface StoreHours {
  day: string;
  hours: string;
}

export interface NavItem {
  label: string;
  view: PageView;
}