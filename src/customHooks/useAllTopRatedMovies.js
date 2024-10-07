import { useEffect } from "react";
import { Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addAllTopRatedMovies } from "../utils/movieSlice.js";

const useAllTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    movies();
  }, []);
  const movies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      Options
    );
    const json = await data.json();
    dispatch(addAllTopRatedMovies(json.results));
  };
};

export default useAllTopRatedMovies;
