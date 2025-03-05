import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Field, reduxForm, SubmissionError} from "redux-form/immutable";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {awsUrl} from '../../../../utils/awsFile';
import ProfileEditConfirmModal from './ProfileEditConfirmModal';
import PhoneOccupiedModal from './PhoneOccupiedModal';

import {login} from '../../../../data/auth/action';
import {getLocationInfo} from '../../../../data/common/action';
import {DashboardRoute, UserRegisterRoute, UserForgetRoute} from '../../../../commons/routePaths';
import { UserDeleteFormRoute, UserDeleteSuccessRoute, UserDeleteVerifyRoute, UserDeleteWarnRoute } from '../../../../commons/routePaths';
import {borderRadius, box} from '../../../../styles/mixins';

import styled from 'styled-components';
import {userForm} from '../../../../styles/commons';
import theme from '../../../../styles/theme';

import PageTitle from '../../../common/components/PageTitle';
import BlueButton from '../../../common/components/BlueButton';
import DivButton from '../../../common/components/DivButton';
import ErrorMsg from '../../../common/components/ErrorMsg';
import withAuth from "./withAuth";

const UserForm = styled.form `
  ${userForm};
`

const OtherLogins = styled.div`
    width:580px;
    margin:0px auto 0;
    text-align:center;

    h3{
        font-size:24px;
        color:${theme.colors.gray};
        line-height:24px;
        margin:0px auto 40px;
        overflow:hidden;

        span{
            position:relative;
            display:inline-block;
            &::before{
                content:"";
                position:absolute;
                width:300px;
                height:1px;
                background:${theme.colors.gray};
                top:12px;
                left:-320px;
            }
            &::after{
                content:"";
                position:absolute;
                width:300px;
                height:1px;
                background:${theme.colors.gray};
                top:12px;
                right:-320px;
            }
        }
    }

    @media (max-width: ${theme.medias.phablet}) {
        width:90%;
        margin-bottom:80px;

        h3{
            display:none;
        }
    }
    
`

const FacebookButton = styled(DivButton)`
  background: #1877f2;
  color: #fff;
  display:inline-block !important;
  margin-right:20px;
  text-align:center;
  -webkit-flex: none;
  flex: none;
  width: 280px !important;
  padding-left:40px;
  position:relative;
  ${box};

  &::before{
    position:absolute;
    top:10px;
    left:10px;
    content:"\f09a";
    font-family: FontAwesome;
    font-size:30px;
    line-height:40px;
    width:30px;
    height:30px;
    background:#fff;
    color:#1877f2;
    text-align:center;
    display:inline-block;
    ${borderRadius('100%')};
  }

  @media (max-width: ${theme.medias.phablet}) {
    width:100% !important;
    margin-right:0;
    }
`
const LineButton = styled(DivButton)`
  background: #1BB71F;
  color: #fff;
  display:inline-block !important;
  padding-left:40px;
  position:relative;
  text-align:center;
  ${box};
  -webkit-flex: none;
  flex: none;
  width: 280px !important;

  &::before{
    position:absolute;
    top:10px;
    left:10px;
    content:"";
    display:inline-block;
    width:30px;
    height:30px;
    background: url(${awsUrl("icon_line.png")}) no-repeat center center;
    background-size:30px 30px;
  }

  @media (max-width: ${theme.medias.phablet}) {
    width:100% !important;
    }
`

