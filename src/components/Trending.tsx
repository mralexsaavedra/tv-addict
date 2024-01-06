import { FC } from 'react';
import { getTrending } from '@/lib/fetchers';
import { Carousel } from '@/components/Carousel';

const Trending: FC = async () => {
  const { trending } = await getTrending();

  return (
    <section aria-label="Treding shows">
      <Carousel shows={trending} title="Trending" />
    </section>
  );
};

export { Trending };
