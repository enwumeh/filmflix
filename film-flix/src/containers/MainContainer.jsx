import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import MovieDetails from "../screens/MovieDetails/MovieDetails";
import MovieHome from "../screens/MovieHome/MovieHome";
import Layout from "../layout/Layout";
import "./MainContainer.css";
import FilmFlixHome from "../screens/FimFlixHome/FilmFlixHome";

export default function MainContainer() {
  const [movies, setMovies] = useState([]);

  const apiKey = "1209dd5b492a1668ef9d6c969ed8e6aa";
  const popURL = encodeURI(
    `https://api.themoviedb.org/3/movie/popular?api_key=1209dd5b492a1668ef9d6c969ed8e6aa&language=en-US`
  );

  useEffect(() => {
    fetchData(popURL);
  }, []);

  const fetchData = async (url) => {
    let response = await axios.get(url);
    const theData = response.data.results;
    setMovies(theData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.value;
    if (userInput) {
    console.log("first condition", typeof userInput);
    findMovies(userInput);
    } else {
    console.log("second condition", typeof userInput);
      fetchData(
        `https://api.themoviedb.org/3/movie/popular?api_key=1209dd5b492a1668ef9d6c969ed8e6aa&language=en-US`
      );
    }
  };

  const findMovies = (userQuery) => {
    const movieData = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${userQuery}&include_adult=false`;
    fetchData(movieData);
  };

  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/movies">
           <Layout>
            <MovieHome onSubmit={onSubmit} movies={movies} />
            </Layout>
          </Route>
        <Route path="/movies/:id">
          <Layout>
            <MovieDetails deets={movies} />
          </Layout>
          </Route>
        <Route exact path="/">
          <Layout>
            <FilmFlixHome />
            </Layout>
            </Route>
        </Switch>
      
    </div>
  );
}
