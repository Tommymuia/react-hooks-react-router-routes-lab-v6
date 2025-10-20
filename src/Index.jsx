// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import { routes } from './routes';

// Define the root layout component to render the NavBar on every page
function Root() {
  return (
    <>
      <NavBar />
      {/* Outlet renders the matched route element (Home, Directors, etc.) */}
      <Outlet />
    </>
  );
}

// Create the router configuration
const router = createBrowserRouter([
  {
    // This is the parent layout route
    element: <Root />,
    errorElement: <ErrorPage />,
    children: routes, // Nest all custom routes under the layout
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);