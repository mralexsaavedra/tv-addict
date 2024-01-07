'use client';

import { Suspense, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Routes } from '@/lib/routes';
import { Carousel as CarouselSkeleton } from '@/components/skeletons/Carousel';
import { TopShowsCarousel as TopShowsCarouselSkeleton } from '@/components/skeletons/TopShowsCarousel';
import { Trending } from '@/components/Trending';
import { OnTheAir } from '@/components/OnTheAir';
import { Popular } from '@/components/Popular';

export default function TVShowsPage() {
  const { push } = useRouter();

  const handleOnClickTrending = useCallback(
    () => push(Routes.Trending),
    [push]
  );

  return (
    <section aria-label="TV Shows page" className="flex flex-col gap-[3vw]">
      <Suspense fallback={<CarouselSkeleton />}>
        <Trending
          title="Tendencias ahora"
          mediaType="tv"
          onClick={handleOnClickTrending}
        />
      </Suspense>

      <Suspense fallback={<TopShowsCarouselSkeleton />}>
        <Popular
          title="Las 10 series más populares de esta semana"
          mediaType="tv"
        />
      </Suspense>

      <Suspense fallback={<CarouselSkeleton />}>
        <OnTheAir title="Estrenos" />
      </Suspense>
    </section>
  );
}
