import axios from "axios";
import getApiUrl from "services/apiBaseUrl";

export default axios.create({
  baseURL: getApiUrl(),
});

export const axiosPrivate = axios.create({
  baseURL: getApiUrl(),
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
    "Access-Control-Allow-Origin": "*",
  },
  // withCredentials: true
});
