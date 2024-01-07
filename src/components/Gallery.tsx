import { FC } from 'react';
import type { Show } from '@/types';
import { Card } from '@/components/Card';

interface GalleryProps {
  title: string;
  shows: Show[];
}

const Gallery: FC<GalleryProps> = ({ title, shows }) => {
  return (
    <div className="space-y-0.5 md:space-y-2">
      <h2 className="text-lg font-semibold text-white/90 transition-colors hover:text-white sm:text-xl">
        {title}
      </h2>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {shows.map((show) => (
          <Card key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export { Gallery };
