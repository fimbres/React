import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = ({ user, totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light mb-5">
            <div className="navbar-brand mb-0 h1">
                <span className="mr-5">Navbar</span>
                {totalCounters && <span className="badge badge-pill badge-secondary ml-2">{totalCounters}</span>}
                <NavLink to="/" className="mx-2 nav-item nav-NavLink">Home</NavLink>
                <NavLink to="/movies" className="mx-2 nav-item nav-NavLink">Movies</NavLink>
                <NavLink to="/checkout" className="mx-2 nav-item nav-NavLink">Checkout</NavLink>
                {!user && <>
                    <NavLink to="/login" className="mx-2 nav-item nav-NavLink">Login</NavLink>
                    <NavLink to="/signup" className="mx-2 nav-item nav-NavLink">Signup</NavLink>
                </>}
                {user && <>
                    <NavLink to="/profile" className="mx-2 nav-item nav-NavLink">{user.name}</NavLink>
                    <NavLink to="/logout" className="mx-2 nav-item nav-NavLink">Logout</NavLink>
                </>}
            </div>
        </nav>
    );
};
 
export default NavBar;
