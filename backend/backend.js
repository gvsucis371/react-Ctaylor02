// grade me part 3
const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000; // You can choose any port that doesn't conflict with other apps

// Middleware to allow CORS
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Example in-memory movie data
let movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "The Dark Knight", year: 2008 },
  { id: 3, title: "Interstellar", year: 2014 },
  { id: 4, title: "Avengers: Endgame", year: 2019 },
];

// CRUD API Routes

// Get all movies
app.get("/movies", (req, res) => {
  console.log("GET request received at /movies");
  res.json(movies);
});

// Add a new movie
app.post("/movies", (req, res) => {
  const { title, year } = req.body;
  const newMovie = { id: movies.length + 1, title, year };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// Update a movie
app.put("/movies/:id", (req, res) => {
  const { id } = req.params;
  const { title, year } = req.body;
  const movieIndex = movies.findIndex((movie) => movie.id === parseInt(id));
  
  if (movieIndex !== -1) {
    movies[movieIndex] = { id: parseInt(id), title, year };
    res.json(movies[movieIndex]);
  } else {
    res.status(404).json({ message: "Movie not found" });
  }
});

// Delete a movie
app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === parseInt(id));
  
  if (movieIndex !== -1) {
    const deletedMovie = movies.splice(movieIndex, 1);
    res.json(deletedMovie);
  } else {
    res.status(404).json({ message: "Movie not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
