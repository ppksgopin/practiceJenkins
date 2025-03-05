import {Map, fromJS} from 'immutable';

import {auth} from '../../commons/constants/actionTypes';
import createReducer from '../../utils/createReducer';

const types = auth;
const state = fromJS({
    MESSAGE: '',
    IS_LOGINED: false,
    TOKEN: null,
    PROFILE: {
        userId: '',
        phoneNumber: '',
        email: '',
        userName: '',
        gender: '',
        birthday: '',
        addressCounty: '',
        addressTownship: '',
        address: '',
        photo: '',
        langCode: 'zh_TW',
        userLevel: '',
        job: '',
        accessToken: '',
        lineId:'',
        facebookId:'',
        mobile:''
    },
    VERIFY_CODE_RESP: {
        verifyCode:{},
        intervalForNext:0,
        warningMessage: undefined,
        sentCount:0
    },
    Bind3rdPartyId:{},
    USER_PHOTO_URL:"",
});



const LOGIN = (state, {payload}) => {
    if(payload.photoURL){
        localStorage.setItem('photoURL', payload.photoURL);
    }
    return state.update('IS_LOGINED', value => true)
        .update('PROFILE', value => fromJS(payload));
}

const LOGIN_FAIL = (state) => {
    return state.update('IS_LOGINED', value => false);
}

const LOGOUT_SUCCESS = (state, {payload}) => {
    return state
        .update('IS_LOGINED', value => false)
        .update('PROFILE', value => fromJS(INITIAL_PROFILE))
        .update('USER_PHOTO_URL', value => '')
}

const LOGOUT_FAIL = (state) => {
    return state;
}

const UNAUTHORIZED = (state) => {
    return state.update('IS_LOGINED', value => false);
}

const PROFILE = (state, {payload}) => {
    if(payload.photoURL){
        localStorage.setItem('photoURL', payload.photoURL);
    }
    return state
        .update('IS_LOGINED', value => true)
        .update('PROFILE', value => fromJS(payload))
        .update('MESSAGE', value => undefined);
};

const UPDATE_PROFILE_SUCCESS = (state, {payload}) => {
    if(payload.photoURL){
        localStorage.setItem('photoURL', payload.photoURL);
    }

    return state
        .update('IS_LOGINED', value => true)
        .update('PROFILE', value => fromJS(payload))
        .update('MESSAGE', value => '更新個人資料成功');
};

const UPDATE_PROFILE_FAIL = (state, {payload}) => {
    return state.update('MESSAGE', value => payload.message);
};

const UPDATE_USER_PHOTO_SUCCESS = (state, {payload}) => {
    if(payload.photoURL){
        localStorage.setItem('photoURL', payload.photoURL);
    }
    return state.updateIn([
        'PROFILE', 'photoURL'
    ], value => payload.url);
};

const UPDATE_USER_PHOTO_FAIL = (state, {payload}) => {
    return state.update('MESSAGE', '更新個人照片失敗');
};

const UPDATE_TOKEN_SUCCESS = (state, {payload}) => {
    return state.update('TOKEN', value => payload);
};

const UPDATE_TOKEN_FAIL = (state, {payload}) => {
    return state.update('MESSAGE', '更新個人照片失敗');
};

const CHECK_LOGON = (state, {payload}) => {
    return state.update('IS_LOGINED', value => payload);
};

const SEND_VERIFY_CODE = (state, {payload}) => {
    return state.update('VERIFY_CODE_RESP', value => fromJS(payload));
};

const BIND_3RD_PARTY_ID = (state, {payload}) => {
    if(payload.media ==='fb'){
        return state.updateIn(['PROFILE', 'facebookId'], value => payload.identity );
    }else{
        return state.updateIn(['PROFILE', 'lineId'], value => payload.identity );
    }
}

const UNBIND_3RD_PARTY_ID = (state, {payload}) => {
    if(payload==='fb'){
        return state.updateIn(['PROFILE', 'facebookId'], value => '' );
    }else{
        return state.updateIn(['PROFILE', 'lineId'], value => '' );
    }
}

const BIND_3RD_PARTY_SUCCESS = (state, {payload}) => {
    return state.update('Bind3rdPartyId', value => fromJS(payload))
}

const SET_PHOTO_URL = (state, {payload}) => {
    return state.update('USER_PHOTO_URL', value => fromJS(payload))
}


const INITIAL_PROFILE = {
    userId: '',
    phoneNumber: '',
    email: '',
    userName: '',
    gender: '',
    birthday: '',
    addressCounty: '',
    addressTownship: '',
    address: '',
    photo: '',
    langCode: 'zh_TW',
    userLevel: '',
    job: '',
    accessToken: '',
    lineId:'',
    facebookId:'',
    mobile:''
}

const handlers = {
    [types.LOGIN]: LOGIN,
    [types.LOGIN_FAIL]: LOGIN_FAIL,
    [types.UNAUTHORIZED]: UNAUTHORIZED,
    [types.PROFILE]: PROFILE,
    [types.UPDATE_PROFILE_SUCCESS]: UPDATE_PROFILE_SUCCESS,
    [types.UPDATE_PROFILE_FAIL]: UPDATE_PROFILE_FAIL,
    [types.UPDATE_USER_PHOTO_SUCCESS]: UPDATE_USER_PHOTO_SUCCESS,
    [types.UPDATE_USER_PHOTO_FAIL]: UPDATE_USER_PHOTO_FAIL,
    [types.UPDATE_TOKEN_SUCCESS]: UPDATE_TOKEN_SUCCESS,
    [types.UPDATE_TOKEN_FAIL]: UPDATE_TOKEN_FAIL,
    [types.LOGOUT_SUCCESS]: LOGOUT_SUCCESS,
    [types.LOGOUT_FAIL]: LOGOUT_FAIL,
    [types.CHECK_LOGON]: CHECK_LOGON,
    [types.SEND_VERIFY_CODE]: SEND_VERIFY_CODE,
    [types.UNBIND_3RD_PARTY_ID]:UNBIND_3RD_PARTY_ID,
    [types.BIND_3RD_PARTY_ID]:BIND_3RD_PARTY_ID,
    [types.BIND_3RD_PARTY_SUCCESS]:BIND_3RD_PARTY_SUCCESS,
    [types.SET_PHOTO_URL]:SET_PHOTO_URL,

}

export default createReducer(state, handlers);
