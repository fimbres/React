import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
    render() { 
        if (this.props.pagesCount === 1) return null;
        const { pageSize, pagesCount, currentPage, handleChange } = this.props;
        const pages = _.range(1, (pagesCount / pageSize) + 1);
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination ml-5">
                    {pages.map(page => (
                        <li key={page} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                            <div className="page-link" onClick={() => handleChange(page)}>
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