import axios from "axios";

export const Instance = axios.create({ baseURL: "http://localhost:8080" });

//export default Instance;
