import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getBackdropPath } from '@/lib/tmdb'
import { Movie } from 'tmdb-ts'

export default function SearchItem({ movie }: { movie: Movie }) {
  return (
    <div
      className={`${styles.wrapper} rounded p-2 transition duration-200 ease-in-out hover:bg-primary-dark`}
    >
      <Link href={`/movie/${movie.id}`}>
        <div className="flex items-center gap-3">
          {movie.backdrop_path ? (
            <div className="movie-img h-[144px] w-[256px] flex-shrink-0">
              <Image
                src={getBackdropPath(movie.backdrop_path)}
                alt="Movie image"
                width={256}
                height={144}
                style={{
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>
          ) : (
            <div className="movie-img h-[144px] w-[256px] flex-shrink-0 bg-gray-900"></div>
          )}
          <div className="p-1">
            <h4 className="mb-2 text-l font-bold">{movie.title}</h4>
            <p className="text-m">Overview: {movie.overview}</p>
            <p className="mt-2 font-kanit text-secondary">
              Rating: {movie.vote_average}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
