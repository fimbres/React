import React, { Component } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';

import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import Pagination from './pagination';
import { paginate } from '../utils/pagination';
import ListGroup from './llistGroup';
import { filtration } from '../utils/filtration';
import MovieTable from './movieTable';
// import Like from './like';

class Movie extends Component {
    state = {
        movies: [],
        filters: [],
        currentFilter: "All Genres",
        currentPage: 1,
        pageSize: 4,
        currentSort: undefined,
        selectedMovie: {}
    };

    async componentDidMount() {
        const { data } = await getGenres();
        const { data: movies } = await getMovies();
        this.setState({ movies, filters: [{ _id:'', name:"All Genres" }].concat(...data), selectedMovie: movies[0]});
    };

    handleDelete = async id => {
        const movies = await deleteMovie(id);
        this.setState({ movies });
    }

    handleLike = id => {
    }

    handleFilterChange = filter => this.setState({ currentFilter: filter, currentPage: 1 });

    handleChange = page => this.setState({ currentPage: page });

    handleSelect = movie => this.setState({ selectedMovie: movie });

    handleSort = sort => this.setState({ currentSort: {path: sort, order: "asc"} });

    render() { 
        const filteredMovies = this.state.currentFilter === "All Genres" ? this.state.movies : filtration(this.state.movies, this.state.currentFilter);
        this.state.currentSort && _.orderBy(filteredMovies, [this.state.currentSort.path], [this.state.currentSort.order]);
        const movies = paginate(filteredMovies, this.state.pageSize, this.state.currentPage);
        const movie = this.state.selectedMovie;
        return (
            <React.Fragment>
                <div
                    style={{ backgroundImage:"url('https://www.impulsonegocios.com/wp-content/uploads/2019/12/Escuadron-6-2.jpg')", filter: "brightness(40%)", zIndex: "-10"}}
                    className="fixed inset-0 bg-cover bg-center"
                />
                <div className="fixed inset-x-0 top-20 bottom-0 px-6" style={{background: "linear-gradient(rgba(0,0,0,0), #000)"}}>
                    {movie && <div className="w-auto md:w-1/2 text-left">
                        <h1 className="text-3xl md:text-4xl font-bold text-red-700 md:leading-loose">{movie.title}</h1>
                        <div className="my-2">
                            <p className="text-sm md:text-base text-gray-300">2014 • {movie.dailyRentalRate} Stars</p>
                        </div>
                        <p className="text-sm md:text-base text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <div className="flex mt-5 space-x-3">
                            <button className="w-full md:w-auto rounded-lg bg-red-700 text-white px-5 py-1.5 mr-2 hover:opacity-70 text-center" onClick={() => this.handleDelete(movie._id)}>Delete</button>
                            <Link className="w-full md:w-auto rounded-lg border border-white text-white px-5 py-1.5 mr-2 hover:opacity-70 text-center" to={`/movie/${movie._id}`}>Edit</Link>
                            {/* <Like isFavorite={movie.liked} onFavorite={() => {}}/> */}
                        </div>
                    </div>}
                    <div className="flex flex-col mt-16 w-full">
                        <ListGroup onChange={this.handleFilterChange} items={this.state.filters} currentItem={this.state.currentFilter}/>
                        <MovieTable movies={movies} onSelect={this.handleSelect}/>
                        <Pagination pageSize={this.state.pageSize} pagesCount={filteredMovies.length} currentPage={this.state.currentPage} handleChange={this.handleChange}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Movie;