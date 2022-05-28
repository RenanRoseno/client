import axios from "axios";
import { POST, USER } from "../constants/endPoints";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});
export const fetchPost = () => API.get(POST);
export const createPost = (newPost) => API.post(POST, newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`${POST}/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`${POST}/${id}`);
export const likePost = (id) => API.patch(`${POST}/${id}/like `);

export const signIn = (formData) => API.post(`${USER}/signin`, formData);
export const signUp = (formData) => API.post(`${USER}/signup`, formData);
