import { Home as HomeIcon } from '@/components/icons/Home';
import { List as ListIcon } from '@/components/icons/List';
import { Movie as MovieIcon } from '@/components/icons/Movie';
import { TrendingUp as TrendingUpIcon } from '@/components/icons/TrendingUp';
import { TV as TVIcon } from '@/components/icons/TV';
import { Routes } from '@/lib/routes';
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
      href: Routes.Home,
      icon: HomeIcon,
    },
    {
      title: 'Series',
      href: Routes.TVShows,
      icon: TVIcon,
    },
    {
      title: 'Películas',
      href: Routes.Movies,
      icon: MovieIcon,
    },
    {
      title: 'Mi lista',
      href: Routes.MyList,
      icon: ListIcon,
      disabled: true,
    },
  ],
};
