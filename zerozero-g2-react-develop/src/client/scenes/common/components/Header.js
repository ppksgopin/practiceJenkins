import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {debounce, isEmpty} from 'lodash';
import {connect} from 'react-redux';
import {checkLoginStatus, asyncPhotoURL, profile} from '../../../data/auth/action';
import { getUserExchangeList } from '../../exchange/components/ExchangeList/action';

import {
    IndexRoute,
    UserRoute,
    ElectronicRoute,
    ElectronicEventRoute,
    CarRoute,
    ExchangeIndexRoute,
    EnterpriseRoute,
    NEproductsRoute,
    ScavengerRoute, 
    AssociationsRoute,   
    MotorcycleUnuseMoneyRoute,
    UserZCoinRoute,
    FreezcoinRoute,
    MapRoute,
    ExchangeListRoute,
} from '../../../commons/routePaths';
import {awsUrl} from '../../../utils/awsFile';

import theme from '../../../styles/theme';
import {bound} from '../../../styles/commons';
import {transition, clearfix, borderRadius, box, boxShadow} from '../../../styles/mixins';
import CoverImage from './CoverImage';

const Container = styled.div `
	position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${props => props.simple
    ? '50px'
    : '80px'};
    background: ${props => props.simple
    ? '#fff'
    : (props.atIndex
        ? 'none'
        : 'rgba(255,255,255,1)')};
    border-bottom: ${props => props.simple
    ? 'none'
    : (props.atIndex
        ? '1px solid rgba(255,255,255,.1)'
        : 'none')};
    z-index: 999;
    ${transition("all", ".3s")};
    ${props => props.simple
    ? boxShadow("0 1px 4px rgba(0, 0, 0, 0.1)")
    : (props.atIndex
        ? boxShadow("none")
        : boxShadow("0 1px 4px rgba(0, 0, 0, 0.1)"))};

    @media (max-width: ${theme.medias.phablet}) {
        
        height: 50px;
        background:#fff !important;
        border-bottom: none !important;
        ${boxShadow("0 1px 4px rgba(0, 0, 0, 0.1) !important")};
    }
`

const Wrapper = styled.div `
  ${bound};
`

const Logo = styled.div `
  	display: inline-block;
    margin-top: ${props => props.simple
    ? '10px'
    : '15px'};
    height: ${props => props.simple
    ? '30px'
    : '50px'};
    float: left;
    ${transition("all", ".3s")};

    a {
        height: 100%;

        img {
            height: 100%;
            width: auto;
        }
    }

    @media (max-width: ${theme.medias.phablet}) {
		margin-top: 10px;
        height: 30px;
    }
`

const Navs = styled.div `
  	width: ${props => props.simple
    ? 'calc(100% - 80px)'
    : 'calc(100% - 120px)'};
    margin-left: ${props => props.simple
    ? '80px'
    : '120px'};
    ${transition("all", ".3s")};

    @media (max-width: ${theme.medias.phablet}) {
		width: 100% !important;
        margin-left: 0 !important;
        position: absolute;
        top: 50px;
        left: ${props => props.active
    ? '0'
    : '-120%'};
        background: #333;
        height: calc(100vh - 50px);
        border-top:5px solid ${theme.colors.green};
        overflow: hidden;


    }
`

