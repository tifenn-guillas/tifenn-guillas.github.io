import type { BilingualString } from './common';

export interface ContactData {
  title: BilingualString;
  description: BilingualString;
}

export interface HobbyItem {
  svg: string;
  title: BilingualString;
  text: BilingualString;
}

export interface HobbiesData {
  title: BilingualString;
  subtitle: BilingualString;
  items: HobbyItem[];
}
