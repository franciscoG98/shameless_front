import { useState, useEffect } from "react";
import { getProducts } from "../service/getProducts";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Hotels = () => {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const hotels = await getProducts("hotelpernight/get-hotels");
      setHotels(hotels);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Hoteles</h1>
      <main className="hoteles__container">
        {
          hotels.map(hotel => (
            <Card key={hotel.productCode} type={'hotel'} data={hotel} />
          ))
        }
      </main>
    </>
  )
}

export default Hotels