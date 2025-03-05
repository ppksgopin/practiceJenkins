import axios from 'axios';
import {omit} from 'lodash';

import {auth, commonType, exchangeType, forgetPasswordType} from '../../commons/constants/actionTypes';
import {getUserExchangeList} from "../../scenes/exchange/components/ExchangeList/action";
import {toDate} from '../../utils/dateTimeConverter';
import zeroMoment from '../../utils/zeroMoment';
import { getUserZcoins } from '../../scenes/dashboard/action';
import { loadingData } from '../common/action';
import {
    DashboardRoute,
    RegSuccessRoute,
    UserEditRoute,
    UserLoginRoute,
    UserRegisterRoute
} from "../../commons/routePaths";

//v2.10.0
export function persist(payload) {
    return (dispatch) => {
        dispatch(payload);
    }
}

//檢查Mobile 是否存在於系統
function checkBindMobile(loginReqDTO, history) {
    return (dispatch) => {
        axios.post('user/check/bind/mobile',loginReqDTO).then(res =>{
            // console.log('check bind mobile: ', JSON.stringify(res.data, null, 2) );
            //手機存在於系統
            if(res.data.bind === true) {
                //Login
                axios.post('user/login', loginReqDTO).then(loginRes => {
                    localStorage.setItem('token', loginRes.data.accessToken);
                    dispatch({type: auth.LOGIN, payload: loginRes.data});
                    //api 修改回傳UserProfile 故不用再去query profile
                    if(loginRes.data.profileCompletion) {
                        dispatch(loadingData(false));
                        const targetPath = typeof localStorage.getItem('targetPath') === 'string' ? localStorage.getItem('targetPath') : null
                        if(targetPath !==null) {
                            history.push(targetPath);
                        }else{
                            history.push(DashboardRoute());
                        }
                    }
                }, error => {
                    dispatch({type: auth.LOGIN_FAIL, payload: error.response.data});
                    dispatch({type: commonType.MESSAGE_FAIL, payload: `loginType: ${loginReqDTO.loginType}登入失敗, 請確認是否正確登入！`});
                    //history.push(UserLoginRoute());
                }).finally(() => {
                    // console.log('finally: API Login')
                    dispatch(loadingData(false))
                })
            }else {
                //不存在導至『手機驗證』
                history.push(UserRegisterRoute());
            }
        }, e => {
            //API 檢查手機是否綁定錯誤，導回登入頁
            dispatch({type: auth.LOGIN_FAIL, payload: error.response.data});
            dispatch({type: commonType.MESSAGE_FAIL, payload: '檢查手機是否綁定錯誤，請聯絡客服。'});
            //history.push(UserLoginRoute());
        }).finally(() => {console.log('finally : API 檢查手機是否已綁定')})
    }
}


export function loginCheck(loginReqDTO, history) {

    const request = axios.post('user/isIdExist', loginReqDTO);
    return (dispatch) => {
        request.then(res => {
            dispatch({type: auth.LOGIN_CHECK, payload: res.data});
            // console.log('login check res:' , JSON.stringify(res.data, null, 2));
            if(res.data.exist === true) {
                dispatch(checkBindMobile(loginReqDTO,history));

            }else {
                //Facebook 不存在系統：１. 檢查email 是否存在
                /*if(loginReqDTO.loginType === 1) {
                    const oAuth = typeof localStorage.getItem('oAuth') === 'string' ? JSON.parse(localStorage.getItem('oAuth')) : null
                    const postData = {
                        email: oAuth.email,
                        facebookId: oAuth.id
                    }
                    console.log('Facebook check email postData: ', postData);
                    axios.post('user/check/email', postData).then( (resp) => {
                        console.log('facebook check email response: ', resp.data);
                        if(resp.data.exist === true){
                            dispatch(checkBindMobile(loginReqDTO,history));
                        }else {
                            dispatch(loadingData(false));
                            history.push(UserRegisterRoute())
                        }
                    }, er => {
                        dispatch({type: auth.LOGIN_FAIL, payload: er.response.data});
                        dispatch({type: commonType.MESSAGE_FAIL, payload: '檢查Email是否存在系統錯誤，請確認Facebook 是否登入無誤！! '});
                    }).finally(() => {
                        console.log('finally: API Facebook Check Email')
                        dispatch(loadingData(false))
                    })
                }*/

                //LineID、FacebookId 不存在於系統，導至『手機驗證頁』。上面的Facebook流程，先行拿掉不驗證Email。
                // 流程跟Line 一樣。
                if(loginReqDTO.loginType ===4 || loginReqDTO.loginType===1) {
                    dispatch(loadingData(false));
                    history.push(UserRegisterRoute())
                }
            }
        }).catch(err => {
            //　API 驗證Line、Facebook ID 失敗。
            console.log('LoginCheck Error: ', err);
            dispatch({type: auth.LOGIN_FAIL, payload: err.response.data});
            dispatch({type: commonType.MESSAGE_FAIL, payload: '登入失敗, 請檢查帳號密碼'});
        })
    }
}

