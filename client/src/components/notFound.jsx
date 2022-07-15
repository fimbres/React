import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NotFound extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div
                    style={{ backgroundImage:"url('https://i.pinimg.com/originals/3c/0c/53/3c0c5337e8b00e6195359c40a4394805.jpg')", filter: "brightness(40%)", zIndex: "-10"}}
                    className="fixed inset-0 flex"
                />
                <div className="fixed inset-0 z-10">
                    <h1 className="text-3xl md:text-5xl text-white mt-56 mb-8">Page Not Found!</h1>
                    <Link to="/movies" className="rounded-lg bg-red-700 text-white px-5 py-1.5 mr-2 hover:opacity-70">Go back to the home page</Link>
                </div>
            </>
        );
    }
}
 
export default NotFound;