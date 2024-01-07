'use client';

import { Suspense, useCallback } from 'react';
import { Trending } from '@/components/Trending';
import { CarouselSkeleton } from '@/components/CarouselSkeleton';
import { useRouter } from 'next/navigation';
import { Routes } from '@/lib/routes';

export default function MoviesPage() {
  const { push } = useRouter();

  const handleOnClickTrending = useCallback(
    () => push(Routes.Trending),
    [push]
  );

  return (
    <section aria-label="Movies page">
      <Suspense fallback={<CarouselSkeleton />}>
        <Trending mediaType="movie" onClick={handleOnClickTrending} />
      </Suspense>
    </section>
  );
}
