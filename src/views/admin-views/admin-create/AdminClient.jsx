import Form from "../../../components/Form";
import AdminNavbar from "../../../components/AdminNavbar";

const AdminClient = () => {

  const fields = [
    {
      id: "name",
      label: "Nombre",
      inputType: "text",
    },
    {
      id: "surname",
      label: "Apellido",
      inputType: "text",
    },
    // @fix: label address
    {
      id: "adress",
      label: "Dirección",
      inputType: "text",
    },
    {
      id: "dni",
      label: "DNI",
      inputType: "number",
    },
    {
      id: "birthDate",
      label: "Fecha de Nacimiento",
      inputType: "date",
    },
    // @fix: select...
    {
      id: "nationality",
      label: "Nacionalidad",
      inputType: "text",
    },
    {
      id: "phoneNumber",
      label: "Número de Teléfono",
      inputType: "tel",
    },
    {
      id: "email",
      label: "Email",
      inputType: "email",
    }
  ]

  return (
    <>
      <AdminNavbar />

      <h1 className="form__title">Cliente</h1>

      <Form
        fetchUrl={"client/registry"}
        fields={fields}
      />
    </>
  )
}

export default AdminClient