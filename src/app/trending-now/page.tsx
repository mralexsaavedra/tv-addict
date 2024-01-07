import type { MediaType } from '@/types';
import { getPopular } from '@/lib/fetchers';
import { TrendingNow } from '@/components/TrendingNow';

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

  return <TrendingNow title="Tendencia ahora" shows={data} />;
}
