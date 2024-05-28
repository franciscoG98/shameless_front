import { useState, useEffect } from "react";
import Form from "../../../components/Form";
import Navbar from "../../../components/Navbar";
import { getProducts } from "../../../service/getProducts";

const AdminPackage = () => {
  const [cars, setCars] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [events, setEvents] = useState([]);
  const [excursions, setExcursions] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cars = await getProducts("carrental/get-cars");
      setCars(cars);

      const hotels = await getProducts("hotelpernight/get-hotels");
      setHotels(hotels);

      const events = await getProducts("eventtickets/get-event-tickets");
      setEvents(events);

      const excursions = await getProducts("excursion/get-excursions");
      setExcursions(excursions);

      const tickets = await getProducts("tickets/get-tickets");
      setTickets(tickets);
    };

    fetchData();
  }, []);

  const fields = [
    {
      id: "name",
      label: "Nombre del Paquete",
      inputType: "text",
    },
    {
      id: "descript",
      label: "Descripción",
      inputType: "textarea",
    },


    {
      id: "startDate",
      label: "Fecha de Inicio",
      inputType: "date",
    },
    {
      id: "car",
      label: "Tipo de Auto",
      inputType: "select",
      options: cars.map((car) => ({
        label: car.name,
        value: car.productCode,
      })),
    },
    {
      id: "hotel",
      label: "Hotel por noche",
      inputType: "select",
      options: hotels?.map((hotel) => ({
        label: hotel.name,
        value: hotel.productCode,
      })),
    },
    {
      id: "event",
      label: "Evento",
      inputType: "select",
      options: events.map((event) => ({
        label: event.name,
        value: event.productCode,
      })),
    },
    {
      id: "excursion",
      label: "Excursiones",
      inputType: "select",
      options: excursions?.map((excursion) => ({
        label: excursion.name,
        value: excursion.productCode,
      })),
    },
    {
      id: "ticket",
      label: "Pasajes",
      inputType: "select",
      options: tickets.map((ticket) => ({
        label: `${ticket.name} | ${ticket.ticketType}`,
        value: ticket.productCode,
      })),
    },
    {
      id: "price",
      label: "Precio",
      inputType: "number",
    }
  ];

  return (
    <main>
      <Navbar admin={true} />

      <h1 className="form__title">Paquetes Turísticos</h1>

      <Form
        fields={fields}
        fetchUrl={"http://localhost:8080/touristpackage/registry"}
      />
    </main>
  );
};

export default AdminPackage;
