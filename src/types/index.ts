import { ComponentType, SVGProps } from 'react';

export type NavItem = {
  title: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export type MediaType = 'movie' | 'tv' | 'person';

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  mainNav: NavItem[];
}

export interface Person {
  adult: boolean;
  id: number;
  name: string;
  original_name: string;
  media_type: MediaType;
  popularity: number;
  gender: number;
  known_for_department: string;
  profile_path: string;
  known_for: any;
}

export interface Show {
  adult: boolean;
  backdrop_path: string | null;
  media_type: MediaType;
  budget: number | null;
  homepage: string | null;
  showId: string;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string | null;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  number_of_seasons: number | null;
  number_of_episodes: number | null;
  release_date: string | null;
  first_air_date: string | null;
  last_air_date: string | null;
  revenue: number | null;
  runtime: number | null;
  status: string | null;
  tagline: string | null;
  title: string | null;
  name: string | null;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
