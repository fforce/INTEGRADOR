import {
    ADD_MOVIE,
    SET_MOVIES,
    SHOW_MOVIES_LISTITEMS,
    ADD_MOVIE_ITEM
} from '../constants/actionTypes'

import moment from 'moment'

const initialStateMyList = {
    movieList: [],
    showMoviesListItems: false
}

const MyListReducer = (state = initialStateMyList, action) => {

    switch (action.type) { 
   
        case ADD_MOVIE_ITEM:
            let clone = {...state}
            clone.movieList.push(action.movie)
            return clone
        case SHOW_MOVIES_LISTITEMS:
        return {...state, showMoviesListItems: action.showMoviesListItems }
        default:
            return state
    }
}

export default MyListReducer
