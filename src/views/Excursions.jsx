import { useState, useEffect } from "react";
import { getProducts } from "../service/getProducts";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Excursions = () => {

  const [excursions, setExcursions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const excursions = await getProducts("excursion/get-excursions");
      setExcursions(excursions);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <h1>Excursions</h1>

      <main className="hoteles__container">
        {
          excursions.map(excursion => (
            <Card key={excursion.productCode} type={'excursion'} data={excursion} />
          ))
        }
      </main>
    </>
  )
}

export default Excursions