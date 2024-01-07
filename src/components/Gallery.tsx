import { FC } from 'react';
import type { Show } from '@/types';
import { GalleryCard } from '@/components/GalleryCard';

interface GalleryProps {
  title: string;
  shows: Show[];
  onIntersecting?: () => void;
}

const Gallery: FC<GalleryProps> = ({ title, shows, onIntersecting }) => {
  return (
    <div className="space-y-0.5 md:space-y-2">
      <h2 className="text-lg font-semibold text-white/90 transition-colors hover:text-white sm:text-xl">
        {title}
      </h2>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {shows.map((show, index) => (
          <GalleryCard
            key={index}
            show={show}
            isLast={index === shows.length - 1}
            onIntersecting={onIntersecting}
          />
        ))}
      </div>
    </div>
  );
};

export { Gallery };
