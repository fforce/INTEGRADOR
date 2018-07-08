import React from 'react';
import PropTypes from 'prop-types';
import GridItem from '../GridItem'

const MovieListGrid = ({ movies, showButtons }) => movies.map((movie, i) => (
    <GridItem
        key={i}
        title={movie.title}
        date={movie.date}
        imgUrl={movie.imgUrl} 
        showButtons = {showButtons}
        />
)
);

MovieListGrid.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        imgUrl: PropTypes.string,
    })).isRequired

};

export default MovieListGrid;