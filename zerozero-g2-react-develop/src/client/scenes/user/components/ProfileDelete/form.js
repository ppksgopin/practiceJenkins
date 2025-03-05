/**
 * @author Tzuyang Tsai
 * @see ZZG2-2438 前台 Web - 會員中心增加「刪除帳號」功能
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { Redirect } from "react-router";
import styled from 'styled-components';
import axios from 'axios';
import { UserLoginRoute, UserRoute, UserDeleteSuccessRoute } from '../../../../commons/routePaths';

import { logout } from '../../../../data/auth/action';

import theme from '../../../../styles/theme';

import PageTitle from '../../../common/components/PageTitle';
import BlueButton from '../../../common/components/BlueButton';
import { BackBottomBlock, MainContent, UserInfoContent } from './styles';
import ErrorMsg from '../../../common/components/ErrorMsg';
import Button from '../../../common/components/Button';
import { rgba } from 'polished';

const mainContentFontSize = 18

const MainForm = styled.form`
	display: block;
	
	margin-left: auto;
	margin-right: auto;

	@media(min-width: ${mainContentFontSize * 36}px){
		width: ${mainContentFontSize * 36}px;
	}

	&, input, textarea{
		font-size: ${mainContentFontSize}px;
	}
	&, label{
		line-height: 1.5;
	}

	background:#fff;
	
	text-align: left;

	p{
		padding-bottom: 1rem;

		&:last-child{
			padding-bottom: 0
		}
	}

	textarea{
		color: ${theme.colors.gray};

		resize: vertical;

		min-width: 90%;
		min-height: 4rem;

		border-radius: .5rem;
		border-color: ${theme.colors.gray};

		padding: .45rem;
		margin-top: 1.25rem;
		margin-left: 1rem;
		margin-right: 1rem;
	}
	#other-reason-block{
		display: none
	}
	#other-choise:checked ~ #other-reason-block{
		display: block
	}
	
	.button-group{
		display: flex;
		justify-content: space-around;

		margin-top: 4.5rem;
		margin-bottom: 2rem;

		button{
			&:first-of-type{
				order:1
			}
			&:last-of-type{
				order: 3
			}
		}

		&:before{
			content: '';
			width: 2.5rem;
			order: 2
		}
	}
  
`

const delUserAPI = `user/delete`

const inputName = `default-reason`
/** 格式化的選項 */
let inputLabal = (text, val = text) => {
	return (

		<label style={{
			display: "block",
			marginBottom: "1rem"
		}}>
			<input name={inputName} type="radio" value={val} />
			<span>{text}</span>
		</label>
	)
}

const WarningDialog = styled.div`
	display: none;

	position: fixed;
	z-index: ${1e8};
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	background-color: ${rgba(theme.colors.gray, 0.5)};

	.dialog{
		width: 480px;
		padding: 1.5rem;
		border-radius: 1rem;

		margin-top: 20vh;
		margin-left: auto;
		margin-right: auto;
		background-color: white;
		

		.dialog-content{
			text-align: center;
			color: ${theme.colors.gray};
			
			p{
				font-size: 20px;
				line-height: 2;
			}
		}
		.button-group{
			display: flex;
			justify-content: space-around;

			margin-top: 2rem;


			button:first-of-type{
				order: 1;
			}
			&:before{
				content: '';
				order: 2;

				width: 3rem;

			}
			button:last-of-type{
				order: 3
			}

			&.single-btn{
				&:before{
					content: inherit
				}
			}
		}
	}

	&.show{
		display: block
	}

`

const GrayButton = styled(Button)`
	background-color: ${theme.colors.gray};
	color: white;
	border: 1px solid #ddd;
	font-weight: bold;
`


