'use client';

import { FC, useEffect, useRef } from 'react';
import type { Show } from '@/types';
import { Card } from '@/components/Card';

interface GalleryCardProps {
  show: Show;
  isLast?: boolean;
  onIntersecting?: () => void;
}

const GalleryCard: FC<GalleryCardProps> = ({
  show,
  isLast = false,
  onIntersecting,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef?.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        onIntersecting?.();
      }
    });

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isLast, onIntersecting]);

  return (
    <div ref={cardRef}>
      <Card key={show.id} show={show} />
    </div>
  );
};

export { GalleryCard };
