import type { BilingualString } from './common';

export interface FormationItem {
  title: BilingualString;
  date: number;
  location?: BilingualString;
  note?: BilingualString;
}

export interface FormationData {
  title: BilingualString;
  list: FormationItem[];
}
