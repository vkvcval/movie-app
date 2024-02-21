'use client'

import { HeartIcon } from '@heroicons/react/24/outline'
import {
  useFavorites,
  addToFavorites,
  removeFromFavorites
} from '@/lib/redux/favorites'
import { useAppDispatch } from '@/lib/redux/store'

export default function ToggleFavorite({ movieId }: { movieId: number }) {
  const favorites = useFavorites()
  const isFavorite = favorites.some((id) => id === movieId)

  const dispatch = useAppDispatch()

  const handleAddToFavorites = () => {
    localStorage.setItem('favorites', JSON.stringify([...favorites, movieId]))
    dispatch(addToFavorites(movieId))
  }

  const handleRemoveFromFavorites = () => {
    localStorage.setItem(
      'favorites',
      JSON.stringify(favorites.filter((id) => id !== movieId))
    )
    dispatch(removeFromFavorites(movieId))
  }

  const className = {
    favorited: 'fill-secondary h-8 w-8 stroke-none hover:fill-secondary-dark',
    notFavorited: 'h-6 w-6 hover:size-8 hover:fill-red-700 hover:stroke-none'
  }

  return (
    <div className="absolute bottom-[40px] right-0">
      {isFavorite ? (
        <button onClick={handleRemoveFromFavorites}>
          <HeartIcon className={className.favorited} />
        </button>
      ) : (
        <button onClick={handleAddToFavorites}>
          <HeartIcon className={className.notFavorited} />
        </button>
      )}
    </div>
  )
}
