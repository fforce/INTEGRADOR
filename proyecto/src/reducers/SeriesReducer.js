import {
    SET_SERIES
} from '../constants/actionTypes'

const initialStateSeries = []

const SeriesReducer = (state = initialStateSeries, action) => {

    switch (action.type) {       
        case SET_SERIES:
        return action.series
        default:
            return state
    }
}

export default SeriesReducer
