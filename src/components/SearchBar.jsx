import { useState } from "react"

const SeachBar = () => {

  const [hotel, setHotel] = useState('')
  const [rooms, setRooms] = useState('')

  const onChange = () => {}

  return (
    <form action="" className="searchbar__form">
      {/* esto va a ser un select con un map (datos desde el back) */}
      <input placeholder="Destino" className="searchbar__input" type="text" name="destination" id="destination" />
      {/* esto va a cambiar segun la vista, por ej select de hoteles, select de autos... */}
      <select name="service" id="service" className="searchbar__input">
        <option value="hotel">Hoteles</option>
        <option value="cars">Autos</option>
        <option value="tickets">Pasajes</option>
        <option value="tours">Excursiones</option>
        <option value="events">Eventos</option>
      </select>
      <input placeholder="Personas - Habitaciones" className="searchbar__input" type="text" name="rooms" id="rooms" />
      <button className="searchbar__button">Buscar</button>
    </form>
  )
}

export default SeachBar