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
  const { shows } = await searchShows(query);

  return (
    <section aria-label="Search page">
      <Gallery shows={shows} title={`Busqueda: ${query}`} />
    </section>
  );
}
