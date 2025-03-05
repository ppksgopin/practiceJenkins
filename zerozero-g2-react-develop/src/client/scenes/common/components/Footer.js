import React, {Component} from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import {Link} from 'react-router-dom'
import FacebookProvider, {Page} from 'react-facebook';

import {awsUrl} from '../../../utils/awsFile';
import {
    CarRoute,
    ElectronicRoute,
    ElectronicEventRoute,
    EnterpriseRoute,
    RecycleShopRoute,
    AboutRoute,
    CooperationRoute,
    BeginnerRoute,
    SatisfactionRoute,
    FaqRoute,
    PrivacyRoute,
    RecycledplasticRoute,
    GreenproductRoute,
    PolicyRoute,
    MapRoute
} from '../../../commons/routePaths';

import {
    subscribeNewsLetter,
    updateSubscription,
    resetSweetAlert
} from '../../../data/common/action';

import theme from '../../../styles/theme';
import {bound, input} from '../../../styles/commons';
import {transition, borderRadius, box, clearfix} from '../../../styles/mixins';
import Alert from './Alert';


const Container = styled.div`
  background: #444;
  border-top: 5px solid ${theme.colors.green};
  @media (max-width: ${theme.medias.phablet}) {
 
  }
`

const Wrapper = styled.div`
  ${bound}
  display: -webkit-flex;
  display: flex;

  @media (max-width: ${theme.medias.phablet}) {
    display: block;
  }
`

const Links = styled.div`
  -webkit-flex: 1;
  flex: 1;
  margin: 30px 0;
  padding:0 20px;
  ${box};

  > a {
    display: block;
    font-size: 14px;
    line-height: 1.8;
    color: #ddd;
    text-decoration: none;

    &:first-child {
      color: ${theme.colors.green};
      margin-bottom: 8px;
      pointer-events:none;
      //font-weight:bold;
    }

    &:hover{
      color:#fff;
    }

    &.phone{
      font-size:18px;
      color:${theme.colors.blue};

      &::before {
        content: '\f095';
        margin-right:8px;
        font-family: FontAwesome;
      }

      @media (max-width: ${theme.medias.phablet}) {
        text-align:center;
        display:block;
        width:100% !important;
      }
    }
  }

  &::after {
    ${clearfix};
  }

  input[type=text] {
    ${input};
    margin-top:5px;
    height:30px;
    line-height:30px;
    font-size:14px;
    padding:0 35px 0 5px;
    ${borderRadius("5px")};
  }

  .newsletter{
    clear:both;
    display: block;
    font-size: 14px;
    line-height: 1.8;
    color: ${theme.colors.blue};
    text-decoration: none;
    position:relative;

    &::before{
      content:"-";
      display:block;
    }

    .add{
      position:absolute;
      right:0;
      bottom:20px;
      letter-spacing:0;
      text-align:center;
      line-height:30px;
      width:30px;
      height:30px;
      font-size:20px;
      //font-weight:bold;
      color:#fff;
      cursor:pointer;
      background:${theme.colors.blue};
      ${borderRadius("0 5px 5px 0")};
    }
  }

  .cool{
    font-size:16px;
    color:${theme.colors.blue};
    text-align:right;
    &::before{
      content: '\f00c';
      margin-right:5px;
      font-family: FontAwesome;
      position:relative;
      display:inline-block;
      animation-name: pop;
      animation-duration: .3s;
      animation-iteration-count: 1;
    }

    @keyframes pop {
        0% {
            top: 20px;
        }

        90% {
            top: -3px;
        }

        98% {
            top: 1px;
        }

        100% {
            top: 0px;
        }
    }
  }

  @media (max-width: ${theme.medias.phablet}) {
    width: 100% !important;
    border-bottom:1px solid #555;
    padding-bottom:25px;

    &:last-child{
      border:none;
    }

    > a {
      width: 50% !important;
      float: left;

      &:first-child {
        width: 100% !important;
      }
    }
  }
`

const ExtraLinks = styled(Links)`
  -webkit-flex: 2;
  flex: 2;

  > a {
      width: 50%;
      float: left;

      &:first-child {
          width: 100%;
          float: none;
      }
  }
`

const Social = styled.div`
  text-align: right;
  a {
    display: inline-block;
    width: 30px;
    height: 30px;
    font-size: 30px;
    line-height: 30px;
    text-decoration: none;
    text-align: center;
    letter-spacing: 0;
    color: #fff;
    margin:0 5px;

    ${transition("all", ".3s")};

    &::before {
        content: '\f09a';
        font-family: FontAwesome;
    }

    &.ig {
        &::before {
            content: '\f16d';
            font-family: FontAwesome;
        }
    }

    &.yt{
        &::before {
            content: '\f167';
            font-family: FontAwesome;
        }
    }

    &.fb {
        &::before {
            content: '\f09a';
            font-family: FontAwesome;
        }
    }

    &:hover{
      color:#ccc;
    }
  }
  @media (max-width: ${theme.medias.phablet}) {
    text-align: center;
  }
`
const FbPlugin = styled.div`
  text-align: right;
  margin:30px 0;

  @media (max-width: ${theme.medias.phablet}) {
    text-align: center;
  }
`

