'use client';

import type { Show } from '@/types';
import { cn } from '@/lib/utils';
import { FC, useRef, useState } from 'react';
import { Card } from '@/components/Card';
import { ChevronLeft } from '@/components/icons/ChevronLeft';
import { ChevronRight } from '@/components/icons/ChevronRight';

interface CarouselProps {
  title: string;
  shows: Show[];
}

const Carousel: FC<CarouselProps> = ({ title, shows }) => {
  const showsRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (showsRef.current) {
      const { scrollLeft, clientWidth } = showsRef.current;

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      showsRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0.5 md:space-y-2">
      <h2 className="text-lg font-semibold text-white/90 transition-colors hover:text-white sm:text-xl">
        {title}
      </h2>

      <div className="group relative mt-12">
        <ChevronLeft
          className={cn(
            'absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100',
            !isMoved && 'hidden'
          )}
          onClick={() => handleClick('left')}
        />

        <div
          ref={showsRef}
          className="flex items-center no-scrollbar space-x-0.5 overflow-x-scroll md:space-x-2.5"
        >
          {shows.map((show) => (
            <Card
              key={show.id}
              show={show}
              path={show.backdrop_path}
              width={240}
              height={135}
            />
          ))}
        </div>

        <ChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export { Carousel };
