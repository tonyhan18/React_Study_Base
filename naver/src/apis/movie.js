import { Instance } from "./index";

const getMovieList = async (params) => {
  const { data } = await Instance.get("/v1/search/movie.json", { params });
  console.log(data);
  return data;
};

export default getMovieList;
