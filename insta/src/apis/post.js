import { Instance } from ".";

export const getPostList = async () => {
  const { data } = await Instance.get("/posts/main");
  return data;
};

export const addPost = async (params) => {
  const { data } = await Instance.post("/posts", params);
  return data;
};
