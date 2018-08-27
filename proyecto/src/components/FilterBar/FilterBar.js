import PropTypes from "prop-types";
import React, { Component } from 'react';

class FilterBar extends Component {

  
    render() {

        const { onClickGrid, onClickList, activeLisItems } = this.props
        let classGrid = activeLisItems ? "btn btn-light" : "btn btn-light active"   
        let classListItem = activeLisItems ? "btn btn-light active" : "btn btn-light" 

        return (
            <div className="filters-bar">
                <div className="filters-bar-left">
                </div>
                <div className="filters-bar-right">
                    <a href='#' onClick={onClickGrid} className={classGrid} aria-label="Profile">
                        <i className="mdi mdi-view-grid" aria-hidden="true"></i>
                    </a>
                    <a href='#' onClick={onClickList} className={classListItem} aria-label="Profile">
                        <i className="mdi mdi-view-list" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        );
    }
}

FilterBar.propTypes = {
    onClickGrid: PropTypes.func,
    onClickList: PropTypes.func
}
export default FilterBar