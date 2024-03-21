import { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import { getProducts } from "../../../service/getProducts";

const CarRentalList = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cars = await getProducts("carrental/get-cars");
      setCars(cars);
    };

    fetchData();
  }, []);

  return (
    <main>
      <Navbar admin={true} />
      <h1>Lista de Autos</h1>

      <table className="table">
        <tr className="table__header">
          <th>Nombre</th>
          <th>Tipo de Auto</th>
          <th>Precio</th>
          <th>Descripción</th>
          <th>Fecha de Inicio</th>
          <th>Fecha Limite</th>
        </tr>

        {
          cars.map(car => (
            <tr key={car.productCode}>
              <td>{car.name}</td>
              <td>{car.carType}</td>
              <td>${car.price}</td>
              <td>{car.descript}</td>
              <td>{car.startDate}</td>
              <td>{car.deadlineDate}</td>
            </tr>
          ))
        }
      </table>
    </main>
  )
}

export default CarRentalList