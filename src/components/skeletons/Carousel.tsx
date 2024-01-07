import { Skeleton } from '@/components/ui/Skeleton';
import { FC } from 'react';

interface CarouselProps {
  count?: number;
}

const Carousel: FC<CarouselProps> = ({ count = 8 }) => {
  return (
    <div className="no-scrollbar mx-0 w-full overflow-x-auto overflow-y-hidden">
      <Skeleton className="h-[1.62rem] w-28 rounded bg-neutral-700" />

      <div className="mt-2.5 flex w-full items-center gap-1.5">
        {Array.from({ length: count }, (_, i) => (
          <Skeleton
            key={i}
            className="aspect-video min-w-[15rem] rounded bg-neutral-700"
          />
        ))}
      </div>
    </div>
  );
};

export { Carousel };
