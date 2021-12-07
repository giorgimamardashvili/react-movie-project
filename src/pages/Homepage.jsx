import React from "react";
import axios from "axios";
import { vars } from "../variables.jsx";
import { Imbd } from "../images/Imbd.jsx";

const Homepage = () => {
  const [movies, setMovies] = React.useState([]);
  const getMovies = async () => {
    try {
      const response = await axios.get(vars.MoviesDataUrl);
      console.log(response.data.data);
      setMovies(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  React.useEffect(() => {
    getMovies();
  }, []);
  return (
    <section className="movies container">
      {movies &&
        movies.map((movie) => (
          <div className="movies__card" key={movie.id}>
            <div className="movies__img">
              <img src={Object.values(movie.covers.data)[4]} alt="movie" />
              <div className="play">
                <a href={movie.imdbUrl}>
                  <img src="../images/play.png" alt="" />
                </a>
              </div>
              <div className="actions">
                <div className="langs">
                  <span></span>
                </div>
              </div>
              <div className="rates">
                <div className="imbd">
                  <Imbd />
                  <span>{movie.rating.imdb.score}</span>
                </div>
                <div className="year">{movie.year}წ</div>
              </div>
            </div>
            <div className="movies__text">
              <a href={movie.imdbUrl}>
                <p>{movie.originalName}</p>
              </a>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Homepage;
