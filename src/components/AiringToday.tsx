import { FC } from 'react';
import { getAiringToday } from '@/lib/fetchers';
import { ShowsCarousel } from '@/components/ShowsCarousel';

interface AiringTodayProps {
  title: string;
}

const AiringToday: FC<AiringTodayProps> = async ({ title }) => {
  const { data } = await getAiringToday();

  return (
    <section aria-label="Airing today TV Shows">
      <ShowsCarousel shows={data} title={title} />
    </section>
  );
};

export { AiringToday };
