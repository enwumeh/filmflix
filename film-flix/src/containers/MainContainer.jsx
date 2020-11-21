import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import MovieDetails from "../screens/MovieDetails/MovieDetails";
import MovieHome from "../screens/MovieHome/MovieHome";
import Header from "../layout/Header";
// import CatFacts from '../components/CatFacts'

export default function MainContainer() {
  const [movies, setMovies] = useState([]);

  const popURL = `https://api.themoviedb.org/3/movie/popular?api_key=1209dd5b492a1668ef9d6c969ed8e6aa&language=en-US`

  useEffect(() => {
   fetchData(popURL)
  }, []);

  // fetchData(popURL);


  const fetchData = async (url) => {
    let response = await axios.get(url);
    const theData = response.data.results;
    setMovies(theData);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const userInput = e.target.value;
    if (userInput === "") {
      fetchData(`https://api.themoviedb.org/3/movie/popular?api_key=1209dd5b492a1668ef9d6c969ed8e6aa&language=en-US`);
    } else {
      findMovies(userInput);
    }
  }

  const findMovies = (userMovie) => {
    const movieData = `https://api.themoviedb.org/3/search/movie?api_key=1209dd5b492a1668ef9d6c969ed8e6aa&query=${userMovie}`;
    fetchData(movieData);
  }



  return ( 
    <div className="main-container">
      {/* <h4 className='movies-word'>Popular Movies:</h4> */}

      <Header />
      {/* <form onSubmit={onSubmit}>
        <input
          ref={(input) => {input.target = input}}
          type="text"
        />
      </form> */}
      <form onSubmit={onSubmit}>
        <input
          onChange={e => e.value}
          type="text"
        />
      </form>

      <h4 className='movies-word'>Popular Movies:</h4>

      {/* <CatFacts/> */}
      {/* <Switch> */}
      <Route exact path="/movies">

        <MovieHome movies={movies} />
        
      </Route>
      <Route path="/movies/:id">
        <MovieDetails deets={movies} />
        </Route>
        <Route exact path="/">
      </Route>
      {/* <Route
        path='/movies/:id'
        render={(props) => (
          <MovieDetails{...props} isAuthed={true} />
        )}
      /> */}
      {/* </Switch> */}
      
     </div>
  );
}
