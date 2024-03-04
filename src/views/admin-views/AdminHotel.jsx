import { useState } from "react";
import Form from "../../components/Form";

const AdminHotel = () => {

  // @fix min date today
  let minDate = new Date().toISOString().split("T")[0];

  const initialState = {
    name: '',
    ubication: '',
    numbOfRooms: '',
    descript: '',
    startDate: minDate,
    price: '',
  }

  const [hotelData, SetHotelData] = useState(initialState);

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

    // change this route
    const hotelUrl = 'localhost:8080/';

    fetch(hotelUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: hotelData
    })
    .then( async (response) => {
      if(response.ok) {
        SetHotelData(initialState)
        alert('ok')
      } else {
        console.log('Hay un error')
      }
    })
    .catch((err) => {
      console.log('Error: ', err)
    })

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