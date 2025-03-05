import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Field, reduxForm, formValueSelector } from "redux-form/immutable";
import { connect } from "react-redux";
import PhoneOccupiedModal from "../Login/PhoneOccupiedModal";

import { getValidationCode, verifyCode, resetVerifyCode, resetRegister } from './action';
import { sendVerifyCode, bindingPhoneNumber } from '../../../../data/auth/action';
import { message } from '../../../../data/common/action';
import { commonType } from '../../../../commons/constants/actionTypes';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import { userForm } from '../../../../styles/commons';

import PageTitle from '../../../common/components/PageTitle';
import BlueButton from '../../../common/components/BlueButton';
import DivButton from '../../../common/components/DivButton';
import ErrorMsg from '../../../common/components/ErrorMsg';
import withCheckMobile from './withCheckMobile';
import queryString from 'query-string';

const UserForm = styled.form`
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

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReqVerifyCode: false,
            timeToCountDown: 60,
            intervalId: null,
            exceedLimit: false, //是否已達每日驗證碼發送次數,每日最多5次
            phoneOccupiedModal: false,
        };

        this.countDownTick = this.countDownTick.bind(this);
        this.stopCountDownTick = this.stopCountDownTick.bind(this);
        this.renderContentOfReqVerifyCodeButton = this.renderContentOfReqVerifyCodeButton.bind(this);
        this.reqVerifyCode = this.reqVerifyCode.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this._togglePhoneOccupiedModel = this._togglePhoneOccupiedModel.bind(this);
    }

    componentDidMount() {
        this.props.resetRegister();
    }

    /*componentWillUnmount() {
        this.props.resetVerifyCode();
    }*/

    componentWillReceiveProps(nextProps) {
        if (nextProps.IS_VERIFIED !== this.props.IS_VERIFIED && nextProps.IS_VERIFIED) {
            this.stopCountDownTick();
            //this.props.history.push(UserPasswordRoute());
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { exist, registerType } = this.props.mobileVerified.toJS();
        //console.info("Register Props : ", this.props , 'exist:', exist, 'registerType: ', registerType);
        if ((this.props.mobileVerified !== prevProps.mobileVerified) && (exist === true && registerType === 3)) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    phoneOccupiedModal: true
                }
            })
        }
    }

    onSubmit(values, actions) {
        // console.log('onSubmit: ', values.toJS());
        let valid = false;
        const verifyCodeDTO = {
            'mobileCountryCode': values.get('mobileCountryCode'),
            'phone': values.get('phoneNumber'),
            'code': values.get('code')
        };
        //v2.10.0 以下取消throw new SumissionError , 是因為若是action dispatch error 時，
        // 1. 因為redux-form 的submissionError 已經存在，無法正確將錯誤訊息傳達
        // 2. SubmissionError 無法因已填入正確值而被reset, 若是reset redux-form 值也會因些被reset 掉。
        //    是故這裡直接將Error Message, 透過dispatch 方式更新。
        if (!verifyCodeDTO.mobileCountryCode) {
            this.props.message(commonType.MESSAGE_FAIL, '國碼未輸入，請重新選擇');
            //throw new SubmissionError({_error: '國碼未輸入，請重新選擇'});
        } else if (!verifyCodeDTO.phone) {
            this.props.message(commonType.MESSAGE_FAIL, '電話號碼未輸入');
            //throw new SubmissionError({_error: '電話號碼未輸入'});
        } else if (!verifyCodeDTO.code) {
            this.props.message(commonType.MESSAGE_FAIL, '驗證碼未輸入');
            //throw new SubmissionError({_error: '驗證碼未輸入'});
        } else if (verifyCodeDTO.mobileCountryCode === '886' && verifyCodeDTO.phone.length !== 10) {
            // check phonenumber length
            this.props.message(commonType.MESSAGE_FAIL, '行動電話長度輸入錯誤');
            //throw new SubmissionError({_error: '行動電話長度輸入錯誤'});
        } else if (verifyCodeDTO.mobileCountryCode === '86' && verifyCodeDTO.phone.length !== 11) {
            this.props.message(commonType.MESSAGE_FAIL, '行動電話長度輸入錯誤');
            //throw new SubmissionError({_error: '行動電話長度輸入錯誤'});
        } else {
            valid = true;
        }

        if (valid) {
            this.props.verifyCode(verifyCodeDTO, this.props.history);
        } else {
            return false;
        }

    }

    countDownTick() {
        const { timeToCountDown } = this.state;
        this.setState({ timeToCountDown: (timeToCountDown - 1) });

        if (timeToCountDown === 0) {
            clearInterval(this.state.intervalId);
            this.setState({
                timeToCountDown: 60,
                isReqVerifyCode: false,
            });
        }
    }

    stopCountDownTick() {
        clearInterval(this.state.intervalId);
        this.setState({ timeToCountDown: 60 });
        this.setState({ isReqVerifyCode: false });
    }

    reqVerifyCode() {
        const param = queryString.parse(this.props.location.search);
        /**
         * @see https://zerozero.atlassian.net/browse/ZZG2-2428
         * 轉導註冊頁面
         */
        if (param.storeId !== undefined) {
            localStorage.setItem('storeId', param.storeId)
        }
        //console.log('rType: ', param.rType)
        const { phoneNumber, mobileCountryCode, values } = this.props;
        //console.log('verify values: ', values);
        const { isReqVerifyCode } = this.state;

        if (phoneNumber && mobileCountryCode) {
            // check phonenumber length
            if ((mobileCountryCode === '886' && phoneNumber.length !== 10) || (mobileCountryCode === '86' && phoneNumber.length !== 11)) {
                this.props.message(commonType.MESSAGE_FAIL, '行動電話長度輸入錯誤');
                return;
            }

            this.props.message(commonType.MESSAGE_FAIL, '');
            if (isReqVerifyCode) {
                return;
            }

            const setCountDown = (sendNextCountDown) => {
                // console.log('sendNextCountDown:', sendNextCountDown);
                if (sendNextCountDown > 0) {
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
            }

            if (param.rType === 'mobile') {
                this.props.getValidationCode(phoneNumber, setCountDown, this._togglePhoneOccupiedModel);
            } else {
                this.props.sendVerifyCode(phoneNumber, 'signup', setCountDown)
            }

        } else {
            this.props.message(commonType.MESSAGE_FAIL, '電話號碼未輸入');
        }
    }

    renderContentOfReqVerifyCodeButton() {
        const { isReqVerifyCode, timeToCountDown, exceedLimit } = this.state;
        if (isReqVerifyCode) {
            return `簡訊已發送(${timeToCountDown})`;
        } else if (!isReqVerifyCode && exceedLimit) {
            return `簡訊已發送`;
        } else {
            return '獲取驗證碼';
        }
    }

    _togglePhoneOccupiedModel() {
        this.setState((prevState) => {
            return {
                ...prevState,
                phoneOccupiedModal: !prevState.phoneOccupiedModal
            }
        })
    }

    render() {
        const { error, messageFail, handleSubmit, mobileVerified } = this.props;
        const { isReqVerifyCode, timeToCountDown } = this.state;
        //console.log('this.state.phoneOccupiedModal', this.state.phoneOccupiedModal);
        return (
            <div className="bg">
                <Helmet>
                    <title>手機驗證</title>
                </Helmet>

                <PageTitle title="手機驗證" />

                <UserForm onSubmit={handleSubmit(this.onSubmit)}>
                    <div className="multi_col">
                        <select name="mobileCountryCode" className="zone" disabled={true}>
                            <option value="886">台灣</option>
                        </select>
                        <Field className="zone_phone" type="text" name="phoneNumber" component="input"
                            placeholder="請輸入手機號碼" />
                    </div>
                    <div className="multi_col">
                        <Field className="verify_input" type="text" name="code" component="input" placeholder="請輸入驗證碼" />
                        <GreenButton onClick={() => this.reqVerifyCode()}>
                            {this.renderContentOfReqVerifyCodeButton()}
                        </GreenButton>
                    </div>
                    <ErrorMsg msg={messageFail !== '' ? messageFail : error ? error : ""} classname="" />
                    <BlueButton>驗證</BlueButton>
                    <p style={{ fontSize: "14px", textAlign: 'center', color: '#a5bbc2' }}>若未收到驗證碼，請先解除阻擋廣告簡訊設定!</p>
                </UserForm>

                {this.state.phoneOccupiedModal ?
                    <PhoneOccupiedModal toggle={this._togglePhoneOccupiedModel} />
                    : ""}
            </div>

        );
    }
}

Register = reduxForm({ form: 'RegisterForm' })(Register);

const selector = formValueSelector('RegisterForm');

function mapStateToProps(state) {
    return {
        initialValues: state.user.register.get('REGISTER'),
        phoneNumber: selector(state, 'phoneNumber'),
        mobileCountryCode: selector(state, 'mobileCountryCode'),
        IS_VERIFIED: state.user.register.get('IS_VERIFIED'),
        messageFail: state.data.common.get('MESSAGE'),
        mobileVerified: state.user.register.get('VERIFY_MOBILE_SUCCESS')
    }
}
/*
Register = connect(mapStateToProps,
    {
        getValidationCode,
        verifyCode,
        resetVerifyCode,
        resetRegister,
        message,
        sendVerifyCode,
        bindingPhoneNumber
    })(Register);

export default Register*/

export default connect(mapStateToProps, { getValidationCode, verifyCode, resetVerifyCode, resetRegister, message, sendVerifyCode, bindingPhoneNumber })(withCheckMobile(Register));
