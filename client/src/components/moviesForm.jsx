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
            <>
                <div
                    style={{ backgroundImage:"url('https://i.pinimg.com/originals/3c/0c/53/3c0c5337e8b00e6195359c40a4394805.jpg')", filter: "brightness(40%)", zIndex: "0"}}
                    className="fixed inset-0 flex"
                />
                <div className="flex flex-col max-w-lg w-full mx-auto py-20 px-10 z-10 rounded-xl backdrop-blur-lg mt-40">
                    <h1 className="text-5xl font-bold text-red-700 leading-loose">{`${title ? title + " Movie" : "New Movie"}`}</h1>
                    <form onSubmit={this.handleSumbit} className="space-y-5">
                        {this.renderInput("title", "Title")}
                        {this.renderSelect("genreId", "Select a genre", this.state.genres)}
                        {this.renderInput("numberInStock", "Stock", "number")}
                        {this.renderInput("dailyRentalRate", "Rate", "number")}
                        {this.renderButton("Submit")}
                    </form>
                </div>
            </>
        );
    }
}
 
export default MoviesForm;