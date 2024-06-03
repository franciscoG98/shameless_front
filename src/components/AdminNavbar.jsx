import { NavLink } from "react-router-dom";

const AdminNavbar = () => {

  const nav_items = [
    {
      label: 'Car Rental',
      path: 'car-rental'
    },
    {
      label: 'Cliente',
      path: 'client'
    },
    {
      label: 'Hotel',
      path: 'hotel'
    },
    {
      label: 'Empleado',
      path: 'employee'
    },
    {
      label: 'Eventos',
      path: 'events'
    },
    {
      label: 'Excursion',
      path: 'excursion'
    },
    {
      label: 'Pasajes',
      path: 'tickets'
    },
    {
      label: 'Paquetes',
      path: 'packages'
    },
  ]

  return (
    <div className="navbar__container admin__navbar">
      <NavLink to="/admin" className="navbar__link--admin">
        shameless
      </NavLink>

      <nav className="navbar--admin">
        <ul className="navbar__list--admin">
          {
            nav_items.map((i,idx) => (

              <li key={idx} className="navbar__item--collapsible">
                <input type="checkbox" id={`collapsible-toggle-${idx}`} className="collapsible-input" />
                <label htmlFor={`collapsible-toggle-${idx}`} className="collapsible-label">{i.label}</label>
                <div className="collapsible-content navbar__list--admin">
                  <NavLink className="navbar__link" to={`/admin/${i.path}/create`}>Crear {i.label}</NavLink>
                  <NavLink className="navbar__link" to={`/admin/${i.path}/list`}>Listar {i.label}</NavLink>
                  {/* <NavLink className="navbar__link" to={`/admin/${i.path}/edit`}>Editar {i.label} (no)</NavLink> */}
                </div>
              </li>

            ))
          }
        </ul>
      </nav>
    </div>
  );
};

export default AdminNavbar;
