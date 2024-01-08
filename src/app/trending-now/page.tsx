import type { MediaType } from '@/types';
import { getPopular } from '@/lib/fetchers';
import { ShowsInfiniteGallery } from '@/components/ShowsInfiniteGallery';

export default async function TrendingNowPage({
  searchParams,
}: {
  searchParams?: {
    mediaType?: MediaType;
    page?: string;
  };
}) {
  const mediaType = searchParams?.mediaType || 'tv';
  const page = Number(searchParams?.page) || 1;

  const { data } = await getPopular({
    mediaType,
    page,
  });

  return <ShowsInfiniteGallery title="Tendencia ahora" shows={data} />;
}
