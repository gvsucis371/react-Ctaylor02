import React, { useState } from "react";

const MovieList = ({ movies, updateMovie, deleteMovie }) => {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editYear, setEditYear] = useState("");

  const startEdit = (movie) => {
    setEditingId(movie.id);
    setEditTitle(movie.title);
    setEditYear(movie.year);
  };

  const saveEdit = (id) => {
    updateMovie(id, { id, title: editTitle, year: editYear });
    setEditingId(null);
  };

  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {editingId === movie.id ? (
              <>
                <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                <input value={editYear} onChange={(e) => setEditYear(e.target.value)} />
                <button onClick={() => saveEdit(movie.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <strong>{movie.title}</strong> ({movie.year})
                <button onClick={() => startEdit(movie)}>Edit</button>
                <button onClick={() => deleteMovie(movie.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;