import React from 'react';

export default function Select({ name, label, error, options, ...props }) {
  return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
            </label>
            <select id={name} name={name} className="form-control" {...props}>
                <option value=""/>
                {options.map(option => <option key={option._id} value={option._id}>{option.name}</option>)}
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
};
