function Trending() {
  return (
    <section className="trending ">
      <h2>Trending</h2>

      <ul>
        {Array.from({ length: 6 }).map((_, index) => (
          <li key={index}>
            <p>{index + 1}</p>
            <img src="/no-movie.png" alt={`Movie ${index + 1}`} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Trending;
