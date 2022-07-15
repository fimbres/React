import React from 'react';
import { NavLink } from "react-router-dom";

import Logo from "../media/logo.png";

const NavBar = ({ user }) => {
    const { pathname : path } = window.location;
    
    return (
        <nav className="absolute flex items-center justify-between inset-x-0 top-0 p-3 mb-5 backdrop-blur-xl z-10">
            <img src={Logo} className="h-12" alt="Logo" />
            <div>
                <NavLink to="/movies" className={`mx-2 text-lg hover:opacity-70 ${path === "/movies" ? "font-bold text-red-600" : "text-gray-500"}`}>Movies</NavLink>
                <NavLink to="/checkout" className={`mx-2 text-lg hover:opacity-70 ${path === "/checkout" ? "font-bold text-red-600" : "text-gray-500"}`}>Checkout</NavLink>
                <NavLink to="/profile" className={`mx-2 text-lg hover:opacity-70 ${path === "/profile" ? "font-bold text-red-600" : "text-gray-500"}`}>{user.name}</NavLink>
                <NavLink to="/logout" className={`mx-2 text-lg hover:opacity-70 ${path === "/logout" ? "font-bold text-red-600" : "text-gray-500"}`}>Logout</NavLink>
            </div>
        </nav>
    );
};
 
export default NavBar;
