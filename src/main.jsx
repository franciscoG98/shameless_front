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
import Cars from './views/Cars.jsx';
import Events from './views/Events.jsx';
import Excursions from './views/Excursions.jsx';
import Tickets from './views/Tickets.jsx';

// admin
import Admin from './views/Admin.jsx';

// create
import { 
  AdminCarRental,
  AdminClient,
  AdminEmployee,
  AdminHotel,
  AdminEvent,
  AdminExcursion,
  AdminPackage,
  AdminTickets
} from './views/admin-views/admin-create/'

// list
import CarRentalList from './views/admin-views/admin-list/CarRentalList.jsx';
import AdminEventsList from './views/admin-views/admin-list/AdminEventsList.jsx';
import AdminExcursionList from './views/admin-views/admin-list/AdminExcursionList.jsx';
import AdminTicketsList from './views/admin-views/admin-list/AdminTicketsList.jsx';
import AdminHotelList from './views/admin-views/admin-list/AdminHotelList.jsx';

// edit
import {
  AdminCarRentalEdit
} from './views/admin-views/admin-edit/'

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
    path: "/cars",
    element: <Cars />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/tours",
    element: <Excursions />,
  },
  {
    path: "/tickets",
    element: <Tickets />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/car-rental/create",
    element: <AdminCarRental />,
  },
  {
    path: "/admin/car-rental/list",
    element: <CarRentalList />
  },
  // delete / from admin path
  {
    path: "admin/car-rental/edit/:id",
    element: <AdminCarRentalEdit />
  },
  {
    path: "/admin/hotel/create",
    element: <AdminHotel />,
  },
  {
    path: "/admin/hotel/list",
    element: <AdminHotelList />,
  },
  {
    path: "/admin/client/create",
    element: <AdminClient />,
  },
  {
    path: "/admin/employee/create",
    element: <AdminEmployee />,
  },
  {
    path: "/admin/events/create",
    element: <AdminEvent />,
  },
  {
    path: "/admin/events/list",
    element: <AdminEventsList />,
  },
  {
    path: "/admin/excursion/create",
    element: <AdminExcursion />,
  },
  {
    path: "/admin/excursion/list",
    element: <AdminExcursionList />,
  },
  {
    path: "/admin/tickets/create",
    element: <AdminTickets />
  },
  {
    path: "/admin/tickets/list",
    element: <AdminTicketsList />
  },
  {
    path: "/admin/packages/create",
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
