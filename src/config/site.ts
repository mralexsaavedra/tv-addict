import { Home } from '@/components/icons/Home';
import { List } from '@/components/icons/List';
import { Movie } from '@/components/icons/Movie';
import { TrendingUp } from '@/components/icons/TrendingUp';
import { TV } from '@/components/icons/Tv';
import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'TV addict',
  description: 'Track your TV Shows and Movies.',
  url: 'https://tv-addict.vercel.app',
  ogImage: 'https://tv-addict.vercel.app/opengraph-image.png',
  links: {
    twitter: 'https://twitter.com/mralexsaavedra',
    github: 'https://github.com/mralexsaavedra',
  },
  mainNav: [
    {
      title: 'Inicio',
      href: '/',
      icon: Home,
    },
    {
      title: 'Series',
      href: '/tv-shows',
      icon: TV,
      disabled: true,
    },
    {
      title: 'Películas',
      href: '/movies',
      icon: Movie,
      disabled: true,
    },
    {
      title: 'Novedades más vistas',
      href: '/new-and-popular',
      icon: TrendingUp,
    },
    {
      title: 'Mi lista',
      href: '/my-list',
      icon: List,
      disabled: true,
    },
  ],
};
