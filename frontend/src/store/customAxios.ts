import axios from "axios";

const accessToken = localStorage.getItem("token");

export const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL + "/api/",
  headers: {
    Authorization: accessToken,
  },
});