export function login(loginReqDTO) {
    // console.log("loginReqDTO " + JSON.stringify(loginReqDTO));
    const url = `user/login`;
    const request = axios.post(url, loginReqDTO);

    return dispatch => {
        request.then(response => {
            localStorage.setItem('token', response.data.accessToken);
            dispatch({type: auth.LOGIN, payload: response.data});
            //get user profile
            const userDetailUrl = `user/profile`;
            // console.log('response.data.accessToken:', response.data.accessToken);
            const userDetail = axios.get(userDetailUrl, {'Authorization': `Bearer ${response.data.accessToken}`});
            userDetail.then(resp => {
                resp.data.birthday = toDate(resp.data.birthday);

                dispatch({type: auth.PROFILE, payload: resp.data});
            }, error => {
                dispatch({type: auth.LOGIN_FAIL, payload: error.response.data});
                dispatch({type: commonType.MESSAGE_FAIL, payload: '取得個人資訊失敗'});
            });
        }, error => {
            dispatch({type: auth.LOGIN_FAIL, payload: error.response.data});
            dispatch({type: commonType.MESSAGE_FAIL, payload: '登入失敗, 請檢查帳號密碼'});
        });
    };
}


export function logout(callback) {
    return dispatch => {
        localStorage.removeItem('token');
        dispatch({type: auth.LOGOUT_SUCCESS, payload: null});
        dispatch({type: exchangeType.GET_USER_EXCHANGE_LIST, payload: []});
        callback();
    };
}

export function profile() {
    const url = `user/profile`;
    const request = axios.get(url);

    return dispatch => {
        return request.then(resp => {
            resp.data.birthday = toDate(resp.data.birthday);
            dispatch({type: auth.PROFILE, payload: resp.data});
            return {facebookId: resp.data.facebookId, facebookName: resp.data.facebookName};
        }).catch(error => {
            localStorage.removeItem('token');
            throw error;
        })
    };
}

export function updateProfile(updateProfileDTO, source, history) {
    let requestData = Object.assign({}, updateProfileDTO);
    omit(requestData, ['userId']);
    requestData.birthday = zeroMoment(requestData.birthday).utc();
    //source=2 表示從密碼設定進來的，意謂是從手機註冊或Line、FB登入來註冊的。
    // console.log('source: ', source);
    if(source ==="2"){
        const oAuth = typeof localStorage.getItem('oAuth') === 'string' ? JSON.parse(localStorage.getItem('oAuth')) : undefined
        const register = typeof localStorage.getItem('register') === 'string' ? JSON.parse(localStorage.getItem('register')) : undefined
        const storeId = typeof localStorage.getItem('storeId') === 'string' ? localStorage.getItem('storeId') : undefined

        if(oAuth !== undefined && register !== undefined){
            // console.log('oAuth:', oAuth, 'id:', oAuth.id)
            switch (oAuth.provider) {
                case "line":
                    requestData.lineId = oAuth.id ;
                    requestData.pictureURL = oAuth.pictureUrl || "" ;
                    requestData.signUpSource='line';
                    break;
                case "facebook":
                    requestData.facebookId = oAuth.id
                    requestData.pictureURL = oAuth.pictureUrl || "";
                    requestData.signUpSource='fb';
                    break
                default:
                    break;
            }
            requestData.mobile = register.phoneNumber;
            requestData.password = register.password;
            if(storeId !== undefined){
                // console.log('storeId:'+storeId)
                requestData.storeId = storeId
                localStorage.removeItem('storeId')
            }

        }else if(register !== undefined){
            // console.log('register: ', register, 'phoneNumber: ', register.phoneNumber, 'password:', register.password);
            requestData.mobile = register.phoneNumber;
            requestData.password = register.password;
            requestData.signUpSource='mobile'
            //轉導註冊id
            if(storeId !== undefined){
                // console.log('storeId:'+storeId)
                requestData.storeId = storeId
                localStorage.removeItem('storeId')
            }
        }
    }

   // console.log('update profile request: ', JSON.stringify(requestData, null, 2));

    const url = `user/profile`;
    const request = axios.post(url, requestData);

    return dispatch => {
        request.then(resp => {

            if(null === localStorage.getItem('token')){
                localStorage.setItem('token', resp.data.accessToken)
            }
            dispatch({type: auth.UPDATE_PROFILE_SUCCESS, payload: updateProfileDTO});
            //v2.10.0 無論是新建或編輯資料，編輯資料完後，皆先導回Dashboard。
            //11.26 新建導至註冊成功，編輯導回Dashboard
            source ==='2' ? history.push(RegSuccessRoute()) : history.push(DashboardRoute());

            /*const targetPath = typeof localStorage.getItem('targetPath') === 'string' ? localStorage.getItem('targetPath') : null
            if(targetPath !==null) {
                history.push(targetPath);
            }else{
                history.push(DashboardRoute());
            }*/
        }, error => {
            dispatch({
                type: auth.UPDATE_PROFILE_FAIL,
                payload: {
                    status: error.response.status,
                    message: error.response.status === 409? '更新個人資料失敗，電子信箱已被註冊': error.response.status === 500 ? '伺服器發生錯誤，請連絡客服人員' :'更新個人資料失敗，請檢查輸入欄位'
                }
            });
            dispatch({type: commonType.MESSAGE_FAIL, payload: '更新個人資料失敗，請檢查輸入的欄位'});
        });
    };
}

