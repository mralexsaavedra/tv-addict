import { FC } from 'react';
import type { MediaType } from '@/types';
import { getPopular } from '@/lib/fetchers';
import { TopShowsCarousel } from '@/components/TopShowsCarousel';

interface PopularProps {
  title: string;
  mediaType: MediaType;
}

const Popular: FC<PopularProps> = async ({ title, mediaType }) => {
  const { data } = await getPopular({ mediaType });

  return (
    <section aria-label="Popular shows">
      <TopShowsCarousel title={title} shows={data} />
    </section>
  );
};

export { Popular };
