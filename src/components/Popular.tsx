import { getPopular } from '@/lib/fetchers';
import { FC } from 'react';
import { Gallery } from '@/components/Gallery';

const Popular: FC = async () => {
  const { popular } = await getPopular();

  return (
    <section aria-label="Popular shows">
      <Gallery shows={popular} title="Popular" />
    </section>
  );
};

export { Popular };
