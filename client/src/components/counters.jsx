import React, { Component } from 'react';

import Counter from "./counter";

class Counters extends Component {
    render() { 
        const { counters, onReset, onDelete, onIncrement, onDecrement, onFavorite } = this.props;
        return (
            <div>
                <button className="btn btn-sm btn-primary" onClick={onReset}>Reset</button>
                {counters.map((counter, index) => (
                    <Counter key={index} counter={counter} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement} onFavorite={onFavorite}>
                        Counter #{counter.id}
                    </Counter>
                ))}
            </div>
        );
    }
}
 
export default Counters;