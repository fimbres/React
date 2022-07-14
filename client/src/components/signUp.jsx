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
            <div className="container">
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSumbit}>
                    {this.renderInput("email", "Email", "email")}
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Sign Up")}
                </form>
            </div>
        );
    }
}
 
export default SignUp;