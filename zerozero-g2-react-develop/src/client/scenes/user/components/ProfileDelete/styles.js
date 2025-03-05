import React, { Component } from 'react';
import { connect } from "react-redux";
import styled, { css } from 'styled-components';
import theme from '../../../../styles/theme';
import { awsUrl } from '../../../../utils/awsFile';
import Avatar, { AvatarImageSize, AvatarMarginBottom } from '../../../common/components/Avatar';
import { getUserTotalZcoins } from '../ZCoin/action';
import { logout, profile } from '../../../../data/auth/action';
import { UserRoute } from '../../../../commons/routePaths';
import { userForm } from '../../../../styles/commons';

let DefaultStyle = css`
h2, h3, h4, h5, h6{
	font-weight: bolder;
	display: block;
}

h2{
	font-size: 1.5rem;
	margin-top: 0.83rem;
	margin-bottom: 0.83rem;
}

h3{
	font-size: 1.4rem;
	margin-top: 1rem
	margin-bottom: 1rem;
}

ul{
	list-style-type: disc;
}
ol{
	list-style-type: decimal;
}

ul, ol{
	padding-left: 1.5rem;

	li{
		margin-bottom: 1rem
	}
}

p{
	padding-bottom: 1rem;
}
`

const userInfoTextDLHeight = 23

let UserInfo = styled.div`
	position: relative;
	height: ${AvatarImageSize / 2}px;

	text-align: center;
	dl{
		display: flex;

		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1.2rem;

		width: 18rem;
		height: ${userInfoTextDLHeight}px;

		dt, dd{
			font-size: 20px;
			height: 20px;
			margin-bottom: 2px;
		}


		dt{
			font-weight: bolder;
			color: ${theme.colors.gray}
		}

		/* flex setting */

		dt{
			order: 1
		}

		&:after{
			content: '';
			order: 2;
			width: 1rem;
		}

		dd{
			order: 3
		}

	}

	.zc{
		height: 18px;
		color: ${theme.colors.red};
		font-size: 18px;

		&:before{
			width: 18px;
			height: 18px;
			
			margin-right: .25rem;
			
			background: url(${awsUrl("zcoin_pink.png")}) no-repeat center left;
			background-size: 18px 18px;

			content: '';
			display: inline-block;

			vertical-align: bottom;
		}
	}

	${DefaultStyle};
`



const BackButton = styled.div`
	height:0px;

	margin: 0 auto;
	width: 95%;
	max-width: ${theme.medias.maxW};

	position:relative;
	z-index:2;

	button{
		color:${theme.colors.gray};
		width: auto;
		margin: 0;
		height: 60px;
		font: inherit;
		font-size: 16px;
		line-height: 60px;
		text-align: left;
		cursor: pointer;
		outline:none;
		background: none;
		border: none;
		line-height: normal;
		padding: 0;
		text-decoration: none;
		-webkit-appearance: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;

		&::before{
			content:"\f060";
			font-family:"fontawesome";
			margin-right:5px;
		}

	}
  
	@media (max-width: ${theme.medias.phablet}) {
		display:none;
	}
`
/** 
 * 返回編輯使用者的按鈕區塊 
 */
function BackBottomBlock(component) {
	return (
		<BackButton>
			<button onClick={() => component.props.history.push(UserRoute())}>返回會員中心</button>
		</BackButton>
	)
}

/**
 * 使用者資訊的區塊，包含使用者帳號、Z幣
 */
class UserInfoContent extends Component {
	componentDidMount() {
		/* 讀取使用者 Z 幣資料，事後可從 this.props.totalRecord 取得 Z 幣資料*/
		this.props.getUserTotalZcoins()
	}
	render() {
		const { userProfile, totalRecord } = this.props;
		return (
			<UserInfo>

				<Avatar src={userProfile.get('photoURL')} classname="" />

				<dl>
					<dt>會員帳號</dt>
					<dd><span style={{ color: theme.colors.green }}>{userProfile.get("mobile")}</span></dd>
				</dl>
				<dl>
					<dt>您目前的Z幣</dt>
					<dd><span className="zc">{totalRecord.get("total")}</span></dd>
				</dl>


			</UserInfo>
		)
	}
}

let MainContent = styled.div`
	padding-top: ${userInfoTextDLHeight * 2 + AvatarMarginBottom * 1.5 + AvatarImageSize / 2 + 25}px;
	padding-bottom: 10px;

	display: block;
	background: white;
	border-top: 1px solid #ddd;

	text-align: left;

	color: ${theme.colors.gray};
	font-size: 1rem;

	.content-block{
		line-height: 1.05rem;
		@media(min-width: ${theme.medias.desktop}){
			&{
				width: ${theme.medias.desktop};
				margin: 0 auto
			}
		}
	}

	${DefaultStyle}
`

function mapStateToProps(state) {
	return {
		userProfile: state.data.auth.get('PROFILE'),
		logon: state.data.auth.get('IS_LOGINED'),
		totalRecord: state.user.zCoin.get('TotalRecord'),
		zcoins: state.dashboard.get('TOTAL_COINS'),
	}
}

UserInfoContent = connect(mapStateToProps, { profile, logout, getUserTotalZcoins })(UserInfoContent)

const UserForm = styled.form`
	${userForm};
`
export {
	UserInfo,
	MainContent,
	UserForm,
	UserInfoContent,
	BackBottomBlock
}

