import { useEffect } from "react";
import { Options } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addAllPlayingMovies } from "../../utils/movieSlice";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?",
      Options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addAllPlayingMovies(json.results));
  };
};

export default useNowPlayingMovie;
