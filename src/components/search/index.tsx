'use client'

import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { setGenres, useGenres } from '@/lib/redux/genres'
import { useAppDispatch } from '@/lib/redux/store'
import { getGenres } from '@/services/tmdb'
import { Genre } from 'tmdb-ts'
import useIsClickedOutside from '@/lib/helpers/useIsClickOutside'

const SearchMovies = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const genres = useGenres()
  const searchParams = useSearchParams()

  const { replace } = useRouter()

  const dispatch = useAppDispatch()

  const divRef = useRef<HTMLDivElement>(null)
  useIsClickedOutside(divRef, () => setShowFilters(false))

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      setShowFilters(false)
      setSearchTerm('')
      const params = new URLSearchParams(searchParams)
      if (searchTerm) {
        params.set('query', searchTerm)
      } else {
        params.delete('query')
      }
      replace(`search?${params.toString()}`)
    }
  }

  const setGenresState = async () => {
    const genres = await getGenres()
    if (genres) {
      dispatch(setGenres(genres))
    }
  }

  useEffect(() => {
    setGenresState()
  }, [])

  const handleFilterClick = (genre: Genre) => {
    setSearchTerm('')
    setShowFilters(false)
    const params = new URLSearchParams(searchParams)
    params.set('genre', `${genre.id}`)
    replace(`search?${params.toString()}`)
  }

  return (
    <div className="relative" ref={divRef}>
      <input
        onFocus={() => setShowFilters(true)}
        className="w-96 rounded border-0 bg-white px-5 py-3 text-gray-800"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleSearch}
        onClick={() => setShowFilters(true)}
      ></input>
      <div className="absolute">
        {showFilters && (
          <ul className="mt-4 flex flex-wrap justify-center gap-4 rounded bg-primary-dark p-4 opacity-90">
            {genres.map((genre) => (
              <li key={genre.id}>
                <button
                  id="filter-button"
                  className="rounded border border-primary-light bg-transparent px-3 py-1 font-kanit text-m font-semibold text-secondary transition duration-200 ease-in-out hover:border-transparent hover:bg-primary-light hover:text-white"
                  onClick={() => handleFilterClick(genre)}
                >
                  {genre.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SearchMovies
