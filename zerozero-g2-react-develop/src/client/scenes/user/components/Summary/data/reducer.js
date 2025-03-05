import {combineReducers} from 'redux';
import createReducer from '../../../../../utils/createReducer' ;
import { summary } from '../../../../../commons/constants/actionTypes' ;
import Immutable , { List , Map , fromJS } from 'immutable' ;

const types = summary ;
const state = new Map({
    currentPage : 1,
    numberOfPage : 10,
    result : new Map({}),
    electronicAppointment : new Map({

    }),
    enterpriseAppointment: null
});

const PERSIST_SUMMARY = (state , action) => {
    return state.update(action.key , value => action.value) ;
};

const FETCH_SUMMARY = (state , action) => {
    if(action.moreData) {
        return state.update('result' , value => {
            if(value instanceof Immutable.Map) {
                value = value.toJS();
            }
            const newData = value.rows.concat(action.payload.rows) ;
            return fromJS(action.payload).update('rows' , v => newData);
        }).update('currentPage' , v => v +1)
    }else{
        return state.update('result' , value => action.payload)
            .update('currentPage' , v => v)
    }
};

const FETCH_ELECTRONIC_APPOINTMENT = (state, action) => {
    return state.update('electronicAppointment', value => action.payload);
};

const FETCH_ENTERPRISE_APPOINTMENT = (state, {payload}) => {
    return state.update('enterpriseAppointment', value => fromJS(payload));
};

const handlers = {
    [types.PERSIST_SUMMARY] : PERSIST_SUMMARY,
    [types.FETCH_SUMMARY] : FETCH_SUMMARY,
    [types.FETCH_ELECTRONIC_APPOINTMENT]: FETCH_ELECTRONIC_APPOINTMENT,
    [types.FETCH_ENTERPRISE_APPOINTMENT]: FETCH_ENTERPRISE_APPOINTMENT
};

export default createReducer(state, handlers) ;
