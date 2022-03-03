import axios from "axios";
import { instance } from ".";

export const getMovieList = async (params) => {
  const { data } = await instance.get("/movie", {
    params,
  });
  return data;
};
