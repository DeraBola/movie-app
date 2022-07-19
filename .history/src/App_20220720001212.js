import React, { useEffect, useState } from "react";
import MovieList from "../src/components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      adult: false,
      backdrop_path: "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
      genre_ids: [10751, 16, 12, 35, 14],
      id: 438148,
      original_language: "en",
      original_title: "Minions: The Rise of Gru",
      overview:
        "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
      popularity: 11510.186,
      poster_path: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
      release_date: "2022-06-29",
      title: "Minions: The Rise of Gru",
      video: false,
      vote_average: 7.6,
      vote_count: 391,
    },
    {
      adult: false,
      backdrop_path: "/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg",
      genre_ids: [12, 28, 878],
      id: 507086,
      original_language: "en",
      original_title: "Jurassic World Dominion",
      overview:
        "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
      popularity: 12255.48,
      poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
      release_date: "2022-06-01",
      title: "Jurassic World Dominion",
      video: false,
      vote_average: 7,
      vote_count: 1622,
    }, {
      "adult": false,
      "backdrop_path": "/tsC3DRGAQvkoA88lQQfbQ40byFS.jpg",
      "genre_ids": [
          27,
          53
      ],
      "id": 756999,
      "original_language": "en",
      "original_title": "The Black Phone",
      "overview": "Finney Shaw, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
      "popularity": 5850.023,
      "poster_path": "/bxHZpV02OOu9vq3sb3MsOudEnYc.jpg",
      "release_date": "2022-02-04",
      "title": "The Black Phone",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 741
  },
  {
      "adult": false,
      "backdrop_path": "/p1F51Lvj3sMopG948F5HsBbl43C.jpg",
      "genre_ids": [
          28,
          12,
          14
      ],
      "id": 616037,
      "original_language": "en",
      "original_title": "Thor: Love and Thunder",
      "overview": "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
      "popularity": 3805.436,
      "poster_path": "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
      "release_date": "2022-07-06",
      "title": "Thor: Love and Thunder",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 1029
  },
  ]);
  const getMovieRequest = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=1a149356193d56f9143f86bca179b03e"
    
    const response = await fetch(url);

    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson)
  };

  useEffect(()=>{
    getMovieRequest();
  }, []);
  
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
