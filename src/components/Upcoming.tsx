import { FC } from 'react';
import { getUpcoming } from '@/lib/fetchers';
import { ShowsCarousel } from '@/components/ShowsCarousel';

interface UpcomingProps {
  title: string;
}

const Upcoming: FC<UpcomingProps> = async ({ title }) => {
  const { data } = await getUpcoming();

  return (
    <section aria-label="Upcoming movies">
      <ShowsCarousel shows={data} title={title} />
    </section>
  );
};

export { Upcoming };
