import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovie from "./customHooks/useNowPlayingMovie";

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

// Main container
//  -- //Video background
//  -- //title container
// secondary container
//  -- //movies * n list
