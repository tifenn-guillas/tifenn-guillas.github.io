import type { BilingualString } from './common';

export interface ResumeJob {
  title: BilingualString;
  start: string;
  end: string;
  location: BilingualString;
  description: BilingualString;
  tasks: BilingualString;
  technologies: string[];
}

export interface ResumeData {
  title: BilingualString;
  download: BilingualString;
  download_href: BilingualString;
  download_description: BilingualString;
  jobs: ResumeJob[];
}
