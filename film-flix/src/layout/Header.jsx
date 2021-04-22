import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


export default function Header() {
  return (
    <div className="header">
      <Link to='/' className='movie-link'>FilmFlix</Link>
      <div className='movie-show-link'>
      {/* <Link to="/movies" className="movies-link">Movies</Link> */}
      {/* <Link to="/shows">Shows</Link> */}
      </div>
    </div>
  );
}
