import { useParams } from "react-router";
import Badge from "../../ui/Badge";
import DetailedList from "../../ui/DetailedList";
import { useQuery } from "@tanstack/react-query";
import { getMovie } from "../../services/tmdb-queries";
import { DotLoader } from "react-spinners";

function MovieModal() {
  const { movieId: movie_id } = useParams();
  const {
    data: movieData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["movie", movie_id],
    queryFn: () => getMovie(+movie_id!),
  });

  return (
    <div className="movie-card bg-[rgba(15,13,35,0.98)] p-12.5 mb-4 min-h-[80vh] flex flex-col justify-center ">
      {isLoading && <DotLoader color="#fff" className="mx-auto" />}
      {isError && (
        <div className="text-white mx-auto">Something went wrong!</div>
      )}
      {!isLoading && !isError && (
        <>
          <div className="flex justify-between items-center">
            <h2>{movieData?.title}</h2>
            <div className="flex gap-3">
              <Badge className="rating">
                <img src="../../public/star.svg" alt="starts" />
                <p>
                  {movieData.vote_average.toFixed(1)}
                  <span className="text-[#A8B5DB]">
                    /10 (
                    {movieData.vote_count / 1000 > 0
                      ? Math.floor(+movieData.vote_count / 1000) + "K"
                      : movieData.vote_count}
                    )
                  </span>
                </p>
              </Badge>
              <Badge className="rating">
                <img src="../../public/icons.png" alt="" />
                <p>1</p>
              </Badge>
            </div>
          </div>
          <div className="content mb-7.5">
            <span className="year">
              {movieData?.release_date.split("-")[0]}
            </span>
            <span>{movieData?.adult ? "R" : "PG-13"}</span>
            <span>{movieData?.runtime} min</span>
          </div>
          <div className="flex gap-6.5 mb-7.5">
            <img
              className="w-75.5 h-110.25"
              src={
                movieData?.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
                  : "../../public/no-movie.png"
              }
              alt="no-movie"
            />
            <img
              className="w-193 h-110.25"
              src={
                movieData?.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`
                  : "../../public/No-Poster.png"
              }
              alt="no-poster"
            />
          </div>

          <div className="grid grid-cols-[7fr_3fr] items-start">
            <DetailedList>
              <DetailedList.Row title="Category">
                {movieData.genres.map((cat: { id: number; name: string }) => (
                  <Badge key={cat.id}>{cat.name}</Badge>
                ))}
              </DetailedList.Row>

              <DetailedList.Row title="Overview" color="text-white">
                {movieData?.overview}
              </DetailedList.Row>

              <DetailedList.Row title="Release date">
                {movieData?.release_date}
              </DetailedList.Row>

              <DetailedList.Row title="Countries">
                {movieData.production_countries
                  .map(
                    (country: { iso_3166_1: string; name: string }) =>
                      country.name
                  )
                  .join(" · ")}
              </DetailedList.Row>

              <DetailedList.Row title="Status">
                {movieData.status}
              </DetailedList.Row>

              <DetailedList.Row title="Language">
                {movieData.spoken_languages
                  .map((lang: { name: string }) => lang.name)
                  .join(" · ")}
              </DetailedList.Row>

              <DetailedList.Row title="Budget">
                {movieData.budget}
              </DetailedList.Row>

              <DetailedList.Row title="Revenue">
                {movieData.revenue}
              </DetailedList.Row>

              <DetailedList.Row title="Tagline">
                {movieData.tagline}
              </DetailedList.Row>

              <DetailedList.Row title="Production Companies">
                {movieData.production_companies
                  .map((company: { name: string }) => company.name)
                  .join(" · ")}
              </DetailedList.Row>
            </DetailedList>

            <a
              href={movieData.homepage}
              className="bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] justify-self-end py-2 px-5 rounded-md"
            >
              Visit Homepage &rarr;
            </a>
          </div>
        </>
      )}
    </div>
  );
}

// !NOTE: write this type in a single file
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

export default MovieModal;
