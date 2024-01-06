import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'TV addict',
  description:
    'An open source TV addict web built using the new app router, server components, trpc, and everything new in Next.js 14.',
  url: 'https://tv-addict.vercel.app',
  ogImage: 'https://tv-addict.vercel.app/opengraph-image.png',
  links: {
    twitter: 'https://twitter.com/mralexsaavedra',
    github: 'https://github.com/mralexsaavedra',
  },
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'TV Shows',
      href: '/tv-shows',
      disabled: true,
    },
    {
      title: 'Movies',
      href: '/movies',
      disabled: true,
    },
    {
      title: 'New & Popular',
      href: '/new-and-popular',
    },
    {
      title: 'My List',
      href: '/my-list',
      disabled: true,
    },
  ],
};
