import React from 'react'

const GridItem = ({ title, date }) => (
    <article class="col-md-2">
        <a href="detalle.html" className="grid-item">
            <img src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg" alt="Movie Image" className="img-fluid" />
            <span className="grid-item-body">
                <span className="grid-item-title">{title}</span>
                <span className="grid-item-date">{date}</span>
            </span>
        </a>
    </article>
);

export default GridItem;    