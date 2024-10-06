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
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      Options
    );

    data = await data.json();
    const filterTrailers = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailers.length ? filterTrailers[0] : data.results[0];
    dispatch(addTrailerMovies(trailer));
  };
};

export default useMovieTrailer;
