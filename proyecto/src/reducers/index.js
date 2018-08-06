import { combineReducers } from 'redux'
import PeliculasReducer from './PeliculasReducer'

//este estado lo maneja tal reducer
const rootReducer = combineReducers({
    //Asi es como finalmente se llama la prop en mi state y con los que tengo q manejar
    movies :PeliculasReducer
})

export default rootReducer
