import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
    render() { 
        if (this.props.pagesCount === 1) return null;
        const { pageSize, pagesCount, currentPage, handleChange } = this.props;
        const pages = _.range(1, (pagesCount / pageSize) + 1);
        return (
            <nav aria-label="fixed inset-x-0 bottom-0 w-full text-white" style={{zIndex:100}}>
                <ul className="flex justify-center space-x-5 mt-5">
                    {pages.map(page => (
                        <li key={page} className={`text-xl font-semibold ${currentPage === page ? 'text-red-700' : 'text-gray-400'}`}>
                            <div className="" onClick={() => handleChange(page)}>
                                {page}
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}
 
export default Pagination;