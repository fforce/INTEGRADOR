import React from 'react';
import PropTypes from "prop-types";


const FilterBar = ({ onClickGrid, onClickList }) =>(
    <div className="filters-bar">
        <div className="filters-bar-left">

        </div>
        <div className="filters-bar-right">
            <a href="#" onClick={onClickGrid} className="btn btn-light" aria-label="Profile">
                <i className="mdi mdi-view-grid" aria-hidden="true"></i>
            </a>
            <a href="#" onClick={onClickList} className="btn btn-light" aria-label="Profile">
                <i className="mdi mdi-view-list" aria-hidden="true"></i>
            </a>
        </div>
    </div>
)

FilterBar.propTypes = {
    onClickGrid: PropTypes.func,
    onClickList: PropTypes.func
}
export default FilterBar