import { NavLink } from "react-router-dom"

const Navbar = ({ admin }) => {
  return (
    <div>
      <NavLink to="/" className="navbar__link--home">
        shameless
      </NavLink>

      {
        admin ? (
          <nav className="navbar">
            <NavLink className="navbar__link" to="/admin">Admin Dashboard</NavLink>
            <NavLink className="navbar__link" to="/admin/car-rental">Car Rental</NavLink>
            <NavLink className="navbar__link" to="/admin/hotel">Hotel</NavLink>
          </nav>
        ) : (
          <nav className="navbar">
            <NavLink className="navbar__link" to="/hotels">Hoteles</NavLink>
            <NavLink className="navbar__link" to="/cars">Autos</NavLink>
            <NavLink className="navbar__link" to="/tickets">Pasajes</NavLink>
            <NavLink className="navbar__link" to="/tours">Excursiones</NavLink>
            <NavLink className="navbar__link" to="/events">Eventos</NavLink>       
          </nav>
        )
      }
    </div>
  )
}

export default Navbar