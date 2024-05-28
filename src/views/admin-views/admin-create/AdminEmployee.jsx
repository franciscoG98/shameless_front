import Form from "../../../components/Form"
import Navbar from "../../../components/Navbar"

const AdminEmployee = () => {

  // position(este es el select, las opciones son EMPLOYEE,MANAGER), salary

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
    },
    {
      id: "position",
      label: "Posición",
      inputType: "select",
      options: [
        {
          label: "Gerente",
          value: "MANAGER",
        },
        {
          label: "Empleado",
          value: "EMPLOYEE",
        }
      ]
    }

  ]

  return (
    <>
      <Navbar admin={true} />

      <h1 className="form__title">Empleado</h1>

      <Form
        fetchUrl={"http://localhost:8080/employee/registry"}
        fields={fields}
      />
    </>
  )
}

export default AdminEmployee