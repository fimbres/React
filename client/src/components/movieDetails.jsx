import React, { Component } from 'react';
import MoviesForm from './moviesForm';

class MovieDetails extends Component {
    render() { 
        return (
            <MoviesForm id={this.props.match.params.id}/>
        );
    }
}
 
export default MovieDetails;