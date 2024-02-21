import * as tmdb from 'tmdb-ts'

export const tmdbBaseUrl = 'https://api.themoviedb.org/3'
export const tmdbConfigurationUrl = 'https://api.themoviedb.org/3/configuration'

const TMDB_IMAGES = {
  base_url: 'http://image.tmdb.org/t/p/',
  secure_base_url: 'https://image.tmdb.org/t/p/',
  backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
  logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
  poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  profile_sizes: ['w45', 'w185', 'h632', 'original'],
  still_sizes: ['w92', 'w185', 'w300', 'original']
}

export const getPosterPath = (imagePath: string) => {
  return tmdb.getFullImagePath(
    TMDB_IMAGES.secure_base_url,
    TMDB_IMAGES.poster_sizes[4],
    imagePath
  )
}

export const getBackdropPath = (imagePath: string) => {
  return tmdb.getFullImagePath(
    TMDB_IMAGES.secure_base_url,
    TMDB_IMAGES.backdrop_sizes[0],
    imagePath
  )
}

export const getImdbPath = (imdbId: string) => {
  return `https://www.imdb.com/title/${imdbId}/`
}
