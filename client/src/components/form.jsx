import { Component } from 'react';
import Joi from 'joi-browser';

import Input from "./input";
import Select from "./select";

class Form extends Component {
    state = { 
        data: {},
        errors: {}, 
    };

    validate = () => {
        const options = { abortEarly: false };
        const result = Joi.validate(this.state.data, this.schema, options);
        if(!result.error) return null;
        const errors = {};
        for(let error of result.error.details)
            errors[error.path[0]] = error.message;
        return errors;
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name]};
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    handleSumbit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    };

    handleChange = e => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(e.currentTarget);
        if(errorMessage) errors[e.currentTarget.name] = errorMessage;
        else delete errors[e.currentTarget.name];

        const data = {...this.state.data};
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ data, errors });
    };

    renderButton(label) {
        return <button className="rounded-lg bg-red-700 text-white text-lg px-5 py-1.5 w-full hover:opacity-70" disabled={this.validate()}>{label}</button>
    }

    renderInput(name, label, type = "text") {
        return <Input label={label} type={type} name={name} value={this.state.data[name]} error={this.state.errors[name]} onChange={this.handleChange}/>;
    }

    renderSelect(name, label, options) {
        return <Select label={label} name={name} options={options} value={this.state.data[name]} error={this.state.errors[name]} onChange={this.handleChange}/>;
    }
}
 
export default Form;