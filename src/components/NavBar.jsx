// src/components/NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; 

function NavBar() {
  // Use className="navbar" to satisfy the test
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  );
}

export default NavBar;