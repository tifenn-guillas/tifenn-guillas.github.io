import type { Social } from '../types';

export const socials: Social[] = [
  {
    name: 'GitHub',
    username: 'tifenn-guillas',
    url: 'https://github.com/tifenn-guillas',
    fontawesome: 'fab fa-github',
    contact: false,
  },
  {
    name: 'LinkedIn',
    username: 'tifenn-guillas',
    url: 'https://www.linkedin.com/in/tifenn-guillas',
    fontawesome: 'fab fa-linkedin-in',
    contact: true,
  },
  {
    name: 'Contact',
    username: '',
    url: '#contact',
    fontawesome: 'fas fa-envelope',
    contact: false,
    external: false,
  },
];
