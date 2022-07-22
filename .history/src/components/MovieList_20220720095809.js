import React from "react";
 


const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieList = (props) => {

  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={movie.id} className="movie-img image-container d-flex justify-content-start m-2">  
              <img src={API_IMG + movie.poster_path} className='card-img-top' alt="movie" /> 
            <div className="movie-info"> 
                <h3>{movie.title}</h3>
                <div className='movie-over'>  
                  <h6>Overview</h6>
                <p>{movie.overview}</p>
                </div>    
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
