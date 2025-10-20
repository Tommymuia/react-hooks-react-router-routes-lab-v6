// src/pages/Movie.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = "http://localhost:3000";

function Movie() {
  // Get the 'id' parameter from the URL
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the specific movie using the id
    fetch(`${API_URL}/movies/${id}`)
      .then(res => res.json())
      .then(data => {
        setMovie(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(`Error fetching movie with ID ${id}:`, error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h1>Loading Movie Details...</h1>;
  if (!movie || movie.error) return <h1>Movie Not Found!</h1>; 

  const { title, time, genres } = movie;

  return (
    <section>
      <h1>{title}</h1>
      <p>{time}</p> {/* Use <p> tag for the movie's time */}
      <div>
        {/* Render each genre in its own <span> tag */}
        {genres.map((genre, index) => (
          <span key={index} style={{ marginRight: '10px' }}>
            {genre}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Movie;