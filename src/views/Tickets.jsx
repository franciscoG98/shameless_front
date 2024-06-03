import { useState, useEffect } from "react";
import { getProducts } from "../service/getProducts";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Tickets = () => {

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tickets = await getProducts("tickets/get-tickets");
      setTickets(tickets);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Tickets</h1>

      <main className="hoteles__container">
        {
          tickets.map(ticket => (
            <Card key={ticket.productCode} type={'ticket'} data={ticket} />
          ))
        }
      </main>
    </>
  )
}

export default Tickets