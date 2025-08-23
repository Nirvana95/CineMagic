import Pagination from "../../ui/Pagination";

function Popular() {
  return (
    <div className="all-movies">
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
      </ul>

      <Pagination />
    </div>
  );
}

export default Popular;
