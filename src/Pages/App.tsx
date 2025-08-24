import Popular from "../feature/popular/Popular";
import Trending from "../feature/trends/Trending";
import Hero from "../ui/Hero";

function App() {
  return (
    <div>
      <div className="pattern" />
      <Hero />

      <Trending />
      <Popular />
    </div>
  );
}

export default App;
