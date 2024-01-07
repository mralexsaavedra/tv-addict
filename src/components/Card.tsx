import { FC } from 'react';
import Image from 'next/image';
import type { Person, Show } from '@/types';
import { cn } from '@/lib/utils';

const isPerson = (show: Show | Person): show is Person =>
  show.media_type === 'person';

interface CardProps {
  show: Show | Person;
  width?: number;
  height?: number;
  path?: string | null;
  size?: 'original' | 'w500';
  className?: string;
  onClick?: () => void;
}

const Card: FC<CardProps> = ({
  show,
  height = 500,
  width = 500,
  path,
  size = 'w500',
  className,
  onClick,
}) => {
  return (
    <Image
      src={`https://image.tmdb.org/t/p/${size}/${
        path
          ? path
          : isPerson(show)
          ? show.profile_path ?? ''
          : show.poster_path ?? show.backdrop_path ?? ''
      }`}
      alt={isPerson(show) ? show.name : show.title ?? show.name ?? 'poster'}
      width={width}
      height={height}
      loading="lazy"
      className={cn(
        'object-cover rounded cursor-pointer transition-transform duration-200 ease-out hover:z-20 hover:scale-105',
        className
      )}
      onClick={onClick}
    />
  );
};

export { Card };
