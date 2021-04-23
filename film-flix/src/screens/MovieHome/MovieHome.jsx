import React, { useEffect, useState } from "react";
import "./MovieHome.css";
import MovieBoard from "../../components/MovieBoard";

export default function MovieHome(props) {
  const { movies, onSubmit } = props;

  // const funct = (e) => {
  //   // const userInput = "";
  //   const valued = e.target.value;
  //   if (valued) {
  //     console.log(valued)
  //     setMovies(onSubmit(valued))
  //   }
  // }
  return (
    <div className="movie-home">
      <h1 className="movies-word">Popular Movies:</h1>
      <div className="submit-form">
        Search for a film here
        <form onSubmit={onSubmit} className="form" onChange={onSubmit}>
          <input
            type="text"
          />
          <button>click me please</button>
        </form>
      </div>
 
      <div className="pop-movies">

      {/* {console.log(typeof onSubmit, movies[20])} */}
        {typeof onSubmit ?
          
            Object.keys(movies).map((film, id) => (
              <div key={id} className="popular-movies">
                <MovieBoard
                  keyID={id}
                  id={film}
                  details={movies[film]}
                >
                </MovieBoard>
              </div>
          
            ))
           : null}
      </div>
    </div>
  );
}

// {console.log(typeof movies[0], typeof onSubmit)}

