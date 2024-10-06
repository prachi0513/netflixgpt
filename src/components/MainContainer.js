import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import useNowPlayingMovie from "./customHooks/useNowPlayingMovie";

const MainContainer = () => {
  return (
    <div>
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};

export default MainContainer;
