import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1/",
});

export default axiosApi;
