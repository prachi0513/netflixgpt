import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowplaying = useSelector((store) => store?.movie?.allNowPlayingMovies);
  const topRated = useSelector((store) => store?.movie?.allTopRatedMovies);
  const popular = useSelector((store) => store?.movie?.allPopularMovies);
  const upcoming = useSelector((store) => store?.movie?.allUpcomingMovies);

  return (
    <div className="bg-black">
      <MovieList title={"Now playing"} movies={nowplaying} />
      <MovieList title={"Top rated"} movies={topRated} />
      <MovieList title={"Upcoming"} movies={upcoming} />
      <MovieList title={"Popular"} movies={popular} />
    </div>
  );
};

export default SecondaryContainer;
