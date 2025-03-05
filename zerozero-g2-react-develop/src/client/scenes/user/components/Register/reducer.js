import { fromJS } from 'immutable';

import { registerType } from '../../../../commons/constants/actionTypes';
import createReducer from '../../../../utils/createReducer';

const types = registerType;

const state = fromJS({
  REGISTER: {
    signUpType: 3,
    mobileCountryCode: '886',
    phoneNumber: '',
    password: '',
    identity: '',
    email: ''
  },
  IS_REGISTER_SUCCEED: false,
  //驗證驗證碼
  IS_VERIFIED: false,
  VERIFY: {
    mobileCountryCode: '',
    phone: '',
    code: ''
  },
  SUCCESS: {
    bannerUrl: '',
    text: ''
  },
  //整併帳號
  IS_MERGE: false,
  MERGE_SUCCESS: {

  },
  MERGE_FAIL: {

  },
  //驗證電話
  IS_MOBILE_VERIFIED: false,
  VERIFY_MOBILE_SUCCESS: {

  },
  VERIFY_MOBILE_FAIL: {

  }

});

const REGISTER_SUCCESS = (state, { payload }) => {
  // console.info("REGISTER_SUCCESS : ", JSON.stringify(payload));
  return state
    .update('REGISTER', value => fromJS(payload))
    .update('IS_REGISTER_SUCCEED', value => true)
};

const RESET_REGISTER_VALUE = (state) => {
  return state
    .update('IS_REGISTER_SUCCEED', value => false)
    .update('REGISTER', value => fromJS({
      signUpType: 3,
      mobileCountryCode: '886',
      phoneNumber: '',
      password: '',
      identity: '',
      email: ''
    }));
};

const REGISTER_FAIL = (state) => {
  return state;
};

const VERIFY_SUCCESS = (state, { payload }) => {// console.info("payload.mobileCountryCode ", payload.mobileCountryCode);
  // console.debug("payload.phone ", payload.phone);
  // console.debug("payload.code ", payload.code);
  return state.update('IS_VERIFIED', value => true)
    .updateIn(['REGISTER', 'phoneNumber'], (value) => payload.phone)
    .updateIn(['REGISTER', 'mobileCountryCode'], (value) => payload.mobileCountryCode)
    .update('VERIFY', (value) => fromJS(payload));
};

const VERIFY_FAIL = (state) => {
  return state.update('IS_VERIFIED', value => false);
};

const RESET_VERIFY_VALUE = (state) => {
  return state
    .update('IS_VERIFIED', value => false);
};

const GET_VALIDATION_CODE_SUCCESS = (state) => {
  return state
    .updateIn(['VERIFY', 'code'], value => '')
    .update('IS_VERIFIED', value => false);
};

const GET_VALIDATION_CODE_FAIL = (state) => {
  return state
    .updateIn(['VERIFY', 'code'], value => '')
    .update('IS_VERIFIED', value => false);
};

const GET_REG_SUCCESS_DATA = (state, { payload }) => {
  return state
    .updateIn(['SUCCESS', 'bannerUrl'], value => payload.bannerUrl)
    .updateIn(['SUCCESS', 'text'], value => payload.text)
};

const MERGE_SUCCESS = (state, { payload }) => {
  return state.update('IS_MERGE', value => true)
    .update('MERGE_SUCCESS', value => fromJS(payload))
};
const MERGE_FAIL = (state, { payload }) => {
  return state.update('IS_MERGE', value => false)
    .update('MERGE_FAIL', value => fromJS(payload))
};

const VERIFY_MOBILE_SUCCESS = (state, { payload }) => {
  return state.update('IS_MOBILE_VERIFIED', value => true)
    .update('VERIFY_MOBILE_SUCCESS', value => fromJS(payload))
};

const VERIFY_MOBILE_FAIL = (state, { payload }) => {
  return state.update('IS_MOBILE_VERIFIED', value => false)
    .update('VERIFY_MOBILE_FAIL', value => fromJS(payload))
};
const VERIFY_MOBILE_TYPE = (state, { payload }) => {
  return state.updateIn(['VERIFY_MOBILE_SUCCESS', 'registerType'], value => payload);
}

const handlers = {
  [types.RESET_REGISTER_VALUE]: RESET_REGISTER_VALUE,
  [types.REGISTER_SUCCESS]: REGISTER_SUCCESS,
  [types.REGISTER_FAIL]: REGISTER_FAIL,
  [types.VERIFY_SUCCESS]: VERIFY_SUCCESS,
  [types.VERIFY_FAIL]: VERIFY_FAIL,
  [types.RESET_VERIFY_VALUE]: RESET_VERIFY_VALUE,
  [types.GET_VALIDATION_CODE_SUCCESS]: GET_VALIDATION_CODE_SUCCESS,
  [types.GET_VALIDATION_CODE_FAIL]: GET_VALIDATION_CODE_FAIL,
  [types.GET_REG_SUCCESS_DATA]: GET_REG_SUCCESS_DATA,
  [types.MERGE_SUCCESS]: MERGE_SUCCESS,
  [types.MERGE_FAIL]: MERGE_FAIL,
  [types.VERIFY_MOBILE_SUCCESS]: VERIFY_MOBILE_SUCCESS,
  [types.VERIFY_MOBILE_TYPE]: VERIFY_MOBILE_TYPE,
  [types.VERIFY_MOBILE_FAIL]: VERIFY_MOBILE_FAIL
};


export default createReducer(state, handlers);
