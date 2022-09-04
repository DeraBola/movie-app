import React, { useEffect, useState, useRef } from "react"; 
import MovieList from "../src/components/MovieList";
import MovieListHeading from "../src/components/MovieListHeading";
import SearchBox  from "../src/components/SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import AddFavourites from "../src/components/AddFavourites";
import "./App.css";
import RemoveFavourites from "../src/components/RemoveFavourites";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";


 


const App = () => {

  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }


  const [movies, setMovies] = useState([]);  
  
  const [favourites, setFavourites] = useState([]);

  const [searchValue, setSearchValue] = useState([]);

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

  useEffect(()=>{
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    )||[];

    setFavourites(movieFavourites);
}, []); 


  const saveToLocalStorage = (items) =>{
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  }

const addFavouriteMovie = (movie) => {
  const newFavouriteList = [...favourites, movie];
  setFavourites(newFavouriteList);
  saveToLocalStorage(newFavouriteList);
};

const removeFavouriteMovie = (movie) => {
  const newFavouriteList = favourites.filter(
    (favourite) => favourite.id !== movie.id
  );
  setFavourites(newFavouriteList);
  saveToLocalStorage(newFavouriteList);
}


  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-1" ref={scrollRef} >
        <MovieListHeading heading='Movies' />
        < SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className="row">
        <MovieList 
        movies={movies} 
        handleFavouritesClick={addFavouriteMovie} 
        favouriteComponent={AddFavourites}/>

      </div>
      <div className="row d-flex align-items-center mt-4 mb-1">
        <MovieListHeading heading='Favourites' />
      </div>
      <div className="row">
        <MovieList 
        movies={favourites} 
        handleFavouritesClick={removeFavouriteMovie } 
        favouriteComponent={RemoveFavourites}/>
      </div>
    </div>
  );
};

export default App;
