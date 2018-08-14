import {
    ADD_MOVIE,
    SET_MOVIES
} from '../constants/actionTypes'

const initialStateMovies = []

const PeliculasReducer = (state = initialStateMovies, action) => {

    switch (action.type) { 
        case ADD_MOVIE:
        return [...state, {
          title: action.title,
          date: action.date,
          imgUrl: action.imgUrl,
          showButtons: false
        }]
        case SET_MOVIES:
        return action.movies
        default:
            return state
    }
}

export default PeliculasReducer
