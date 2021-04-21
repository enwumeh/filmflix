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
  // const picURL = `https://image.tmdb.org/t/p/w185/${movieMatch.poster_path}`;

  return deets ? (
    <div className="movie-home">
      {console.log("movieMatch:", movieMatch)}

      {/* {console.log("dID:", dID)} */}
      <div className="details-text">
        <p className="title"> {movieMatch.title} </p>
        {/* <div className="release-date"> {movieMatch.release_date} </div> */}
        <p className="overview"> {movieMatch.overview} </p>
      </div>
      <div
        key={movieMatch}
        className="image-dt"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w185/${movieMatch.poster_path})`,
        }}
      ></div>
      {/* {deets[13].overview}  */}
      <div className="page"></div>
    </div>
  ) : //  (
  null;
}