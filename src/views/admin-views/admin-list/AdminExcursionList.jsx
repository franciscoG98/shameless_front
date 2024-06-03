import { useState, useEffect } from "react";
import AdminNavbar from "../../../components/AdminNavbar";
import { getProducts } from "../../../service/getProducts";
import Table from "../../../components/Table";

const AdminExcursionList = () => {

  const [excursions, setExcursions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const excursions = await getProducts("excursion/get-excursions");
      setExcursions(excursions);
    };

    fetchData();
  }, []);

  const table_headers = [
    'Nombre',
    'Descripción',
    'Fecha de Inicio',
    'Precio',
    'Destino',
    'Duración',
    'Origen',
  ]

  return (
    <main>
      <AdminNavbar />
      <h1>Lista de Excursiones</h1>
      <Table table_headers={table_headers} data={excursions} />
    </main>
  )
}

export default AdminExcursionList