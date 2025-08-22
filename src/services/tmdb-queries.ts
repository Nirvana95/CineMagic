import axiosInstance from "./tmdb_api";

async function searchGet() {
  const response = await axiosInstance.get("/search/keyword?query=men&page=1");
  return response.data;
}

export default searchGet;
