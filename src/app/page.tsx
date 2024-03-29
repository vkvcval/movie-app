import { getNowPlaying, getUpcoming, getTopRated } from '@/services/tmdb'
import LinkButton from '@/components/buttons/linkButton'
import Card from '@/components/card'
import SectionTitle from '@/components/sectionTitle'
import MovieList from '@/components/movieList'
import Link from 'next/link'

export default async function Home() {
  const { data: nowPlaying } = await getNowPlaying()
  const { data: upcoming } = await getUpcoming()
  const { data: topRated } = await getTopRated()

  const fiveNowPlaying = nowPlaying?.results?.slice(0, 5) || []
  const fiveUpcoming = upcoming?.results?.slice(0, 5) || []
  const fiveTopRated = topRated?.results?.slice(0, 5) || []

  return (
    <main>
      <div className="">
        <section className="relative mt-10">
          <img
            className="max-h-[500px] w-full object-cover blur-sm"
            src="/main_section_image.jpg"
            alt="Movie theatre"
          />
          <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center gap-6">
            <div className="h-ful flex w-full flex-col items-center justify-center bg-green-200 bg-opacity-10">
              <h1 className="font-kanit text-[64px] font-bold text-emerald-50">
                Your guide through movies
              </h1>
              <h2 className="font-kanit text-xxl text-emerald-50">
                Discover new movies and find old ones you missed!
              </h2>
            </div>
            <LinkButton path="/discover" text="Discover" />
          </div>
        </section>
        <section className="mb-20 mt-10 flex flex-col items-center justify-center text-white">
          <SectionTitle title="Now Playing" />
          <MovieList>
            {fiveNowPlaying.map((movie) => (
              <Link href={`/movie/${movie.id}`}>
                <Card
                  key={movie.id}
                  title={movie.original_title}
                  image={movie.poster_path}
                  popularity={movie.popularity}
                />
              </Link>
            ))}
          </MovieList>
        </section>
        <section className="mb-20 flex flex-col items-center justify-center text-white">
          <SectionTitle title="Upcoming" />
          <MovieList>
            {fiveUpcoming.map((movie) => (
              <Link href={`/movie/${movie.id}`}>
                <Card
                  key={movie.id}
                  title={movie.original_title}
                  image={movie.poster_path}
                  popularity={movie.popularity}
                />
              </Link>
            ))}
          </MovieList>
        </section>
        <section className="mb-20 flex flex-col items-center justify-center text-white">
          <SectionTitle title="Top Rated" />
          <MovieList>
            {fiveTopRated.map((movie) => (
              <Link href={`/movie/${movie.id}`}>
                <Card
                  key={movie.id}
                  title={movie.original_title}
                  image={movie.poster_path}
                  popularity={movie.popularity}
                />
              </Link>
            ))}
          </MovieList>
        </section>
      </div>
    </main>
  )
}
