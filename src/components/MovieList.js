import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="text-white text-3xl mb-6 ml-6">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies &&
            movies.map((movie) => {
              return <MovieCard poster_path={movie.poster_path} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
