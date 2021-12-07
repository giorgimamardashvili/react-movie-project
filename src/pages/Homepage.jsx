import React from "react";
import axios from "axios";
import { vars } from "../vars/variables.jsx";

const Homepage = () => {
  const getMovies = async () => {
    try {
      const response = await axios(vars.MoviesDataUrl);
      console.log(response);
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
