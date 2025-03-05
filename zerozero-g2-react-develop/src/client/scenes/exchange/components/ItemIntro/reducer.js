/**
 * Created by Ken on 2017/12/11.
 */
import { Map, fromJS } from 'immutable';

import { exchangeType } from '../../../../commons/constants/actionTypes';
import createReducer from '../../../../utils/createReducer';

const types = exchangeType;

const state = fromJS({
    ITEM: {
        itemId: '',
        recordId: '',
        imageURL:'',
        name: '',
        subtitle: '',
        coins: 0,
        expireDate: '',
        description: ''
    },

    FORM: {
        itemId: undefined,
        name: undefined,
        mobile: undefined,
        email: undefined,
        status: undefined
    },

    ERROR: {
        msg:'',
        field:''
    }
});

const GET_ITEM_INFO = (state, {payload}) => {
    return state
        .update('ITEM', value => fromJS(payload))
        .update('FORM', value => fromJS({}));
};

const ITEM_DISCONTINUED = (state, {payload}) => {
    return state.update('ITEM', value => fromJS(payload));
};

const SET_FORM_FIELD = (state, {payload}) => {

    const key = Object.keys(payload)[0];
    const newValue = payload[key];
    return state.updateIn(['FORM', key], value => newValue);
    // const form = state.get('FORM').toJS();
    // const newForm = {
    //     itemId: payload.itemId? payload.itemId: form.itemId,
    //     name: payload.name? payload.name : form.name,
    //     mobile: payload.mobile? payload.mobile: form.mobile,
    //     email: payload.email? payload.email: form.email
    // }
    //
    // return state.update('FORM', value => fromJS(newForm));
};

const EXCHANGE_ITEM = (state, {payload}) => {
    return state
        .updateIn(['FORM', 'status'], value => 'DONE')
        .update('ITEM', value => fromJS(payload))
        .update('ERROR', value => undefined);
};

const VALIDATION_FAILED = (state, {payload}) => {
    if(payload) {
        return state.update('ERROR', value => fromJS(payload));
    }

    return state.update('ERROR', value => undefined);
};

const EXCHANGE_FAILED = (state, {payload}) => {
    return state.updateIn(['FORM','status'], value => 'FAILED');
};

const INCREASE_ITEM_VALUE = (state, { payload }) => {
    return state.updateIn(['ITEM', 'itemVal'], value => value+1)
}

const DECREASE_ITEM_VALUE = (state, { payload }) => {
    return state.updateIn(['ITEM', 'itemVal'], value => value > 1 ? value-1 : 1)
}

const SET_ITEM_FIELD_VALUE = (state, { payload }) => {
    return state.updateIn(['ITEM', payload.key], value => fromJS(payload.value))
}

const handlers = {
    [types.GET_ITEM_INFO]: GET_ITEM_INFO,
    [types.ITEM_DISCONTINUED]: ITEM_DISCONTINUED,
    [types.SET_FORM_FIELD]: SET_FORM_FIELD,
    [types.EXCHANGE_ITEM]: EXCHANGE_ITEM,
    [types.VALIDATION_FAILED]: VALIDATION_FAILED,
    [types.EXCHANGE_FAILED]: EXCHANGE_FAILED,
    [types.INCREASE_ITEM_VALUE]:INCREASE_ITEM_VALUE,
    [types.DECREASE_ITEM_VALUE]:DECREASE_ITEM_VALUE,
    [types.SET_ITEM_FIELD_VALUE]:SET_ITEM_FIELD_VALUE

};

export default createReducer(state, handlers);
