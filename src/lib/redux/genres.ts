import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../redux/store";
import { Genres } from "tmdb-ts/dist/endpoints";
import { Genre } from "tmdb-ts";

const initialState: Genre[] = [];

export const genres = createSlice({
  name: "genres",
  initialState,
  reducers: {
    setGenres: (_, action: PayloadAction<Genres>) => {
      return action.payload.genres;
    },
  },
});

export const { setGenres } = genres.actions;
export default genres.reducer;

export const useGenres = () => useAppSelector((state) => state.genresSlice);
