import axios from "axios";

export const baseApi = axios.create({
  baseURL: "https://routing-api-lpin.onrender.com"
});
