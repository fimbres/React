import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import Logo from "../media/logo.png";

class LandingPage extends Component {
    render() { 
        return (
            <>
                <nav className="absolute flex items-center justify-between py-8 px-5 top-0 inset-x-0 z-10" style={{background: "linear-gradient(#000, rgba(0,0,0,0))"}}>
                    <img src={Logo} style={{height: "50px"}} alt="Logo" />
                    <div>
                        <NavLink to="/login" className="hidden sm:inline mr-6 text-white hover:opacity-70">Login</NavLink>
                        <NavLink to="/signup" className="bg-red-600 rounded text-white px-5 py-3 hover:opacity-70">Signup</NavLink>
                    </div>
                </nav>
                <div
                    style={{ backgroundImage:"url('https://i.pinimg.com/originals/3c/0c/53/3c0c5337e8b00e6195359c40a4394805.jpg')", filter: "brightness(55%)", zIndex: "0"}}
                    className="fixed inset-0"
                />
                <div className="fixed inset-x-0 top-1/2 px-6 text-white">
                    <h1 className="text-2xl md:text-5xl font-bold text-break">Unlimited number of movies, series and more.</h1>
                    <h2 className="text-lg md:text-2xl mt-5">Watch it anywhere, unsubscribe anytime.</h2>
                </div>
            </>
        );
    }
}
 
export default LandingPage;