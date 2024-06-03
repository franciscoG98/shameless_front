import Form from "../../../components/Form";
import AdminNavbar from "../../../components/AdminNavbar";

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
      <AdminNavbar />

      <h1 className="form__title">Eventos</h1>

      <Form
        fetchUrl={"eventtickets/registry"}
        fields={fields}
      />
    </>
  )
}

export default AdminEvents