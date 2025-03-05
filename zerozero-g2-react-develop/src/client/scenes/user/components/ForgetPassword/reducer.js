import {Map, fromJS} from 'immutable';

import {forgetPasswordType} from '../../../../commons/constants/actionTypes';
import createReducer from '../../../../utils/createReducer';

const types = forgetPasswordType;

const state = fromJS({
  FORGETPASSWORD: {
    'phoneNumber': '',
    'mobileCountryCode': '886',
    'code': '',
  },
  RESET_PASSWORD:{
    'mobile':'',
    'password': '',
    'pw_confirm': '',
  },
  IS_FORGET_PASSWORD: false
});

const FORGET_PASSWORD_SUCCESS = (state, {payload}) => {
  // console.info("FORGET_PASSWORD_SUCCESS : ", JSON.stringify(payload));
  return state.update('IS_FORGET_PASSWORD', value => true).update('FORGETPASSWORD', value => payload);
}

const FORGET_PASSWORD_FAIL = (state) => {
  return state.update('IS_FORGET_PASSWORD', value => false);
}

const FORGET_PASSWORD_SET_MOBILE = (state, {payload}) => {
  return state.updateIn(['RESET_PASSWORD', 'mobile'], value => payload);
}

const FORGET_PASSWORD_RESET_SUCCESS = (state, {payload}) => {
  return state.update('RESET_PASSWORD', value => fromJS(payload));
}

const FORGET_PASSWORD_RESET_FAIL = (state) => {
  return state.update('IS_RESET_PASSWORD', value => false);
}


const handlers = {
  [types.FORGET_PASSWORD_SUCCESS]: FORGET_PASSWORD_SUCCESS,
  [types.FORGET_PASSWORD_FAIL]: FORGET_PASSWORD_FAIL,
  [types.FORGET_PASSWORD_SET_MOBILE]:FORGET_PASSWORD_SET_MOBILE,
  [types.FORGET_PASSWORD_RESET_SUCCESS]:FORGET_PASSWORD_RESET_SUCCESS,
  [types.FORGET_PASSWORD_RESET_FAIL]:FORGET_PASSWORD_RESET_FAIL
}

export default createReducer(state, handlers);
