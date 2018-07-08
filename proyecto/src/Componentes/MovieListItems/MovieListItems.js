import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem'

const MovieListItems = ({ movies, showAddButtons, clickAddItem, clickRemoveItem }) => movies.map((movie, i) => (
    <ListItem
        key={i}
        title={movie.title}
        description= {movie.description}
        imgUrl={movie.imgUrl} 
        showAddButtons = {showAddButtons}
        clickAddItem ={clickAddItem(movie)}
        clickRemoveItem= {clickRemoveItem(movie)}
        />
)
);

MovieListItems.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        imgUrl: PropTypes.string,
        showAddButtons : PropTypes.bool
    })).isRequired

};

export default MovieListItems;