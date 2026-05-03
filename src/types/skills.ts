import type { BilingualString } from './common';

export interface SkillTechnology {
  icon: string;
  icon_type: 'fontawesome' | 'custom';
  description: BilingualString;
}

export interface SkillStack {
  stack: BilingualString;
  technologies: SkillTechnology[];
}

export interface SkillsData {
  title: BilingualString;
  description: BilingualString;
  list: SkillStack[];
}
