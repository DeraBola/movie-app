import React, { useState } from 'react';
import MovieList from '../src/components/MovieList';
import  'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () =>  {
  const [movies, setMovies] = useState([
    {
    "adult": false,
    "backdrop_path": "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
    "genre_ids": [
        10751,
        16,
        12,
        35,
        14
    ],
    "id": 438148,
    "original_language": "en",
    "original_title": "Minions: The Rise of Gru",
    "overview": "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
    "popularity": 11510.186,
    "poster_path": "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
    "release_date": "2022-06-29",
    "title": "Minions: The Rise of Gru",
    "video": false,
    "vote_average": 7.6,
    "vote_count": 391
},
{
    "adult": false,
    "backdrop_path": "/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg",
    "genre_ids": [
        12,
        28,
        878
    ],
    "id": 507086,
    "original_language": "en",
    "original_title": "Jurassic World Dominion",
    "overview": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
    "popularity": 12255.48,
    "poster_path": "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
    "release_date": "2022-06-01",
    "title": "Jurassic World Dominion",
    "video": false,
    "vote_average": 7,
    "vote_count": 1622
},]);
  return (
  <div> 
    <MovieList movies={movies} />
    </div>
    );  
};

export default App;
