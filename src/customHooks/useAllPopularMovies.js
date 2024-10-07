import { useEffect } from "react";
import { Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addAllPopularMovies } from "../utils/movieSlice.js";

const useAllPopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    movies();
  }, []);

  const movies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      Options
    );
    const json = await data.json();
    dispatch(addAllPopularMovies(json.results));
  };
};

export default useAllPopularMovies;
