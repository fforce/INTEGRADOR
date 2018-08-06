import React from 'react';
import PropTypes from 'prop-types';
import GridItem from '../GridItem'

const MovieListGrid = ({ movies, showButtons, clickDeleteMovie }) => {

    if (movies) {
        debugger
        return (
            movies.map((movie, i) => (
                <GridItem
                    key={i}
                    title={movie.title}
                    date={movie.date}
                    imgUrl={movie.imgUrl}
                    showButtons={showButtons}
                    clickDeleteMovie={clickDeleteMovie(movie)}
                />
            ))
        )
    }else
    {
      return ( "sin pelis")
    }
}

//es un comentario

MovieListGrid.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        imgUrl: PropTypes.string,
    })),
    showButtons: PropTypes.bool,
    clickDeleteMovie: PropTypes.func

};


export default MovieListGrid;