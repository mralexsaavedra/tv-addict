'use client';

import { Fragment, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft } from '@/components/icons/ChevronLeft';
import { ChevronRight } from '@/components/icons/ChevronRight';

interface ClassName {
  container: string;
  carousel: string;
}

interface RenderItemFunctionArgs<T> {
  readonly item: T;
  readonly index: number;
}
export interface RenderItemFunction<T> {
  (args: RenderItemFunctionArgs<T>): JSX.Element;
}

interface CarouselProps<T> {
  title: string;
  data: T[];
  children: RenderItemFunction<T>;
  onClickTitle?: () => void;
  className?: Partial<ClassName>;
}

const Carousel = <T,>({
  title,
  data,
  children,
  onClickTitle,
  className,
}: CarouselProps<T>) => {
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
    <div className={cn('space-y-2', className?.container)}>
      <h2
        className={cn(
          'text-lg font-semibold text-white/90 transition-colors sm:text-xl cursor-default',
          onClickTitle && 'hover:text-white cursor-pointer'
        )}
        onClick={onClickTitle}
      >
        {title}
      </h2>

      <div className="group relative">
        <ChevronLeft
          className={cn(
            'absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100',
            !isMoved && 'hidden'
          )}
          onClick={() => handleClick('left')}
        />

        <div
          ref={showsRef}
          className={cn(
            'flex items-center no-scrollbar space-x-0.5 overflow-x-scroll md:space-x-2.5',
            className?.carousel
          )}
        >
          {data.map((item, index) => (
            <Fragment key={index}>{children({ index, item })}</Fragment>
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
