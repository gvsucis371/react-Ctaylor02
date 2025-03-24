import React, { useState } from "react";
import "./App.css";
import MovieList from "./MovieList"; // Import the MovieList component
import MovieForm from "./MovieForm"; // Import the MovieForm component

function App() {
  // State to manage movies
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "The Dark Knight", year: 2008 },
    { id: 3, title: "Interstellar", year: 2014 },
    { id: 4, title: "Avengers: Endgame", year: 2019 },
  ]);

  // Add a new movie
  const addMovie = (newMovie) => {
    setMovies([...movies, { id: movies.length + 1, ...newMovie }]);
  };

  // Update a movie
  const updateMovie = (id, updatedMovie) => {
    setMovies(movies.map((movie) => (movie.id === id ? updatedMovie : movie)));
  };

  // Delete a movie
  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Movie List</h1>
        <MovieForm addMovie={addMovie} />
        <MovieList movies={movies} updateMovie={updateMovie} deleteMovie={deleteMovie} />
      </header>
    </div>
  );
}

export default App;
