import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Like from "./like";

class MovieTable extends Component {
    render() { 
        const { movies, onLike, onDelete, onSort } = this.props;
        return (
            <table className="w-100">
                <thead>
                    <tr>
                        <th onClick={() => onSort("title")}>Title</th>
                        <th onClick={() => onSort("genre.name")}>Genre</th>
                        <th onClick={() => onSort("numberInStock")}>Stock</th>
                        <th onClick={() => onSort("dailyRentalRate")}>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie, index) => {
                        return (
                            <tr className="h-20" key={index}>
                                <td><Link to={`/movie/${movie._id}`}>{movie.title}</Link></td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <button className="btn btn-sm btn-danger" onClick={() => onDelete(movie._id)}>Delete</button>
                                </td>
                                <td>
                                    <Like isFavorite={movie.liked} onFavorite={() => onLike(movie._id)}/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    }
}
 
export default MovieTable;