import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Field, reduxForm, formValueSelector, SubmissionError} from "redux-form/immutable";
import {connect} from "react-redux";

import {getValidationCode, forgetPasswordVerifyCode} from './action';
import {message} from '../../../../data/common/action';
import {UserLoginRoute} from '../../../../commons/routePaths';
import {commonType} from '../../../../commons/constants/actionTypes';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {userForm} from '../../../../styles/commons';

import PageTitle from '../../../common/components/PageTitle';
import BlueButton from '../../../common/components/BlueButton';
import DivButton from '../../../common/components/DivButton';
import ErrorMsg from '../../../common/components/ErrorMsg';

const UserForm = styled.form `
  ${userForm};
`
const GreenButton = styled(DivButton)`
  background: ${theme.colors.green};
  color: #fff;

  &:hover {
      background: ${theme.colors.green2};
  }

  -webkit-flex: none;
  flex: none;
  width: auto !important;
  padding:0 20px;
  margin-left: 9px;
`

class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verified:0,
            isReqVerifyCode: false,
            timeToCountDown: 60,
            intervalId: null,
            exceedLimit: false, //是否已達每日驗證碼發送次數,每日最多5次
        };

        this.countDownTick = this.countDownTick.bind(this);
        this.renderContentOfReqVerifyCodeButton = this.renderContentOfReqVerifyCodeButton.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        //console.info("nextProps values : ", nextProps.IS_FORGET_PASSWORD);
        if (nextProps.IS_FORGET_PASSWORD !== this.props.IS_FORGET_PASSWORD && nextProps.IS_FORGET_PASSWORD) {
            this.props.history.push(UserLoginRoute());
        }
    }

    onSubmit(values) {
        //console.log('onSubmit: ', values.toJS());
        let valid = false ;
        const verifyCodeDTO = {
            'mobileCountryCode': values.get('mobileCountryCode'),
            'phone': values.get('phoneNumber'),
            'code': values.get('code')
        };

        if (!verifyCodeDTO.mobileCountryCode) {
            this.props.message(commonType.MESSAGE_FAIL, '國碼未輸入，請重新選擇');
        } else if (!verifyCodeDTO.phone) {
            this.props.message(commonType.MESSAGE_FAIL, '電話號碼未輸入');
        } else if (!verifyCodeDTO.code) {
            this.props.message(commonType.MESSAGE_FAIL, '驗證碼未輸入');
        }else if (verifyCodeDTO.mobileCountryCode === '886' && verifyCodeDTO.phone.length !== 10) {
            // check phonenumber length
            this.props.message(commonType.MESSAGE_FAIL, '行動電話長度輸入錯誤');
        } else if(verifyCodeDTO.mobileCountryCode === '86' && verifyCodeDTO.phone.length !== 11) {
            this.props.message(commonType.MESSAGE_FAIL, '行動電話長度輸入錯誤');
        }else {
            valid = true;
        }

        if(valid) {
            this.props.forgetPasswordVerifyCode(verifyCodeDTO, this.props.history);
        }else {
            return false;
        }
    }

    countDownTick() {
        const {timeToCountDown} = this.state;
        this.setState({timeToCountDown: (timeToCountDown - 1)});

        if(timeToCountDown == 0) {
            clearInterval(this.state.intervalId);
            this.setState({
                timeToCountDown: 60,
                isReqVerifyCode: false
            });
        }
    }

    reqVerifyCode() {
        const {phoneNumber} = this.props;
        const {isReqVerifyCode} = this.state;

        if (phoneNumber) {
            this.props.message(commonType.MESSAGE_FAIL, '');
            if (isReqVerifyCode) {
                return;
            }

            this.props.getValidationCode(phoneNumber, (sendNextCountDown) => {
                if(sendNextCountDown > 0) {
                    const intervalId = setInterval(this.countDownTick, 1000);
                    this.setState({
                        intervalId,
                        timeToCountDown: sendNextCountDown || 0,
                        isReqVerifyCode: true,
                    });
                } else {
                    this.setState({
                        exceedLimit: true
                    });
                }
            });
        } else {
            this.props.message(commonType.MESSAGE_FAIL, '電話號碼未輸入');
        }
    }

    renderContentOfReqVerifyCodeButton() {
        const { isReqVerifyCode, timeToCountDown, exceedLimit } = this.state;
        if(isReqVerifyCode) {
            return `簡訊已發送(${timeToCountDown})`;
        } else if(!isReqVerifyCode && exceedLimit) {
            return `簡訊已發送`;
        } else {
            return '獲取驗證碼';
        }
    }

    render() {
        const {error, messageFail, handleSubmit} = this.props;
        const {isReqVerifyCode, timeToCountDown} = this.state;

        return (

            <div className="bg">
                <Helmet>
                    <title>忘記密碼/申請密碼</title>
                </Helmet>

                <PageTitle title="忘記密碼/申請密碼"/>

                <UserForm onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="wording">請輸入手機號碼<br/>系統將會發送驗證碼</div>
                    <br/>
                    <div className="multi_col">
                        <select name="mobileCountryCode" disabled={true} className="zone">
                            <option value="886">台灣</option>
                        </select>
                        <Field className="zone_phone" type="text" name="phoneNumber" component="input"
                               placeholder="請輸入手機號碼"/>
                    </div>
                    <div className="multi_col">
                        <Field className="verify_input" type="text" name="code" component="input" placeholder="請輸入驗證碼"/>
                        <GreenButton onClick={this.reqVerifyCode.bind(this)}>
                            {this.renderContentOfReqVerifyCodeButton()}
                        </GreenButton>
                    </div>
                    <ErrorMsg msg={ messageFail!=='' ? messageFail : error ? error :"" } classname=""/>
                    <BlueButton>驗證</BlueButton>
                    <p style={{fontSize: "14px",textAlign:'center',color:'#a5bbc2'}}>若未收到驗證碼，請先解除阻擋廣告簡訊設定!</p>
                </UserForm>


            </div>


        );
    }
}

ForgetPassword = reduxForm({form: 'ForgetPasswordForm', enableReinitialize: true})(ForgetPassword);

const selector = formValueSelector('ForgetPasswordForm');

function mapStateToProps(state) {
    return {
        initialValues: state.user.forgetPassword.get('FORGETPASSWORD'),
        phoneNumber: selector(state, 'phoneNumber'),
        IS_FORGET_PASSWORD: state.user.forgetPassword.get('IS_FORGET_PASSWORD'),
        messageFail: state.data.common.get('MESSAGE')
    }
}

ForgetPassword = connect(mapStateToProps, {getValidationCode, forgetPasswordVerifyCode, message})(ForgetPassword);
export default ForgetPassword;
