import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import { getProducts } from "../../../service/getProducts";

const AdminHotelList = () => {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const hotels = await getProducts("hotelpernight/get-hotels");
      setHotels(hotels);
    };

    fetchData();
  }, []);

  return (
    <main>
    <Navbar admin={true} />
    <h1>Lista de Hoteles</h1>

    <table className="table">
      <tr className="table__header">
        <th>Nombre</th>
        <th>Ubicación</th>
        <th>Número de Huespedes</th>
        <th>Fecha de Inicio</th>
        <th>Descripción</th>
        <th>Precio</th>
      </tr>

      {
        hotels.map(hotel => (
          <tr key={hotel.productCode}>
            <td>{hotel.name}</td>
            <td>{hotel.ubication}</td>
            <td>{hotel.numbOfRooms}</td>
            <td>{hotel.startDate}</td>
            <td>{hotel.descript}</td>
            <td>${hotel.price}</td>
          </tr>
        ))
      }
    </table>
  </main>
  )
}

export default AdminHotelList