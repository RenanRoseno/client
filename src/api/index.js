import axios from "axios";

const url = "http://localhost:5000/post";

export const fethcPost = () => axios.get(url);
