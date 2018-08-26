import {
    HIDE_ALERT,
    SHOW_ALERT
} from '../constants/actionTypes'

import moment from 'moment'

const initialStateSeries = {
    open:false,
    message:""
}
const AlertReducer = (state = initialStateSeries, action) => {

    switch (action.type) {       
        case SHOW_ALERT:
        return {open:true, message: action.message}
        case HIDE_ALERT:
        return {open:false, message: action.message}
        default:
            return state
    }
}

export default AlertReducer
