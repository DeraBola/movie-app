import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieList = (props) => {

  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={movie.id} className="movie-img d-flex justify-content-start m-2">  
           <div <img src={API_IMG + movie.poster_path} alt="movie" />
            <div className="movie-info"> 
                <h3>{movie.title}</h3>
                <br></br>
                <h6>Overview</h6>
                <p>{movie.overview}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
