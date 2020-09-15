import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func

};

Pagination.defaultProps = {
    onPageChange: null,

};

function Pagination(props) {

    const {pagination, onPageChange} = props;
    const {_page, _limit, _totlaRow} = pagination;
    const totalPages = Math.ceil(_totlaRow / _limit);

    function handlePageChange(newPage) {
        if (onPageChange) {
            onPageChange(newPage)
        }
    }

    return (
        <div>
            <button
                disabled={_page <= 1}
                onClick={() => handlePageChange(_page - 1)}
            >
                Prew
            </button>

            <button
                disabled={_page >= totalPages}
                onClick={() => handlePageChange(_page + 1)}
            >
                Prew
            </button>
        </div>
    );
}

export default Pagination;
