import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to={"/"} exact className="nav-link" href="#">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/users"} className="nav-link" href="#">
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/roles"} className="nav-link" href="#">
                  Roles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/products"} className="nav-link" href="#">
                  Products
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
    );
}

export default Menu;