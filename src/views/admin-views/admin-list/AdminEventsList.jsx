import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import { getProducts } from "../../../service/getProducts";

const AdminEventsList = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const events = await getProducts("eventtickets/get-event-tickets");
      setEvents(events);
    };

    fetchData();
  }, []);

  return (
    <main>
      <Navbar admin={true} />
      <h1>Lista de Eventos</h1>

      <table className="table">
        <tr className="table__header">
          <th>Nombre</th>
          <th>Ubicación</th>
          <th>Descripción</th>
          <th>Fecha de Inicio</th>
          <th>Duración</th>
          <th>Precio</th>
        </tr>

        {
          events.map(event => (
            <tr key={event.productCode}>
              <td>{event.name}</td>
              <td>{event.ubication}</td>
              <td>{event.descript}</td>
              <td>{event.startDate}</td>
              <td>{event.duration}</td>
              <td>${event.price}</td>
            </tr>
          ))
        }
      </table>
    </main>
  )
}

export default AdminEventsList