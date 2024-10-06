import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import useNowPlayingMovie from "./customHooks/useNowPlayingMovie";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie.allNowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[3];
  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
