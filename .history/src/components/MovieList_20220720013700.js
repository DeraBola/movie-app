import React from "react";
import {Modal from "react-bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={movie.id} className="movie-img d-flex justify-content-start m-2">
          <div className="card-body">
            <img className='card-img-top' src={API_IMG + movie.poster_path} alt="movie"></img>
            <div className="card-body">
            <button type="button" className="btn btn-dark">View More</button>
            <Modal>

            </Modal>
          </div>
          </div> 
        </div>
      ))}
    </>
  );
};

export default MovieList;
