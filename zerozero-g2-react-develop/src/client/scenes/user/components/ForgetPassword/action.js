import axios from 'axios';
import {UserForgetRoute, UserLoginRoute, UserResetPassword} from "../../../../commons/routePaths";
import {sendVerifyCode} from '../../../../data/auth/action';
import { encryptToAES128 } from "../../../user/components/Register/action";
import {forgetPasswordType, commonType, registerType} from '../../../../commons/constants/actionTypes';

export function getValidationCode(phoneNumber, callback) {
    // console.info("getValidationCode phoneNumber : ", phoneNumber);

    const url = `user/check/${phoneNumber}`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            const isRegisterDTO = response.data;
            if (isRegisterDTO.exist) {
                dispatch(sendVerifyCode(phoneNumber,'fgpw', callback));
            } else {
                dispatch({type: commonType.MESSAGE_FAIL, payload: '此電話號碼尚未註冊'});
            }
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '檢查是否註冊失敗，請洽管理人員！'});
        });
    };
}

export function forgetPasswordVerifyCode(verifyCodeDTO, history) {
    const url = `user/verifyCode`;
    verifyCodeDTO.code = encryptToAES128(verifyCodeDTO.code);
   // console.info("verifyCodeDTO : ", JSON.stringify(verifyCodeDTO, null, 2));
    const request = axios.post(url, verifyCodeDTO);

    return dispatch => {
        return request.then(response => {
            //驗證驗證碼成功
            dispatch({type: forgetPasswordType.FORGET_PASSWORD_SET_MOBILE, payload: verifyCodeDTO.phone});
            dispatch({type: registerType.VERIFY_SUCCESS, payload: verifyCodeDTO});
            dispatch({type: commonType.MESSAGE_FAIL, payload: ''});
            history.push(UserResetPassword())
        }, err => {
            //API 驗證手機 失敗 回手機驗證頁
            dispatch({type: registerType.VERIFY_MOBILE_FAIL, payload: err.response.data});
            dispatch({type: commonType.MESSAGE_FAIL, payload: '驗證手機失敗，請聯絡客服!'});
            dispatch({type: registerType.RESET_VERIFY_VALUE});
            history.push(UserForgetRoute());
        })
    }
}

export function resetPassword(resetPasswordDTO, history) {
    const url = `user/password/reset`;

    let requestDTO = {
        mobile: resetPasswordDTO.mobile,
        newPassword: encryptToAES128(resetPasswordDTO.password),
    };

    const request = axios.post(url, requestDTO);

    return dispatch => {
        request.then(response => {
            //dispatch({type: forgetPasswordType.FORGET_PASSWORD_RESET_SUCCESS, payload: resetPasswordDTO});
            dispatch({type: commonType.MESSAGE_FAIL, payload: '設定密碼完成，請重新登入!!'});
            history.push(UserLoginRoute());
        }, error => {
            dispatch({type: forgetPasswordType.FORGET_PASSWORD_RESET_FAIL, payload: error.response.data});
            dispatch({type: commonType.MESSAGE_FAIL, payload: '忘記密碼呼叫失敗，請檢查驗證碼與手機號碼'});
        });
    };
}



/* 舊程序無需使用
export function forgetPassword(forgetPasswordDTO) {
    // console.info("forgetPasswordDTO : ", JSON.stringify(forgetPasswordDTO));
    const url = `user/resetPassword`;

    let requestDTO = {
        phoneNumber: forgetPasswordDTO.phoneNumber,
        newPassword: encryptToAES128(forgetPasswordDTO.newPassword),
        code: encryptToAES128(forgetPasswordDTO.code)
    } ;
    const request = axios.post(url, requestDTO);

    return dispatch => {
        request.then(response => {
            dispatch({type: forgetPasswordType.FORGET_PASSWORD_SUCCESS, payload: forgetPasswordDTO});
        }, error => {
            dispatch({type: forgetPasswordType.FORGET_PASSWORD_FAIL, payload: error.response.data});
            dispatch({type: commonType.MESSAGE_FAIL, payload: '忘記密碼呼叫失敗，請檢查驗證碼與手機號碼'});
        });
    };
}
*/

