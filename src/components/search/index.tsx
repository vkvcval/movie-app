"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { setGenres, useGenres } from "@/lib/redux/genres";
import { useAppDispatch } from "@/lib/redux/store";
import { getGenres } from "@/services/tmdb";
import { Genre } from "tmdb-ts";
import useIsClickedOutside from "@/lib/helpers/useIsClickOutside";

const SearchMovies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const genres = useGenres();
  console.log("genres", genres);
  const dispatch = useAppDispatch();

  const divRef = useRef<HTMLDivElement>(null);
  useIsClickedOutside(divRef, () => setShowFilters(false));

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const setGenresState = async () => {
    const genres = await getGenres();
    if (genres) {
      dispatch(setGenres(genres));
    }
  };

  useEffect(() => {
    setGenresState();
  }, []);

  const handleFilterClick = (genre: Genre) => {
    setSearchTerm(genre.name);
    setShowFilters(false);
  };

  return (
    <div className="relative" ref={divRef}>
      <input
        onFocus={() => setShowFilters(true)}
        className="bg-white px-5 py-3 text-gray-800 w-96 border-0 rounded"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      ></input>
      <div className="absolute">
        {showFilters && (
          <ul className="flex flex-wrap gap-4 bg-primary-dark mt-4 p-4 rounded opacity-90 justify-center">
            {genres.map((genre) => (
              <li key={genre.id}>
                <button
                  id="filter-button"
                  className="bg-transparent text-m font-kanit hover:bg-primary-light text-secondary font-semibold hover:text-white py-1 px-3 border border-primary-light hover:border-transparent rounded transition duration-200 ease-in-out"
                  onClick={(e) => handleFilterClick(genre)}
                >
                  {genre.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchMovies;
