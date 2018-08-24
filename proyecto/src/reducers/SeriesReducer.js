import {
    SET_SERIES,
    SHOW_SERIES_LISTITEMS
} from '../constants/actionTypes'

import moment from 'moment'

const initialStateSeries = {
    seriesList: [],
    expirate: 0,
    showSeriesListItems: false
}

const SeriesReducer = (state = initialStateSeries, action) => {

    switch (action.type) {       
        case SET_SERIES:
        return { ...state,
            seriesList : action.series,
            expirate: +moment().add(1, 'minutes')
        }
        case SHOW_SERIES_LISTITEMS:
        debugger;
        return {...state, showSeriesListItems: action.showSeriesListItems }
        default:
            return state
    }
}

export default SeriesReducer
