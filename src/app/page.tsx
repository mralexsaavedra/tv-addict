import { Suspense } from 'react';
import { Popular } from '@/components/Popular';
import { CarouselSkeleton } from '@/components/CarouselSkeleton';

export default function Home() {
  return (
    <section aria-label="Home page" className="flex flex-col gap-[3vw]">
      <Suspense fallback={<CarouselSkeleton />}>
        <Popular
          mediaType="tv"
          title="Las 10 series más populares de esta semana"
        />
      </Suspense>

      <Suspense fallback={<CarouselSkeleton />}>
        <Popular
          mediaType="movie"
          title="Las 10 películas más populares de esta semana"
        />
      </Suspense>
    </section>
  );
}
