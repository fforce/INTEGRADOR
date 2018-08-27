import React, { Component } from 'react';
import PropTypes from "prop-types";

class GridItem extends Component {

    render() {

        const { title, date, imgUrl, showButtons, clickDeleteMovie } = this.props;

        return (
            <article className="col-md-2">
                <div href='#' className="grid-item">
                    <img src={imgUrl}  className="img-fluid" />
                    <span className="grid-item-body">
                        <span className="grid-item-title">{title}</span>
                        <span className="grid-item-date">{date}</span>
                        {showButtons && (
                            <div className="grid-item-actions">
                                <a href="#" onClick={clickDeleteMovie} className="btn btn-primary" aria-label="Profile">
                                    <i className="mdi mdi-delete" aria-hidden="true"></i>
                                </a>
                                <a href="#" className="btn btn-primary" aria-label="Profile">
                                    <i className="mdi mdi-eye-outline" aria-hidden="true"></i>
                                </a>
                            </div>
                        )}

                    </span>
                </div>
            </article>
        )
    }
}

GridItem.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    imgUrl : PropTypes.string,
    showButtons : PropTypes.bool,
    clickDeleteMovie : PropTypes.func
}

export default GridItem;    