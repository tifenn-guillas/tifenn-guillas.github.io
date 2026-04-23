import type { BilingualString } from './common';

export interface LayoutData {
  lang: BilingualString;
  title: BilingualString;
  description: BilingualString;
  keywords: BilingualString;
  og: {
    url: BilingualString;
    title: BilingualString;
    description: BilingualString;
    locale: BilingualString;
    image: BilingualString;
  };
}

export interface HeaderData {
  title: BilingualString;
}

export interface NavbarData {
  flag: BilingualString;
  alt_flag: BilingualString;
  page: BilingualString;
  download: BilingualString;
  download_href: BilingualString;
  download_description: BilingualString;
}

export interface FooterData {
  description: BilingualString;
}

export interface Section {
  name: string;
  template?: string;
  menu_displayed: boolean;
  label?: BilingualString;
}
