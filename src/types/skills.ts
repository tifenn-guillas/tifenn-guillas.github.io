import type { BilingualString } from './common';

export interface SkillTechnology {
  label: string;
  tech: string;
  icon?: string;
  svg?: string;
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
