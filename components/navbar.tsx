import { NextComponentType } from "next";
import * as React from 'react';

const Navbars : NextComponentType = () => {
    
    return (
        <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Fuel</a>
            <link rel="svg" href="/favicon.ico" />
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav m-auto">
                <li className="nav-item">
                <a className="nav-link active" href="#:;">New Questionnare</a>
                </li>
            </ul>
            <a className="nav-link" href="/api/user/login">LogIn</a>
            {/* <a className="nav-link" href="/api/user/logout">LogOut</a> */}
            </div>
        </div>
        </nav>
    );
}

export default Navbars;