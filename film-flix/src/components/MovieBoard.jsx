import React from "react";
import { Link } from "react-router-dom";
import "./MovieBoard.css";

const MovieBoard = (props) => {
  const { details, keyID } = props;

  // const movieLink = `/movies/${details.id}`;

  return (
    
    //  <div cxlassName="container" key={keyID}>
      <Link to={`/movies/${details.id}`} className='movies-link'>
        <div
          className="board"
          style={{
            // width: 339,
            color: "white",
            backgroundImage: `url(https://image.tmdb.org/t/p/w185/${details.poster_path})`,
          }}
        >
          {/* {console.log(details.overview)} */}
          
          <div className='detail-title'>
            </div>
        </div>
      </Link>

      /* {console.log("HERE", details.popularity)} */
    //  </div>
  
  );
};

export default MovieBoard;
