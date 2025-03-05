import axios from 'axios';
import Base64 from 'crypto-js/enc-base64';
import aes from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8';
import CryptoJS from 'crypto-js';


import {registerType, auth, commonType} from '../../../../commons/constants/actionTypes';
import {AES_IV, AES_KEY} from '../../../../commons/constants/systemConf';
import {
    DashboardRoute,
    UserEditRoute,
    UserLoginRoute,
    UserPasswordRoute,
    UserRegisterRoute
} from "../../../../commons/routePaths";
import {sendVerifyCode} from "../../../../data/auth/action";
import {loadingData} from "../../../../data/common/action";
import {toDate} from "../../../../utils/dateTimeConverter";


export function resetRegister() {
    return dispatch => {
        return dispatch({type: registerType.RESET_REGISTER_VALUE});
    }
}

//v2.10.0
export function setPassword(registerDTO, history) {
  //console.log('registerDTO: ', JSON.stringify(registerDTO, null, 2 ));
  return dispatch => {
      dispatch({type: registerType.REGISTER_SUCCESS, payload: registerDTO});
      dispatch({type: commonType.MESSAGE_FAIL, payload: ''});
      history.push({
          pathname:UserEditRoute(),
          search:'?source=2'
      });
  }
}

export function getValidationCode(phoneNumber, callback, _togglePhoneOccupiedModel) {
    // console.info("getValidationCode phoneNumber : ", phoneNumber);

    //check user is registered
    const url = `user/check/${phoneNumber}`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            const isRegisterDTO = response.data;
            // console.info("isRegisterDTO = " + JSON.stringify(isRegisterDTO));
            if (isRegisterDTO.exist) {
                dispatch({type: commonType.MESSAGE_FAIL, payload: '此手機號碼已被註冊'})
                _togglePhoneOccupiedModel()
            }else {
                dispatch(dispatch(sendVerifyCode(phoneNumber,'signup', callback)));
            }
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '檢查是否註冊失敗，請洽管理人員！'});
        });
    };
}

