'use client';

import { Suspense, useCallback } from 'react';
import { Trending } from '@/components/Trending';
import { CarouselSkeleton } from '@/components/CarouselSkeleton';
import { useRouter } from 'next/navigation';
import { Routes } from '@/lib/routes';

export default function TVShowsPage() {
  const { push } = useRouter();

  const handleOnClickTrending = useCallback(
    () => push(Routes.Trending),
    [push]
  );

  return (
    <section aria-label="TV Shows page">
      <Suspense fallback={<CarouselSkeleton />}>
        <Trending mediaType="tv" onClick={handleOnClickTrending} />
      </Suspense>
    </section>
  );
}
