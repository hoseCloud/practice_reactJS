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
    <div className="flex flex-col items-center justify-center text-center bg-amber-200 rounded-md p-5 space-y-3">
      <img src={coverImage} alt={title} className="rounded-lg w-auto" />
      <h2 className="text-xl font-bold">
        {title} ({year})
      </h2>
      <h3 className="text-gray-700">
        Runtime: {runtime}m | Rating: {rating}
      </h3>
      <p className="text-lg">{summary}</p>
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
