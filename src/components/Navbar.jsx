import { NavLink } from "react-router-dom";

const Navbar = ({ admin }) => {
  return (
    <div className="navbar__container">
      {admin ? (
        <NavLink to="/admin" className="navbar__link--admin">
          shameless
        </NavLink>
      ) : (
        <NavLink to="/" className="navbar__link--home">
          shameless
        </NavLink>
      )}

      {admin ? (
        <nav className="navbar--admin">
          {/* just for debbuging */}
          <NavLink className="navbar__link" to="/">
            Client view
          </NavLink>
          {/* just for debbuging */}
          <NavLink className="navbar__link" to="/admin/car-rental">
            Car Rental
          </NavLink>
          <NavLink className="navbar__link" to="/admin/client">
            Cliente
          </NavLink>
          <NavLink className="navbar__link" to="/admin/employee">
            Empleado
          </NavLink>
          <NavLink className="navbar__link" to="/admin/events">
            Eventos
          </NavLink>
          <NavLink className="navbar__link" to="/admin/excusion">
            Excursiones
          </NavLink>
          <NavLink className="navbar__link" to="/admin/hotel">
            Hotel
          </NavLink>
        </nav>
      ) : (
        <nav className="navbar">
          <NavLink className="navbar__link" to="/cars">
            Autos
          </NavLink>
          <NavLink className="navbar__link" to="/events">
            Eventos
          </NavLink>
          <NavLink className="navbar__link" to="/tours">
            Excursiones
          </NavLink>
          <NavLink className="navbar__link" to="/hotels">
            Hoteles
          </NavLink>
          <NavLink className="navbar__link" to="/tickets">
            Pasajes
          </NavLink>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