const MainMenu = styled.div `
	display: inline-block;
    ${transition("all", ".3s")};
    ul {
        li {
            display: inline-block;
            float: left;
            a {
                display: block;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                color: ${props => props.simple
    ? theme.colors.gray
    : (props.atIndex
        ? '#fff'
        : theme.colors.gray)};
                text-decoration: none;
                margin: 0 10px;
                margin-top: ${props => props.simple ? '5px' : '20px'};
                font-weight: 500;
                ${transition("all", ".3s")};
                &:hover, &.active {
                    color: ${theme.colors.blue};
                }
            }
        }
        &::after {
            ${clearfix};
        }
    }

    @media (max-width: ${theme.medias.phablet}) {
		display: block;
        padding-bottom:60px;
        ${box};
	    height: calc(100% - 80px);
	    overflow: auto;
	    ul {
	        width: 100%;
	        li {
	            display: block;
	            float: none;
	            a {
	                height: 60px !important;
	                line-height: 60px !important;
	                margin: 0 !important;
	                text-indent: 20px;
	                border-bottom: 1px solid #444;
	                color:#fff !important;
	                &:hover, &.active {
	                    color: ${theme.colors.blue} !important;
	                }
	            }
	        }
	    }
    }


    ul {
    li {
      position: relative;  // 新增，為下拉選單定位

      &.dropdown {
        &:hover .dropdown-content {
          display: block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          min-width: 160px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          z-index: 1000;

          a {
            color: ${theme.colors.gray} !important;
            padding: 12px 16px;
            margin: 0 !important;
            display: block;
            text-align: left;
            height: auto !important;
            line-height: 1.5 !important;
            
            &:hover {
              background: #f9f9f9;
            }
          }
        }
      }
    }
  }

  @media (max-width: ${theme.medias.phablet}) {
    ul {
      li {
        &.dropdown {
          .dropdown-content {
            position: static;
            background: #444;
            box-shadow: none;
            display: none;
            
            a {
              color: #fff !important;
              padding-left: 40px;
              border-bottom: 1px solid #555;
              
              &:hover {
                background: #333;
              }
            }
          }
          
          &:hover .dropdown-content {
            display: block;
          }
        }
      }
    }
  }
`

const SideMenu = styled.div `
	display: inline-block;
    float: right;

    ul {
        li {
            display: inline-block;

            a {
                display: block;
                height: 40px;
                width:40px;
                line-height: 40px;
                font-size: 14px;
                color: ${theme.colors.gray};
                text-decoration: none;
                margin: 0 5px;
                margin-top: ${props => props.simple
    ? '5px'
    : '20px'};
                overflow: hidden;
                background-color: ${theme.colors.blue};
                color: #fff;
                padding: 0 13px;
                font-weight: 500;
                text-align:center;
                ${borderRadius("20px")}
                ${transition("all", ".3s")};
                ${box};
                &::before {
                    content: '\f007';
                    font-family: FontAwesome;
                    margin-right: 14px;
                    font-size: 18px;
                    font-weight: normal;
                }

            }
            &.gift_center {
                display:none;
                a {
                    background-color: ${theme.colors.green};
                    &::before {
                        content: '';
                        display:inline-block;
                        vertical-align:middle;
                        width:12px;
                        height:40px;
                        background: ${theme.colors.green} url(${awsUrl("zcoin_small_white_new.png")}) no-repeat center center;
                        background-size:10px 18px;
                    }
                }
            }

            &.cart_center {
                a {
                    position:relative;
                    width:40px;
                    background: url(${awsUrl("icon_cart.png")}) no-repeat center center;
                    background-size:100% 100%;
                    overflow: visible;

                    &::before {
                        display:none;
                    }

                    span{
                        font-size:12px;
                        text-align:center;
                        width:18px;
                        height:18px;
                        position:absolute;
                        top:-2px;
                        right:-9px;
                        line-height:18px;
                        color:#fff;
                        background:#ff0000;
                        ${borderRadius("100%")};
                    }
                }
            }

            &.mail_center {
                a {
                    position:relative;
                    width:40px;
                    background: url(${awsUrl("icon_mail.png")}) no-repeat center center;
                    background-size:100% 100%;
                    overflow: visible;

                    &::before {
                        display:none;
                    }

                    span{
                        font-size:12px;
                        text-align:center;
                        width:18px;
                        height:18px;
                        position:absolute;
                        top:-2px;
                        right:-9px;
                        line-height:18px;
                        color:#fff;
                        background:#ff0000;
                        ${borderRadius("100%")};
                    }
                }
            }

            &.member_center{
                &.logined{
                    a{
                        .foto{
                             display:inlie-block;
                             position:absolute;
                             top:2px;
                             left:2px;
                             width:36px;
                             height:36px;
                             overflow:hidden;
                             background: url(${awsUrl("user_thumb.png")}) no-repeat center center;
                             background-size: cover;
                             ${borderRadius("100%")};
                             @media (max-width: ${theme.medias.phablet}) {
                                position:static;
                                vertical-align:middle;
                                border:2px solid ${theme.colors.blue};
                             }
                         }
                    }
                    a:hover {
                        max-width:40px;
                    }
                    a::before {
                        display:none;
                    }
                }
                a{
                    position:relative; 
                }
             }
        }

        &::after {
            ${clearfix};
        }
    }

    @media (max-width: ${theme.medias.phablet}) {
		position: fixed;
        width: 100%;
        bottom: 0;
        left: ${props => props.active
    ? '0'
    : '-120%'};
        float: none;
        z-index:10;

        ${boxShadow("0 -2px 8px rgba(0, 0, 0, 0.4)")};
        ${transition("left", ".3s")};

        ul {
            li {
                &.gift_center {
                    width: 100%;
                    a {
                        height: 80px;
                        width: 100%;
                        max-width:none;
                        line-height: 80px;
                        margin: 0 !important;
                        text-align: center;
                        padding: 0 !important;

                        ${borderRadius("0")}

                        &::before {
                            margin-right: 5px;
                        }

                        &:hover {
                            max-width: none;
                            width: 100%;
                        }
                    }
                }
                &.member_center {
                    position:fixed;
                    top:5px;
                    right:10px;
                    &.logined{
                        right:90px;
                    }
                    a {
                        height: 40px;
                        width: 40px;
                        max-width:none;
                        line-height: 40px;
                        margin: 0 !important;
                        text-align: center;
                        padding: 0 !important;
                        background:none;
                        text-align:center;
                        &::before {
                            color:${theme.colors.gray};
                            margin-right:0;
                        }
                        &:hover {
                            &::before {
                                margin-right:14px;
                            }
                        }
                    }
                    
                }

                &.cart_center {
                    position:fixed;
                    top:10px;
                    right:55px;
                    a {
                        width:30px;
                        height:30px;
                        margin: 0 !important;
                        background: url(${awsUrl("icon_cart_mobile.png")}) no-repeat center center;
                        background-size:24px auto;
                        ${borderRadius("0")}
                    }
                }

                &.mail_center {
                    position:fixed;
                    top:10px;
                    right:15px;
                    a {
                        width:30px;
                        height:30px;
                        margin: 0 !important;
                        background: url(${awsUrl("icon_mail_mobile.png")}) no-repeat center center;
                        background-size:20px auto;
                        ${borderRadius("0")}
                    }
                }
            }
        }
    }
`

