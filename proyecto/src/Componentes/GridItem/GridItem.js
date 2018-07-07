import React from 'react'

const GridItem = ({ title, date , imgUrl }) => (
    <article className="col-md-2">
        <a href="detalle.html" className="grid-item">
            <img src={imgUrl} alt="Movie Image" className="img-fluid" />
            <span className="grid-item-body">
                <span className="grid-item-title">{title}</span>
                <span className="grid-item-date">{date}</span>
            </span>
        </a>
    </article>
);

export default GridItem;    