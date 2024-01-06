import { Suspense } from 'react';
import { Trending } from '@/components/Trending';
import { CarouselSkeleton } from '@/components/CarouselSkeleton';

export default function Home() {
  return (
    <section className="container w-full max-w-screen-2xl pb-16 pt-10 flex flex-col gap-12">
      <Suspense fallback={<CarouselSkeleton />}>
        <Trending />
      </Suspense>
    </section>
  );
}
