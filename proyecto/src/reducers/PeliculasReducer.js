import {
    ADD_MOVIE,
    SET_MOVIES,
    SHOW_MOVIES_LISTITEMS
} from '../constants/actionTypes'

import moment from 'moment'

const initialStateMovies = {
    movieList: [],
    expirate: 0,
    showMoviesListItems: false
}

const PeliculasReducer = (state = initialStateMovies, action) => {

    switch (action.type) { 
   
        case SET_MOVIES:
        return {...state,
            movieList : action.movies,
            expirate: +moment().add(1, 'minutes')
        }
        case SHOW_MOVIES_LISTITEMS:
        return {...state, showMoviesListItems: action.showMoviesListItems }
        default:
            return state
    }
}

export default PeliculasReducer
