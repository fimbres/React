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
            window.location = state ? state.from.pathname : '/movies';
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
            <>
                <div
                    style={{ backgroundImage:"url('https://i.pinimg.com/originals/3c/0c/53/3c0c5337e8b00e6195359c40a4394805.jpg')", filter: "brightness(40%)", zIndex: "0"}}
                    className="fixed inset-0 flex"
                />
                <div className="flex flex-col max-w-lg p-1 m-auto py-20 px-10 z-10 rounded-lg backdrop-blur-lg mt-40">
                    <h1 className="text-5xl font-bold text-red-700 leading-loose">Login</h1>
                    <form onSubmit={this.handleSumbit} className="space-y-5">
                        {this.renderInput("email", "Email")}
                        {this.renderInput("password", "Password", "password")}
                        {this.renderButton("Login")}
                    </form>
                </div>

            </>
        );
    }
}
 
export default Login;