import React, { Component } from 'react';

import Counters from "./counters";

class CheckoutP extends Component {
    state = {
        counters: [
            { id: 1, value: 0, isFavorite: false },
            { id: 2, value: 7, isFavorite: false },
            { id: 3, value: 0, isFavorite: false },
            { id: 4, value: 4, isFavorite: false },
          ]
      };
    
      handleSelect = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].isFavorite = !(counter.isFavorite);
        this.setState({ counters });
    };
    
      handleDelete = id => {
          const counters = this.state.counters.filter(counter => counter.id !== id);
          this.setState({ counters });
      }; 
    
      handleIncrement = counter => {
          const counters = [...this.state.counters];
          const index = counters.indexOf(counter);
          counters[index].value ++;
          this.setState({ counters });
      }; 
    
      handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value --;
        this.setState({ counters });
    }; 
    
      handleReset = () => {
          const counters = this.state.counters.map(c => {c.value = 0; return c;});
          this.setState({ counters });
      };
    
      render() { 
        return (
          <div className="App">
            <main className="container mt-5">
              <Counters onDelete={this.handleDelete} onReset={this.handleReset} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onFavorite={this.handleSelect} counters={this.state.counters}/>
            </main>
          </div>
        );
      }
}
 
export default CheckoutP;