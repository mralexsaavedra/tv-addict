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
    <section className="container w-full max-w-screen-2xl pb-16 pt-10 flex flex-col gap-12">
      <Gallery shows={shows} title={`Busqueda: ${query}`} />
    </section>
  );
}
