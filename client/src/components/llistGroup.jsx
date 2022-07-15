import React, { Component } from 'react';

class ListGroup extends Component {
    render() { 
        const { items, currentItem, onChange, textProperty, valueProperty } = this.props;
        return (
            <ul className="flex justify-center space-x-2 md:space-x-5">
                {items.map(item => <li key={item[valueProperty]} className={`text-sm md:text-lg font-semibold hover:opacity-70 ${currentItem === item[textProperty] ? 'text-red-700' : 'text-gray-400'}`} onClick={() => onChange(item.name)}>{item.name}</li>)}
            </ul>
        );
    }
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};
 
export default ListGroup;