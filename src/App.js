// grade me part 3 !
import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm";

function App() {
  const [movies, setMovies] = useState([]);

  // Fetch movies from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  // Add a new movie
  const addMovie = (newMovie) => {
    fetch("http://localhost:4000/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => setMovies([...movies, data]))
      .catch((error) => console.error("Error adding movie:", error));
  };

  // Update a movie
  const updateMovie = (id, updatedMovie) => {
    fetch(`http://localhost:4000/movies/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMovie),
    })
      .then(() => {
        setMovies(movies.map((movie) => (movie.id === id ? updatedMovie : movie)));
      })
      .catch((error) => console.error("Error updating movie:", error));
  };

  // Delete a movie
  const deleteMovie = (id) => {
    fetch(`http://localhost:4000/movies/${id}`, { method: "DELETE" })
      .then(() => setMovies(movies.filter((movie) => movie.id !== id)))
      .catch((error) => console.error("Error deleting movie:", error));
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
