const express = require("express");
const cors = require("cors");
const fs = require("fs");
const axios = require("axios");

const getFsMovies = () => {
  const movies = JSON.parse(fs.readFileSync("./movies.json"));
  return movies;
};
const writeFsMovies = (movies) => {
  return fs.writeFileSync(
    "./movies.json",
    JSON.stringify(movies, undefined, 4)
  );
};

const app = express();
app.use(cors());

const getMovies = async () => {
  let error,
    data = null;
  try {
    const response = await axios.get(
      "https://api.imovies.cc/api/v1/trailers/trailer-day?page=1&per_page=20&fbclid=IwAR0EaSIagG9DdaQY7uhuxIstGIleXKjZpFdhJeHyc_XMZ3Nh37DGSW8yFZA"
    );
    if (response.data) {
      writeFsMovies(response.data);
      data = response.data;
    }
  } catch (err) {
    error = err;
    console.log(err);
  } finally {
    if (error) {
      return getFsMovies();
    }
    return data;
  }
};
app.get("/movies", async (req, res) => {
  const movies = await getMovies();
  res.json(movies);
});

const port = 4000;
app.listen(port, console.log(`server is running on http://localhost:${port}`));
