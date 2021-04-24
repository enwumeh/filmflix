import React, { useState, useEffect } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MovieDetails(props) {
  const { deets } = props;
  // const [vid, setVid] = useState([]);
  const apiKey = "1209dd5b492a1668ef9d6c969ed8e6aa";
  const params = useParams();

  // for (let i = 0; i < deets.length; i++) {
  //if (deets[i].id === params.id) {

  // let movMatch = deets.find((i) => params.id === deets[i].id )

  // const dID = params.id;

  const movieMatch = deets.find((movie) => movie.id == params.id);
  const picURL = `https://image.tmdb.org/t/p/w185/${movieMatch.poster_path}`;
  const vidURL = `https://api.themoviedb.org/3/movie/${movieMatch.id}/videos?api_key=${apiKey}`;
  // useEffect(() => {
  //   const funct = (vidURL) => {
  //     let response = axios.get(vidURL);
  //   const theData = response;
  //   setVid(theData);
  //   };
  //   funct()
  // }, []);

  return deets ? (
    <div className="movie-home">
      {console.log("movieMatch:", movieMatch)}

      {/* {console.log("dID:", dID)}  */}
      <div className="details-text">
        <p className="title"> {movieMatch.title} </p>
        <div className="release-date"> {movieMatch.release_date} </div>
        <p className="overview"> {movieMatch.overview} </p>
      </div>
      <div
        // key={movieMatch}
        className="image-dt"
        style={{
          backgroundImage: `url(${picURL})`,
        }}
      >
      </div>
      <div className="page"></div>
      <div
        // key={movieMatch}
        className="image-dt"
        style={{
          backgroundImage: `url(${vidURL})`,
        }}
      >
      </div>
    </div>
  ) : //  (
  null;
}
