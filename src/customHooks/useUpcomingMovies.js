import { useEffect } from "react";
import { Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addAllUpcomingMovies } from "../utils/movieSlice.js";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    movies();
  }, []);

  const movies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      Options
    );
    const json = await data.json();
    dispatch(addAllUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
