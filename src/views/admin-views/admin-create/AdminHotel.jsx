import Form from "../../../components/Form";
import AdminNavbar from "../../../components/AdminNavbar";

const AdminHotel = () => {

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

  return (
    <>
      <AdminNavbar />

      <h1 className="form__title">Hotel</h1>

      <Form
        fetchUrl={"hotelpernight/registry"}
        fields={fields}
      />
    </>
  )
}

export default AdminHotel