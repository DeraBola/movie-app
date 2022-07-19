import React from 'react';

const API_IMG="https://image.tmdb.org/t/p/w500";

const MovieList = (props) =>{
    return(
        <>
        {props.movies.map((movie, index)=> (
        <div>
          <img src={API_IMG+movie.poster_path} alt='movie'></img>
        </div>
        ))}
        </>
    );
};

export default MovieList;