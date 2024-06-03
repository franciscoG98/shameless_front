import { useState, useEffect } from "react";
import { getProducts } from "../service/getProducts";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Events = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const events = await getProducts("eventtickets/get-event-tickets");
      setEvents(events);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Events</h1>

      <main className="hoteles__container">
        {
          events.map(event => (
            <Card key={event.productCode} type={'event'} data={event} />
          ))
        }
      </main>
    </>
  )
}

export default Events