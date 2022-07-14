import React, { Component } from 'react';
import Like from './like';

class Counter extends Component {
    state = {
        isFavorite: false,
    };

    handleFavourite = () => {
        const isFavorite = !this.state.isFavorite;
        this.setState({ isFavorite });
    };

    render() { 
        return (
            <div>
                <div className="row">
                <h2>{this.props.children}</h2>
                    <div className="col-1">
                        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
                    </div>
                    <div className="col">
                        <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter)}>+</button>
                        <button className="btn btn-secondary btn-sm m-2" onClick={() => this.props.onDecrement(this.props.counter)} disabled={this.props.counter.value === 0}>-</button>
                        <Like isFavorite={this.props.counter.isFavorite} onFavorite={() => this.props.onFavorite(this.props.counter)}/>
                        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                    </div>
                </div>
            </div>
        );
    };

    getBadgeClasses() {
        return "badge m-2 p-2 badge-".concat(this.props.counter.value === 0 ? "warning" : "primary");
    };

    formatvalue(){
        const { value } = this.props.counter;
        return value === 0 ? 'zero' : value;
    };
};
 
export default Counter;