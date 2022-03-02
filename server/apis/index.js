import axios from "axios";

export const naverInstance = axios.create({
  baseURL: "https://openapi.naver.com",
  headers: {
    "X-Naver-Client-Id": "KDa2ZMvqLu1qOR1yMXQF",
    "X-Naver-Client-Secret": "s1nQka0vKc",
  },
});
