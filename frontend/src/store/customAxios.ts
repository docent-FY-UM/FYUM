import axios from "axios";

const accessToken = localStorage.getItem("token");

// SPRING BOOT
export const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL + "/api/",
  headers: {
    Authorization: accessToken,
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// 응답을 가로채서 오류 처리
customAxios.interceptors.response.use((response) => {
  if (response.data.status === 403 || response.data.status === 402) {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  return response;
}
);

// DJANGO
export const djangoAxios = axios.create({
  baseURL: process.env.REACT_APP_API_DJANGO_URL,
  headers: {
    Authorization: accessToken,
  },

});
