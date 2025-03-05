import {Map, fromJS} from 'immutable';

import {zCoinsType} from '../../../../commons/constants/actionTypes';
import createReducer from '../../../../utils/createReducer';

const types = zCoinsType;

const state = fromJS({
    TotalRecord: {},
    ZCOINS: [],
    CRITERIA: {
        page: 1,
        filter: 'total',
        size: 4,
        sortOrder: 'asc'
    }
});

const GET_ZCOINS_SUCCESS = (state, {payload}) => {
   return state.update('ZCOINS', value => fromJS(payload))
};

const GET_ZCOINS_FAIL = (state) => {
    return state;
};

const SET_CRITERIA = (state, {payload}) => {
    let newState = state.updateIn(['CRITERIA', payload.key], value => payload.value);
    if (newState.getIn(['CRITERIA', 'page']) === 1) {
        newState = newState.update('ZCOINS', value => fromJS({total: 0, records: []}));
        newState = newState.update('VOUCHERS', value => fromJS({records: []}));
    }
    return newState;
};

const GET_USER_TOTAL_RECORD = (state, {payload}) => {
    return state.update('TotalRecord', value => fromJS(payload))
}

const handlers = {
    [types.GET_ZCOINS_SUCCESS]: GET_ZCOINS_SUCCESS,
    [types.GET_ZCOINS_FAIL]: GET_ZCOINS_FAIL,
    [types.SET_CRITERIA]: SET_CRITERIA,
    [types.GET_USER_TOTAL_RECORD]: GET_USER_TOTAL_RECORD
}

export default createReducer(state, handlers);
