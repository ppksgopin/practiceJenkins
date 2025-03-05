/**
 * Created by ryan on 2017/11/1.
 */
import { electronic } from '../../../commons/constants/actionTypes' ;
import createReducer from '../../../utils/createReducer' ;
import { List , Map , fromJS} from 'immutable' ;


const types = electronic ;
const state = new Map({
    recycleItems : [],
    bookingTimes: [],
    contactTimes: [],
    counties:[],
    townships:[],
    appointment : new Map({
        appointmentId:'',
        countyId: '',
        townshipId: '',
        items: [],
        bookingTimeIds: [],
        contactTime:'',
        contactPhone:'',
        other : ''
    }),
    isSaveEvaluation:false
});

const FETCH_RECYCLE_ITEMS = (state, action) => {
    return state.update('recycleItems', value => fromJS(action.payload)) ;
}

const FETCH_ELEC_COUNTY = (state, action) => {
    return state.update('counties', value => fromJS(action.payload)) ;
}

const FETCH_ELEC_TOWNSHIP = (state, action) => {
    return state.update('townships', value => fromJS(action.payload)) ;
}

const FETCH_BOOKING_TIME = (state, action) => {
    return state.update('bookingTimes', value => fromJS(action.payload)) ;
}

const FETCH_CONTACT_TIME = (state, action) => {
    return state.update('contactTimes', value => fromJS(action.payload)) ;
}

const PERSIST_ELECTRONIC_FORM = (state, action) => {
    return state.updateIn(['appointment', action.key], (value) => fromJS(action.value)) ;
}

const SAVE_APPOINTMENT = (state, action) => {
    return state.updateIn(['appointment', 'appointmentId'], (value) => action.payload);
}

const SAVE_EVALUATION = (state, action) => {
    return state.update('isSaveEvaluation', value => fromJS(action.payload))
}

const handlers = {
    [types.FETCH_RECYCLE_ITEMS] : FETCH_RECYCLE_ITEMS,
    [types.FETCH_ELEC_COUNTY] : FETCH_ELEC_COUNTY,
    [types.FETCH_ELEC_TOWNSHIP] :FETCH_ELEC_TOWNSHIP,
    [types.FETCH_BOOKING_TIME] : FETCH_BOOKING_TIME,
    [types.FETCH_CONTACT_TIME] :FETCH_CONTACT_TIME,
    [types.PERSIST_ELECTRONIC_FORM] :PERSIST_ELECTRONIC_FORM,
    [types.SAVE_APPOINTMENT]:SAVE_APPOINTMENT,
    [types.SAVE_EVALUATION]:SAVE_EVALUATION
};

export default createReducer(state, handlers) ;