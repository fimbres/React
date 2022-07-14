import React, { Component } from 'react';

class ListGroup extends Component {
    render() { 
        const { items, currentItem, onChange, textProperty, valueProperty } = this.props;
        return (
            <ul className="list-group">
                {items.map(item => <li key={item[valueProperty]} className={`list-group-item ${currentItem === item[textProperty] ? 'active' : ''}`} onClick={() => onChange(item.name)}>{item.name}</li>)}
            </ul>
        );
    }
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};
 
export default ListGroup;