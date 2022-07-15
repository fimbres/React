import React from 'react';
import Joi from 'joi-browser';

import { register } from "../services/userService";
import Form from './form';

class SignUp extends Form {
    state = {
        data: { email: '', username: '', password: ''},
        errors: {},
    };

    schema = {
        email: Joi.string().email().required().label('Email'),
        username: Joi.string().required().max(15).label('Username'),
        password: Joi.string().required().min(8).max(20).label('Password')
    };

    doSubmit = async () => {
        try{
            const response = await register(this.state.data);
            localStorage.setItem('authToken', response.data['x-auth-token']);
            window.location = '/';
        }
        catch(err) {
            if(err.response && err.response.status === 400){
                const errors = { ...this.state.errors };
                errors.username = err.response.data;
                this.setState({ errors });
            }
        }
    };

    render() { 
        return (
            <>
                <div
                    style={{ backgroundImage:"url('https://i.pinimg.com/originals/3c/0c/53/3c0c5337e8b00e6195359c40a4394805.jpg')", filter: "brightness(40%)", zIndex: "0"}}
                    className="fixed inset-0 flex"
                />
                <div className="flex flex-col max-w-lg p-1 m-auto py-20 px-10 z-10 rounded-lg backdrop-blur-lg mt-40">
                    <h1 className="text-5xl font-bold text-red-700 leading-loose">Sign Up</h1>
                    <form onSubmit={this.handleSumbit} className="space-y-5">
                        {this.renderInput("email", "Email", "email")}
                        {this.renderInput("username", "Username")}
                        {this.renderInput("password", "Password", "password")}
                        {this.renderButton("Sign Up")}
                    </form>
                </div>
            </>
        );
    }
}
 
export default SignUp;