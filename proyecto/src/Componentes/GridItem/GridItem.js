import React, { Component } from 'react';

class GridItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { title, date, imgUrl, showButtons } = this.props;

        return (
            <article className="col-md-2">
                <div href='#' className="grid-item">
                    <img src={imgUrl} alt="Movie Image" className="img-fluid" />
                    <span className="grid-item-body">
                        <span className="grid-item-title">{title}</span>
                        <span className="grid-item-date">{date}</span>
                        {showButtons && (
                            <div className="grid-item-actions">
                                <a href="#" className="btn btn-primary" aria-label="Profile">
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

export default GridItem;    