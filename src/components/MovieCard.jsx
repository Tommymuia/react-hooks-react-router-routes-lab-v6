// src/components/MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const { id, title } = movie;

  return (
    <div className="movie-card">
      {/* Link uses dynamic routing to /movie/:id */}
      <Link to={`/movie/${id}`}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default MovieCard;