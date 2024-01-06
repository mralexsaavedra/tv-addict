import { FC } from 'react';
import Image from 'next/image';
import type { Show } from '@/types';
import { cn } from '@/lib/utils';

interface CardProps {
  show: Show;
  width?: number;
  height?: number;
  path?: string | null;
  size?: 'original' | 'w500';
  className?: string;
}

const Card: FC<CardProps> = ({
  show,
  height = 500,
  width = 500,
  path,
  size = 'w500',
  className,
}) => {
  return (
    <Image
      src={`https://image.tmdb.org/t/p/${size}/${
        path ?? show.poster_path ?? show.backdrop_path ?? ''
      }`}
      alt={show.title ?? show.name ?? 'poster'}
      width={width}
      height={height}
      loading="lazy"
      className={cn(
        'object-cover rounded cursor-pointer transition-transform duration-200 ease-out hover:z-20 hover:scale-105',
        className
      )}
    />
  );
};

export { Card };
