import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';


export default function MainContainer() {
  
  const [movies, setMovies] = useState([]);



  useEffect(() => {
    const fetchData = async (url) => {
      let response = await axios.get(url)
      const theData = response.data.results;
      setMovies(theData)
    }
    fetchData(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`)
  }, [])
 
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
      <Switch>
        <Route path='/movies'>
        </Route>
        <Route path='/movies/:id'>
        </Route>
      </Switch>
    )
  }
