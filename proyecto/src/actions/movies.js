import {
  SET_MOVIES,
  SET_SERIES,
  SHOW_MOVIES_LISTITEMS,
  SHOW_SERIES_LISTITEMS,
  ADD_MOVIE_ITEM,
  SHOW_ALERT,
  HIDE_ALERT

} from '../constants/actionTypes'
import moment from 'moment';


export const loadPopularMovies = () =>

  (dispatch, getState, api) => {
    /*const comics = getComics(getState())
    if (comics) {
      return
    }*/
    //dispatch({ type: 'LOADING' })

    api.getMoviesPopulars().then(movies => {

      const state = getState();
      let now = +moment();
      if (now > state.movies.expirate) {
        dispatch({ type: SET_MOVIES, movies })
      }
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
      const state = getState();
      let now = +moment();
      if (now > state.series.expirate) {
        dispatch({ type: SET_SERIES, series })
      }
    }, error => {
      //dispatch({ type: 'COMICS_ERROR', error })
    }).then(() => {
      ///dispatch({ type: 'STOP_LOADING' })
    })
  }

export const addMovieItem = movie => ({
  type: ADD_MOVIE_ITEM,
  movie: movie
})

export const showMoviesListITems = show => ({
  type: SHOW_MOVIES_LISTITEMS,
  showMoviesListItems: show
})


export const showSeriesListItems = show => ({
  type: SHOW_SERIES_LISTITEMS,
  showSeriesListItems: show
})


export const addMyLisItem = item =>

  (dispatch, getState, api) => {
    const state = getState();
    debugger
    let exist = false
    for (var i of state.myList.movieList) {
      if (i.id == item.id) {
        exist = true
      }
    }

    if(exist == false){
      dispatch({ type: ADD_MOVIE_ITEM, movie:item })
      dispatch({ type: SHOW_ALERT, message:"Agregado correctamente"})
    }else{
      dispatch({ type: SHOW_ALERT, message:"La pelicula ya existe"})
    }
  }



  export const showAlert = message => ({
    type: SHOW_ALERT,
    message
  })


  export const hideAlert = message => ({
    type: HIDE_ALERT,
    message
  })

