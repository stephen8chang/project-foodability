import axios from "axios";
import React, {Component, useEffect, useState} from "react";
import { Redirect } from "react-router-dom";
import Menu from "./Menu";
import Nav from "./Nav";

const Wrapper = (props: any) => {
    const [redirect, setRedirect] = useState(false)
    useEffect(() => {
        (
            async () => {
                try {
                    const {data} = await axios.get('user');
                }
                catch (e) {
                    setRedirect(true)
                }
            }
        )();
    }, []);

    if(redirect){
        return <Redirect to="/login"/>
    }

    return (
        <>
            <Nav/>
            <div className="container-fluid">
                <div className="row">
                    <Menu/>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </>
    );
}

export default Wrapper;