import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar__container">
      <NavLink to="/" className="navbar__link--home">
        shameless
      </NavLink>

      <nav className="navbar">
        <NavLink className="navbar__link" to="/hotels">Hoteles</NavLink>
        <NavLink className="navbar__link" to="/cars">Autos</NavLink>
        <NavLink className="navbar__link" to="/tickets">Pasajes</NavLink>
        <NavLink className="navbar__link" to="/tours">Excursiones</NavLink>
        <NavLink className="navbar__link" to="/events">Eventos</NavLink>       
      </nav>
    </div>
  )
}

export default Navbar