import { Popular } from '@/components/Popular';
import { GallerySkeleton } from '@/components/GallerySkeleton';
import { Suspense } from 'react';

export default function NewAndPopularPage() {
  return (
    <section className="container w-full max-w-screen-2xl pb-16 pt-10 flex flex-col gap-12">
      <Suspense fallback={<GallerySkeleton />}>
        <Popular />
      </Suspense>
    </section>
  );
}