//v2.10.0
export function verifyCode(verifyCodeDTO, history) {
    // console.info("verifyCodeDTO : ", JSON.stringify(verifyCodeDTO));

    const url = `user/verifyCode`;
    verifyCodeDTO.code = encryptToAES128(verifyCodeDTO.code);
    //console.info("verifyCodeDTO : ", JSON.stringify(verifyCodeDTO, null, 2));
    const request = axios.post(url, verifyCodeDTO);

    return dispatch => {

        dispatch(loadingData());

        return request.then(response => {
                //驗證驗證碼成功
                dispatch({type: registerType.VERIFY_SUCCESS, payload: verifyCodeDTO});
                dispatch({type: commonType.MESSAGE_FAIL, payload: ''});
            //檢查電話是否存在於系統
            axios.get(`user/check/${verifyCodeDTO.phone}`).then(resp => {
                dispatch({type: registerType.VERIFY_MOBILE_SUCCESS, payload: resp.data});
                if(resp.data.exist) {
                    const oAuth = typeof localStorage.getItem('oAuth') === 'string' ? JSON.parse(localStorage.getItem('oAuth')) : null
                    //console.log('oAuth: ', oAuth);
                    if(oAuth ===null ){
                        //手機註冊
                        //已被使用，重導至手機驗證頁
                        dispatch({type:registerType.VERIFY_MOBILE_TYPE, payload: 3});
                        dispatch({type: commonType.MESSAGE_FAIL, payload: '此手機號碼已被註冊'})
                        history.push(UserRegisterRoute());

                    }else{

                        let users = new Array();
                        const phoneData = {
                            loginType:3,
                            identity: verifyCodeDTO.phone
                        };

                        //Line 和 Facebook 走同樣的流程
                        const userData = {
                            loginType: oAuth.loginType,
                            identity: oAuth.id,
                            pictureUrl: oAuth.pictureUrl,
                            userName: oAuth.displayName
                        };

                        users.push(phoneData);
                        users.push(userData);
                        const postData = {users};

                            //整併帳號
                            axios.post(`user/merge`, postData).then(r => {
                                dispatch({type: registerType.MERGE_SUCCESS, payload: verifyCodeDTO});
                                dispatch({type: commonType.MESSAGE_FAIL, payload: ''});
                                //整併帳號完成，執行login
                               // console.log('merge resp: ', r, 'status: ', r.status );
                                const loginReqDTO = {
                                    loginType: oAuth.loginType,
                                    identity: oAuth.id,
                                }
                                //登入帳號
                                axios.post('user/login', loginReqDTO).then(loginRes => {
                                    localStorage.setItem('token', loginRes.data.accessToken);
                                    dispatch({type: auth.LOGIN, payload: loginRes.data});
                                    //console.log('loginRes:', loginRes);
                                    //檢查會員資料是否已填
                                    if(loginRes.data.profileCompletion) {
                                        //全部完成後導至首頁
                                        const targetPath = typeof localStorage.getItem('targetPath') === 'string' ? localStorage.getItem('targetPath') : null
                                        if(targetPath !==null) {
                                            history.push(targetPath);
                                        }else{
                                            history.push(DashboardRoute());
                                        }
                                    }
                                    //否: 要跳編輯頁, 利用withCheckMobile HOC，將Modal 彈出
                                }, e => {
                                    //整併完成但登入失敗
                                    dispatch({type: auth.LOGIN_FAIL, payload: e.response.data});
                                    dispatch({type: commonType.MESSAGE_FAIL, payload: '歸戶帳號完成，但登入失敗，請聯絡客服!'});
                                    dispatch({type: registerType.RESET_VERIFY_VALUE});
                                    history.push(UserLoginRoute());
                                })
                                //整併帳號不會有回傳result==false的狀況，不需處理
                            }, err => {
                                //API 整併帳號 失敗 回手機驗證頁
                                // console.log('merge fail:', err);
                                dispatch({type: registerType.MERGE_FAIL, payload: err.response.data});
                                dispatch({type: commonType.MESSAGE_FAIL, payload: '整併帳號失敗，請聯絡客服!'});
                                dispatch({type: registerType.RESET_VERIFY_VALUE});
                                history.push(UserRegisterRoute());
                            })
                        }
                        //End Line Facebook process
                }else {
                    //手機不存在系統，導至設定密碼頁
                    history.push(UserPasswordRoute());
                }
                //End 手機驗證

            }, err => {
                //API 驗證手機 失敗 回手機驗證頁
                dispatch({type: registerType.VERIFY_MOBILE_FAIL, payload: err.response.data});
                dispatch({type: commonType.MESSAGE_FAIL, payload: '驗證手機失敗，請聯絡客服!'});
                dispatch({type: registerType.RESET_VERIFY_VALUE});
                history.push(UserRegisterRoute());
            });

        }, error => {
            // API 驗證驗證碼 失敗, 回手機驗證頁
            // console.log('verify code err: ', error);
            dispatch({type: registerType.VERIFY_FAIL, payload: error.response.data});
            dispatch({type: commonType.MESSAGE_FAIL, payload: '驗證碼驗證失敗，請檢查手機號碼與驗證碼是否一致'});
            dispatch({type: registerType.RESET_VERIFY_VALUE});
            history.push(UserRegisterRoute());
        }).finally(() => {
            dispatch(loadingData());
        });
    };
}

export function encryptToAES128(original) {
    //console.log('AES_IV:', AES_IV);
    //console.log('AES_KEY:', AES_KEY);
    const key = CryptoJS.enc.Utf8.parse(AES_KEY);
    const iv = CryptoJS.enc.Utf8.parse(AES_IV);
    const words = CryptoJS.enc.Utf8.parse(original);
    const encrypted = CryptoJS.AES.encrypt(words, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC
    });
    //console.log('encrypted:', encrypted.toString());
    return encrypted.toString();
}

export function resetVerifyCode() {
    return dispatch => {
        // console.debug('action resetVerifyCode is called');
        return dispatch({type: registerType.RESET_VERIFY_VALUE});
    };
}

export function getSuccessData() {
    const url = `user/signUp/successData`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: registerType.GET_REG_SUCCESS_DATA, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: ' 取得註冊成功訊息失敗'});
        });
    }
}
