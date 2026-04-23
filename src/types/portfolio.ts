import type { BilingualString } from './common';

export interface PortfolioProject {
  title: string;
  id: string;
  miniature: string;
  images: string[];
  description: BilingualString;
  hashtags: string[];
}
