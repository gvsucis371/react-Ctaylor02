import React from "react";
import "./App.css";
import MovieList from "./MovieList"; // Import the MovieList component

function App() {
  // Sample movie data
  const movies = [
    { title: "Inception", year: 2010 },
    { title: "The Dark Knight", year: 2008 },
    { title: "Interstellar", year: 2014 },
    { title: "Avengers: Endgame", year: 2019 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Movie List</h1>
        <MovieList movies={movies} /> {/* Pass movies as props */}
      </header>
    </div>
  );
}

export default App;
