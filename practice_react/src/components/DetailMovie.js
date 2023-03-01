import { PropTypes } from "prop-types";

function DetailMovie({
  coverImage,
  title,
  year,
  runtime,
  rating,
  summary,
  genres,
}) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>
        {title} ({year})
      </h2>
      <h3>
        runtime: {runtime}, rating: {rating}
      </h3>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

DetailMovie.prototype = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DetailMovie;