const setupWebViewJavascriptBridge = (callback) => {

    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () {
        document.documentElement.removeChild(WVJBIframe)
    }, 0)
}


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profileEditModal: false,
            phoneOccupiedModal: false,
        };
        this._toggleProfileEditModel = this._toggleProfileEditModel.bind(this);
        this._togglePhoneOccupiedModel = this._togglePhoneOccupiedModel.bind(this);

        /*this.fbMe = this.fbMe.bind(this);
        this.fbHandleLogin = this.fbHandleLogin.bind(this);*/

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.IS_LOGINED !== this.props.IS_LOGINED) {
            const {IS_LOGINED} = nextProps;
            // get location info & store
            //this.props.getLocationInfo();

            // 避免 user 登入時，進入以下畫面
            let ignorePaths = [
                UserDeleteFormRoute(), UserDeleteSuccessRoute(), UserDeleteVerifyRoute(), UserDeleteWarnRoute()
            ]

            let targetPath = localStorage.targetPath || DashboardRoute()
            if (ignorePaths.includes(targetPath)){
                targetPath = DashboardRoute()
            }


            if (IS_LOGINED) {
                if (window.noht && window.noht ===true) {
                    let cmd;
                    setupWebViewJavascriptBridge((bridge) => {
                        
                        cmd = {
                            "action": "login",
                            "targetPath":  targetPath,
                            "token":  localStorage.token
                        };
                        bridge.callHandler(
                            'phoneCallback',
                            cmd,
                            (response) => {
                                console.log('response : ', response);
                                alert('response : ' + response);
                            },
                        );

                        bridge.registerHandler('webCallback', (data, responseCallback) => {
                            console.log('receiver data : ' + data);
                        });
                    });
                }else {
                  this.props.history.push(targetPath)
                }
            }
        }
    }

    componentDidMount() {
        localStorage.removeItem('photoURL')
        /*window.fbAsyncInit = function () {
            window.FB.init({
                appId: '733342930208506',
                xfbml: true,
                version: 'v7.0'
            });
        }.bind(this);

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));*/
    }

    _togglePhoneOccupiedModel(e) {
        this.setState({
            phoneOccupiedModal:!this.state.phoneOccupiedModal,
        });
    }

    _toggleProfileEditModel(e) {
        this.setState({
            profileEditModal:!this.state.profileEditModal,
        });
    }

    /*fbMe(resp) {
        let requestData = {};
        requestData.identity = resp.id;
        requestData.email = resp.email;
        requestData.loginType = 1;

        this.props.login(requestData);
    }

    fbHandleLogin(response) {
        window.FB.api('/me', {fields: 'name,email'}, this.fbMe);
    }

    fbLogin() {
        window.FB.login(this.fbHandleLogin, {
            scope: 'email,public_profile',
            return_scopes: true
        });
    }*/

    onSubmit(values) {
        let requestData = values.toJS();
        if (!requestData.identity || 0 === requestData.identity.length) {
            throw new SubmissionError({_error: '帳號未輸入'});
        }

        if (!requestData.password || 0 === requestData.password.length) {
            throw new SubmissionError({_error: '密碼未輸入'});
        }


        requestData.loginType = 3;
        this.props.login(requestData, () => {
            if (window.noht !== true) {
                this.props.history.push(DashboardRoute());
            }
        });
    }

    render() {
        const {error, messageFail, handleSubmit} = this.props;

        return (
            <div>
                <Helmet>
                    <title>會員登入</title>
                </Helmet>

                <PageTitle title="會員登入"/>

                <UserForm onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field type="text" name="identity" component="input" placeholder="請輸入手機號碼"/>
                    <Field type="password" name="password" component="input" placeholder="請輸入密碼"/>
                    <br/><br/>
                    <ErrorMsg msg={error || messageFail} classname=""/>
                    <BlueButton>登入</BlueButton>
                    <div className="text_link">
                        <Link to={{
                            pathname: UserRegisterRoute(),
                            search: "?rType=mobile",
                        }}>會員註冊</Link>
                        |
                        <Link to={{
                            pathname: UserForgetRoute()
                        }}>忘記密碼/申請密碼</Link>
                    </div>
                </UserForm>
                <OtherLogins>
                    <h3><span>以其他方式登入</span></h3>
                    {/*<FacebookButton onClick={this.fbLogin.bind(this)}>Facebook登入</FacebookButton>*/}
                    <a href="/auth/login/facebook"><FacebookButton>使用Facebook帳號登入</FacebookButton></a>
                    <a href="/auth/login/line"><LineButton>使用Line帳號登入</LineButton></a>
                </OtherLogins>

                {/*{this.state.profileEditModal?
                <ProfileEditConfirmModal openModal={this._toggleModel}/>
                :""}
                {this.state.phoneOccupiedModal?
                <PhoneOccupiedModal openModal={this._togglePhoneOccupiedModel}/>
                :""}*/}
                
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    return errors;
}

function mapStateToProps(state) {
    return {IS_LOGINED: state.data.auth.get('IS_LOGINED'), messageFail: state.data.common.get('MESSAGE')};
}

export default reduxForm({validate, form: "LoginForm"})(connect(mapStateToProps, {login, getLocationInfo})(withAuth(Login)));
