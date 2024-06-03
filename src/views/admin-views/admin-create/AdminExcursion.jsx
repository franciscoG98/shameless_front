import Form from "../../../components/Form";
import AdminNavbar from "../../../components/AdminNavbar";

const AdminExcursion = () => {

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
      id: "destination",
      label: "Destino",
      inputType: "text",
    },
    {
      id: "origin",
      label: "Origen",
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

      <h1 className="form__title">Excursiones</h1>

      <Form
        fetchUrl={"excursion/registry"}
        fields={fields}
      />
    </>
  )
}

export default AdminExcursion