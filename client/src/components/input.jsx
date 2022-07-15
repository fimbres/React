import React from 'react';

export default function input({ name, label, error, ...props }) {
  return (
        <div className="flex flex-col">
            <input id={name} name={name} placeholder={label} className="px-4 py-2 bg-zinc-700 rounded-md text-gray-300" {...props}/>
            {error && <div className="my-2 text-amber-500 text-lg">{error}</div>}
        </div>
    )
};
