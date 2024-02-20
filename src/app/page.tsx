/* import styles from "./page.module.css"; */
import { getPopularMovies } from "@/services/tmdb";
import LinkButton from "@/components/buttons/linkButton";
import Card from "@/components/card";
import SectionTitle from "@/components/sectionTitle";
import MovieList from "@/components/movieList";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const threeMostPopular = popularMovies?.results.slice(0, 3) || [];

  return (
    <main>
      <div className="">
        <section className="mt-10 relative">
          <img
            className="w-full max-h-[500px] object-cover blur-sm"
            src="/main_section_image.jpg"
            alt="Movie theatre"
          />
          <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full gap-6">
            <div className="bg-green-200 bg-opacity-10 flex flex-col items-center justify-center w-full h-ful">
              <h1 className="text-emerald-50 font-kanit font-bold text-[64px]">
                Your guide through movies
              </h1>
              <h2 className="text-emerald-50 font-kanit text-xxl">
                Discover new movies and find old ones you missed!
              </h2>
            </div>
            <LinkButton path="/discover" text="Discover" />
          </div>
        </section>
        <section className="text-white flex flex-col justify-center items-center">
          <SectionTitle title="Popular" />
          <MovieList>
            {threeMostPopular.map((movie) => (
              <Card
                title={movie.original_title}
                image={movie.poster_path}
                popularity={movie.popularity}
              />
            ))}
          </MovieList>
        </section>
      </div>
    </main>
  );
}
