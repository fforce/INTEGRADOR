import React, { Component } from 'react';

class GridItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { title, date, imgUrl } = this.props;

        return (
            <article className="col-md-2">
                <a href='#' className="grid-item">
                    <img src={imgUrl} alt="Movie Image" className="img-fluid" />
                    <span className="grid-item-body">
                        <span className="grid-item-title">{title}</span>
                        <span className="grid-item-date">{date}</span>
                        <div class="grid-item-actions">
                            {this.props.children}
                        </div>
                    </span>
                </a>
            </article>
        )
    }
}

export default GridItem;    