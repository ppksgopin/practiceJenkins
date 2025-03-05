/**
 * @author Tzuyang Tsai
 * @see ZZG2-2438 前台 Web - 會員中心增加「刪除帳號」功能
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import styled from 'styled-components';
import { UserLoginRoute } from '../../../../commons/routePaths';
import { MainContent as DefaultContent } from './styles';
import { logout, profile } from '../../../../data/auth/action';
import theme from '../../../../styles/theme';

import BlueButton from '../../../common/components/BlueButton';
import PageTitle from '../../../common/components/PageTitle';


const headingFontSize = 24



const MainContent = styled(DefaultContent)`
	padding-top: 1rem;
	&, p{
		font-size: 16px
	}
	header{
		display: flex;
		flex-direction: column;
		align-items: center;

		margin-top: 1.5rem;
		margin-bottom: 3rem;
	}
	.fa{
		border: 2px solid;
		border-color: ${theme.colors.gray};
		border-radius: 100%;

		font-size: ${headingFontSize * 1.5}px;
		

		width: ${headingFontSize * 3.25}px;
		height: ${headingFontSize * 3.25}px;

		display: flex;
		align-content: center;
		justify-content: center;
		align-items: center;
	}
	h2{
		font-size: ${headingFontSize}px;
		font-weight: inherit;

		margin-top: 2.5rem;
	}
	p{
		text-align: center
	}
`

class ProfileDeleteSuccess extends Component {

	render() {
		return (
			<div>
				<Helmet>
					<title>刪除完成</title>
				</Helmet>
				<PageTitle title="刪除帳號"/>
				<MainContent>
					<section className='content-block'>
						<header>
							<i className="fa fa-check" aria-hidden="true"></i>

							<h2>刪除完成</h2>
						</header>

						<p>謝謝您曾經與zero zero的美好記憶。</p>
						<p>有任何回收需求，請不要忘記zero zero！</p>

						<div style={{ padding: "2rem" }}></div>

						<BlueButton style={{
							maxWidth: "400px"
						}}onClick={() => {
							this.props.history.push(UserLoginRoute())
						}}>OK</BlueButton>
					</section>	
				</MainContent>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		logon: state.data.auth.get('IS_LOGINED')
	}
}

export default connect(mapStateToProps, { profile, logout })(ProfileDeleteSuccess);