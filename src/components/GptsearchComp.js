import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_LOGO } from "../utils/constant";

const GptsearchComp = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="" alt="background image" src={BG_LOGO} />
      </div>

      <GptSearchBar />
    </div>
  );
};

export default GptsearchComp;
