'use client';

import { FC, useCallback } from 'react';
import { Carousel, RenderItemFunction } from '@/components/ui/Carousel';
import { Show } from '@/types';
import { Card } from '@/components/Card';

interface ShowsCarouselProps {
  title: string;
  shows: Show[];
  onClick?: () => void;
}
const ShowsCarousel: FC<ShowsCarouselProps> = ({ title, shows, onClick }) => {
  const renderItem: RenderItemFunction<Show> = useCallback(
    ({ item }) => (
      <Card show={item} path={item.backdrop_path} width={240} height={135} />
    ),
    []
  );

  return (
    <Carousel data={shows} title={title} onClickTitle={onClick}>
      {renderItem}
    </Carousel>
  );
};

export { ShowsCarousel };
