import { useEffect } from "react";
import { Options, TOP_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addAllTopRatedMovies } from "../utils/movieSlice.js";

const useAllTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    movies();
  }, []);
  const movies = async () => {
    const data = await fetch(TOP_API, Options);
    const json = await data.json();
    dispatch(addAllTopRatedMovies(json.results));
  };
};

export default useAllTopRatedMovies;
