'use client';

import { FC, useCallback } from 'react';
import type { Show } from '@/types';
import { Carousel, RenderItemFunction } from '@/components/ui/Carousel';
import { Card } from '@/components/Card';
import { Number as NumberIcon } from '@/components/icons/Number';

interface TopShowsCarouselProps {
  title: string;
  shows: Show[];
  onClick?: () => void;
}
const TopShowsCarousel: FC<TopShowsCarouselProps> = ({
  title,
  shows,
  onClick,
}) => {
  const topShows = shows.slice(0, 10);

  const renderItem: RenderItemFunction<Show> = useCallback(
    ({ item, index }) => {
      const Icon = NumberIcon[index + 1] || NumberIcon[1];

      return (
        <div className="flex flex-row min-w-[300px] h-[250px]">
          <Icon
            className="h-full"
            stroke="#595959"
            // @ts-ignore
            strokeLinejoin="square"
            strokeWidth={4}
          />
          <Card
            show={item}
            path={item.poster_path}
            width={170}
            height={250}
            className="rounded-none rounded-tr rounded-br pointer-events-none"
          />
        </div>
      );
    },
    []
  );

  return (
    <Carousel
      data={topShows}
      title={title}
      onClickTitle={onClick}
      className={{ carousel: 'md:space-x-12' }}
    >
      {renderItem}
    </Carousel>
  );
};

export { TopShowsCarousel };
