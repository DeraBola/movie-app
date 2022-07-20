import React from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          key={movie.id}
          className="movie-img card d-flex justify-content-start m-2"
        >
          <div className="card-body">
            <img className='card-img-top' src={API_IMG + movie.poster_path} alt="movie"></img>
          </div>
          <div className="card-body">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
