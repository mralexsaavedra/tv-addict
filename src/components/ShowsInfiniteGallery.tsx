'use client';

import { FC, useCallback } from 'react';
import type { Show } from '@/types';
import { Card } from '@/components/Card';
import { InfiniteGallery } from '@/components/ui/InfiniteGallery';
import { RenderItemFunction } from '@/components/ui/Gallery';

interface ShowsInfiniteGalleryProps {
  title: string;
  shows: Show[];
}

const ShowsInfiniteGallery: FC<ShowsInfiniteGalleryProps> = ({
  title,
  shows,
}) => {
  const renderItem: RenderItemFunction<Show> = useCallback(
    ({ item }) => <Card show={item} />,
    []
  );

  return (
    <InfiniteGallery data={shows} title={title}>
      {renderItem}
    </InfiniteGallery>
  );
};

export { ShowsInfiniteGallery };
