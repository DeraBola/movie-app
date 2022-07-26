import React from "react";
 
const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieList = (props) => {

  const FavouriteComponent = props.favouriteComponent;

  return (
    <>     
      {props.movies?.map((movie, id) => (
        <div key={id} className="movie-img d-flex justify-content-start m-2"> 
         <div><img src={API_IMG + movie.poster_path} className='card-img-top' alt="movie" /></div>
               
              <div className="movie-info"> 
                <h3>{movie.title}</h3>
                <div className='movie-over'>  
                  <h6>Overview</h6>
                <p>{movie.overview}</p>
                </div>    
          </div>
          <div 
          onClick ={ () => props.handleFavouritesClick(movie)} 
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
