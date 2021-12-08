import React from "react";
import axios from "axios";
import { Movie } from "../components/Movie.jsx";
import { vars } from "../variables.jsx";

const Search = () => {
  const [inputs, setInputs] = React.useState("");
  const handleChange = (event) => {
    const value = event.target.value || "";
    setInputs((values) => value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = inputs;
    console.log(`${vars.SearchDataUrl}${data}`);
    try {
      const response = await axios.get(`${vars.SearchDataUrl}${data}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8;",
        },
      });

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
        <div className="movies"></div>
      </form>
    </section>
  );
};

export default Search;
