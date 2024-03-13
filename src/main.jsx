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
import AdminClient from './views/admin-views/AdminClient.jsx';
import AdminEmployee from './views/admin-views/AdminEmployee.jsx';
import AdminEvents from './views/admin-views/AdminEvent.jsx';
import AdminExcursion from './views/admin-views/AdminExcursion.jsx';
import AdminTickets from './views/admin-views/AdminTickets.jsx';

import ErrorPage from './views/ErrorPage.jsx';

import './assets/sass/global.scss'
import AdminPackage from './views/admin-views/AdminPackage.jsx';

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
  // {
  //   path: "admin",
  //   element: (
  //     <>
  //       <Admin />
  //       <Outlet />
  //     </>
  //   ),
  //   element: <AdminWithSubroutes />,
  //   children: [
  //     { 
  //       path: "car-rental",
  //       element: <AdminCarRental />
  //     },
  //     { 
  //       path: "hotel",
  //       element: <AdminHotel />
  //     },
  //     { 
  //       path: "client",
  //       element: <AdminClient />
  //     },
  //     { 
  //       path: "employee",
  //       element: <AdminEmployee />
  //     },
  //   ]
  // },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/car-rental",
    element: <AdminCarRental />,
  },  {
    path: "/admin/hotel",
    element: <AdminHotel />,
  },  {
    path: "/admin/client",
    element: <AdminClient />,
  },
  {
    path: "/admin/employee",
    element: <AdminEmployee />,
  },
  {
    path: "/admin/events",
    element: <AdminEvents />,
  },
  {
    path: "/admin/excusion",
    element: <AdminExcursion />,
  },
  {
    path: "/admin/tickets",
    element: <AdminTickets />
  },
  {
    path: "/admin/packages",
    element: <AdminPackage />
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
