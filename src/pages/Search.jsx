import React from "react";
import axios from "axios";
import { Movie } from "../components/Movie.jsx";
import { vars } from "../variables.jsx";

const Search = () => {
  const [inputs, setInputs] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const handleChange = (event) => {
    const value = event.target.value || "";
    setInputs(value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = inputs;
    console.log(`${vars.SearchDataUrl}${data}`);
    try {
      const response = await axios.post(`${vars.SearchDataUrl}${data}`);
      console.log(response);
      setMovies(response.data.pagination.data);
      event.target.reset();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <section className="container search-page">
      <form className="bg-dark" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="საძიებო სიტყვა..."
          name="name"
          onChange={handleChange}
        />
        <button value="submit" type="submit">
          ძიება
        </button>
      </form>
      <div className="movies">
        {movies &&
          movies.map((movie, index) => <Movie data={movie} key={movie.id} />)}
      </div>
    </section>
  );
};

export default Search;
