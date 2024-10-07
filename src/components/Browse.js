import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovie from "../customHooks/useNowPlayingMovie.js";
import useAllTopRatedMovies from "../customHooks/useAllTopRatedMovies.js";
import useUpcomingMovies from "../customHooks/useUpcomingMovies.js";
import useAllPopularMovies from "../customHooks/useAllPopularMovies.js";
import { useSelector } from "react-redux";
import GptsearchComp from "./GptsearchComp.js";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovie();
  useAllTopRatedMovies();
  useUpcomingMovies();
  useAllPopularMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptsearchComp />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
