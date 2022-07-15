import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from "react-router-dom";

import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";
import Pagination from './pagination';
import { paginate } from '../utils/pagination';
import ListGroup from './llistGroup';
import { filtration } from '../utils/filtration';
import MovieTable from './movieTable';

class Movie extends Component {
    state = {
        movies: [],
        filters: [],
        currentFilter: "All Genres",
        currentPage: 1,
        pageSize: 4,
        currentSort: undefined,
    };

    async componentDidMount() {
        const { data } = await getGenres();
        const { data: movies } = await getMovies();
        this.setState({ movies, filters: [{ _id:'', name:"All Genres" }].concat(...data) });
    };

    handleDelete = id => {
        const movies = deleteMovie(id);
        this.setState({ movies });
    }

    handleLike = id => {
    }

    handleFilterChange = filter => this.setState({ currentFilter: filter, currentPage: 1 });

    handleChange = page => this.setState({ currentPage: page });

    handleSort = sort => this.setState({ currentSort: {path: sort, order: "asc"} });

    render() { 
        const filteredMovies = this.state.currentFilter === "All Genres" ? this.state.movies : filtration(this.state.movies, this.state.currentFilter);
        this.state.currentSort && _.orderBy(filteredMovies, [this.state.currentSort.path], [this.state.currentSort.order]);
        const movies = paginate(filteredMovies, this.state.pageSize, this.state.currentPage);
        return (
            <React.Fragment>
                <h1 className="mt-5">Showing {filteredMovies.length} movies from the database</h1>
                <Link className="btn btn-primary" to="/movie/new">New Movie</Link>
                <div className="">
                    <div className="mt-3 w-100">
                        <MovieTable onDelete={this.handleDelete} onLike={this.handleLike} onSort={this.handleSort} movies={movies}/>
                    </div>
                    <div className="mt-3">
                        <ListGroup onChange={this.handleFilterChange} items={this.state.filters} currentItem={this.state.currentFilter}/>
                    </div>
                </div>
                <Pagination pageSize={this.state.pageSize} pagesCount={filteredMovies.length} currentPage={this.state.currentPage} handleChange={this.handleChange}/>
            </React.Fragment>
        );
    }
}
 
export default Movie;