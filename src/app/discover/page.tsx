import dynamic from 'next/dynamic'
import { getPopularMovies } from '@/services/tmdb'
import Card from '@/components/card'
import ScrollableList from '@/components/scrollableList'
import SectionTitle from '@/components/sectionTitle'

const DynamicToggleFavorite = dynamic(
  () => import('@/components/toggleFavorite'),
  { ssr: false }
)

export default async function DiscoverPage() {
  const { data, error } = await getPopularMovies()
  const twentyMostPopular = data.results?.slice(0, 20) || []

  return (
    <main>
      <div className="">
        <section className="relative mt-10">
          <img
            className="max-h-[500px] w-full object-cover blur-sm"
            src="/discover_section_image.jpg"
            alt="Movie theatre"
          />
          <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-6">
            <div className="h-ful flex w-full flex-col items-center justify-center bg-green-100 bg-opacity-10">
              <h1 className="font-kanit text-[50px] font-bold text-emerald-50">
                Discover new favorites!
              </h1>
            </div>
          </div>
        </section>
        <section className="mb-[90px] mt-10 flex flex-col items-center justify-center text-white">
          <SectionTitle title="Popular" />
          <ScrollableList>
            {twentyMostPopular.map((movie) => (
              <div key={movie.id} className="relative min-w-[200px]">
                <Card
                  key={movie.id}
                  title={movie.original_title}
                  image={movie.poster_path}
                  popularity={movie.popularity}
                />
                <DynamicToggleFavorite movieId={movie.id} />
              </div>
            ))}
          </ScrollableList>
        </section>
        <section className="mb-[90px] mt-10 flex flex-col items-center justify-center text-white">
          <h3 className="font-kanit text-[30px] font-bold text-emerald-50">
            More movies coming soon!
          </h3>
        </section>
      </div>
    </main>
  )
}
