'use client'

import { MovieDetails } from '@/services/tmdb'
import { getImdbPath, getPosterPath } from '@/lib/tmdb'
import {
  useFavorites,
  addToFavorites,
  removeFromFavorites
} from '@/lib/redux/favorites'
import { useAppDispatch } from '@/lib/redux/store'
import Image from 'next/image'
import Link from 'next/link'
import MovieDetailItem from '@/components/movieDetailItem'
import PrimaryButton from '@/components/buttons/primaryButton'

export default function MovieDetails({ movie }: { movie: MovieDetails }) {
  const favorites = useFavorites()
  const isFavorite = favorites.some((id) => id === movie.id)

  const dispatch = useAppDispatch()

  const handleAddToFavorites = () => {
    localStorage.setItem('favorites', JSON.stringify([...favorites, movie.id]))
    dispatch(addToFavorites(movie.id))
  }

  const handleRemoveFromFavorites = () => {
    localStorage.setItem(
      'favorites',
      JSON.stringify(favorites.filter((id) => id !== movie.id))
    )
    dispatch(removeFromFavorites(movie.id))
  }

  return (
    <div className="flex gap-3">
      <div className="movie-img h-[288px] w-[512px] flex-shrink-0">
        <Image
          src={getPosterPath(movie.poster_path)}
          alt="Movie image"
          width={256 * 2}
          height={144 * 2}
          style={{
            width: '100%',
            height: 'auto'
          }}
        />
      </div>
      <div className="flex flex-col items-start gap-3">
        <div className="mb-6">
          <h2 className="text-[48px]">{movie.title}</h2>
          <Link href={getImdbPath(movie.imdb_id)}>
            <Image
              src="/imdb_logo.svg"
              alt="Movie image"
              width={40}
              height={20}
            />
          </Link>
        </div>
        <MovieDetailItem title="Overview" text={movie.overview} />
        <MovieDetailItem title="Popularity" text={movie.popularity} />
        <MovieDetailItem title="Average vote" text={movie.vote_average} />
        <MovieDetailItem title="Votes" text={movie.vote_count} />
        {isFavorite ? (
          <PrimaryButton
            text="Remove from favorites"
            onClick={handleRemoveFromFavorites}
          />
        ) : (
          <PrimaryButton
            text="Add to favorites"
            onClick={handleAddToFavorites}
          />
        )}
      </div>
    </div>
  )
}
