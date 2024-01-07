'use client';

import { FC, startTransition, useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { Show } from '@/types';
import { Gallery } from '@/components/Gallery';

interface TrendingNowProps {
  title: string;
  shows: Show[];
}

const TrendingNow: FC<TrendingNowProps> = ({ title, shows }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const [allShows, setAllShows] = useState<Show[]>(shows);

  useEffect(() => {
    setAllShows((prev) => [...prev, ...shows]);
  }, [shows]);

  const handleOnIntersecting = useCallback(() => {
    const params = new URLSearchParams(searchParams);

    const page = Number(searchParams.get('page')) || 1;

    const newPage = String(page + 1);

    params.set('page', newPage);

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }, [pathname, replace, searchParams]);

  return (
    <section aria-label="Trending now">
      <Gallery
        shows={allShows}
        title={title}
        onIntersecting={handleOnIntersecting}
      />
    </section>
  );
};

export { TrendingNow };
