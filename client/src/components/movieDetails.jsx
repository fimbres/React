import React, { Component } from 'react';
import MoviesForm from './moviesForm';

class MovieDetails extends Component {
    render() { 
        return (
            <div className="container">
                <MoviesForm id={this.props.match.params.id}/>
            </div>
        );
    }
}
 
export default MovieDetails;