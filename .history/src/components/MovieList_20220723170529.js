import React from "react";
 
const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieList = (props) => {

  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={movie.id} className="movie-img d-flex justify-content-start m-2">  
              <img src={API_IMG + movie.poster_path} className='card-img-top' alt="movie" /> 
            
          <div 
          onClick ={() => props.handleFavouritesClick(movie)} 
          className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;