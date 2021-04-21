import React from "react";
import { Link } from "react-router-dom";
import "./FilmFlixHome.css";

const FilmFlixHome = () => {
  return (
    <div className="flix-home">
      <div className="enter-div">
        <p className="enter-paragraph">
          Find a movie to watch tonight, or your new favorite show
        </p>
        <Link to="/movies"><button className="enter-button">
          ENTER SITE
           </button>
          </Link>
      </div>
    </div>
  );
};

export default FilmFlixHome;