/** 進入刪除使用者的表單 */
class ProfileDeleteForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hasSubmit: false,
			dialogShow: false,
			deleteDialogFailShow: false,
			deleteReason: null
		}
	}

	onSubmit() {
	}

	render() {
		const { logon } = this.props;
		if (!logon) {
			return <Redirect to={UserLoginRoute()} />
		}

		let otherValue = Date.now().toString(32)

		return (
			<div>
				<Helmet>
					<title>刪除帳號</title>
				</Helmet>
				{BackBottomBlock(this)}
				<PageTitle title="刪除帳號" />
				<UserInfoContent />
				<MainContent>
					<div className='content-block'>
						<MainForm id="delete-reason-form"
							onSubmit={(e) => {
								e.preventDefault()
								let f = new FormData(e.target)
								let reason = f.get(inputName) || ""
								this.setState({ hasSubmit: true })

								if (reason == otherValue) {
									reason = f.get("other-reason")
								}
								this.setState({
									dialogShow: !!reason,
									deleteReason: reason
								})
								return false
							}}>
							<div style={{
								marginTop: `${mainContentFontSize * 2.5}px`,
							}}>
								<p>您的個人帳戶將永久刪除！</p>
								<p>兌換中心Z幣將歸零，無法重新存取，請告訴我們您想刪除帳號的原因。</p>
							</div>

							<div style={{
								marginTop: `${mainContentFontSize * 3}px`,
								marginBottom: `${mainContentFontSize * 3}px`,
							}}>
								
								{inputLabal("無回收需求。")}
								{inputLabal("無累積Z幣需求。")}
								{inputLabal("我有隱私上的考量。")}
								{inputLabal("我不覺得zero zero有用。")}
								{inputLabal("我有另一個zero zero帳號。")}

								<div>

									<input type="radio" name={inputName} value={otherValue}
										id="other-choise" />
									<label htmlFor="other-choise">其他，請進一步說明：</label>

									<div id="other-reason-block">
										<textarea
											name="other-reason" maxLength={100}
											placeholder="若無請填無，限填100字內" />

									</div>
									<div style={{ display: this.state.hasSubmit && !this.state.deleteReason ? "block" : "none" }}>
										<ErrorMsg msg="您尚未填寫原因" />
									</div>
								</div>

							</div>
							<div className='button-group' >
								<BlueButton type="button" data-accessKey="a" onClick={() => {
									this.props.history.push(UserRoute())
								}}>取消</BlueButton>

								<GrayButton >繼續</GrayButton>
							</div>

						</MainForm>

					</div>

				</MainContent>

				<WarningDialog id="warn-dialog" className={
					`${this.state.dialogShow ? "show" : ""}`
				}>
					<div className='dialog'>
						<div className='dialog-content'>
							<p>請注意！</p>
							<p>帳號刪除後將無法復原。</p>
						</div>
						<div className='button-group'>
							<GrayButton type="button" onClick={() => {
								this.setState({ dialogShow: false })
							}}>取消</GrayButton>

							<BlueButton onClick={() => {
								let { history, logout } = this.props
								axios.post(delUserAPI, { deleteReason: this.state.deleteReason })
									.then(function () {
										localStorage.removeItem('token')
										localStorage.removeItem("photoURL")
										logout(
											function () {
												history.push(UserDeleteSuccessRoute())
											}
										)

									})
									.catch(err => {
										console.debug(err)
										this.setState({
											dialogShow: false,
											deleteDialogFailShow: true
										})
									})
							}}>繼續</BlueButton>
						</div>
					</div>
				</WarningDialog>

				<WarningDialog className={
					`${this.state.deleteDialogFailShow ? "show" : ""}`
				}>
					<div className='dialog'>
						<div className='dialog-content'>
							<p>刪除失敗！</p>
							<p>請稍後再試</p>
						</div>
						<div className='button-group single-btn'>
							<BlueButton onClick={() => {
								this.props.history.push(UserRoute())
							}}>確認</BlueButton>
						</div>
					</div>
				</WarningDialog>

			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		userProfile: state.data.auth.get('PROFILE'),
		logon: state.data.auth.get('IS_LOGINED'),
		totalRecord: state.user.zCoin.get('TotalRecord')
	}
}
export default connect(mapStateToProps, { logout })(ProfileDeleteForm);
