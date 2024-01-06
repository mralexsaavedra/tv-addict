import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('bg-muted animate-pulse rounded-md', className)}
      {...props}
    />
  );
};

export { Skeleton };
