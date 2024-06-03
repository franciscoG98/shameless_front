import { useState, useEffect } from "react";
import AdminNavbar from "../../../components/AdminNavbar";
import { getProducts } from "../../../service/getProducts";
import Table from "../../../components/Table";

const AdminHotelList = () => {

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const hotels = await getProducts("hotelpernight/get-hotels");
      setHotels(hotels);
    };

    fetchData();
  }, []);

  const table_headers = [
    'Nombre',
    'Descripción',
    'Fecha de Inicio',
    'Precio',
    'Ubicación',
    'Número de Huespedes',
  ]

  return (
    <main>
      <AdminNavbar />
      <h1>Lista de Hoteles</h1>
      <Table table_headers={table_headers} data={hotels} />
    </main>
  )
}

export default AdminHotelList