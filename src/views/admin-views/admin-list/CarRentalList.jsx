import { useState, useEffect } from "react";
import AdminNavbar from "../../../components/AdminNavbar";
import { getProducts } from "../../../service/getProducts";
import Table from "../../../components/Table";

const CarRentalList = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cars = await getProducts("carrental/get-cars");
      setCars(cars);
    };

    fetchData();
  }, []);

  const table_headers = [
    'Nombre',
    'Tipo de Auto',
    'Precio',
    'Descripción',
    'Fecha de Inicio',
    'Fecha Limite',
  ]

  return (
    <main>
      <AdminNavbar />
      <h1>Lista de Autos</h1>
      <Table table_headers={table_headers} data={cars} />
    </main>
  )
}

export default CarRentalList