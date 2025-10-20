// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard.jsx'; // Updated extension

const API_URL = "http://localhost:3000";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then(res => res.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading Movies...</h1>;

  return (
    <section>
      <h1>Home Page</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default Home;