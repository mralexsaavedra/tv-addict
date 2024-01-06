import type { MediaType, Show } from '@/types';
import { LOCALE, Locale } from './locale';

const DOMAIN = 'https://api.themoviedb.org';
const VERSION = '3';
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function fetcher<T, P extends Record<string, string> = {}>(
  query: string,
  params?: P
): Promise<{ status: number; data: T } | never> {
  const urlParams = new URLSearchParams({
    api_key: TMDB_API_KEY as string,
    ...params,
  });
  const endpoint = `${DOMAIN}/${VERSION}/${query}?${urlParams.toString()}`;

  try {
    const result = await fetch(endpoint);

    if (!result.ok) {
      throw new Error(`Failed to fetch ${query}`);
    }

    const data = await result.json();

    return {
      status: result.status,
      data: data.results,
    };
  } catch (e) {
    throw {
      error: e,
      query,
    };
  }
}

export async function getTrending(
  {
    mediaType = 'movie',
    timeWindow = 'week',
    locale = LOCALE,
  }: {
    mediaType: MediaType;
    timeWindow: 'day' | 'week';
    locale: Locale;
  } = { mediaType: 'movie', timeWindow: 'week', locale: LOCALE }
) {
  const { data } = await fetcher<Show[], { language: string }>(
    `/trending/${mediaType}/${timeWindow}`,
    { language: locale }
  );

  return {
    trending: data,
  };
}

export async function getPopular(
  {
    mediaType = 'movie',
    locale = LOCALE,
    page = 1,
  }: {
    mediaType: MediaType;
    locale: Locale;
    page: number;
  } = { mediaType: 'movie', locale: LOCALE, page: 1 }
) {
  const { data } = await fetcher<Show[], { language: string; page: string }>(
    `/${mediaType}/popular`,
    { language: locale, page: String(page) }
  );

  return {
    popular: data,
  };
}
