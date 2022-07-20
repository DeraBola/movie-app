import React, { useEffect, useState } from "react";
import MovieList from "../src/components/MovieList";
import MovieListHeading from "../src/components/MovieListHeading";
import SearchBox  from "../src/components/SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=1a149356193d56f9143f86bca179b03e"
    
    const response = await fetch(url);

    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.results);
  };

  useEffect(()=>{
    getMovieRequest();
  }, []);
  
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieListHeading heading='Movies' />
        <  />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
