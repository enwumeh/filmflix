import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import MovieDetails from "../screens/MovieDetails/MovieDetails";
import MovieHome from "../screens/MovieHome/MovieHome";

export default function MainContainer() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async (url) => {
      let response = await axios.get(url);
      const theData = response.data.results;
      setMovies(theData);
      // console.log(theData)
    };
    fetchData(
      `https://api.themoviedb.org/3/movie/popular?api_key=1209dd5b492a1668ef9d6c969ed8e6aa&language=en-US`
    );
  }, []);

  // const findMovies = (userMovie) => {
  //   const movieData = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&query=${userMovie}`;
  //   fetchData(movieData);
  // }

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   const userInput = event.target.value;
  //   if (userInput === "") {
  //     fetchData(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&query=${userMovie}`);
  //   } else {
  //     findMovies(userInput);
  //   }
  // }

  return (
    // <div>
    //    <MovieHome movies={movies}/>
    // </div>
    <Switch>
      <Route path='/'>
        {/* <Route path='/movies' component={MovieHome}></Route> */}
         <MovieHome movies={movies}/>
      </Route>
      <Route exact path='/:id'>
        <MovieDetails deets={movies}/>
      </Route>
    </Switch>
  );
}

// <Switch>
//   <Route path='/movies'>
//   </Route>
//   <Route path='/movies/:id'>
//   </Route>
// </Switch>
