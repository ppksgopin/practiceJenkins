import axios from 'axios';

import {forgetPasswordType, commonType} from '../../../../commons/constants/actionTypes';

export function getValidationCode(phoneNumber, callback) {
    const url = `user/verifyCode/${phoneNumber}`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: ''});
            dispatch({type: forgetPasswordType.FORGET_PASSWORD_GET_VALIDATION_CODE_SUCCESS, payload: response.data});
            callback();
        }, error => {
            dispatch({type: forgetPasswordType.FORGET_PASSWORD_GET_VALIDATION_CODE_FAIL, payload: error.response.data});
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得驗證碼失敗，請確定手機號碼輸入正確'});
        });
    };
}
