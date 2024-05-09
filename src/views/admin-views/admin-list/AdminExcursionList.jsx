import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import { getProducts } from "../../../service/getProducts";

const AdminExcursionList = () => {

  const [excursions, setExcursions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const excursions = await getProducts("excursion/get-excursions");
      setExcursions(excursions);
    };

    fetchData();
  }, []);

  return (
    <main>
    <Navbar admin={true} />
    <h1>Lista de Excursiones</h1>

    <table className="table">
      <tr className="table__header">
        <th>Nombre</th>
        <th>Origen</th>
        <th>Destino</th>
        <th>Duración</th>
        <th>Fecha de Inicio</th>
        <th>Descripción</th>
        <th>Precio</th>
      </tr>

      {
        excursions.map(excursion => (
          <tr key={excursion.productCode}>
            <td>{excursion.name}</td>
            <td>{excursion.origin}</td>
            <td>{excursion.destination}</td>
            <td>{excursion.duration}</td>
            <td>{excursion.startDate}</td>
            <td>{excursion.descript}</td>
            <td>${excursion.price}</td>
          </tr>
        ))
      }
    </table>
  </main>
  )
}

export default AdminExcursionList