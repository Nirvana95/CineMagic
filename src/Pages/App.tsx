import { Outlet, useParams } from "react-router";
import Popular from "../feature/popular/Popular";
import Trending from "../feature/trends/Trending";
import Hero from "../ui/Hero";
import { useEffect, useState } from "react";

function App() {
  const { movieId } = useParams();
  const [offsetY, setOffsetY] = useState(0);
  useEffect(
    function () {
      if (!movieId) {
        window.scrollTo(0, offsetY);
      }
    },
    [movieId, offsetY]
  );

  function handleClick() {
    setOffsetY(window.scrollY);
  }

  return (
    <main
      className={movieId ? `fixed right-1/2 translate-x-1/2 z-40` : ""}
      style={{ top: movieId ? `-${offsetY}px` : "" }}
    >
      <Outlet />
      <div className="pattern" />
      <Hero />

      <Trending handleClick={handleClick} />
      <Popular handleClick={handleClick} />
    </main>
  );
}

export default App;
