import { Map, fromJS } from 'immutable';
import { exchangeType } from '../../../../commons/constants/actionTypes';
import createReducer from '../../../../utils/createReducer';

const types = exchangeType;

const state = fromJS({
    RECORD: {

    },
});

export const GET_RECORD = (state, {payload}) => {

    return state.update('RECORD', value => fromJS(payload));
};

export const VERIFY_CODE_3 = (state, {payload}) => {
    return state;
};


const handlers = {
    [types.GET_RECORD]: GET_RECORD,
    [types.VERIFY_CODE_3]: VERIFY_CODE_3,

};

export default createReducer(state, handlers);
