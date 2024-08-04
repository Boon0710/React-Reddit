import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8090", // Base URL of your backend
  withCredentials: true, // Include cookies and other credentials
});

export default axiosInstance;
