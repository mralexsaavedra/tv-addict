import { Home as HomeIcon } from '@/components/icons/Home';
import { List as ListIcon } from '@/components/icons/List';
import { Movie as MovieIcon } from '@/components/icons/Movie';
import { TrendingUp as TrendingUpIcon } from '@/components/icons/TrendingUp';
import { TV as TVIcon } from '@/components/icons/TV';
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
      icon: HomeIcon,
    },
    {
      title: 'Series',
      href: '/tv-shows',
      icon: TVIcon,
      disabled: true,
    },
    {
      title: 'Películas',
      href: '/movies',
      icon: MovieIcon,
      disabled: true,
    },
    {
      title: 'Novedades más vistas',
      href: '/new-and-popular',
      icon: TrendingUpIcon,
    },
    {
      title: 'Mi lista',
      href: '/my-list',
      icon: ListIcon,
      disabled: true,
    },
  ],
};
