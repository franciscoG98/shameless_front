import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({ admin }) => {

  let navigate = useNavigate();

  const handleNavigate = (event) => {
    e.preventDefault()
    const path = event.target.value
    if (path) {
      navigate(path)
    }
  };

  return (
    <div className={`navbar__container ${admin && "admin__navbar"}`}>
      <NavLink to="/" className="navbar__link--home">
        shameless
      </NavLink>
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
    </div>
  );
};

export default Navbar;
