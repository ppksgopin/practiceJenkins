/**
 * @author Tzuyang Tsai
 * @see ZZG2-2438 前台 Web - 會員中心增加「刪除帳號」功能
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { DashboardRoute, UserLoginRoute, UserDeleteVerifyRoute } from '../../../../commons/routePaths';

import { logout, profile } from '../../../../data/auth/action';

import PageTitle from '../../../common/components/PageTitle';
import { getUserTotalZcoins } from '../ZCoin/action';
import { UserInfoContent, MainContent as DefaultMainContent, BackBottomBlock } from './styles';
import BlueButton from '../../../common/components/BlueButton';
import theme from '../../../../styles/theme';

let MainContent = styled(DefaultMainContent)`
p, ol li, ul li, aside{
	margin-bottom: 1.5rem
}

hr{
	margin-top: 3rem;
	margin-bottom: 3rem;
}
aside{
	font-weight: bolder;

}
p, ol, li, aside{
	font-size: 18px;
}
p, li{
	line-height: 1.5;
}

.content-block{
	margin-top: 2rem;

	@media(min-width: ${theme.medias.phablet}){
		width: ${theme.medias.phablet};
	}
	@media(min-width: ${theme.medias.desktop}){
		width: ${theme.medias.phablet};
	}
}
`

/** 進入刪除使用者前的警告畫面 */
class ProfileDeleteWarn extends Component {

	userLogout() {
		// 登出回到首頁
		window.FB.getLoginStatus(function (response) {
			if (response.status === 'connected') {
				console.log("already logined => logout");
				window.FB.logout();
			}
		});

		this.props.logout(() => {
			this.props.history.push(DashboardRoute());
		});
	}

	render() {
		const { logon } = this.props;
		if (!logon) {
			return <Redirect to={UserLoginRoute()} />
		}

		return (
			<div>
				<Helmet>
					<title>刪除帳號</title>
				</Helmet>

				<PageTitle title="刪除帳號" />
				{BackBottomBlock(this)}
				<UserInfoContent />
				<MainContent>
					<div className='content-block'>
						<p>我們不希望看到您離開zero zero，但如果已決定不再兌換禮品，您可選擇永久刪除帳號。</p>
						<p>來日方長，或許哪天可以兌換NFT，愛我就別離開我。</p>

						<hr />

						<p style={{
							fontWeight: "bolder"

						}}>永久刪除帳號後：</p>

						<ol>
							<li>基於安全考量，我們會先驗證您的身分再接受申請。</li>
							<li>帳號一經刪除後，您的個人帳戶將永久刪除，便無法重新存取。</li>
							<li>zero zero app部分資料的副本（例如：記錄檔）會保留在我們的資料庫，但不會再與任何可識別個人身分的資料有關聯。</li>
						</ol>

						<hr />

						<aside>
							<p>帳號一經刪除，您便無法重新啟用帳號、還原任何資料或重新登入帳號。</p>
							<p>如果想再次使用 zero zero，則須建立新帳號。</p>
						</aside>
						<BlueButton onClick={() => {
							this.props.history.push(UserDeleteVerifyRoute())
						}}>確定刪除帳號</BlueButton>
					</div>
				</MainContent>

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

export default connect(mapStateToProps, { profile, logout, getUserTotalZcoins })(ProfileDeleteWarn);
