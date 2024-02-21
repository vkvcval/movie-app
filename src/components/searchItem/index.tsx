import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getBackdropPath } from "@/lib/tmdb";
import { Movie } from "tmdb-ts";

export default function SearchItem({ movie }: { movie: Movie }) {
  return (
    <div
      className={`${styles.wrapper} p-2 hover:bg-primary-dark transition duration-200 ease-in-out rounded`}
    >
      <Link href={`/movie/${movie.id}`}>
        <div className="flex gap-3 items-center">
          {movie.backdrop_path ? (
            <div className="movie-img w-[256px] h-[144px] flex-shrink-0">
              <Image
                src={getBackdropPath(movie.backdrop_path)}
                alt="Movie image"
                width={256}
                height={144}
                layout="responsive"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          ) : (
            <div className="movie-img w-[256px] h-[144px] flex-shrink-0 bg-gray-900"></div>
          )}
          <div className="p-1">
            <h4 className="text-l font-bold mb-2">{movie.title}</h4>
            <p className="text-m">Overview: {movie.overview}</p>
            <p className="font-kanit text-secondary mt-2">
              Rating: {movie.vote_average}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
