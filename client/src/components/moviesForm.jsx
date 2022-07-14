import React from 'react';
import Joi from 'joi-browser';

import Form from './form';
import { getMovie, saveMovie } from '../services/movieService';
import { getGenres } from '../services/genreService';

class MoviesForm extends Form {
    state = { 
        data: { title: '', genreId: '', numberInStock: '', dailyRentalRate: '' },
        genres: [],
        errors: {},
    };

    schema = {
        title: Joi.string().required().label('Title'),
        genre: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().min(1).required().label('Stock'),
        dailyRentalRate: Joi.number().min(1).max(10).label('Rate'),
    };

    async componentDidMount () {
        const { data: genres } = await getGenres();
        this.setState({ genres });
        
        if(!this.props.id) return;
        const { data: movie } = await getMovie(this.props.id);
        this.setState({ data: { title: movie.title, genreId: movie.genre._id, numberInStock: movie.numberInStock, dailyRentalRate: movie.dailyRentalRate } });
    };

    doSubmit = async () => {
        await saveMovie(this.state.data);
        saveMovie(this.state.data);
    };

    render() { 
        const title = this.state.data.title ? this.state.data.title : '';
        return (
            <div classtitle="container">
                <h1>{`${title ? title + " Movie" : "New Movie"}`}</h1>
                {this.renderInput("title", "Title")}
                {this.renderSelect("genreId", "Genre", this.state.genres)}
                {this.renderInput("numberInStock", "Stock", "number")}
                {this.renderInput("dailyRentalRate", "Rate", "number")}
                {this.renderButton("Submit")}
            </div>
        );
    }
}
 
export default MoviesForm;