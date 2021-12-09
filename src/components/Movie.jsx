import React from "react";
import { Imbd } from "../images/Imbd.jsx";
import image from "../images/play.png";

export const Movie = (props) => {
  console.log(props.data);
  return (
    <div className="movies__card">
      <div className="movies__img">
        <img
          src={
            props.data.covers
              ? Object.values(props.data.covers.data)[4]
              : props.data.poster
          }
          alt="movie"
        />
        {props.data.imdbUrl && (
          <div className="play">
            <a href={props.data.imdbUrl}>
              <img src={image} alt="" />
            </a>
          </div>
        )}

        <div className="rates">
          <div className="imbd">
            <Imbd />
            <span>
              {props.data.rating
                ? props.data.rating.imdb.score
                : props.data.tmdb_vote_average}
            </span>
          </div>
          <div className="year">{props.data.year}წ</div>
        </div>
      </div>
      <div className="movies__text">
        <a href={props.data.imdbUrl ? props.data.imdbUrl : ""}>
          <p>
            {props.data.originalName
              ? props.data.originalName
              : props.data.original_title}
          </p>
        </a>
      </div>
    </div>
  );
};
