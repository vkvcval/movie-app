import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useAppSelector } from '@/lib/redux/store'

const initialState: number[] = []

export const favorites = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (_, action: PayloadAction<number[]>) => {
      return action.payload
    },
    addToFavorites: (state, action: PayloadAction<number>) => {
      state.push(action.payload)
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      return state.filter((id) => id !== action.payload)
    }
  }
})

export const { setFavorites, addToFavorites, removeFromFavorites } =
  favorites.actions
export default favorites.reducer

export const useFavorites = () =>
  useAppSelector((state) => state.favoritesSlice)
