import SearchBox from "../feature/search/SearchBox";

function Hero() {
  return (
    <header className="flex flex-col items-center">
      <img
        src="/logo.png"
        className="object-cover bg-none mb-17.5 mt-12.5 w-22.5 h-16.5"
      />
      <img src="/hero.png" alt="Hero" />

      <h1>
        Find <span className="text-gradient">Movies</span> You’ll Love Without
        the Hassle
      </h1>
      <SearchBox />
    </header>
  );
}

export default Hero;
