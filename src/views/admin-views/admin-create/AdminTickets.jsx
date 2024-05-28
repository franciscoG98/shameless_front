import Form from "../../../components/Form"
import Navbar from "../../../components/Navbar"

const AdminTickets = () => {

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
    },
    {
      id: "startDate",
      label: "Fecha de Inicio",
      inputType: "date",
    },
    {
      id: "origin",
      label: "Origen",
      inputType: "text",
    },
    {
      id: "destination",
      label: "Destino",
      inputType: "text",
    },
    {
      id: "ticketType",
      label: "Tipo de Pasaje",
      inputType: "select",
      options: [
        {
          label: "Avión",
          value: "AVION",
        },
        {
          label: "Tren",
          value: "TREN",
        },
        {
          label: "Colectivo",
          value: "COLECTIVO",
        }
      ]
    },
    {
      id: "price",
      label: "Precio",
      inputType: "number",
    }
  ]

  return (
    <>
      <Navbar admin={true} />

      <h1 className="form__title">Pasajes</h1>

      <Form
        fetchUrl={"http://localhost:8080/tickets/registry"}
        fields={fields}
      />
    </>
  )
}

export default AdminTickets