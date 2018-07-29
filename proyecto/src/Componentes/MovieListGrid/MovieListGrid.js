import React from 'react';
import PropTypes from 'prop-types';
import GridItem from '../GridItem'

const MovieListGrid = ({ movies, showButtons, clickDeleteMovie }) => movies.map((movie, i) => (
    <GridItem
        key={i}
<<<<<<< HEAD
        title={movie.title} 
        date={movie.date}
=======
        title={movie.title}
        date={movie.date} 
>>>>>>> 3dd72ffa6adecf31e81163f8d8f0b602c275c3bd
        imgUrl={movie.imgUrl} 
        showButtons = {showButtons}
        clickDeleteMovie = {clickDeleteMovie(movie)}
        />
)
);

MovieListGrid.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        imgUrl: PropTypes.string,
    })),
    showButtons : PropTypes.func,
    clickDeleteMovie : PropTypes.func

};


export default MovieListGrid;