const App = styled.div`
  text-align: right;
  a {
      display: inline-block;
      margin-left:5px;

      img{
        width:100px;
        height:auto;
      }
  }

  @media (max-width: ${theme.medias.phablet}) {
    text-align: center;
  }
`

const CopyRight = styled.div`
  font-size: 12px;
  text-align: center;
  line-height: 40px;
  color: #666;
  padding: 0 5%;
  background-color: #222;

  @media (max-width: ${theme.medias.phablet}) {
    line-height: 20px;
    height: auto;
    padding: 10px 5%;
  }
`

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noht: true
        };
    }

    componentDidMount() {
        this.setState({noht: window.noht});
    }

    render() {
        const subscription = this.props.subscription.toJS();
        if (this.state.noht) {
            return (<div></div>);
        } else {
            return (
                <Container>
                    <Wrapper>
                        <Links>
                            <a>認識 zero zero</a>
                            <Link to={{pathname: AboutRoute()}}>關於我們</Link>
                            <a href="https://blog.zerozero.com.tw/" target="_blank">回收生活誌</a>
                            <Link to={{pathname: CooperationRoute()}}>異業合作</Link>
                            <div className="newsletter">
                                訂閱我們
                                <input type="text" name="newsletter" placeholder="輸入Email" value={subscription.contactEmail} onChange={(e) => this.props.updateSubscription({contactEmail: e.target.value}) }/>
                                <div className="add" onClick={() => this.props.subscribeNewsLetter()}>+</div>
                            </div>
                            <a className="phone" href="tel:0800009717" target="_blank">0800-009-717</a>
                        </Links>
                        <Links>
                            <a>會員指引</a>
                            <Link to={{pathname: BeginnerRoute()}}>新手上路</Link>
                            <Link to={{pathname: SatisfactionRoute()}}>滿意保證</Link>
                            <Link to={{pathname: FaqRoute()}}>常見問題</Link>
                            <a href="mailto:service@df-recycle.com.tw">聯繫客服</a>
                            <Link to={{pathname: PolicyRoute()}}>會員規章</Link>
                            <Link to={{pathname: PrivacyRoute()}}>隱私政策</Link>
                        </Links>
                        <Links>
                            <a>我們的服務</a>
                            <Link to={{pathname: MapRoute()}}>回收地圖</Link>
                            <a href={ElectronicEventRoute()}>家電家具服務</a>
                            <Link to={{pathname: CarRoute()}}>廢車回收</Link>
                            <Link to={{pathname: EnterpriseRoute()}}>企業服務</Link>
                            <Link to={{pathname: RecycleShopRoute()}}>城市環保站</Link>
                            <a target="_blank" href="http://www.df-recycle.com.tw/recyclesite/#recyclesite">環保回收站</a>
                            <Link to={{pathname: RecycledplasticRoute()}}>再生塑膠</Link>
                            {/*<Link to={{pathname: GreenproductRoute()}}>綠色產品開發</Link>*/}
                        </Links>

                        <ExtraLinks>
                            <Social>
                                <a className="fb" target="_blank" href="https://www.facebook.com/TWzerozero/"/>
                                <a className="ig" target="_blank" href="https://www.instagram.com/zerozero_tw/"/>
                                <a className="yt" target="_blank" href="https://www.youtube.com/channel/UCNv9PpH-iq8H3cPlglmuBxw"/>
                            </Social>
                            <FbPlugin>
                                <FacebookProvider appId="733342930208506" version="v2.11">
                                    <Page
                                        href="https://www.facebook.com/TWzerozero/"
                                        tabs="none"
                                    />
                                </FacebookProvider>
                            </FbPlugin>
                            <App>
                                <a className="ios" target="_blank" href="https://itunes.apple.com/tw/app/zero-zero-%E8%B3%87%E6%BA%90%E5%9B%9E%E6%94%B6%E6%9C%8D%E5%8B%99%E5%B0%88%E5%AE%B6/id1181495040?mt=8"><img src={awsUrl("apple-app-store-icon.png")}/></a>
                                <a className="android" target="_blank" href="https://play.google.com/store/apps/details?id=com.zerozero.fe&hl=zh_TW"><img src={awsUrl("google-play-icon.png")}/></a>
                            </App>
                        </ExtraLinks>
                    </Wrapper>
                    <CopyRight>Copyrights © 2016 zero zero. All rights reserved.</CopyRight>
                    <Alert/>
                </Container>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        subscription: state.data.common.get('SUBSCRIPTION'),
        sweetAlert: state.data.common.get('SWEET_ALERT')
    }
}

export default connect(mapStateToProps, {subscribeNewsLetter, updateSubscription, resetSweetAlert})(Footer);
