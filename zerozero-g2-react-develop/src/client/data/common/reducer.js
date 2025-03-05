import {Map, fromJS} from 'immutable';

import {commonType} from '../../commons/constants/actionTypes';
import createReducer from '../../utils/createReducer';

const types = commonType;
const state = fromJS({
    'MESSAGE': '',
    'LOCATION': [],
    'AREA': [],
    'IMAGE_BLOCKS': [],
    'SUBSCRIPTION': {},
    'SWEET_ALERT': {
        type: undefined, //you can input 'alert', 'confirm'
        icon: undefined, //如果是alert，可以決定icon要用什麼
        message: undefined,
        confirmTitle: undefined,
        cancelTitle: undefined,
        confirmClicked: false,
        cancelClicked: false
    },
    'COMPANY': {},
    'IS_LOADING': false
});

const GET_LOCATION_INFO_SUCCESS = (state, {payload}) => {
    // console.info("GET_LOCATION_INFO_SUCCESS : ", JSON.stringify(payload));
    return state.update('LOCATION', value => fromJS(payload));
};

const GET_LOCATION_INFO_FAIL = (state) => {
    return state.update('LOCATION', value => '取得 location 失敗');
};

const GET_AREA_INFO_SUCCESS = (state, {payload}) => {
    // console.info("GET_AREA_INFO_SUCCESS : ", JSON.stringify(payload));
    return state.update('AREA', value => fromJS(payload));
};

const GET_AREA_INFO_FAIL = (state) => {
    return state.update('MESSAGE', value => '取得 location 失敗');
};

const MESSAGE_SUCCESS = (state, {payload}) => {
    return state.update('MESSAGE', value => payload);
};

const MESSAGE_FAIL = (state, {payload}) => {
    return state.update('MESSAGE', value => payload);
};

const UPLOAD_IMAGE_SUCCESS = (state, {payload}) => {
    // console.info("UPLOAD_IMAGE : ", JSON.stringify(payload));
    return state.update('MESSAGE', value => '上傳圖片成功');
};

const UPLOAD_IMAGE_FAIL = (state, {payload}) => {
    return state.update('MESSAGE', value => '上傳圖片失敗');
};

const DELETE_IMAGE_SUCCESS = (state) => {
    return state.update('MESSAGE', value => '刪除圖片成功');
};

const DELETE_IMAGE_FAIL = (state, {payload}) => {
    return state.update('MESSAGE', value => '刪除圖片失敗');
};

const UPLOAD_IMAGE_BLOCKS = (state, {payload}) => {
    // console.info("UPLOAD_IMAGE_BLOCKS : ", JSON.stringify(payload));
    return state.update('IMAGE_BLOCKS', value => fromJS(payload));
};

const SUBMIT_SUBSCRIPTION = (state) => {
    return state
        .update('SUBSCRIPTION', value => fromJS({contactEmail:''}))
        //.update('SWEET_ALERT', value => fromJS({type: 'confirm', confirmTitle: '訂閱', cancelMessage:'取消', message: '歡迎訂閱'}));
        .update('SWEET_ALERT', value => fromJS({type: 'alert', message: '訂閱成功'}));
};

const UPDATE_SUBSCRIPTION = (state, {payload}) => {
    return state.update('SUBSCRIPTION', value => fromJS(payload));
};

const SET_SWEET_ALERT = (state, {payload}) => {
    return state.update('SWEET_ALERT', value => fromJS(payload));
};

const ON_ALERT_CONFIRM_CLICK = (state) => {
    return state.updateIn(['SWEET_ALERT'], value => fromJS({confirmClicked: true}));
};

const ON_ALERT_CANCEL_CLICK = (state) => {
    return state.updateIn(['SWEET_ALERT'], value => fromJS({cancelClicked: true}));
};

const FETCH_COMPANY_PROFILE = (state, {payload}) => {
    return state.update('COMPANY', value => fromJS(payload));
};

const CLEAN_COMPANY_PROFILE = (state) => {
    return state.update('COMPANY', value => fromJS({}))
};

const TOGGLE_IS_LOADING = (state, {payload}) => {
    //console.log('Toggle payload:', payload);
    if(typeof payload === 'boolean'){
        return state.update('IS_LOADING', value => payload);
    }else {
        return state.update('IS_LOADING', value => !value);
    }

};

const handlers = {
    [types.GET_LOCATION_INFO_SUCCESS]: GET_LOCATION_INFO_SUCCESS,
    [types.GET_LOCATION_INFO_FAIL]: GET_LOCATION_INFO_FAIL,
    [types.GET_AREA_INFO_SUCCESS]: GET_AREA_INFO_SUCCESS,
    [types.GET_AREA_INFO_FAIL]: GET_AREA_INFO_FAIL,
    [types.MESSAGE_SUCCESS]: MESSAGE_SUCCESS,
    [types.MESSAGE_FAIL]: MESSAGE_FAIL,
    [types.UPLOAD_IMAGE_SUCCESS]: UPLOAD_IMAGE_SUCCESS,
    [types.UPLOAD_IMAGE_FAIL]: UPLOAD_IMAGE_FAIL,
    [types.DELETE_IMAGE_SUCCESS]: DELETE_IMAGE_SUCCESS,
    [types.DELETE_IMAGE_FAIL]: DELETE_IMAGE_FAIL,
    [types.UPLOAD_IMAGE_BLOCKS]: UPLOAD_IMAGE_BLOCKS,
    [types.SUBMIT_SUBSCRIPTION]: SUBMIT_SUBSCRIPTION,
    [types.UPDATE_SUBSCRIPTION]: UPDATE_SUBSCRIPTION,
    [types.SET_SWEET_ALERT]: SET_SWEET_ALERT,
    [types.ON_ALERT_CONFIRM_CLICK]: ON_ALERT_CONFIRM_CLICK,
    [types.ON_ALERT_CANCEL_CLICK]: ON_ALERT_CANCEL_CLICK,
    [types.FETCH_COMPANY_PROFILE]: FETCH_COMPANY_PROFILE,
    [types.CLEAN_COMPANY_PROFILE]: CLEAN_COMPANY_PROFILE,
    [types.TOGGLE_IS_LOADING]: TOGGLE_IS_LOADING
}

export default createReducer(state, handlers);
