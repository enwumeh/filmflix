import React from "react";
import './MovieHome.css'
// import { Link } from "react-router-dom";
import MovieBoard from '../../components/MovieBoard'

export default function MovieHome(props) {
  const { movies } = props;





  
  return (
    <div className="movie-home">
      <h4 className='movies-word'>Popular Movies:</h4>
      {/* {console.log("TYPEOF", movies)}  */}
      
      <div className='pop-movies'>
       {Object.keys(movies).map((film, id) => (
      <div key={id} className='popular-movies'>
           <MovieBoard keyID={id} id={film} details={movies[film]}></MovieBoard>
      </div>
       ))} 
      </div>
    </div>
  )
}  

