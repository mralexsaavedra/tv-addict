import { FC } from 'react';
import { getOnTheAir } from '@/lib/fetchers';
import { ShowsCarousel } from '@/components/ShowsCarousel';

interface OnTheAirProps {
  title: string;
}

const OnTheAir: FC<OnTheAirProps> = async ({ title }) => {
  const { data } = await getOnTheAir();

  return (
    <section aria-label="On the air TV Shows">
      <ShowsCarousel shows={data} title={title} />
    </section>
  );
};

export { OnTheAir };
