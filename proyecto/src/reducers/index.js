import { combineReducers } from 'redux'
import PeliculasReducer from './PeliculasReducer'
import SeriesReducer from './SeriesReducer'
import MyListReducer from './MyListReducer'
import AlertReducer from './AlertReducer'

//este estado final lo maneja el reducer o los reducer se divide en diferentes reducer para que
//el codigo sea mas legible
const rootReducer = combineReducers({
    //Asi es como finalmente se llama la prop en mi state y con los que tengo q manejar
    movies: PeliculasReducer,
    series: SeriesReducer,
    myList: MyListReducer,
    showAlert : AlertReducer
})

export default rootReducer
