import { useQuery } from "@tanstack/react-query";
import { getTrends } from "../../services/tmdb-queries";
import { RingLoader } from "react-spinners";
import { Link } from "react-router";

const IMAGE_BASE_URL = "https://media.themoviedb.org/t/p/w220_and_h330_face";

function Trending() {
  const { isLoading, data: trends } = useQuery({
    queryKey: ["trending"],
    queryFn: getTrends,
  });

  if (isLoading) return <RingLoader />;

  return (
    <section className="trending wrapper">
      <h2>Trending</h2>

      <ul>
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i}>
            <p>{i + 1}</p>
            <Link to={`/movie/${trends.results.at(i).id}`}>
              <img
                className="cursor-pointer hover:scale-115 transition-transform duration-500"
                src={
                  trends.results.at(i).poster_path
                    ? IMAGE_BASE_URL + trends.results.at(i).poster_path
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

export default Trending;
