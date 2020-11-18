import React from "react";
import './MovieHome.css'
import { Link } from "react-router-dom";
import MovieBoard from '../components/MovieBoard'

export default function MovieHome(props) {
  const { movies } = props;
  return (
    <div className="movie-home">
      <Link to='/movies'className='movie-link'>FilmFlix</Link>
      <h4>Movies</h4>
       {console.log("hola")} 
       {movies.overview} 
       {Object.keys(movies).map((film, id) => (
      <div key={id}>
      <MovieBoard keyID={id} id={film} details={movies[film]}></MovieBoard>
      </div>
      ))} 
    </div>
  )
}  

