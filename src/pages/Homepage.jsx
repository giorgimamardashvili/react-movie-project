import React from "react";
import axios from "axios";
import { vars } from "../vars/variables.jsx";

const Homepage = () => {
  const [movies, setMovies] = React.useState([]);
  const getMovies = async () => {
    try {
      const response = await axios(vars.MoviesDataUrl);
      console.log(response);
      setMovies(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  React.useEffect(() => {
    getMovies();
  }, []);
  return <section></section>;
};

export default Homepage;
