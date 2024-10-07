import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovie from "../customHooks/useNowPlayingMovie.js";
import useAllTopRatedMovies from "../customHooks/useAllTopRatedMovies.js";
import useUpcomingMovies from "../customHooks/useUpcomingMovies.js";
import useAllPopularMovies from "../customHooks/useAllPopularMovies.js";

const Browse = () => {
  useNowPlayingMovie();
  useAllTopRatedMovies();
  useUpcomingMovies();
  useAllPopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
