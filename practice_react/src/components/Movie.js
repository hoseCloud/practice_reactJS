import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImage, title, summary, genres }) {
  if (summary.length > 500) {
    summary = summary.slice(0, 500) + "...";
  }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-amber-100">
      <img className="w-full p-2" src={coverImage} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Link to={`/movie/${id}`}>{title}</Link>
        </div>
        <p className="text-gray-700 text-base">{summary}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {genres.map((genre) => (
          <span
            key={genre}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-1"
          >
            {genre}
          </span>
        ))}
      </div>
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
