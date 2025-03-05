/**
 * 刪除帳號中的第二步驟，驗證使用者
 * @author Tzuyang Tsai
 * @see ZZG2-2438 前台 Web - 會員中心增加「刪除帳號」功能
 */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Field, reduxForm, formValueSelector } from "redux-form/immutable";
import { connect } from "react-redux";
import axios from 'axios';
import styled from 'styled-components';

import { message } from '../../../../data/common/action';
import { UserDeleteFormRoute } from '../../../../commons/routePaths';
import { commonType } from '../../../../commons/constants/actionTypes';
import theme from '../../../../styles/theme';
import PageTitle from '../../../common/components/PageTitle';
import BlueButton from '../../../common/components/BlueButton';
import DivButton from '../../../common/components/DivButton';
import ErrorMsg from '../../../common/components/ErrorMsg';
import { MainContent, UserForm, UserInfoContent, BackBottomBlock } from './styles';
import { sendVerifyCode } from '../../../../data/auth/action';
import { encryptToAES128 } from '../Register/action';
import { darken, lighten } from 'polished';
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


class ProfileDeleteVerify extends Component {
	constructor(props) {
		super(props);
		this.state = {
			verified: 0,
			isReqVerifyCode: false,
			timeToCountDown: 60,
			intervalId: null,
			exceedLimit: false, //是否已達每日驗證碼發送次數,每日最多5次,

			smsSent: false,	// 是否已經送出 SMS

			phoneNumber: props.userProfile.get("mobile")
		};

		this.countDownTick = this.countDownTick.bind(this);
		this.renderContentOfReqVerifyCodeButton = this.renderContentOfReqVerifyCodeButton.bind(this);
	}

	getValidationCode(phoneNumber, callback) {
		const { userProfile } = this.props
		let user = userProfile.toJS()
		if (user.mobile == phoneNumber) {
			this.setState({
				verifyErrorMessage: null,
				smsSent: true
			})
			sendVerifyCode(phoneNumber, 'user-del', callback)(function(){})
		} else {
			this.setState({ verifyErrorMessage: '輸入電話號碼錯誤' })
			this.props.message(commonType.MESSAGE_FAIL, '輸入電話號碼錯誤')
		}
	}

	verifyCode(verifyCodeDTO) {
		const url = `user/verifyCode`;
		verifyCodeDTO.code = encryptToAES128(verifyCodeDTO.code);
		axios.post(url, verifyCodeDTO)
			.then(
				() => {
					this.setState({ verifyErrorMessage: null })
					this.props.history.push(UserDeleteFormRoute())
				},
				err => {
					console.error("Error", err)
					this.setState({ verifyErrorMessage: "驗證碼錯誤，請重新輸入" })
				}
			)


	}


	onSubmit(values) {
		this.verifyCode({
			'mobileCountryCode': values.get('mobileCountryCode'),
			'phone': this.props.userProfile.get("mobile"),
			'code': values.get('code')
		})
		return false;
	}

	countDownTick() {
		const { timeToCountDown } = this.state;
		this.setState({ timeToCountDown: (timeToCountDown - 1) });

		if (timeToCountDown == 0) {
			clearInterval(this.state.intervalId);
			this.setState({
				timeToCountDown: 0,
				isReqVerifyCode: false
			});
		}
	}

	reqVerifyCode() {
		const { userProfile } = this.props;
		const phoneNumber = userProfile.get("mobile")
		const { isReqVerifyCode } = this.state;
		if (phoneNumber) {
			this.props.message(commonType.MESSAGE_FAIL, '');

			this.getValidationCode(phoneNumber, (sendNextCountDown) => {
				if (sendNextCountDown > 0) {
					clearInterval(this.state.intervalId)
					const intervalId = setInterval(this.countDownTick, 1000);
					this.setState({
						intervalId,
						timeToCountDown: sendNextCountDown || 0,
						isReqVerifyCode: true,
					});
				} else {
					this.setState({
						exceedLimit: true,
						timeToCountDown: 0
					});
				}
			});
		} else {
			this.setState({ verifyErrorMessage: '電話號碼未輸入' })
			this.props.message(commonType.MESSAGE_FAIL, '電話號碼未輸入');
		}
	}

	renderContentOfReqVerifyCodeButton() {
		const { isReqVerifyCode, timeToCountDown, exceedLimit } = this.state;
		if (isReqVerifyCode) {
			if (exceedLimit) {
				return `簡訊已發送`;
			}
			return `簡訊已發送 (${timeToCountDown})`;
		} else {
			return '獲取驗證碼';
		}
	}

	render() {
		const { handleSubmit, userProfile } = this.props;
		const { isReqVerifyCode } = this.state;
		return (

			<div className="bg">
				<Helmet> <title>刪除帳號</title> </Helmet>
				{BackBottomBlock(this)}
				<PageTitle title="刪除帳號" />

				<UserInfoContent />
				<MainContent>
					<div className='content-block'>
						<UserForm onSubmit={handleSubmit(this.onSubmit.bind(this))}>
							<div className="multi_col">
								<select name="mobileCountryCode" disabled={true} className="zone">
									<option value="886">台灣</option>
								</select>

								<input name='phoneNumber' placeholder="請輸入手機號碼" className="zone_phone"
									style={{
										color: lighten(0.12, theme.colors.gray)
									}}
									value={userProfile.get("mobile")} type="text"
									readOnly />
							</div>
							<div className="multi_col">
								<Field className="verify_input" type="text" name="code" component="input"
									disabled={!this.state.smsSent}
									autoComplete='off' placeholder="請輸入驗證碼" />
								<GreenButton 	onClick={
											this.state.smsSent && this.state.timeToCountDown > 0?
												undefined:
												this.reqVerifyCode.bind(this)
										}
										className={
											this.state.smsSent && this.state.timeToCountDown > 0? "disabled-button": ""
										}
									>
									<span style={{
										display: this.state.smsSent? "none": "inline"
									}}>獲取驗證碼</span>
									<span style={{
										display: this.state.smsSent? "inline": "none"
									}}>
										簡訊已發送
										<span style={{display: this.state.exceedLimit || this.state.timeToCountDown == 0? "none": "inline"}}>
											({this.state.timeToCountDown})
										</span>
									</span>
								</GreenButton>
							</div>
							<div>
								<ErrorMsg msg={this.state.verifyErrorMessage} classname="" />
							</div>

							<BlueButton disabled={!this.state.smsSent}>驗證</BlueButton>
							<p style={{ fontSize: "14px", textAlign: 'center', color: '#a5bbc2' }}>若未收到驗證碼，請先解除阻擋廣告簡訊設定!</p>
						</UserForm>

					</div>
				</MainContent>



			</div>


		);
	}
}

ProfileDeleteVerify = reduxForm({ form: 'ProfileDeleteVerifyForm', enableReinitialize: false })(ProfileDeleteVerify);

const selector = formValueSelector('ProfileDeleteVerifyForm');

function mapStateToProps(state) {
	return {
		userProfile: state.data.auth.get('PROFILE'),
		phoneNumber: selector(state, 'phoneNumber'),
		verifyCode: selector(state, "code"),
		sendVerifyCode: sendVerifyCode,
	}
}

ProfileDeleteVerify = connect(mapStateToProps, { message })(ProfileDeleteVerify);
export default ProfileDeleteVerify;
