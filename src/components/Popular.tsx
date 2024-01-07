import { FC } from 'react';
import type { MediaType } from '@/types';
import { getPopular } from '@/lib/fetchers';
import { TopShowsCarousel } from '@/components/TopShowsCarousel';

interface PopularProps {
  title?: string;
  mediaType: MediaType;
}

const Popular: FC<PopularProps> = async ({ mediaType, title = 'Popular' }) => {
  const { popular } = await getPopular({ mediaType });

  return (
    <section aria-label="Popular shows">
      <TopShowsCarousel title={title} shows={popular} />
    </section>
  );
};

export { Popular };
