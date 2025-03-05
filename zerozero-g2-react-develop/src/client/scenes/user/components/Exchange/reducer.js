import {Map, fromJS} from 'immutable';

import {userExchangeType} from '../../../../commons/constants/actionTypes';
import createReducer from '../../../../utils/createReducer';

const types = userExchangeType;

const state = fromJS({

    VOUCHERS: {
      'records': []
    },

    RECORDS: [{
            items:[],
    }],

    CRITERIA: {
        page: 1,
        filter: 'total',
        size: 4,
        sortOrder: 'newest'
    },
});

const GET_VOUCHERS_SUCCESS = (state, {payload}) => {
    if(state.getIn(['CRITERIA', 'page']) === 1) {
        return state.update('VOUCHERS', value => fromJS(payload));
    }else {
        return state.update('VOUCHERS', value => {
            return fromJS({
                ...payload,
                records: value.toJS().records.concat(payload.records),
            })
        });
        /*return state.updateIn(['VOUCHERS', 'records'], value => fromJS(value.toJS()).concat(payload.records))
            .updateIn(['VOUCHERS', 'page'], value => fromJS(payload.page))
            .updateIn(['VOUCHERS', 'totalPage'], value => fromJS(payload.totalPage))*/
    }
};

const GET_VOUCHERS_FAIL = (state) => {
    return state;
};

const SET_USER_EXCHANGE_CRITERIA = (state, {payload}) => {
    let newState = state.updateIn(['CRITERIA', payload.key], value => payload.value);
    if (newState.getIn(['CRITERIA', 'page']) === 1) {
        newState = newState.update('VOUCHERS', value => fromJS({records: []}));
    }
    return newState;
};

const GET_RECORD_SUCCESS = (state, { payload }) => {
    return state.update('RECORDS', value => fromJS(payload)) ;
}

const GET_RECORD_FAIL = (state, { payload }) => {
    return state
}

const handlers = {
    [types.GET_VOUCHERS_SUCCESS]: GET_VOUCHERS_SUCCESS,
    [types.GET_VOUCHERS_FAIL]: GET_VOUCHERS_FAIL,
    [types.SET_USER_EXCHANGE_CRITERIA]: SET_USER_EXCHANGE_CRITERIA,
    [types.GET_RECORD_SUCCESS]:GET_RECORD_SUCCESS,
    [types.GET_RECORD_FAIL]:GET_RECORD_FAIL

}

export default createReducer(state, handlers);
