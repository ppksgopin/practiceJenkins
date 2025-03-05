import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Field, reduxForm, formValueSelector} from "redux-form/immutable";
import {connect} from "react-redux";

import {message} from '../../../../data/common/action';
import {sendVerifyCode, bindingPhoneNumber, logout} from '../../../../data/auth/action';


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
const DoneMsg = styled(BlueButton)`
  background: ${theme.colors.green};
  pointer-events:none;
  overflow:hidden;

  &::before{
      position:relative;
      top:50px;
      margin-left:-20px;
      margin-right:5px;
      content:"\f00c";
      font-family: FontAwesome;
      animation-name: pop;
      animation-duration: .3s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      animation-delay: 1s;
  }
  @keyframes pop {
      0% {
          top: 20px;
          margin-left:0px;
      }

      90% {
          top: -3px;
          margin-left:0px;
      }

      98% {
          top: 1px;
          margin-left:0px;
      }

      100% {
          top: 0px;
          margin-left:0px;
      }
  }
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

class PhoneBinding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReqVerifyCode: false,
            timeToCountDown: 60,
            intervalId: null,
            bindingSuccess: false,
            exceedLimit: false, //是否已達每日驗證碼發送次數,每日最多5次
        };

        this.countDownTick = this.countDownTick.bind(this);
        this.renderContentOfReqVerifyCodeButton = this.renderContentOfReqVerifyCodeButton.bind(this);
    }

    onSubmit(values) {
        let requestData = values.toJS();
        if (!requestData.phoneNumber || 0 === requestData.phoneNumber.length) {
            throw new SubmissionError({_error: '電話尚未輸入'});
        }

        // console.info("requestData = " + JSON.stringify(requestData));

        // this.props.bindingPhoneNumber(requestData, () => {
        //     this.setState({bindingSuccess: true}, () => {
        //         this.props.logout(() => {
        //             this.props.history.push(DashboardRoute());
        //         });
        //     });
        // });
        this.props.bindingPhoneNumber(requestData, () => {
            this.props.logout(() => {
                this.setState({bindingSuccess: true});
            });
        });
    }

    countDownTick() {
        const {timeToCountDown} = this.state;
        this.setState({timeToCountDown: (timeToCountDown - 1)});

        if (timeToCountDown === 0) {
            clearInterval(this.state.intervalId);
            this.setState({
                timeToCountDown: 60,
                isReqVerifyCode: false,
            });
        }
    }

    reqVerifyCode() {
        // console.info("reqVerifyCode call");
        let { phoneNumber, mobileCountryCode } = this.props;
        const { isReqVerifyCode } = this.state;

        if (!mobileCountryCode) {
            mobileCountryCode = "886";
        }

        // console.info("phoneNumber = " + phoneNumber + ", mobileCountryCode = " + mobileCountryCode);

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

            this.props.sendVerifyCode(phoneNumber, (sendNextCountDown) => {
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
        const {bindingSuccess} = this.state;

        return (
            <div className="bg">
                <Helmet>
                    <title>綁定手機</title>
                </Helmet>

                <PageTitle title="綁定手機"/>

                <UserForm onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="wording" style={{fontSize: "16px"}}>
                        可隨時追蹤預約回收狀況，<br/>讓客服人員能更快為您服務。<br/><br/>
                    </div>
                    <div className="multi_col">
                        <Field name="mobileCountryCode" component="select" className="zone">
                            <option key="886" value="886">台灣</option>
                            <option key="86" value="86">大陸</option>
                        </Field>
                        <Field className="zone_phone" type="text" name="phoneNumber" component="input"
                               placeholder="請輸入手機號碼"/>
                    </div>
                    <div className="multi_col">
                        <Field className="verify_input" type="text" name="code" component="input" placeholder="請輸入驗證碼"/>
                        <GreenButton onClick={this.reqVerifyCode.bind(this)}>
                            {this.renderContentOfReqVerifyCodeButton()}
                        </GreenButton>
                    </div>
                    <br/><br/>
                    <ErrorMsg msg={messageFail || error || "手機號碼綁定後無法修改"} classname=""/>

                    {/*綁定成功則把BlueButton換成下方的DoneMsg*/}
                    {bindingSuccess
                        ?
                        <DoneMsg>綁定成功，請重新登入</DoneMsg>
                        :
                        <BlueButton>綁定手機號碼</BlueButton>}
                </UserForm>
            </div>
        );
    }
}

PhoneBinding = reduxForm({form: 'PhoneBindingForm'})(PhoneBinding);

const selector = formValueSelector('PhoneBindingForm');

function mapStateToProps(state) {
    return {
        profile: state.data.auth.get('PROFILE'),
        phoneNumber: selector(state, 'phoneNumber'),
        mobileCountryCode: selector(state, 'mobileCountryCode'),
        messageFail: state.data.common.get('MESSAGE'),
        verifyCodeResp: state.data.auth.get('VERIFY_CODE_RESP')
    }
}

PhoneBinding = connect(mapStateToProps, {message, sendVerifyCode, bindingPhoneNumber, logout})(PhoneBinding);
export default PhoneBinding;
