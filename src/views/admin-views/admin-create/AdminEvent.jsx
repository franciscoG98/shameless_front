import Form from "../../../components/Form";
import Navbar from "../../../components/Navbar";

const AdminEvents = () => {

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
      id: "ubication",
      label: "Ubicación",
      inputType: "text",
    },
    {
      id: "duration",
      label: "Duración",
      inputType: "number",
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
    }
  ]

  return (
    <>
      <Navbar admin={true} />

      <h1 className="form__title">Eventos</h1>

      <Form
        fetchUrl={"http://localhost:8080/eventtickets/registry"}
        fields={fields}
      />
    </>
  )
}

export default AdminEvents