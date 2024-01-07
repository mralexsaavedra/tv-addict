import { FC } from 'react';
import type { MediaType } from '@/types';
import { getTrending } from '@/lib/fetchers';
import { ShowsCarousel } from '@/components/ShowsCarousel';

interface TrendingProps {
  mediaType: MediaType;
  onClick?: () => void;
}

const Trending: FC<TrendingProps> = async ({ mediaType, onClick }) => {
  const { trending } = await getTrending({ mediaType });

  return (
    <section aria-label="Trending shows">
      <ShowsCarousel
        shows={trending}
        title="Tendencias ahora"
        onClick={onClick}
      />
    </section>
  );
};

export { Trending };
