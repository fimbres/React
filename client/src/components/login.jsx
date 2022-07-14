import React from 'react';
import Joi from 'joi-browser';

import Form from './form';
import { login } from '../services/authService';

class Login extends Form {
    state = {
        data: { email: '', password: '' },
        errors: {}
    };

    schema = {
        email: Joi.string().email().required().label('Email'), 
        password: Joi.string().required().label('Password'),
    }

    doSubmit = async () => {
        try{
            const { data: key } = await login(this.state.data);
            localStorage.setItem("authToken", key);
            const { state } = this.props.location;
            window.location = state ? state.from.pathname : '/';
        }
        catch(err) {
            if(err.response && err.response.status === 400){
                const errors = { ...this.state.errors };
                errors.email = err.response.data;
                this.setState({ errors });
            }
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.handleSumbit}>
                    {this.renderInput("email", "Email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}
 
export default Login;