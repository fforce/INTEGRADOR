import {
    ADD_MOVIE,
    SET_MOVIES
} from '../constants/actionTypes'

import moment from 'moment'

const initialStateMovies = {
    movieList: [],
    expirate: 0
}

const PeliculasReducer = (state = initialStateMovies, action) => {

    switch (action.type) { 
   
        case SET_MOVIES:
        return {
            movieList : action.movies,
            expirate: +moment().add(1, 'minutes')
        }
        default:
            return state
    }
}

export default PeliculasReducer
