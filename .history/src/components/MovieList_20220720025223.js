import React, { useState } from "react";
import { Modal, show, Button } from "react-bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieList = (props) => {

const[show, setShow] = useState(false);

const handleShow = () =>  setShow(true);
const  handleClose = () => setShow(false);

  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={movie.id} className="movie-img card d-flex justify-content-start m-2">
          <div className="card-body">
            <img className="card-img-top" src={API_IMG + movie.poster_path} alt="movie" />
            <div className="card-body">
              <button type="button" className="btn btn-dark" onClick={handleShow}>
                View More
              </button>
              <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body >
                <img className="card-img-top" style=[{width:'12rem'}] src={API_IMG + movie.poster_path}  alt="movie" /> 
                <h3>{movie.title}</h3>
                <h4>ImDb:{movie.vote_average} </h4>
                <br></br>
                <h6>Overview</h6>
                <p>{movie.overview}</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleShow}> Close </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
