import { Fragment } from 'react';

interface RenderItemFunctionArgs<T> {
  item: T;
  index: number;
}
export interface RenderItemFunction<T> {
  (args: RenderItemFunctionArgs<T>): JSX.Element;
}

export interface GalleryProps<T> {
  title: string;
  data: T[];
  children: RenderItemFunction<T>;
}

const Gallery = <T,>({ title, data, children }: GalleryProps<T>) => {
  return (
    <div className="space-y-0.5 md:space-y-2">
      <h2 className="text-lg font-semibold text-white/90 transition-colors hover:text-white sm:text-xl">
        {title}
      </h2>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {data.map((item, index) => (
          <Fragment key={index}>{children({ index, item })}</Fragment>
        ))}
      </div>
    </div>
  );
};

export { Gallery };
