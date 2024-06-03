import { useState, useEffect } from "react";
import AdminNavbar from "../../../components/AdminNavbar";
import { getProducts } from "../../../service/getProducts";
import Table from "../../../components/Table";

const AdminTicketsList = () => {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tickets = await getProducts("tickets/get-tickets");
      setTickets(tickets);
    };

    fetchData();
  }, []);

  const table_headers = [
    'Nombre',
    'Descripción',
    'Fecha de Inicio',
    'Precio',
    'Tipo de pasaje',
    'Origen',
    'Destino',
  ]

  return (
    <main>
    <AdminNavbar />
    <h1>Lista de Pasajes</h1>

    <Table table_headers={table_headers} data={tickets} />

    </main>
  )
}

export default AdminTicketsList