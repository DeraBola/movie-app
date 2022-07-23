import React, { useEffect, useState } from "react";
import MovieList from "../src/components/MovieList";
import MovieListHeading from "../src/components/MovieListHeading";
import SearchBox  from "../src/components/SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBox  from "../src/components/SearchBox";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=1a149356193d56f9143f86bca179b03e`
    
    const response = await fetch(url);

    const responseJson = await response.json();

    if(responseJson.results){
      setMovies(responseJson.results);
    }
  };

  useEffect(()=>{
    getMovieRequest(searchValue);
  }, [searchValue]);
  
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading='Movies' />
        < SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;