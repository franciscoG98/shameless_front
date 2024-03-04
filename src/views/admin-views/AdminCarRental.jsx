import { useState, useEffect } from "react";
import Form from "../../components/Form";

const CarRental = () => {

  let minDate = new Date().toISOString().split("T")[0];


  const [carRentalData, setCarRentalData] = useState({
    name: '',
    descript: '',
    startDate: minDate,
    deadlineDate: '',
    price: '',
    carType: '',
  });

  const fields = [
    {
      id: "name",
      label: "Nombre",
      inputType: "text",
    },
    {
      id: "descript",
      label: "Descripción",
      inputType: "textarea",
      rows: "4"
    },
    {
      id: "startDate",
      label: "Fecha de Inicio",
      inputType: "date",
    },
    {
      id: "deadlineDate",
      label: "Fecha de Entrega",
      inputType: "date",
    },
    {
      id: "price",
      label: "Precio",
      inputType: "number",
      numbMin: 0
    },
    {
      id: "carType",
      label: "Tipo de Auto",
      inputType: "text",
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarRentalData({ ...carRentalData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form data: ' + JSON.stringify(carRentalData));

    // make a post to backend here
  }

  useEffect(() => {}, [carRentalData])

  return (
    <>
      <h1 className="form__title">Renta de Autos</h1>

      <Form
        initialState={carRentalData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fields={fields}
        action="/car-rental?"
      />
    </>
  )
}

export default CarRental