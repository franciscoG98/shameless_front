import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Home from './views/Home.jsx';
import Login from './views/Login.jsx';
import Register from './views/Register.jsx';
import Hotels from './views/Hotels.jsx';
// admin
import Admin from './views/Admin.jsx';
import AdminCarRental from './views/admin-views/AdminCarRental.jsx';
import AdminHotel from './views/admin-views/AdminHotel.jsx';

import ErrorPage from './views/ErrorPage.jsx';

import './assets/sass/global.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/hotels",
    element: <Hotels />,
  },
  {
    path: "admin",
    element: (
      <>
        <Admin />
        <Outlet />
      </>
    ),
    children: [
      { 
        path: "car-rental",
        element: <AdminCarRental />
      },
      { 
        path: "hotel",
        element: <AdminHotel />
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
