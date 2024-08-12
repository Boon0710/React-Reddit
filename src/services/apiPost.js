import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8090", // The base URL for your backend API
  });

export async function createPost(postData) {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No token found");
    }

    const response = await api.post("/api/posts", postData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message || "Error creating Post");
    } else if (error.request) {
      throw new Error("No response received from the server");
    } else {
      throw new Error(error.message);
    }
  }
}
