import Form from "../../../components/Form";
import AdminNavbar from "../../../components/AdminNavbar";

const AdminCarRental = () => {

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

  return (
    <main>
      <AdminNavbar />

      <h1 className="form__title">Renta de Autos</h1>

      <Form
        fields={fields}
        fetchUrl={"carrental/registry"}
      />
    </main>
  )
}

export default AdminCarRental