import { Instance } from "./index";

export const addUser = async (params) => {
  try {
    const result = await Instance.post("/users", params);
    return result.data;
  } catch ({ response }) {
    return response.data;
  }
};

export const getToken = async (params) => {
  try {
    const result = await Instance.post("/users/token", params);
    return result.data;
  } catch ({ response }) {
    return response.data;
  }
};
