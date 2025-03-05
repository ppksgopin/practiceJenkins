import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {Link} from 'react-router-dom';
import omitProps from 'recompact/omitProps'
import styled from 'styled-components';
import {
    DashboardRoute,
    UserEditRoute,
    UserExchangeRoute,
    UserLoginRoute,
    UserSummaryAllRoute,
    UserZCoinRoute
} from '../../../../commons/routePaths';

import {logout, profile} from '../../../../data/auth/action';
import {pageMenu, userForm} from '../../../../styles/commons';
import {textShadow} from '../../../../styles/mixins';

import theme from '../../../../styles/theme';
import {awsUrl} from '../../../../utils/awsFile';
import Avatar from '../../../common/components/Avatar';
import Button from '../../../common/components/Button';

import PageTitle from '../../../common/components/PageTitle';
import WhiteButton from '../../../common/components/WhiteButton';
import {getUserTotalZcoins} from '../ZCoin/action';

import ZCoinBoard from '../ZCoin/ZCoinBoard';

const PageMenu = styled.div`
  ${pageMenu}
`

const UserProfile = styled.div`
  width: 100%;
  min-height: 50vh;
  padding: 0 0 50px;
  text-align: center;
  .itemName {
      font-size: 14px;
      color: ${theme.colors.gray};
      line-height: 1.8;
  }
  .userid {
      font-size: 18px;
      color: ${theme.colors.green};
      line-height: 1.8;
      padding-bottom: 30px;
  }
  .zcoin {
      font-size: 18px;
      color: ${theme.colors.red};
      line-height: 1.8;
      &::before{
        content:"";
        width:18px;
        height:18px;
        margin-right:5px;
        display:inline-block;
        vertical-align:middle;
        background: url(${awsUrl("zcoin_pink.png")}) no-repeat center left;
        background-size:18px 18px;
      }
  }
  .usertype {
      margin-top: 20px;
      font-size: 14px;
      color: ${theme.colors.gray};
      line-height: 1.5;
      //font-weight: 300;
      &::before {
          content: '\f2c0';
          font-family: FontAwesome;
          margin-right: 5px;
      }
  }
  .hideOnDesktop{
    display:none;
  }
  @media (max-width: ${theme.medias.phablet}) {
    padding: 0;
    .itemName {
      vertical-align:middle;
      display:inline-block;
      margin-right:10px;
      padding-bottom: 30px;
    }
    .userid,.zcoin {
      vertical-align:middle;
      display:inline-block;
    }
    .hideOnDesktop{
      display:block;
    }
  }
`

/*const ZcoinBoard = styled.div `
  border-bottom:1px solid #ccc;
  padding-bottom:30px;
  display:flex;
  justify-content: center;
  align-items:center;
  .current{
    width:100%;
    max-width:175px;
    text-align:left;
    .zcoin {
      font-size: 24px;
      &::before{
        width:24px;
        height:24px;
        background-size:24px 24px;
      }
    }
  }

  .expire{
    width:100%;
    max-width:175px;
    text-align:right;
    border-left:1px solid #ddd;
    .zcoin {
      font-size: 16px;
      &::before{
        width:16px;
        height:16px;
        background-size:16px 16px;
      }
    }
  }
  @media (max-width: ${theme.medias.phablet}) {
    display:none;
  }
`*/

const UserForm = styled.div`
  ${userForm};
`
const UFDashboard = styled.form`
  width:100%;
  max-width:${theme.medias.maxW};
  background:#fff;
  margin:0 auto;
  padding-top:30px;
  @media (max-width: ${theme.medias.phablet}) {
    padding-top:1px;
  }
  
`

const LinkButton = Button.withComponent(omitProps('block')(Link));

const WhiteLinkButton = styled(LinkButton)`
  background: #fff;
  color: ${theme.colors.gray};
  border: 1px solid #ddd;
  //font-weight:normal;
  ${textShadow("0 0 0 rgba(0,0,0,0)")};
`
const GreenLinkButton = styled(LinkButton)`
  background: ${theme.colors.green};
  color:#fff;
  font-weight:500;
  border: 1px solid #ddd;
`

class Profile extends Component {
    componentDidMount() {
        this.props.profile();
        this.props.getUserTotalZcoins();
    }

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
        const {userProfile, classname, logout, logon, totalRecord } = this.props;
        //console.log('total record: ', totalRecord.toJS());
        const { total } = totalRecord.toJS();
        //TODO: 這裡進來時getProfile 要回401
        //下面沒login 先導到login
        if (!logon) {
            return <Redirect to={UserLoginRoute()}/>
        }

        return (
            <div>
                <Helmet>
                    <title>會員中心</title>
                </Helmet>

                <PageTitle title="會員中心"/>

                <UserProfile>
                    <Avatar src={userProfile.get('photoURL')} classname=""/>
                    <div className="itemName">會員帳號</div>
                    <div className="userid">{userProfile.get('mobile')}</div>

                    <UFDashboard>
                        <ZCoinBoard totalRecord={totalRecord.toJS()} history={this.props.history} showCoinBtn={false}/>
                        <UserForm>

                            <WhiteLinkButton to={UserSummaryAllRoute()}>我的預約</WhiteLinkButton>

                            <WhiteLinkButton to={UserZCoinRoute()}>我的Z幣</WhiteLinkButton>

                            <WhiteLinkButton to={UserExchangeRoute()}>我的兌換</WhiteLinkButton>

                            <WhiteLinkButton to={UserEditRoute() + '?source=1'}>編輯個人資料</WhiteLinkButton>

                            <WhiteButton onClick={this.userLogout.bind(this)}>登 出</WhiteButton>
                        </UserForm>
                    </UFDashboard>

                </UserProfile>
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

export default connect(mapStateToProps, {profile, logout, getUserTotalZcoins})(Profile);
