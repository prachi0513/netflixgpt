import { useEffect } from "react";
import { Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addAllPlayingMovies } from "../utils/movieSlice.js";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    movies();
  }, []);

  const movies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?",
      Options
    );
    const json = await data.json();
    dispatch(addAllPlayingMovies(json.results));
  };
};

export default useNowPlayingMovie;
