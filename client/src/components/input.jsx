import React from 'react';

export default function input({ name, label, error, ...props }) {
  return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
            </label>
            <input id={name} name={name} className="form-control" {...props}/>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
};
