import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { User } from "../models/user";

const Nav = () => {
    const [user, setUser] = useState(new User());

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('user');
                setUser(new User(
                    data.id,
                    data.first_name,
                    data.last_name,
                    data.email,
                    data.role
                ))
            }
        )();
    }, []);

    const logout = async () => {
        await axios.post('logout', {})
    }

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>

            <ul className="navbar-nav px-3">
                <Link to="/profile" className="nav-link text-decoration-none" href="#">{user.name}</Link>
                <Link to="/login" className="nav-link text-decoration-none"
                   onClick={logout}
                >Log out</Link>
            </ul>
        </nav>
    );
}

export default Nav;
