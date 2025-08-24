import axiosInstance from "./instance";

export async function searchGet() {
  const response = await axiosInstance.get("/search/keyword?query=men&page=1");
  return response.data;
}

export async function getTrends() {
  const response = await axiosInstance.get("trending/all/week");
  return response.data;
}

export async function getPopular() {
  const response = await axiosInstance.get("/movie/popular");
  return response.data;
}
