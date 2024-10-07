import React from "react";

const MovieCard = ({ poster_path }) => {
  return (
    <img
      src={"https://image.tmdb.org/t/p/original/" + poster_path}
      className="w-48 m-2"
    />
  );
};

export default MovieCard;
