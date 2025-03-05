import axios from "axios";

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getApiPath, getApiVersion} from "../../../../../server/middlewares/axiosMiddleware";
import {auth, commonType} from "../../../../commons/constants/actionTypes";
import axiosMiddleware from "../../../../commons/middleWare/axiosMiddleware";
import {DashboardRoute, UserEditRoute, UserRegisterRoute} from "../../../../commons/routePaths";
import {login, loginCheck, persist, bind3rdPartyId} from "../../../../data/auth/action";
import { loadingData } from "../../../../data/common/action";
import queryString from 'query-string'
import _ from 'lodash';
import {toDate} from "../../../../utils/dateTimeConverter";
import Loading from "../../../common/components/Loading_Component/Loading";
import PhoneOccupiedModal from "./PhoneOccupiedModal";
import ProfileEditConfirmModal from "./ProfileEditConfirmModal";

const api = axios.create({
    baseURL: getApiPath(),
})

export default (ChildComponent) => {

     /*async function isIdExist(id) {
        console.log('check line id exist')
        const postData = {
            loginType:4,
            identity:id,
        }
        let res =  await api.post('/v2.10.0/user/isIdExist', postData) ;
        return res
    }

    async function isRegister(phoneNumber) {
        //TODO: 沒有電話可以拿?
        let res = await api.get(`/v2.10.0/user/isRegister/${phoneNumber}`);
        return res ;
    }

    async function loginCheck(loginReqDTO) {
        let res = await api.post('v2.10.0/user/login/check', loginReqDTO);
        return res ;
    }
    async function login(loginReqDTO) {
        let res = await api.post('v2.10.0/user/login', loginReqDTO);
        return res ;
    }

    async function getProfile(accessToken) {
         console.log('accessToken: ', accessToken);
        let res = await api.get('v2.10.0/user/profile', { headers: {'Authorization': `Bearer ${accessToken}`}});
        return res ;
    }

    function lineLoginProcess(loginReqDTO, cb, history) {
        loginCheck(loginReqDTO).then(res => {
            cb({type: auth.LOGIN_CHECK, payload: res.data});
            const {loginType, identityExist, mobileBound } = res.data ;
            if(identityExist && mobileBound) {
                login(loginReqDTO).then(loginRes => {
                    localStorage.setItem('token', loginRes.data.accessToken);
                    const accessToken = loginRes.data.accessToken;
                    cb({type: auth.LOGIN, payload: loginRes.data});
                    getProfile(accessToken).then(resp => {
                        resp.data.birthday = toDate(resp.data.birthday);
                        cb({type: auth.PROFILE, payload: resp.data});
                        if(resp.data.profileCompletion) {
                            history.push(DashboardRoute());
                        }else {
                            //history.push(UserEditRoute());
                        }
                    }, error => {
                        cb({type: auth.LOGIN_FAIL, payload: error.response.data});
                        cb({type: commonType.MESSAGE_FAIL, payload: '取得個人資訊失敗'});
                    });
                })
            }
        }).catch(error => {
            cb({type: auth.LOGIN_FAIL, payload: error.response.data});
            cb({type: commonType.MESSAGE_FAIL, payload: '登入失敗, 請檢查帳號密碼'});
        })
    }*/

    class RequireAuth extends Component {


    constructor(props) {
            super(props)
            this.state = {
                auth:false,
            }
        }

        componentWillUnmount() {
            this.props.loadingData(false);
        }

         componentDidMount() {
            const { persist, history } = this.props;
            const authData = queryString.parse(this.props.location.search) ;
            //!authData ? console.log('authData: ', authData) : console.log('no authData ');
            const bind = typeof localStorage.getItem('bind') === 'string' ? JSON.parse(localStorage.getItem('bind')) : null;
            // console.log('bind: ', bind, authData);
            if(null !== bind) {
                this.props.loadingData();
                let reqBind3rdPartyId = {};
                if(authData.provider === 'facebook'){
                    reqBind3rdPartyId = {
                        identity: authData.id,
                        media: 'fb',
                        photoUrl: authData.photo,
                        name: authData.displayName
                    }
                }else if(authData.provider ==='line'){
                    reqBind3rdPartyId = {
                        identity: authData.id,
                        media: 'line',
                        photoUrl: authData.pictureUrl,
                        name: authData.displayName
                    }
                }

                //console.log('reqBind3rdPartyId: ', reqBind3rdPartyId);
                if(!_.isEmpty(reqBind3rdPartyId)){
                    this.props.bind3rdPartyId(reqBind3rdPartyId, history);
                }

            }else {
                //移除oAuth, register
                localStorage.removeItem('oAuth');
                localStorage.removeItem('register');
                localStorage.removeItem('bind');

                //console.log('authData: ',authData,'typeOf:', (typeof authData === 'object'));
                if(authData.provider) {
                    this.props.loadingData();
                    const identity = authData.id ;
                    let loginType ;
                    //console.log('id: ', authData.id);
                    switch (authData.provider) {
                        case "line":
                            localStorage.setItem('oAuth', JSON.stringify({ provider:authData.provider, id: authData.id , pictureUrl: authData.pictureUrl, displayName: authData.displayName, loginType: 4}));
                            loginType = 4;
                            break;
                        case "facebook":
                            localStorage.setItem('oAuth', JSON.stringify({ provider:authData.provider, id: authData.id , email: authData.email, pictureUrl: authData.photo, displayName: authData.displayName,loginType: 1}));
                            loginType = 1;
                            break;
                        default:
                            loginType = 3
                    }

                    let loginReqDTO = {
                        identity: authData.id,
                        loginType: loginType,
                    };

                    this.props.loginCheck(loginReqDTO, history);
                }else {
                    //console.log('og:login');
                    this.props.loadingData(false);
                    //this.setState({auth:true})
                }
            }

        }

        render() {
            //console.log('RequireAuth: ', this.props );
            const {isLoading, profile } = this.props ;
            const { profileCompletion } = profile.toJS();
            return(
                <div className="bg">
                    <Loading isLoading={isLoading} message='載入中...' />
                    { profileCompletion === false ?
                        <ProfileEditConfirmModal openModal={profileCompletion}/>
                        : <ChildComponent {...this.props}/>}
                </div>
            )
        }
    }

    function mapStateToProps(state) {
        return {
            logon: state.data.auth.get('IS_LOGINED'),
            isLoading: state.data.common.get('IS_LOADING'),
            profile: state.data.auth.get('PROFILE'),
        }
    }

    return connect(mapStateToProps, {loginCheck, loadingData, persist, bind3rdPartyId})(RequireAuth)
};



//return connect(mapStateToProps, {getUserZcoins, checkLoginStatus})(RequireAuth)



