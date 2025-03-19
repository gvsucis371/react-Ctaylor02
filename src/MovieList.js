// grade me part 1
import React from "react";

// MovieList Component - Receives movies as a prop
const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <strong>{movie.title}</strong> ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
