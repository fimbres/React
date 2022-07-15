import React from 'react';

export default function Select({ name, label, error, options, ...props }) {
  return (
        <div className="flex flex-col">
            <select id={name} name={name} placeholder={label} className="px-4 py-2 bg-zinc-700 rounded-md text-gray-300" {...props}>
                <option value=""/>
                {options.map(option => <option key={option._id} value={option._id}>{option.name}</option>)}
            </select>
            {error && <div className="my-2 text-amber-500 text-lg">{error}</div>}
        </div>
    )
};
