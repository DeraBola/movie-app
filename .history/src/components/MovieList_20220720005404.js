import React from 'react';

const API_IMG="https://image.tmdb.org/t/p/w500";

const MovieList = (props) =>{
    return(
        <>
        {props.movies.map((movie, index)=> (
        <div key={movie.id}  className='movie-img d-flex justify-content-start m-2'>
          <h2>{<h2/>
          <img src={API_IMG+movie.poster_path} alt='movie'></img>
        </div>
        ))}
        </>
    );
};

export default MovieList;