import { Gallery } from '@/components/Gallery';
import { searchShows } from '@/lib/fetchers';

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
  };
}) {
  const query = searchParams?.q || '';
  const { data } = await searchShows(query);

  return (
    <section aria-label="Search page">
      <Gallery shows={data} title={`Busqueda: ${query}`} />
    </section>
  );
}
