import React, { useEffect, useState } from "react";
import "./MovieHome.css";
import MovieBoard from "../../components/MovieBoard";

export default function MovieHome(props) {
  const { movies, onSubmit, findMovies } = props;
  const [title, setTitle] = useState([])
  
  const movieTitle = "Popular Movies";
  const findMatches = "See Matches Below"
  const handleTyped = () => {
  setTitle(movieTitle)
} 

  const funct = (e) => {
    // const userInput = "";
    const valued = e.target.value;
    if (title) {
      console.log("free")
      return true;
    }
    return false;
  }
  return (
    <div className="movie-home">
    {console.log("title",title)}
       
      <h1 className="movies-word">{funct? findMatches: findMatches}</h1>
      <div className="submit-form">
        Search for a film here
        <form  className="form" onSubmit={onSubmit} onChange={onSubmit}>
          <input type="text"/>
          {/* <button>Find films!</button> */}
        </form>
      </div>

      <div className="pop-movies">
        { typeof onSubmit  
          ? Object.keys(movies).map((film, id) => (
              <div key={id} className="popular-movies">
                <MovieBoard
                  keyID={id}
                  id={film}
                  details={movies[film]}
                ></MovieBoard>
              </div>
            ))
          : null }
      </div>
    </div>
  );
}

// {console.log(typeof movies[0], typeof onSubmit)}
