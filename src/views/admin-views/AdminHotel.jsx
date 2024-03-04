import { useState } from "react";
import Form from "../../components/Form";

const AdminHotel = () => {

  const [hotelData, SetHotelData] = useState({
    name: '',
    ubication: '',
    numbOfRooms: '',
    descript: '',
    startDate: '',
    price: '',
  });

  const fields = [
    {
      id: "name",
      label: "Nombre",
      inputType: "text",
    },
    {
      id: "ubication",
      label: "Ubicación",
      inputType: "text",
    },
    {
      id: "numbOfRooms",
      label: "Número de Habitaciones",
      inputType: "number",
    },
    {
      id: "descript",
      label: "Descripción",
      inputType: "textarea",
      rows: "3"
    },
    {
      id: "startDate",
      label: "Fecha de Inicio",
      inputType: "date",
    },
    {
      id: "price",
      label: "Precio",
      inputType: "number",
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarRentalData({ ...carRentalData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form data: ' + JSON.stringify(hotelData));

    // make a post to backend here
  }

  return (
    <>
      <h1 className="form__title">Hotel</h1>

      <Form
        initialState={hotelData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fields={fields}
        action="/hotel?"
      />
    </>
  )
}

export default AdminHotel