import { Gallery } from '@/components/Gallery';
import { getTrending } from '@/lib/fetchers';

export default async function TrendingNowPage() {
  const { trending } = await getTrending({
    mediaType: 'movie',
    timeWindow: 'day',
  });

  return (
    <section aria-label="Trending now page">
      <Gallery shows={trending} title="Tendencia ahora" />
    </section>
  );
}