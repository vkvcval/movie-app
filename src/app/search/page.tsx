import SearchItem from '@/components/searchItem'
import { searchMovie, searchMoviesByGenre } from '@/services/tmdb'
import { Movie } from 'tmdb-ts'

export default async function SearchPage({
  searchParams
}: {
  searchParams?: {
    query?: string
    genre?: string
    page?: string
  }
}) {
  const searchTerm = searchParams?.query
  const genreId = searchParams?.genre

  let list: Movie[] = []
  let result
  let displayText

  if (!searchTerm && !genreId) {
    displayText = 'Try searching movie name or use genre filters'
  } else if (searchTerm) {
    result = await searchMovie(searchTerm.trim().replace(' ', '+'))
    displayText = `Search results for '${searchTerm}'`
  } else if (genreId) {
    result = await searchMoviesByGenre([genreId])
    displayText = 'Search results'
  }

  if (result?.data) {
    list = result.data.results
  }

  return (
    <div className="p-8">
      <h3 className="mb-16 mt-10 text-center font-kanit text-xxl text-white">
        {displayText}
      </h3>
      <ul className="flex flex-col gap-6 text-white">
        {(!!searchTerm || !!genreId) && list.length === 0 && (
          <h3 className="mb-10 mt-10 text-center font-kanit text-xxl text-white">
            No movies found.
          </h3>
        )}
        {list.map((item) => (
          <li key={item.id}>
            <SearchItem movie={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
