import { useState } from "react";
import Form from "../../components/Form";
import Navbar from "../../components/Navbar";
import { getProducts } from "../../service/getProducts";

const AdminPackage = () => {

  const [cars, setCars] = useState([]);

  console.log("cars");
  getProducts("carrental/get-cars");

  // setCars(...cars, getProducts("carrental/get-cars"))

  const fields = [
    {
      id: "ticketType",
      label: "Tipo de Auto",
      inputType: "select",
      options: [
        // cars?.map(car => (
        //   {
        //     label: car.name,
        //     value: car.productCode,
        //   }
        // ))
      ]
    },
  ]

  return (
    <main>
      <Navbar admin={true} />

      <h1 className="form__title">Paquetes Turísticos</h1>

      <Form
        fields={fields}
        fetchUrl={"http://localhost:8080/carrental/registry"}
      />
    </main>
  )
}

export default AdminPackage