"use server";

import { Configuration, Movie, PopularMovies, Search } from "tmdb-ts";
import { tmdbBaseUrl, tmdbConfigurationUrl } from "@/lib/tmdb";
import { notFound } from "next/navigation";
import { Genres } from "tmdb-ts/dist/endpoints";

export const fetchData = async <T>(url: string): Promise<T | null> => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data) {
      notFound();
    }
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getConfiguration = async () => {
  const url = `${tmdbConfigurationUrl}?api_key=${process.env.TMDB_API_KEY}`;
  return fetchData<Configuration>(url);
};

export const getPopularMovies = async (page: number = 1) => {
  const url = `${tmdbBaseUrl}/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=${page}`;
  return fetchData<PopularMovies>(url);
};

export const getNowPlaying = async () => {
  const url = `${tmdbBaseUrl}/movie/now_playing?api_key=${process.env.TMDB_API_KEY}`;
  return fetchData(url);
};

export const getTopRated = async () => {
  const url = `${tmdbBaseUrl}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}`;
  return fetchData(url);
};

export const getUpcoming = async () => {
  const url = `${tmdbBaseUrl}/movie/upcoming?api_key=${process.env.TMDB_API_KEY}`;
  return fetchData(url);
};

export const getLatestMovies = async () => {
  const url = `${tmdbBaseUrl}/movie/latest?api_key=${process.env.TMDB_API_KEY}`;
  return fetchData(url);
};

export const getMovieRecommendations = async (movieId: string | number) => {
  const url = `${tmdbBaseUrl}/movie/${movieId}/recommendations?api_key=${process.env.TMDB_API_KEY}`;
  return fetchData(url);
};

export const getMovieById = async (movieId: string | number) => {
  const url = `${tmdbBaseUrl}/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`;
  return fetchData(url);
};

export const getMovieImages = async (movieId: string | number) => {
  const url = `${tmdbBaseUrl}/movie/${movieId}/images?api_key=${process.env.TMDB_API_KEY}`;
  return fetchData(url);
};

export const getMovieReviews = async (movieId: string | number) => {
  const url = `${tmdbBaseUrl}/movie/${movieId}/reviews?api_key=${process.env.TMDB_API_KEY}`;
  return fetchData(url);
};

export const getSimilarMovies = async (movieId: string | number) => {
  const url = `${tmdbBaseUrl}/movie/${movieId}/similar?api_key=${process.env.TMDB_API_KEY}`;
  return fetchData(url);
};

export const getMovieVideos = async (movieId: string | number) => {
  const url = `${tmdbBaseUrl}/movie/${movieId}/videos?api_key=${process.env.TMDB_API_KEY}`;
  return fetchData(url);
};

export const getGenres = async () => {
  const url = `${tmdbBaseUrl}/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`;
  return fetchData<Genres>(url);
};

export const searchMovie = async (term: string) => {
  const url = `${tmdbBaseUrl}/search/movie?query=${term}&api_key=${process.env.TMDB_API_KEY}`;
  return fetchData<Search<Movie>>(url);
};

export const searchMoviesByGenre = async (genreIds: string[]) => {
  const url = `${tmdbBaseUrl}/discover/movie?with_genres=${genreIds.join(',')}&api_key=${process.env.TMDB_API_KEY}`;
  return fetchData<Search<Movie>>(url);
};


