// src/pages/Directors.js
import React, { useState, useEffect } from 'react';

const API_URL = "http://localhost:3000";

function Directors() {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch directors and embed their movies using json-server's _embed feature
    fetch(`${API_URL}/directors?_embed=movies`)
      .then(res => res.json())
      .then(data => {
        setDirectors(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching directors:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading Directors...</h1>;

  return (
    <section>
      <h1>Directors Page</h1>
      {/* Iterate over directors and render an article for each */}
      {directors.map(director => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {/* Map over the embedded movies */}
            {director.movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Directors;