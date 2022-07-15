import React, { Component } from 'react';

class MovieTable extends Component {
    render() { 
        const { movies, onSelect } = this.props;
        return (
            <div className="mt-5">
                <div className="grid grid-flow-col flex flex-nowrap w-full space-x-4 items-center justify-items-stretch lg:justify-center overflow-x-auto overflow-visible">
                    {movies.map((movie, index) => {
                        return (
                        <div
                            key={index}
                            className="flex items-end justify-center w-56 h-80 rounded-md bg-cover cursor-pointer"
                            style={{ backgroundImage: `url("https://1.bp.blogspot.com/-1atBsImA4Wo/WP5JWltk7rI/AAAAAAAAHnM/-WE3lTXSMNo5y_NwTdoW8Lk7hpreyA_AwCLcB/s1600/airplane-5212b101b1707.jpg")` }}
                            onClick={() => onSelect(movie)}
                        >
                            <div className="text-xl font-semibold text-white w-full" style={{background: "linear-gradient(rgba(0,0,0,0), #000)"}}>{movie.title}</div>
                        </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
 
export default MovieTable;