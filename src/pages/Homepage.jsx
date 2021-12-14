import React from "react";
import axios from "axios";
import { vars } from "../variables.jsx";
import { Movie } from "../components/Movie.jsx";

const Homepage = () => {
  const [movies, setMovies] = React.useState([]);
  const getMovies = React.useCallback(async () => {
    try {
      const response = await axios.get(vars.MoviesDataUrl);
      console.log(response);
      setMovies(response.data.data);
    } catch (e) {
      console.log(e);
    }
  });
  React.useEffect(() => {
    getMovies();
  }, [movies]);
  return (
    <section className="movies container">
      {movies &&
        movies.map((movie, index) => <Movie data={movie} key={movie.id} />)}
    </section>
  );
};

export default Homepage;