const MobileMenuBtn = styled.div `
  	display: none;
	width: 40px;
	height: 50px;
	float: right;
	text-align: center;
	line-height: 50px;
    position:relative;
    right:35px;

	&::before {
       	content : ${props => props.active
    ? '"\f0c9"'
    : '"\f0c9"'};
        font-family: FontAwesome;
        letter-spacing: 0;
        font-size: 25px;
        color: ${theme.colors.gray};
    }

    &.logined{
        right:125px;
    }

  	@media (max-width: ${theme.medias.phablet}) {
  		display: inline-block;
  	}
`

class Header extends Component {
    //v2.10.0 prevent React setState on unmounted Component
    _isMounted = false ;

    constructor(props) {
        super(props);
        this.state = {
            toggled: false,
            atTop: true,
            noht: true,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        // console.log('aa', window.noht)
        this._isMounted = true ;
        if(typeof window !== "undefined") {

            window.addEventListener('scroll', debounce(() => {
                this.handleScroll();
            }, 10));

            const removeLocalStorage = () => {
                localStorage.removeItem('token');
            }

            //判斷當是webview 且沒token時，移除localStorage (app已登出的狀態)，不做checkLoginStatus。
            if ((window.token === "undefined" || window.token === undefined) && window.noht === true) {
                localStorage.removeItem('token');
            }else{
                this.props.checkLoginStatus(window.noht);
            }

            this.setState({noht: !!window.noht});
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
        window.removeEventListener('scroll', debounce(() => {
            this.handleScroll();
        }, 10));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.profile !== this.props.profile) {
            this.props.asyncPhotoURL();
        }
    }

    handleScroll() {
        let scrollTop = document.documentElement.scrollTop + document.body.scrollTop;
        if(this._isMounted){
            if (scrollTop > 50) {
                this.setState({atTop: false});
            } else {
                this.setState({atTop: true});
            }
        }
    }

    onToggle() {
        this.setState({toggled: !this.state.toggled});
    }

    _renderUserProfilePhoto(logon, profile) {
        //console.log('photoURL: ', this.props.photoURL)
        if(logon) {
            if(!isEmpty(this.props.photoURL) && this.props.photoURL !== 'null') {
                return (
                    <Link to={{pathname: UserRoute()}}><div className="foto"><CoverImage src={this.props.photoURL}/></div></Link>
                );
            }else {
                return (
                    <Link to={{pathname: UserRoute()}}><div className="foto"></div></Link>
                );
            }
        }else {
            return (
                <Link to={{pathname: UserRoute()}}></Link>
            );
        }
    }

    render() {
        const {toggled, atTop, noht} = this.state;
        const {atIndex, zcoins, logon, profile, exchangeList } = this.props;
        //console.log('profile: ', profile.toJS())
        if (noht) {
            return (<div></div>);
        } else {
            return (
                <Container atIndex={atIndex} simple={!atTop}>
                    <Wrapper>
                        <Logo simple={!atTop}>
                            <a href={IndexRoute()}><img src={awsUrl("logo.png")}/></a>
                        </Logo>
                        <MobileMenuBtn className={logon?"logined":""} active={toggled} onClick={this.onToggle.bind(this)}/>
                        <Navs simple={!atTop} active={toggled}>
                            <MainMenu atIndex={atIndex} simple={!atTop}>
                                <ul>
                                    <li>
                                        <a href={MapRoute()}>回收地圖</a>
                                    </li>
                                    <li>
                                        <a href={ElectronicEventRoute()}>家電家具服務</a>
                                    </li>
                                    <li>
                                        <a href={CarRoute()}>廢車回收</a>
                                    </li>
                                    <li>
                                        <a href={EnterpriseRoute()}>企業服務</a>
                                    </li>
                                    {/*<li>*/}
                                    {/*<a href="#">城市環保店</a>*/}
                                    {/*</li>*/}
                                    <li>
                                        <a href="https://blog.zerozero.com.tw/" target="_blank">zero zero生活誌</a>
                                    </li>
                                    <li>
                                        <Link to={ExchangeIndexRoute()}>兌換中心</Link>
                                        {/*<a href={ExchangeIndexRoute()}>兌換中心</a>*/}
                                    </li>
                                    <li className="dropdown">
    <a href={NEproductsRoute()}>即期品募集中</a>
    <div className="dropdown-content">
      {/* <a href={NEproductsRoute()}>即期品募集中</a> */}
      <a href={AssociationsRoute()}>協會</a>
      <a href={ScavengerRoute()}>拾荒者</a>
    </div>
  </li>
                                    {/* <li>
                                        <a href={MotorcycleUnuseMoneyRoute()}>廢機車報廢補助</a>
                                    </li> */}
                                </ul>
                            </MainMenu>
                            <SideMenu simple={!atTop} active={toggled}>
                                <ul>
                                    <li className={logon?"member_center logined":"member_center"}>
                                        {this._renderUserProfilePhoto(logon, profile)}
                                    </li>
                                    <li className="gift_center">
                                        {
                                            logon
                                                ?
                                                <a href={UserZCoinRoute()}>回收集Z幣{`(${zcoins})`}</a>
                                                :
                                                <a href={FreezcoinRoute()}>回收集Z幣</a>
                                        }
                                    </li>
                                    <li className="cart_center">
                                        {
                                            logon
                                                ? exchangeList.toJS().length === 0
                                                    ? <a href={ExchangeListRoute()} />
                                                    : <a href={ExchangeListRoute()}><span>{exchangeList.toJS().length}</span></a>
                                                : ""
                                        }
                                    </li>
                                    <li className="mail_center">
                                        {
                                            logon
                                                ?
                                                <Link to={{pathname: UserRoute()}}></Link>
                                                :
                                                ""
                                        }
                                    </li>
                                </ul>
                            </SideMenu>
                        </Navs>
                    </Wrapper>
                </Container>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        zcoins: state.dashboard.get('TOTAL_COINS'),
        logon: state.data.auth.get('IS_LOGINED'),
        profile: state.data.auth.get('PROFILE'),
        exchangeList: state.exchange.exchangeList.get('ExchangeList'),
        photoURL: state.data.auth.get('USER_PHOTO_URL'),
    }
}

export default connect(mapStateToProps, { checkLoginStatus, asyncPhotoURL })(Header);
