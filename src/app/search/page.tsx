import { ShowsGallery } from '@/components/ShowsGallery';
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
      <ShowsGallery shows={data} title={`Busqueda: ${query}`} />
    </section>
  );
}
