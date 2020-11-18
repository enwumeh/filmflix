import React from "react";
import { Link } from "react-router-dom";
import "./MovieBoard.css";

const MovieBoard = (props) => {
  const { details, keyID } = props;

  const movieLink = `/${details.id}`;

  return (
    <div className="container" key={keyID}>
      <Link to={movieLink}>
        <div
          className="board"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.poster_path})`,
          }}
        >
          {details.title}
        </div>
      </Link>

      {console.log("HERE", details)}
    </div>
  );
};

export default MovieBoard;
