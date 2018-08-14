import {
    SET_MOVIES,
    SET_SERIES
  } from '../constants/actionTypes'


  export const loadPopularMovies = () =>

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


  export const loadPopularSeries = () =>

  (dispatch, getState, api) => {
    /*const comics = getComics(getState())
    if (comics) {
      return
    }*/
    //dispatch({ type: 'LOADING' })
 
    api.getSeriesPopulars().then(series => {
      debugger
      dispatch({ type: SET_SERIES, series })
    }, error => {
      //dispatch({ type: 'COMICS_ERROR', error })
    }).then(() => {
      ///dispatch({ type: 'STOP_LOADING' })
    })
  }
