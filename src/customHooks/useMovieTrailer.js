import { useEffect } from "react";
import { Options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerMovies } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    Trailers();
  }, []);

  const Trailers = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      Options
    );

    const json = await data.json();
    const filterTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];
    dispatch(addTrailerMovies(trailer));
  };
};

export default useMovieTrailer;
