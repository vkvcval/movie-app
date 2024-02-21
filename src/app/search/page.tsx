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

  if (searchTerm) {
    result = await searchMovie(searchTerm.trim().replace(' ', '+'))
  } else if (genreId) {
    result = await searchMoviesByGenre([genreId])
  }

  if (result?.data) {
    list = result.data.results
  }

  if (list.length === 0) {
    return (
      <div className="p-8">
        <h3 className="mb-16 mt-10 text-center font-kanit text-xxl text-white">
          {searchTerm
            ? `No results found for results for '${searchTerm}'`
            : 'No results found.'}
        </h3>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h3 className="mb-16 mt-10 text-center font-kanit text-xxl text-white">
        {searchTerm ? `Search results for '${searchTerm}'` : 'Search results'}
      </h3>
      <ul className="flex flex-col gap-6 text-white">
        {list.map((item) => (
          <li key={item.id}>
            <SearchItem movie={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}
