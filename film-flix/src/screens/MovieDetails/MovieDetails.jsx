import React from "react";
import './MovieDetails.css'
import { useParams } from 'react-router-dom'


export default function MovieDetails(props) {
  const { deets } = props;
  const params = useParams();
  const picURL = `https://image.tmdb.org/t/p/w185/${deets.poster_path}`


  // for (let i = 0; i < deets.length; i++) {
  //if (deets[i].id === params.id) {
    
  
  
  // let movMatch = deets.find((i) => params.id === deets[i].id )

  // const dID = params.id;
  
  const movieMatch = deets.find(movie => params.id)
    

  

return (
  deets ? 
   (
    <div className="movie-home">
          {console.log("movieMatch:",movieMatch)}
        <div className='image-dt' style={{ picURL }}>
        {/* {console.log("dID:", dID)} */}
          {movieMatch.backdrop_path} 
        {movieMatch.title} 
          {movieMatch.overview}  
           {deets[3].overview} 
          AHHHHH
        </div>
    </div>
  )
  : 
  //  (
      null
   )

}  

