import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
});

export default axiosInstance;

// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTAzNTliODc2MTgxMzc4OTFkYmExNzdkNjc1ZWYyMyIsIm5iZiI6MTc0MDUxNjU3Ny42ODcsInN1YiI6IjY3YmUyY2UxNmYwN2YwOGNkNTU2MGRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gtrSGQN6BmYBiWHN2Z55an0oziUPAPbrWaaipeAOjEw",
//   },
// };

// async function ss() {
//   const res = await fetch(
//     "https://api.themoviedb.org/3/search/keyword?query=men&page=1",
//     options
//   );
//   const data = await res.json();
//   return data;
// }

// export default ss;
