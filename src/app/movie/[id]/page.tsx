import { getMovieById } from '@/services/tmdb'
import NotFound from '@/components/notFound'

export default async function Movie({ params }: { params: { id: string } }) {
  const { data, error } = await getMovieById(params.id)

  return (
    <main className="bg-black">
      <div className="p-8">
        <h3 className="mb-16 mt-10 text-center font-kanit text-xxl text-white">{error ? <NotFound /> : data.title}</h3>
      </div>
    </main>
  )
}
