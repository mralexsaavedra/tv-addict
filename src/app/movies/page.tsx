'use client';

import { Suspense, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Routes } from '@/lib/routes';
import { Carousel as CarouselSkeleton } from '@/components/skeletons/Carousel';
import { TopShowsCarousel as TopShowsCarouselSkeleton } from '@/components/skeletons/TopShowsCarousel';
import { Trending } from '@/components/Trending';
import { Popular } from '@/components/Popular';
import { Upcoming } from '@/components/Upcoming';

export default function MoviesPage() {
  const { push } = useRouter();

  const handleOnClickTrending = useCallback(
    () => push(Routes.Trending),
    [push]
  );

  return (
    <section aria-label="Movies page" className="flex flex-col gap-[3vw]">
      <Suspense fallback={<CarouselSkeleton />}>
        <Trending
          title="Tendencias ahora"
          mediaType="movie"
          onClick={handleOnClickTrending}
        />
      </Suspense>

      <Suspense fallback={<TopShowsCarouselSkeleton />}>
        <Popular
          title="Las 10 películas más populares de esta semana"
          mediaType="movie"
        />
      </Suspense>

      <Suspense fallback={<CarouselSkeleton />}>
        <Upcoming title="Estrenos" />
      </Suspense>
    </section>
  );
}
