import React from "react";
import { Imbd } from "../images/Imbd.jsx";
import image from "../images/play.png";

export const Movie = (props) => {
  console.log(props);
  return (
    <div className="movies__card">
      <div className="movies__img">
        <img src={Object.values(props.data.covers.data)[4]} alt="movie" />
        <div className="play">
          <a href={props.data.imdbUrl}>
            <img src={image} alt="" />
          </a>
        </div>
        <div className="rates">
          <div className="imbd">
            <Imbd />
            <span>{props.data.rating.imdb.score}</span>
          </div>
          <div className="year">{props.data.year}წ</div>
        </div>
      </div>
      <div className="movies__text">
        <a href={props.data.imdbUrl}>
          <p>{props.data.originalName}</p>
        </a>
      </div>
    </div>
  );
};
