import { FC } from 'react';
import { Skeleton } from '@/components/ui/Skeleton';
import { Number as NumberIcon } from '@/components/icons/Number';

interface TopShowsCarouselProps {
  count?: number;
}

const TopShowsCarousel: FC<TopShowsCarouselProps> = ({ count = 10 }) => {
  return (
    <div className="no-scrollbar mx-0 w-full overflow-x-auto overflow-y-hidden">
      <Skeleton className="h-[1.62rem] w-28 rounded bg-neutral-700" />

      <div className="mt-2.5 flex w-full items-center space-x-0.5 md:space-x-12">
        {Array.from({ length: count }, (_, i) => {
          const Icon = NumberIcon[i + 1] || NumberIcon[1];

          return (
            <div key={i} className="flex flex-row min-w-[300px] h-[250px]">
              <Icon
                className="h-full"
                stroke="#595959"
                // @ts-ignore
                strokeLinejoin="square"
                strokeWidth={4}
              />
              <Skeleton className="w-[170px] h-[250px] rounded bg-neutral-700" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { TopShowsCarousel };
