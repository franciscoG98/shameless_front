import { useEffect, useState } from "react"
import Navbar from "../../../components/Navbar"
import FormEdit from "../../../components/FormEdit"
import { getOneProduct } from "../../../service/getOneProduct"
import { useParams } from "react-router-dom";

const AdminCarRentalEdit = () => {

  const [car, setCar] = useState({})
  const { id } = useParams()

  useEffect(() => {

    // si hay id le paso la ruta y el id como paramethos a la funcion hace el get
    id && getOneProduct('carrental/get-car', id)
      .then(res => setCar(res))
      .catch(error => console.log(error))
  }, []);

  console.log('car', car);

  return (
    <main>
      <Navbar admin={true} />
      <h1>Edita el Producto</h1>

      <FormEdit product={car} fetchUrl={'#'} id={id} />

    </main>
  )
}

export default AdminCarRentalEdit