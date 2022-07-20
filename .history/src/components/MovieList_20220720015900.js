import React from "react";
import { Modal } from "react-bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500";

const MovieList = (props) => {

const[show, setShow] = useState(false);

const handleShow = () =>  setShow(true);
const  Show = () =>  setShow(true);

  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={movie.id} className="movie-img d-flex justify-content-start m-2">
          <div className="card-body">
            <img className="card-img-top" src={API_IMG + movie.poster_path} alt="movie" />
            <div className="card-body">
              <button type="button" className="btn btn-dark">
                View More
              </button>
              <Modal>
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img className="card-img-top" src={API_IMG + movie.poster_path}  alt="movie" /> 
                <h2>{movie.title}</h2>
                <h3>ImDb:{vote_average} </h3>
                <br></br>
                <h4>Overview</h4>
                <p>{movie.overview}</p>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
