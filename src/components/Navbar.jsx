import { NavLink } from "react-router-dom";
import { CiViewList, CiEdit } from "react-icons/ci";

const Navbar = ({ admin }) => {
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
          <NavLink className="navbar__link" to="/">
            Client view
          </NavLink>
          {/* just for debbuging */}


          <NavLink className="navbar__link" to="/admin/packages">
            Paquetes
          </NavLink>

          <li className="navbar__item--admin">
            <span className="item__text">Cliente</span>
            <NavLink to="/admin/client">
              <button className="nav__btn">
                <CiEdit size={24} />
              </button>
            </NavLink>
            {/* <NavLink  to="/admin/client/list">
              <button className="nav__btn">
                <CiViewList size={24} />
              </button>
            </NavLink> */}
          </li>

          <li className="navbar__item--admin">
            Empleado
            <NavLink to="/admin/employee">
              <button className="nav__btn">
                <CiEdit size={24} />
              </button>
            </NavLink>
            {/* <NavLink  to="/admin/employee/list">
              <button className="nav__btn">
                <CiViewList size={24} />
              </button>
            </NavLink> */}
          </li>

          <li className="navbar__item--admin">
            <span className="item__text">Car Rental</span>
            <NavLink to="/admin/car-rental/list">
              <button className="nav__btn">
                <CiViewList size={24} />
              </button>
            </NavLink>
            <NavLink to="/admin/car-rental">
              <button className="nav__btn">
                <CiEdit size={24} />
              </button>
            </NavLink>
          </li>

          <li className="navbar__item--admin">
            <span className="item__text">Eventos</span>
            <NavLink to="/admin/events/list">
              <button className="nav__btn">
                <CiViewList size={24} />
              </button>
            </NavLink>
            <NavLink to="/admin/events">
              <button className="nav__btn">
                <CiEdit size={24} />
              </button>
            </NavLink>
          </li>

          <li className="navbar__item--admin">
            <span className="item__text">Excursiones</span>
            <NavLink to="/admin/excursion/list">
              <button className="nav__btn">
                <CiViewList size={24} />
              </button>
            </NavLink>
            <NavLink to="/admin/excursion">
              <button className="nav__btn">
                <CiEdit size={24} />
              </button>
            </NavLink>
          </li>

          <li className="navbar__item--admin">
            <span className="item__text">Pasajes</span>
            <NavLink to="/admin/tickets/list">
              <button className="nav__btn">
                <CiViewList size={24} />
              </button>
            </NavLink>
            <NavLink to="/admin/tickets">
              <button className="nav__btn">
                <CiEdit size={24} />
              </button>
            </NavLink>
          </li>

          <li className="navbar__item--admin">
            <span className="item__text">Hotel</span>
            <NavLink to="/admin/hotel/list">
              <button className="nav__btn">
                <CiViewList size={24} />
              </button>
            </NavLink>
            <NavLink to="/admin/hotel">
              <button className="nav__btn">
                <CiEdit size={24} />
              </button>
            </NavLink>
          </li>

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
