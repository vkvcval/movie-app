import { getMovieById } from '@/services/tmdb'
import NotFound from '@/components/notFound'
import { notFound } from 'next/navigation'
import MovieDetails from '@/components/movieDetails'

export default async function Movie({ params }: { params: { id: string } }) {
  const { data, error } = await getMovieById(params.id)

  // if (!data) {
  //   notFound()
  // }

  return (
    <main className="m-auto max-w-screen-xl">
      <div className="bg-black">
        <div className="p-8">
          <h3 className="mb-16 mt-10 text-center font-kanit text-xxl text-white">
            {error ? <NotFound /> : <MovieDetails movie={data} />}
          </h3>
        </div>
      </div>
    </main>
  )
}
