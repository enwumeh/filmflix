import React from "react";
import './MovieDetails.css'


export default function MovieDetails(props) {
  const { deets } = props;
  return (
    <div className="movie-home">
      {deets.overview}
    </div>
  )
}  
