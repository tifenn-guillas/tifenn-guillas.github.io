import type { BilingualString } from './common';

export interface GoalTask {
  title: BilingualString;
  icon_type: 'fontawesome' | 'custom';
  icon: string;
  description: BilingualString;
}

export interface GoalYear {
  year: number;
  tasks: GoalTask[];
}
