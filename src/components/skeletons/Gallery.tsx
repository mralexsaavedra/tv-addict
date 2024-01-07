import { Skeleton } from '@/components/ui/Skeleton';
import { FC } from 'react';

interface GalleryProps {
  count?: number;
}

const Gallery: FC<GalleryProps> = ({ count = 30 }) => {
  return (
    <div className="no-scrollbar mx-0 w-full overflow-x-auto overflow-y-hidden">
      <Skeleton className="h-[1.62rem] w-28 rounded bg-neutral-700" />

      <div className="mt-2.5 grid gap-4 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {Array.from({ length: count }, (_, i) => (
          <Skeleton
            key={i}
            className="w-[200px] h-[300px] rounded bg-neutral-700"
          />
        ))}
      </div>
    </div>
  );
};

export { Gallery };
