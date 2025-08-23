import axiosInstance from "./tmdb_api";

export default async function searchGet() {
  const response = await axiosInstance.get("/search/keyword?query=men&page=1");
  return response.data;
}
