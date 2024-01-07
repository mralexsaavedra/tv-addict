import { Suspense } from 'react';
import { Popular } from '@/components/Popular';
import { Carousel as CarouselSkeleton } from '@/components/skeletons/Carousel';
import { TopShowsCarousel as TopShowsCarouselSkeleton } from '@/components/skeletons/TopShowsCarousel';
import { Upcoming } from '@/components/Upcoming';
import { OnTheAir } from '@/components/OnTheAir';
import { AiringToday } from '@/components/AiringToday';

export default function Home() {
  return (
    <section aria-label="Home page" className="flex flex-col gap-[3vw]">
      <Suspense fallback={<CarouselSkeleton />}>
        <AiringToday title="Novedades" />
      </Suspense>

      <Suspense fallback={<TopShowsCarouselSkeleton />}>
        <Popular
          title="Las 10 series más populares de esta semana"
          mediaType="tv"
        />
      </Suspense>

      <Suspense fallback={<TopShowsCarouselSkeleton />}>
        <Popular
          title="Las 10 películas más populares de esta semana"
          mediaType="movie"
        />
      </Suspense>

      <Suspense fallback={<CarouselSkeleton />}>
        <Upcoming title="Próximos estrenos" />
      </Suspense>

      <Suspense fallback={<CarouselSkeleton />}>
        <OnTheAir title="Extrenos de la próxima semana" />
      </Suspense>
    </section>
  );
}
