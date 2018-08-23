import {
    SET_SERIES
} from '../constants/actionTypes'

import moment from 'moment'

const initialStateSeries = {
    seriesList: [],
    expirate: 0
}

const SeriesReducer = (state = initialStateSeries, action) => {

    switch (action.type) {       
        case SET_SERIES:
        return {
            seriesList : action.series,
            expirate: +moment().add(1, 'minutes')
        }
        default:
            return state
    }
}

export default SeriesReducer
