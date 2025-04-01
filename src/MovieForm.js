import React, { useState } from "react";

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && year) {
      addMovie({ title, year });
      setTitle("");
      setYear("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Movie Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;