/**
 * 9/18 新增scenario
 * @param phoneNumber
 * @param callback
 * @returns {Function}
 */
export function sendVerifyCode(phoneNumber, scenario, callback) {
    const url = `user/verifyCode/${phoneNumber}/${scenario}`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {

            const {intervalForNext, warningMessage} = response.data;
            if(warningMessage) {
                dispatch({type: commonType.MESSAGE_FAIL, payload: warningMessage});
                dispatch({type: auth.SEND_VERIFY_CODE, payload: response.data});

            } else {
                dispatch({type: commonType.MESSAGE_FAIL, payload: ''});
                dispatch({type: auth.SEND_VERIFY_CODE, payload: response.data});
            }
            callback(intervalForNext, warningMessage);
        }, error => {
            dispatch({type: auth.SEND_VERIFY_CODE_FAILED, payload: error.response.data});
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得驗證碼失敗，請確定手機號碼輸入正確'});
        });
    };
}

export function bindingPhoneNumber(bindingPhoneNumberDTO, callback) {
    const url = `user/bindingPhoneNumber`;
    const request = axios.post(url, bindingPhoneNumberDTO);

    return dispatch => {
        request.then(resp => {
            callback();
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '綁定電話號碼失敗，請確認驗證碼與手機號碼'});
        });
    };
}

export function updateUserPhoto(image) {
    // console.log('image: ', image);
    let updateUserPhotoDTO = {
        'image': image.url
    };
    const url = `user/photo`;
    const request = axios.post(url, updateUserPhotoDTO);

    return dispatch => {
        request.then(resp => {
            dispatch({type: auth.UPDATE_USER_PHOTO_SUCCESS, payload: image});
        }, error => {
            dispatch({type: auth.UPDATE_USER_PHOTO_FAIL, payload: error.response.data});
            dispatch({type: commonType.MESSAGE_FAIL, payload: '更新個人照片失敗，請洽管理人員'});
        });
    };
}

export function checkLoginStatus(noht) {
    return (dispatch, getState) => {
        if(noht !== true){
            const token = localStorage.getItem('token');
            const logon = getState().data.auth.get('IS_LOGINED');
            if(!token) {
                dispatch({type: auth.CHECK_LOGON, payload: false});
            } else {
                const url = `common/checkTokenExpired`;
                const request = axios.post(url, {token});
                return request.then(resp => {
                    if(resp.data) {
                        dispatch({type: auth.CHECK_LOGON, payload: false});
                    } else {
                        dispatch({type: auth.CHECK_LOGON, payload: true});
                    }
                    return resp;
                }).then(async res => {
                    //console.log('checkLoginStatus: ', res.data);
                    //為解決取userId的問題，所以都要取profile資料
                    await dispatch(profile())
                    dispatch(asyncPhotoURL())
                    dispatch(getUserExchangeList())
                })
            }
        }
    }
}



export function bind3rdPartyId(reqBind3rdPartyId, history){
        return async (dispatch, getState) => {
                return await axios.post('user/bind/3rd', reqBind3rdPartyId)
                 .then((resp) => {
                    return resp;
                }).then((res) => {
                     dispatch(profile());
                }).then((res) => {
                     dispatch({type: commonType.MESSAGE_SUCCESS, payload: '綁定完成'});
                }).catch(error => {
                        // console.log('bind 3rdParty id error: ', error.response.data);
                        dispatch({
                            type: commonType.MESSAGE_FAIL,
                            payload: error.response.status === 409 ? error.response.data.message : "綁定失敗，請聯絡客服!"
                        });
                }).finally(() => {
                    console.log('finally:', new Date().getTime())
                    localStorage.removeItem('bind');
                    history.push(UserEditRoute());
                    dispatch(loadingData(false));
                });
            }
}

export function unbind3rdPartyId(media) {
    return (dispatch) => {
        return axios.get(`user/unbind/3rd/${media}`).then(resp => {
                dispatch({type:auth.UNBIND_3RD_PARTY_ID, payload: media});
                dispatch({type: commonType.MESSAGE_SUCCESS, payload:'解除成功'});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '解除失敗'});
        })
    }
}

export function asyncPhotoURL(image) {
    return (dispatch, getState) => {
        const photoURL = localStorage.getItem('photoURL');
        if(photoURL && photoURL !== 'null' && photoURL !=='undefined') {
            dispatch({ type:auth.SET_PHOTO_URL, payload:photoURL})
        }else{
            dispatch({ type:auth.SET_PHOTO_URL, payload:''})
        }
    }
}
