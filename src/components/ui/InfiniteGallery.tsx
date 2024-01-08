'use client';

import {
  ReactNode,
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Gallery,
  GalleryProps,
  RenderItemFunction,
} from '@/components/ui/Gallery';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface InfiniteGalleryItemProps<T> {
  children: ReactNode;
  isLast: boolean;
  onIntersecting: () => void;
}

const InfiniteGalleryItem = <T,>({
  children,
  isLast,
  onIntersecting,
}: InfiniteGalleryItemProps<T>) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef?.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (isLast && entry.isIntersecting) {
        onIntersecting?.();
      }
    });

    observer.observe(itemRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isLast, onIntersecting]);

  return <div ref={itemRef}>{children}</div>;
};

interface InfiniteGalleryProps<T> extends GalleryProps<T> {}

const InfiniteGallery = <T,>({
  title,
  data,
  children,
}: InfiniteGalleryProps<T>) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const [allData, setAllData] = useState<T[]>(data);

  useEffect(() => {
    setAllData((prev) => [...prev, ...data]);
  }, [data]);

  const handleOnIntersecting = useCallback(() => {
    const params = new URLSearchParams(searchParams);

    const page = Number(searchParams.get('page')) || 1;

    const newPage = String(page + 1);

    params.set('page', newPage);

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`, { scroll: false });
    });
  }, [pathname, replace, searchParams]);

  const renderItem: RenderItemFunction<T> = useCallback(
    ({ item, index }) => (
      <InfiniteGalleryItem
        isLast={index === allData.length - 1}
        onIntersecting={handleOnIntersecting}
      >
        {children({ item, index })}
      </InfiniteGalleryItem>
    ),
    [children, allData.length, handleOnIntersecting]
  );

  return (
    <Gallery title={title} data={allData}>
      {renderItem}
    </Gallery>
  );
};

export { InfiniteGallery };
