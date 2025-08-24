// import { useParams } from "react-router";

import Badge from "../../ui/Badge";
import DetailedList from "../../ui/DetailedList";

function MovieModal() {
  // const { id } = useParams();

  return (
    <div className="movie-card bg-[rgba(15,13,35,0.98)] p-12.5 mb-4">
      <div className="flex justify-between items-center">
        <h2>Movie Title</h2>
        <div className="flex gap-3">
          <Badge className="rating">
            <img src="public/star.svg" alt="starts" />
            <p>
              8.9<span className="text-[#A8B5DB]">/10 (200K)</span>
            </p>
          </Badge>
          <Badge className="rating">
            <img src="public/icons.png" alt="" />
            <p>1</p>
          </Badge>
        </div>
      </div>
      <div className="content mb-7.5">
        <span className="year">2004</span>
        <span>PG-13</span>
        <span>2h 46m</span>
      </div>
      <div className="flex gap-6.5 mb-7.5">
        <img
          className="w-75.5 h-110.25"
          src="public/no-movie.png"
          alt="no-movie"
        />
        <img
          className="w-193 h-110.25"
          src="public/No-Poster.png"
          alt="no-poster"
        />
      </div>

      <div className="grid grid-cols-[7fr_3fr] items-start">
        <DetailedList>
          <DetailedList.Title>Category</DetailedList.Title>
          <DetailedList.Description>
            {["adventure", "action", "drama"].map((cat) => (
              <Badge key={cat}>{cat}</Badge>
            ))}
          </DetailedList.Description>

          <DetailedList.Title>Overview</DetailedList.Title>
          <DetailedList.Description color="text-white">
            Hundreds of cash-strapped players accept a strange invitation to
            compete in children's games. Inside, a tempting prize awaits with
            deadly high stakes: a survival game that has a whopping 45.6
            billion-won prize at stake.
          </DetailedList.Description>

          <DetailedList.Title>Release date</DetailedList.Title>
          <DetailedList.Description>
            December 26, 2024 (Worldwide)
          </DetailedList.Description>

          <DetailedList.Title>Countries</DetailedList.Title>
          <DetailedList.Description>
            {["United States", "South Korea", "Japan"].join(" · ")}
          </DetailedList.Description>

          <DetailedList.Title>Status</DetailedList.Title>
          <DetailedList.Description>Released</DetailedList.Description>

          <DetailedList.Title>Language</DetailedList.Title>
          <DetailedList.Description>
            {["English", "Korean", "Japanese"].join(" · ")}
          </DetailedList.Description>

          <DetailedList.Title>Budget</DetailedList.Title>
          <DetailedList.Description>$21.4 million</DetailedList.Description>

          <DetailedList.Title>Revenue</DetailedList.Title>
          <DetailedList.Description>$900 Million</DetailedList.Description>

          <DetailedList.Title>Tagline</DetailedList.Title>
          <DetailedList.Description>
            45.6 Billion Won is Child's Play
          </DetailedList.Description>

          <DetailedList.Title>Production Companies</DetailedList.Title>
          <DetailedList.Description>
            {["Legendary Entertainment", "Warner Bros. Entertainment"].join(
              " · "
            )}
          </DetailedList.Description>
        </DetailedList>

        <button className="bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] justify-self-end py-2 px-5 rounded-md">
          Visit Homepage &rarr;
        </button>
      </div>
    </div>
  );
}

export default MovieModal;
