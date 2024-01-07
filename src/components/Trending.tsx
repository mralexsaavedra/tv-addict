import { FC } from 'react';
import type { MediaType } from '@/types';
import { getTrending } from '@/lib/fetchers';
import { ShowsCarousel } from '@/components/ShowsCarousel';

interface TrendingProps {
  title: string;
  mediaType: MediaType;
  onClick?: () => void;
}

const Trending: FC<TrendingProps> = async ({ title, mediaType, onClick }) => {
  const { data } = await getTrending({ mediaType });

  return (
    <section aria-label="Trending shows">
      <ShowsCarousel shows={data} title={title} onClick={onClick} />
    </section>
  );
};

export { Trending };
