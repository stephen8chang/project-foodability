import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to={"/"} className="nav-link" href="#">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/users"} className="nav-link" href="#">
                  Users
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    );
}

export default Menu;