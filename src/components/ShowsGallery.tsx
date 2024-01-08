'use client';

import { FC, useCallback } from 'react';
import type { Show } from '@/types';
import { Card } from '@/components/Card';
import { Gallery } from '@/components/ui/Gallery';
import { RenderItemFunction } from '@/components/ui/Gallery';

interface ShowsGalleryProps {
  title: string;
  shows: Show[];
}

const ShowsGallery: FC<ShowsGalleryProps> = ({ title, shows }) => {
  const renderItem: RenderItemFunction<Show> = useCallback(
    ({ item }) => <Card show={item} />,
    []
  );

  return (
    <Gallery data={shows} title={title}>
      {renderItem}
    </Gallery>
  );
};

export { ShowsGallery };
