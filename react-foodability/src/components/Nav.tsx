import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [user, setUser] = useState({
        first_name: ''
    });

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('user');
                setUser(data)
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
                <Link to="/profile" className="nav-link text-decoration-none" href="#">{user?.first_name}</Link>
                <Link to="/login" className="nav-link text-decoration-none"
                   onClick={logout}
                >Log out</Link>
            </ul>
        </nav>
    );
}

export default Nav;
