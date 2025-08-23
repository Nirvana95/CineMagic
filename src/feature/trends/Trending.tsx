import { useQuery } from "@tanstack/react-query";
import { getTrends } from "../../services/tmdb-queries";
import { RingLoader } from "react-spinners";
import { Link } from "react-router";

const IMAGE_BASE_URL_TRENDING =
  "https://media.themoviedb.org/t/p/w220_and_h330_face";

function Trending() {
  const { isLoading, data: trends } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrends,
  });
  console.log(trends?.results[0]);

  if (isLoading) return <RingLoader />;

  return (
    <section className="trending ">
      <h2>Trending</h2>

      <ul>
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i}>
            <p>{i + 1}</p>
            <Link to={`/movie/${trends.results.at(i).id}`}>
              <img
                className="cursor-pointer"
                src={
                  trends.results.at(i).poster_path
                    ? `${IMAGE_BASE_URL_TRENDING}${
                        trends.results.at(i).poster_path
                      }`
                    : "/no-movie.png"
                }
                alt={trends.results.at(i).title || `no image`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// type Movie = {
//   adult: boolean;
//   backdrop_path: string;
//   genre_ids: number[];
//   id: number;
//   media_type: string;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string;
//   release_date: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// };

export default Trending;
