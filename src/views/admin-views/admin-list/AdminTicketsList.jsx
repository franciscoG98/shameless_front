import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import { getProducts } from "../../../service/getProducts";

const AdminTicketsList = () => {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tickets = await getProducts("tickets/get-tickets");
      setTickets(tickets);
    };

    fetchData();
  }, []);

  return (
    <main>
    <Navbar admin={true} />
    <h1>Lista de Pasajes</h1>

    <table className="table">
      <tr className="table__header">
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Tipo de pasaje</th>
        <th>Fecha de Inicio</th>
        <th>Origen</th>
        <th>Destino</th>
        <th>Precio</th>
      </tr>

      {
        tickets.map(ticket => (
          <tr key={ticket.productCode}>
            <td>{ticket.name}</td>
            <td>{ticket.descript}</td>
            <td>{ticket.ticketType}</td>
            <td>{ticket.startDate}</td>
            <td>{ticket.origin}</td>
            <td>{ticket.destination}</td>
            <td>${ticket.price}</td>
          </tr>
        ))
      }
    </table>
  </main>

  )
}

export default AdminTicketsList