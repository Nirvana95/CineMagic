import { useQuery } from "@tanstack/react-query";
import Pagination from "../../ui/Pagination";
import { getPopular } from "../../services/tmdb-queries";
import { Link } from "react-router";

// const IMAGE_BASE_URL = "https://media.themoviedb.org/t/p/w220_and_h330_face";
const IMAGE_BASE_URL = "https://media.themoviedb.org/t/p/w533_and_h300_bestv2";

function Popular({ handleClick }: { handleClick: () => void }) {
  const { isLoading, data: popular } = useQuery({
    queryKey: ["popular"],
    queryFn: getPopular,
  });

  if (isLoading) return <div>loading</div>;
  return (
    <div className="all-movies wrapper">
      <h2>Popular</h2>
      <ul>
        {popular?.results.map((movie: Movie) => (
          <li
            key={movie.id}
            className="movie-card hover:scale-105 transition-transform duration-300"
          >
            <Link to={`/movie/${movie.id}`} onClick={handleClick}>
              <img
                className="cursor-pointer"
                src={IMAGE_BASE_URL + movie.poster_path}
                alt={movie.title}
              />
            </Link>
            <div className="content ">
              <Link to={`/movie/${movie.id}`} onClick={handleClick}>
                <h3 className="cursor-pointer">{movie.title}</h3>
              </Link>
            </div>
            <div className="content">
              <div className="rating">
                <img src="/star.svg" />
                <p>{movie.vote_average.toFixed(1)}</p>

                <span>Action, Adventure, Comedy</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* <div className="all-movies">
      <ul>
        {Array.from({ length: 12 }).map((_, index) => (
          <li key={index} className="movie-card">
            <img src="/No-Poster.png" alt={`Movie ${index + 1}`} />
            <div className="content">
              <h3>Title Movie</h3>
            </div>
            <div className="content">
              <div className="rating">
                <img src="/star.svg" />
                <p>8.5</p>

                <span>Action, Adventure, Comedy</span>
              </div>
            </div>
          </li>
        ))}
      </ul> */}

      <Pagination />
    </div>
  );
}

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export default Popular;
