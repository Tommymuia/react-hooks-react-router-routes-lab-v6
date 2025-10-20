// src/routes.js
import Home from './pages/Home.jsx';
import Directors from './pages/Directors.jsx';
import Actors from './pages/Actors.jsx';
import Movie from './pages/Movie.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

// The NavBar is handled in the Root component in index.jsx
export const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/directors',
    element: <Directors />,
  },
  {
    path: '/actors',
    element: <Actors />,
  },
  {
    // URL parameter for the movie ID
    path: '/movie/:id',
    element: <Movie />,
  },
];