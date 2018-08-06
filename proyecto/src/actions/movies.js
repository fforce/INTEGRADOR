import {
    SET_MOVIES
  } from '../constants/actionTypes'


const loadPopularMovies = () =>

  (dispatch, getState, api) => {
    /*const comics = getComics(getState())
    if (comics) {
      return
    }*/
    //dispatch({ type: 'LOADING' })
 
    api.getMoviesPopulars().then(movies => {
      debugger
      dispatch({ type: SET_MOVIES, movies })
    }, error => {
      //dispatch({ type: 'COMICS_ERROR', error })
    }).then(() => {
      ///dispatch({ type: 'STOP_LOADING' })
    })
  }
  export default loadPopularMovies