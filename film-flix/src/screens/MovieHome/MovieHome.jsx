import React from "react";
import "./MovieHome.css";
// import { Link } from "react-router-dom";
import MovieBoard from "../../components/MovieBoard";

export default function MovieHome(props) {
  const { movies, onSubmit } = props;

  return (
    <div className="movie-home">
      <h1 className="movies-word">Popular Movies:</h1>
      <div className="submit-form">
        <form onSubmit={onSubmit} className="form">
          <input
            // ref={(input) => {input.target = input}}
            type="text"
          />
        </form>
      </div>

      <div className="pop-movies">
        {Object.keys(movies).map((film, id) => (
          <div key={id} className="popular-movies">
            <MovieBoard
              keyID={id}
              id={film}
              details={movies[film]}
            ></MovieBoard>
          </div>
        ))}
      </div>
    </div>
  );
}
