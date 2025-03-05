import {Map, fromJS} from 'immutable';

import {dynamicEvent} from '../../commons/constants/actionTypes';
import createReducer from '../../utils/createReducer';


const types = dynamicEvent;

const state = fromJS({
    DYNAMIC_EVENT: {},
    INVALID_EVENT: {}
});

const GET_EVENT_CONTENT = (state, {payload}) => {
    const newState = state.update('DYNAMIC_EVENT', value => fromJS(payload));
    return newState;
};

const INVALID_EVENT = (state, {payload}) => {
    return state.update('INVALID_EVENT', value => fromJS(payload));
}

const handlers = {
    [types.GET_EVENT_CONTENT]: GET_EVENT_CONTENT,
    [types.INVALID_EVENT]: INVALID_EVENT
};

export default createReducer(state, handlers);