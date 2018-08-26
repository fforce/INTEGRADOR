import PropTypes from "prop-types";
import React, { Component } from 'react';

class FilterBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ActiveGrid: "active",
            ActiveList: ""
        };
    }

    clickGrid = () => {
        this.setState({
            ActiveGrid: "active",
            ActiveList: ""
        })

        this.props.onClickGrid()
    }

    clickList = () => {
        this.setState({
            ActiveGrid: "",
            ActiveList: "active"
        })
        this.props.onClickList()
    }

    render() {

        const { onClickGrid, onClickList } = this.props
        return (
            <div className="filters-bar">
                <div className="filters-bar-left">
                </div>
                <div className="filters-bar-right">
                    <a href="#" onClick={this.clickGrid} className={"btn btn-light " + this.state.ActiveGrid} aria-label="Profile">
                        <i className="mdi mdi-view-grid" aria-hidden="true"></i>
                    </a>
                    <a href="#" onClick={this.clickList} className={"btn btn-light " + this.state.ActiveList} aria-label="Profile">
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