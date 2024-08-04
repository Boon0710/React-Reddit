import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8090", // The base URL for your backend API
});

export const signUp = async (userData) => {
  try {
    const response = await api.post("/auth/signup", userData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "An error occurred during sign up"
    );
  }
};

export const login = async (credentials) => {
    try {
      const response = await api.post('/auth/signin', credentials);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'An error occurred during login');
    }
  };