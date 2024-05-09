import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './views/Home.jsx';
import Login from './views/Login.jsx';
import Register from './views/Register.jsx';
import Hotels from './views/Hotels.jsx';
// admin
import Admin from './views/Admin.jsx';
// edit
import AdminCarRental from './views/admin-views/admin-edit/AdminCarRental.jsx';
import AdminHotel from './views/admin-views/admin-edit/AdminHotel.jsx';
import AdminClient from './views/admin-views/admin-edit/AdminClient.jsx';
import AdminEmployee from './views/admin-views/admin-edit/AdminEmployee.jsx';
import AdminEvents from './views/admin-views/admin-edit/AdminEvent.jsx';
import AdminExcursion from './views/admin-views/admin-edit/AdminExcursion.jsx';
import AdminTickets from './views/admin-views/admin-edit/AdminTickets.jsx';
import AdminPackage from './views/admin-views/admin-edit/AdminPackage.jsx';
// list
import CarRentalList from './views/admin-views/admin-list/CarRentalList.jsx';
import AdminEventsList from './views/admin-views/admin-list/AdminEventsList.jsx';
import AdminExcursionList from './views/admin-views/admin-list/AdminExcursionList.jsx';
import AdminTicketsList from './views/admin-views/admin-list/AdminTicketsList.jsx';
import AdminHotelList from './views/admin-views/admin-list/AdminHotelList.jsx';

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
  },
  {
    path: "/admin/car-rental/list",
    element: <CarRentalList />
  },
  {
    path: "/admin/hotel",
    element: <AdminHotel />,
  },
  {
    path: "/admin/hotel/list",
    element: <AdminHotelList />,
  },
  {
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
    path: "/admin/events/list",
    element: <AdminEventsList />,
  },
  {
    path: "/admin/excursion",
    element: <AdminExcursion />,
  },
  {
    path: "/admin/excursion/list",
    element: <AdminExcursionList />,
  },
  {
    path: "/admin/tickets",
    element: <AdminTickets />
  },
  {
    path: "/admin/tickets/list",
    element: <AdminTicketsList />
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
