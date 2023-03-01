import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImage, title, summary, genres }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
