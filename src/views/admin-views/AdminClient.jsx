import Form from "../../components/Form";

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
    // @fix: type tel
    {
      id: "phoneNumber",
      label: "Número de Teléfono",
      inputType: "number",
    },
    // @fix: type email
    {
      id: "email",
      label: "Email",
      inputType: "text",
    }
  ]

  return (
    <>
      <h1 className="form__title">Cliente</h1>

      <Form
        fetchUrl={"http://localhost:8080/client"}
        fields={fields}
      />
    </>
  )
}

export default AdminClient