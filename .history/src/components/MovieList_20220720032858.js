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
        <div key={movie.id} className="movie-img d-flex justify-content-start m-2">  
            <img className="card-img-top" src={API_IMG + movie.poster_path} alt="movie" />
            <div className="card-body">
               
                API_IMG + movie.poster_path}  alt="movie" /> 
                <h3>{movie.title}</h3>
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