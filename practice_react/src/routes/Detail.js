import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailMovie from "../components/DetailMovie";

// Add loading
// Add to show detail in page

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();

    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  });

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <DetailMovie
          coverImage={movie.large_cover_image}
          title={movie.title}
          year={movie.year}
          runtime={movie.runtime}
          rating={movie.rating}
          summary={movie.description_full}
          genres={movie.genres}
        />
      )}
    </div>
  );
}

export default Detail;
