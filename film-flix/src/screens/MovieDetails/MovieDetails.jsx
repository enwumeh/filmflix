import React from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";

export default function MovieDetails(props) {
  const { deets } = props;
  const params = useParams();

  // for (let i = 0; i < deets.length; i++) {
  //if (deets[i].id === params.id) {

  // let movMatch = deets.find((i) => params.id === deets[i].id )

  // const dID = params.id;

  const movieMatch = deets.find((movie) => movie.id == params.id);
  const picURL = `https://image.tmdb.org/t/p/w185/${movieMatch.poster_path}`;


  return deets ? (
    <div className="movie-home">
      {console.log("movieMatch:", movieMatch)}
      
        {/* {console.log("dID:", dID)} */}
        <div>
          <div> {movieMatch.title} </div>
          {/* {picURL} */}
          
          <div> {movieMatch.release_date} </div>
        <div className='overview'> {movieMatch.overview} </div>
        <div key={movieMatch} className="image-dt" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w185/${movieMatch.poster_path})`,
          }}></div>
        </div>
        {/* {deets[13].overview}  */}
      
      <div className="page"></div>
    </div>
  ) : //  (
  null;
}
