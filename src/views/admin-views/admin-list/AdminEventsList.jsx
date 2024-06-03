import { useState, useEffect } from "react";
import AdminNavbar from "../../../components/AdminNavbar";
import { getProducts } from "../../../service/getProducts";
import Table from "../../../components/Table";

const AdminEventsList = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const events = await getProducts("eventtickets/get-event-tickets");
      setEvents(events);
    };

    fetchData();
  }, []);

  const table_headers = [
    'Nombre',
    'Descripción',
    'Fecha de Inicio',
    'Precio',
    'Ubicación',
    'Duración',
  ]

  return (
    <main>
      <AdminNavbar />
      <h1>Lista de Eventos</h1>
      <Table table_headers={table_headers} data={events} />
    </main>
  )
}

export default AdminEventsList