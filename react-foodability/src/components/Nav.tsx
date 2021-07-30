import axios from "axios";
import React, {useEffect, useState} from "react";

const Nav = () => {
    const [user, setUser] = useState({
        first_name: ''
    });

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('http://localhost:8000/api/user', {withCredentials: true});
                setUser(data)
            }
        )();
    }, []);
    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>

            <ul className="navbar-nav px-3">
                <a className="nav-link text-decoration-none" href="#">{user?.first_name}</a>
                <a className="nav-link text-decoration-none" href="#">Sign out</a>
            </ul>
        </nav>
    );
}

export default Nav;
