import {Map, fromJS} from 'immutable';

import {foodClearanceType} from '../../../commons/constants/actionTypes';
import createReducer from '../../../utils/createReducer';


const types = foodClearanceType;

const state = fromJS({
    APPOINTMENT: {
        countyId: '',
        townshipId: '',
        address: '',
    },
    COUNTIES: [],
    TOWNSHIPS: [],
    APPOINTMENT_ID: ''
});

const LOAD_COUNTIES = (state, {payload}) => {
    return state.update('COUNTIES', value => fromJS(payload));
};

const LOAD_TOWNSHIPS = (state, {payload}) => {
    return state.update('TOWNSHIPS', value => fromJS(payload));
};

const LOAD_ITEMS = (state, {payload}) => {
    return state.update('ITEMS', value => fromJS(payload));
};

const LOAD_UNITS = (state, {payload}) => {
    return state.update('UNITS', value => fromJS(payload));
};

const SELECT_COUNTY = (state, {payload}) => {
    return state.updateIn(['APPOINTMENT', 'countyId'], value => payload);
};

const CHANGE_FORM_VALUE = (state, {payload}) => {
    return state.updateIn(['APPOINTMENT', payload.key], value => payload.value);
};

const APPOINTMENT = (state, {payload}) => {

    return state.update('APPOINTMENT_ID', value => payload.appointmentId);
};

const handlers = {
    [types.LOAD_COUNTIES]: LOAD_COUNTIES,
    [types.LOAD_TOWNSHIPS]: LOAD_TOWNSHIPS,
    [types.LOAD_ITEMS]: LOAD_ITEMS,
    [types.LOAD_UNITS]: LOAD_UNITS,
    [types.SELECT_COUNTY]: SELECT_COUNTY,
    [types.CHANGE_FORM_VALUE]: CHANGE_FORM_VALUE,
    [types.APPOINTMENT_APPLY]: APPOINTMENT
};

export default createReducer(state, handlers);