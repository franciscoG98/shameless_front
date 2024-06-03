import { useState, useEffect } from "react";
import { getProducts } from "../service/getProducts";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Cars = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cars = await getProducts("carrental/get-cars");
      setCars(cars);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Autos</h1>

      <main className="hoteles__container">
        {
          cars.map(car => (
            <Card key={car.productCode} type={'car'} data={car} />
          ))
        }
      </main>
    </>
  )
}

export default Cars