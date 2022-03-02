import axios from "../../node_modules/axios/index";

export const Instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "KDa2ZMvqLu1qOR1yMXQF",
    "X-Naver-Client-Secret": "s1nQka0vKc",
  },
});
