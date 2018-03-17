import React from "react";
import {Link, withRouter} from "react-router-dom";

import './Header.css'

export const NavLink = ({active, to, children}) => (
    <li className={active === to ? "active" : ""}><Link to={to}>{children}</Link></li>
);

export const Header = ({location}) => {

    return (
        <header className={"Header"}>
            <div className={"title"}>
                Sliding Puzzle (React)
            </div>
            <div className={"navigation"}>
                <ul>
                    <NavLink active={location.pathname} to={"/"}>Home</NavLink>
                    <NavLink active={location.pathname} to={"/about"}>About</NavLink>
                </ul>
            </div>
        </header>
    )
};

export default withRouter(Header);