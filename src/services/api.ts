import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// GET: 모든 포스트 조회
export const getPosts = async () => {
  const response = await axiosInstance.get("/posts?_limit=3");
  return response.data;
};

// GET: 특정 포스트 조회
export const getPost = async (id: number) => {
  const response = await axiosInstance.get(`/posts/${id}`);
  return response.data;
};

// POST: 새 포스트 생성
export const createPost = async (data: {
  title: string;
  body: string;
  userId: number;
}) => {
  const response = await axiosInstance.post("/posts", data);
  return response.data;
};

// DELETE: 포스트 삭제
export const deletePost = async (id: number) => {
  const response = await axiosInstance.delete(`/posts/${id}`);
  return response.data;
};
