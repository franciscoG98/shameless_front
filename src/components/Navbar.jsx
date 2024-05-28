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
      {admin ? (
        <NavLink to="/admin" className="navbar__link--admin">
          shameless
        </NavLink>
      ) : (
        <NavLink to="/" className="navbar__link--home">
          shameless
        </NavLink>
      )}

      {/* @fix: a11y buttons */}
      {admin ? (
        <nav className="navbar--admin">
          {/* just for debbuging */}
          <NavLink className="navbar__item--admin navbar__link" to="/">
            Client view
          </NavLink>

          <ul className="navbar__list--admin">
            {/* fix repetition breaks navigations (useEfect maybe) */}
            <li className="navbar__item--admin">
              <select className="navbar__select" onChange={handleNavigate} defaultValue="">
                <option className="navbar__option" defaultValue="" disabled>Empleados</option>
                <option className="navbar__option" value="/admin/employee/create">Crear Empleado</option>
                <option className="navbar__option" value="/admin/employee/list">Listar Empleados</option>
                <option className="navbar__option" value="/admin/employee/edit">Editar Empleados (no)</option>
              </select>
            </li>

            <li className="navbar__item--admin">
              <select className="navbar__select" onChange={handleNavigate} defaultValue="">
                <option className="navbar__option" defaultValue="" disabled>Clientes</option>
                <option className="navbar__option" value="/admin/client/create">Crear un Cliente</option>
                <option className="navbar__option" value="/admin/client/list">Listar Clientes</option>
                <option className="navbar__option" value="/admin/client/edit">Editar Clientes (no)</option>
              </select>
            </li>

            <li className="navbar__item--admin">
              <select className="navbar__select" onChange={handleNavigate} defaultValue="">
                <option className="navbar__option" defaultValue="" disabled>Car Rental</option>
                <option className="navbar__option" value="/admin/car-rental/create">Crear un Auto</option>
                <option className="navbar__option" value="/admin/car-rental/list">Listar Autos</option>
                <option className="navbar__option" value="/admin/car-rental/edit">Editar Autos (no)</option>
              </select>
            </li>

            <li className="navbar__item--admin">
              <select className="navbar__select" onChange={handleNavigate} defaultValue="">
                <option className="navbar__option" defaultValue="" disabled>Eventos</option>
                <option className="navbar__option" value="/admin/events/create">Crear un Evento</option>
                <option className="navbar__option" value="/admin/events/list">Listar Eventos</option>
                <option className="navbar__option" value="/admin/events/edit">Editar Eventos (no)</option>
              </select>
            </li>

            <li className="navbar__item--admin">
              <select className="navbar__select" onChange={handleNavigate} defaultValue="">
                <option className="navbar__option" defaultValue="" disabled>Excursiones</option>
                <option className="navbar__option" value="/admin/excursion/create">Crear una Excursión</option>
                <option className="navbar__option" value="/admin/excursion/list">Listar Excursiones</option>
                <option className="navbar__option" value="/admin/excursion/edit">Editar Excursiones (no)</option>
              </select>
            </li>

            <li className="navbar__item--admin">
              <select className="navbar__select" onChange={handleNavigate} defaultValue="">
                <option className="navbar__option" defaultValue="" disabled>Hotel</option>
                <option className="navbar__option" value="/admin/hotel/create">Crear un Hotel</option>
                <option className="navbar__option" value="/admin/hotel/list">Listar Hoteles</option>
                <option className="navbar__option" value="/admin/hotel/edit">Editar Hoteles (no)</option>
              </select>
            </li>

            <li className="navbar__item--admin">
              <select className="navbar__select" onChange={handleNavigate} defaultValue="">
                <option className="navbar__option" defaultValue="" disabled>Pasajes</option>
                <option className="navbar__option" value="/admin/tickets/create">Crear un Pasaje</option>
                <option className="navbar__option" value="/admin/tickets/list">Listar Pasajes</option>
                <option className="navbar__option" value="/admin/tickets/edit">Editar Pasajes (no)</option>
              </select>
            </li>

            <li className="navbar__item--admin">
              <select className="navbar__select" onChange={handleNavigate} defaultValue="">
                <option className="navbar__option" defaultValue="" disabled>Paquetes</option>
                <option className="navbar__option" value="/admin/packages/create">Crear un Paquete</option>
                <option className="navbar__option" value="/admin/packages/list">Listar Paquetes</option>
                <option className="navbar__option" value="/admin/packages/edit">Editar Paquetes (no)</option>
              </select>
            </li>
          </ul>
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
