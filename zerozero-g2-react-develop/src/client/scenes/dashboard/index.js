import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {awsUrl} from '../../utils/awsFile';
import {
    CarAppointmentOrderRoute,
    ElectronicRoute,
    ElectronicEventRoute,
    RecycleShopRoute,
    CarmaintenanceRoute,
    RecyclingbusinessRoute,
    EnterpriseDocDestroyRoute,
    ApartmentcomplexRoute,
    CarRoute
} from '../../commons/routePaths';

import {
    getYoutubeInfos,
    getActivityInfos,
    getIndexBanners
} from './action';

import styled, {css} from 'styled-components';
import theme from '../../styles/theme';
import Slider from 'react-slick';
import {bound} from '../../styles/commons';
import {opacity, transition, borderRadius, translate, textShadow, clearfix, box} from '../../styles/mixins';
import PageTitle from '../common/components/PageTitle';
import CoverImage from '../common/components/CoverImage';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';

const PromoteSlider = styled.div `
    width:100%;
    margin:0;
    position:relative;

    .slider{
        width:100%;
        height:100vh;
        max-height:52vw;
        overflow:hidden;

        @media (max-width: ${theme.medias.phablet}) {
          height:52vw;
      }
        
    
    .slick-slide{
      position:relative;
      background:#000;
      width:100%;
          height:100vh;
          max-height:52vw;
          overflow:hidden;

      > a{
        display:block;
        width:100%;
        height:100%;
      }

      >iframe{
        width:100%;
        height:100%;
      }
      @media (max-width: ${theme.medias.phablet}) {
            height:52vw;
        }
    }

        .slick-arrow{
            width:30px;
            height:30px;
            &::before{
                font-size:30px;
            }
            &.slick-prev{
                left:5px;
                z-index:10;
            }
            &.slick-next{
                right:5px;
                z-index:10;
            }
        }
    }

    .sliderbtn{
        width:100%;
        position:absolute;
        left:0;
        bottom:10px;
        z-index:5;
        text-align:center;
        li{
            display:inline-block;
            margin:4px;
            width:10px;
            height:10px;
            ${borderRadius("100%")};
            background:#fff;
            ${transition('background','.3s')};
            cursor:pointer;
            border:2px solid #fff;
            
            button{
                ${opacity(0)};
                cursor:pointer;
            }
            &.slick-active{
                background:${theme.colors.green};
            }
        }
    }

    h1{
      position:absolute;
      left:5%;
      bottom:10%;
      width: 90%;
      font-size:60px;
      letter-spacing:0.125em;
      font-weight:900;
      text-align:center;
      color:#fff;
      margin-bottom:25px;
      ${textShadow("1px 1px 2px rgba(0,0,0,.5)")};
      pointer-events:none;

      @media (max-width: ${theme.medias.phablet}) {
        font-size:24px;
        letter-spacing:0.05em;
      }
    }

    @media (max-width: ${theme.medias.phablet}) {
      margin-top:50px;
        
    }
`

const Recruit = styled.div `
  width: 100%;
  min-height: 80vh;
  position: relative;
  overflow:hidden;
  background: url(${awsUrl("recruit.jpg")}) no-repeat center center;
  background-size: cover;
  text-align:center;
  flex-direction:column;
  display: -webkit-flex;
  display:         flex;
  -webkit-align-items: center;
          align-items: center;
  -webkit-justify-content: center;
          justify-content: center;

  h3{
    font-size:36px;
    color:#fff;
    line-height:2;
    letter-spacing:0.125em;
  }
  p{
    font-size:16px;
    color:#fff;
    line-height:1.5;
    font-weight:100;
  }

  >div{
    width:100% !important;
    margin-top:40px;
    position:relative;

    a{
      background:${theme.colors.green} !important;

      &:hover {
        background: ${theme.colors.green2} !important;
      }
    }
  }

  @media (max-width: ${theme.medias.phablet}) {
    //display:none;
    min-height: 90vh;
    > div{

      a{
        margin-left:auto;
        margin-right:auto;
      }
    }
  }
`

const BannerContainer = styled.div `
  width: 100%;
  height: 85vh;
  position: relative;
  overflow:hidden;
  background:#f8f8f8;

  ul {
      width: 100%;
      height: 100%;
      position:absolute;
      z-index:1;
      //display:none;
      ${opacity(0)};
      pointer-events:none;

      li {
          position: absolute;
          z-index: 1;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;

          a {
              display: block;
              width: 100%;
              height: 100%;
              overflow:hidden;
          }
      }
  }

  .mobile-background{
    display:none;
    width:100%;
    height:100%;
    background:url(${awsUrl("banner_1.jpg")}) center top no-repeat;
    background-size:cover;
  }
  

  .video-background {
    pointer-events:none;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index:2;

    iframe{
      pointer-events:none;
      position:absolute;
      top:50%;
      left:50%;
      width:100%;
      height:150%;
      z-index:1;
      ${translate('-50%', '-50%')};
    }
  }
  
  @media (max-width: ${theme.medias.phablet}) {
    height:100vh;
    background:#fff;
    .mobile-background{
      display:block;
    }
    .video-background {
      display:none;
    }
    ul {
      ${opacity(1)};
      pointer-events:auto;
    }
  }

  @media (max-height: 500px) {
    .mobile-background{
      background-position: center top 25px;
      background-size:auto 84%;
    }
  }
  @media (max-height: 400px) {
    .mobile-background{
      background-position: center top 25px;
      background-size:auto 70%;
    }
  }
  @media (max-height: 360px) {
    .mobile-background{
      background-position: center top 35px;
      background-size:auto 55%;
    }
  }
`

const Service = styled.div `
  width: 100%;
  position: relative;
  overflow:hidden;
  padding:50px 0;

  ul{
    ${bound};
    li{
      float:left;
      width:33.3333%;
      height:250px;
      ${box};
      border:2px solid #f8f8f8;
      ${borderRadius('8px')};
      overflow:hidden;

      &:hover {
        img {
            -ms-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            ${opacity(.7)};
        }
      }

      &:nth-child(1),&:nth-child(2){
        width:50%;
        a .title p{
            font-size:16px;
            line-height:1.5;
          }
      }

      a{
        display:block;
        width:100%;
        height:100%;
        position:relative;

        .title{
          position:absolute;
          z-index:1;
          width:100%;
          left:0;
          bottom:0;
          padding:20px 20px 20px 100px;
          ${box};
          background: rgba(0,0,0,.6);
          background: -webkit-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8)); 
          background: -o-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8)); 
          background: -moz-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8)); 
          background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8)); 

          h3{
            font-size:24px;
            line-height:1.5;
            font-weight:400;
            color:${theme.colors.green};
          }

          p{
            font-size:15px;
            line-height:1.5;
            font-weight:100;
            color:#fff;
          }

          &::before{
            content:"";
            width:100px;
            height:100px;
            background:#f00;
            position:absolute;
            z-index:1;
            top:0;
            left:0;
          }

        }

        .thumb{
          width:100%;
          height:100%;
          overflow:hidden;
          background:#fff;
          img{
            ${transition()};
          }
        }
      }

      &.car{
        .title::before{
          background: url(${awsUrl("service_icon_car.png")}) no-repeat center center;
          background-size: 79px auto;
        }
      }
      &.elec{
        .title::before{
          background: url(${awsUrl("service_icon_elec.png")}) no-repeat center center;
          background-size: 42px auto;
        }
      }
      &.map{
        .title::before{
          background: url(${awsUrl("service_icon_community.png")}) no-repeat center center;
          background-size: 55px auto;
        }
      }
      &.eco{
        .title::before{
          background: url(${awsUrl("service_icon_eco.png")}) no-repeat center center;
          background-size: 60px auto;
        }
      }
      &.b2b{
        .title::before{
          background: url(${awsUrl("service_icon_b2b.png")}) no-repeat center center;
          background-size: 55px auto;
        }
      }
      @media (max-width: ${theme.medias.phablet}) {
        float:none;
        width:100% !important;
      }
    }

    &::after{
      ${clearfix};
    }
  }

  @media (max-width: ${theme.medias.phablet}) {
    //display:none;
  }

`;
const Event = styled.div `
  width: 100%;
  position: relative;
  overflow:hidden;
  padding:50px 0;
  background:#fff;
  
  .eventContainer{
    ${bound}
    margin:20px auto;
    overflow:hidden;
    position:relative;

    > .block{
      position:relative;
      top:0;
      left:0;
      width:auto;
      white-space:nowrap;
      text-align:center;
      ${transition("left", ".8s")};

      @media (max-width: ${theme.medias.phablet}) {
        left:0 !important;
        white-space:normal;
      }

      ul{
      display:inline-block;
      width:100%;

        li{
          display:inline-block;
          width:30%;
          margin-right:5%;
          white-space:normal;

          &:last-child{
            margin-right:0;
          }

          &:hover {

            .pic{
              border-color:${theme.colors.green};
            }
            img {
                -ms-transform: scale(1.1);
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
            }
          }

          img{
            ${transition()};
          }
          
          a{
            text-decoration:none;

            .pic{
              width:100%;
              padding-top:66.6666%;
              position:relative;
              background:#fff;
              border:4px solid #fff;
              ${borderRadius('8px')};
              ${transition()};
              ${box};
              overflow:hidden;

              .thumb{
                position:absolute;
                z-index:0;
                height:100%;
                width:100%;
                top:0;
                left:0;
              }

              .title{
                position:absolute;
                width:96%;
                padding:0 2%;
                z-index:1;
                font-size:22px;
                color:#fff;
                line-height:50px;
                text-align:center;
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                left:0;
                font-weight:400;
                bottom:0;
                background: rgba(0,0,0,.6);
                background: -webkit-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8)); 
                background: -o-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8)); 
                background: -moz-linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8)); 
                background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.8)); 
              }
            }

            .wording{
              padding:15px;
              font-size:16px;
              line-height:1.5;
              font-weight:100;
              color:#333;
              text-align:center;
            }
          }
        }

        @media (max-width: ${theme.medias.phablet}) {
          li{
            width:100%;
            margin-right:0;
            margin-bottom:20px;
          }
        }
        
        &::after{
          ${clearfix};
        }
      }
    }
    
    > .block_pager{
      margin-top:50px;

      @media (max-width: ${theme.medias.phablet}) {
        margin-top:0px;
        display:none;
      }
      ul{
        text-align:center;
        li{
          display:inline-block;
          margin:5px;
          width:10px;
          height:10px;
          border:1px solid ${theme.colors.gray};
          ${borderRadius("100%")};
          background:#fff;
          cursor:pointer;
          ${transition()};

          &:hover{
            -ms-transform: scale(1.2);
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
            background:${theme.colors.gray};
          }

          &.active{
            background:${theme.colors.gray};
          }
        }
      }
    }
    
  }
  @media (max-width: ${theme.medias.phablet}) {
    //display:none;
  }
  
`;

const Process = styled.div `
  width: 100%;
  position: relative;
  overflow:hidden;
  padding:50px 0 100px;
  background:#fff;
  
  ul{
    ${bound};
    padding:20px 0 50px;
    background: url(${awsUrl("process_line.png")}) no-repeat center center;
    background-size: 100% auto;

    li{
      width:33.333%;
      text-align:center;
      display:inline-block;
      float:left;

      &::before{
        content:"1";
        display:block;
        width:30px;
        height:30px;
        line-height:30px;
        font-size:14px;
        background:${theme.colors.gray};
        color:#fff;
        ${borderRadius("100%")};
        margin:0px auto 30px;
      }

      >div{

        &::before{
          content:"";
          display:block;
          width:111px;
          height:111px;
          margin:10px auto;
          background: #fff url(${awsUrl("process1.png")}) no-repeat center center;
          background-size: 71px auto;
          
        }
        font-size:18px;
        color:${theme.colors.gray};
        line-height:1.5;
        letter-spacing:0.125em;
      }

      &.p2{
        &::before{
          content:"2";
        }
        >div{
          &::before{
            background: #fff url(${awsUrl("process2.png")}) no-repeat center center;
            background-size: 80px auto;
          }
        }
      }
      &.p3{
        &::before{
          content:"3";
        }
        >div{
          &::before{
            background: #fff url(${awsUrl("process3.png")}) no-repeat center center;
            background-size: 111px auto;
          }
        }
      }

      
    }
    &::after{
      ${clearfix};
    }
  }

  @media (max-width: ${theme.medias.phablet}) {
    //display:none;
  }
  
  
`

const Review = styled.div `
  width: 100%;
  position: relative;
  overflow:hidden;
  padding:50px 0;

  background: url(${awsUrl("review_bg.png")}) no-repeat left bottom;
  background-size: 28% auto;
  

  >div{
    padding-top:50px;
    ${bound}
    height:450px;
    position:relative;
    z-index:2;
    width:80%;
    padding-left:10%;
  }
  
  h3{
    font-size:36px;
    line-height:1.5;
    color:${theme.colors.gray};
    margin-bottom:20px;
    letter-spacing:0.125em;
    span{
      color:${theme.colors.blue};
    }
  }

  p{
    font-size:18px;
    line-height:1.5;
    font-weight:100;
    color:${theme.colors.gray};
  }
  
      
      
  &::after{
    content:"";
    position:absolute;
    top:0;
    right:0;
    width:60%;
    height:100%;
    max-width:850px;
    background: url(${awsUrl("review.png")}) no-repeat left center;
    background-size: 100% auto;
    z-index:1;
  }

  

  @media (max-width: ${theme.medias.phablet}) {
    background:none;
    >div{
      padding-top:50px;
      height:auto;

      h3{
        span{
          display:block;
        }
      }
    }
    &::after{
      position:static;
      display:block;
      width:90%;
      margin-top:10px;
      margin-left:10%;
      height:430px;
      background-size: 100% auto;
    }

    //display:none;
  }

  @media (max-width: 600px) {
    &::after{
      height:350px;
      background-size: 100% auto;
    }
  }

  @media (max-width: 450px) {
    &::after{
      height:250px;
      background-size: 100% auto;
    }
  }
  
`

const Application = styled.div `
  width: 100%;
  position: relative;
  overflow:hidden;
  padding:50px 0;

  background: #fff;

  >div{
    padding-top:50px;
    ${bound}
    height:450px;
    position:relative;
    z-index:2;
  }
  
  h3{
    width:50%;
    margin-left:50%;
    font-size:36px;
    line-height:1.5;
    color:${theme.colors.gray};
    margin-bottom:30px;
    letter-spacing:0.125em;
    span{
      color:${theme.colors.green};
    }
  }

  p{
    font-size:18px;
    line-height:1.5;
    margin-bottom:10px;
    font-weight:100;
    width:50%;
    margin-left:50%;
    color:${theme.colors.gray};
    padding-left:25px;
    ${box};

    &::before{
        content:"\f00c";
        font-family: FontAwesome;
        margin-right:5px;
        color:${theme.colors.green};
        margin-left:-25px;
    }
  }

  &::after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:50%;
    height:100%;
    background: url(${awsUrl("application.png")}) no-repeat bottom left 70%;
    background-size: 360px auto;
    z-index:1;
  }
  

  @media (max-width: ${theme.medias.phablet}) {
    padding-bottom:400px;
    >div{
      width:80%;
      padding:0;
      padding-top:50px;
      margin:0 auto;

      height:auto;

      h3{
        width:100%;
        margin-left:0;
        span{
          display:block;
        }
      }

      p{
        width:100%;
        margin-left:0;
      }
    }
    &::after{
      width:100%;
      top:auto;
      bottom:0;
      height:350px;
      background-position: bottom center;
      background-size: auto 100%;
    }
  }
  
`

const App = styled.div`
  margin-top:80px;
  width:50%;
  margin-left:50%;
  text-align: left;
  a {
      display: inline-block;
      margin-right:4%;
      width:45%;
      max-width:180px;

      img{
        width:100%;
        height:auto;
      }
    }

  @media (max-width: ${theme.medias.phablet}) {
    width:100%;
    margin-left:0;
    margin-top:50px;
  }
`

const ShortCut = styled.div `
  position: absolute;
  z-index: 20;
  width: auto;
  bottom: 10%;
  left: 50%;
  text-align:center;
  ${translate('-50%', 0)};

  h1{
    width: 100%;
    font-size:60px;
    letter-spacing:0.125em;
    font-weight:900;
    text-align:center;
    color:#fff;
    white-space:nowrap;
    margin-bottom:25px;
    ${textShadow("1px 1px 2px rgba(0,0,0,.3)")};
    @media (max-width: ${theme.medias.phablet}) {
      ${textShadow("1px 1px 2px rgba(0,0,0,0)")};
      margin-bottom:10px;
      color:#333;
      font-size:36px;
      letter-spacing:0.05em;
    }
  }

  a {
      display: inline-block;
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      font-weight:500;
      color: #fff;
      letter-spacing: 0.125em;
      margin:5px;
      ${borderRadius('8px')};
      ${transition('all', '.3s')};
      ${textShadow("1px 1px 2px rgba(0,0,0,.3)")};

      background: ${theme.colors.blue};
      padding: 0 40px;
      text-decoration:none;
      text-align:center;

      &:hover {
          background: ${theme.colors.blue2};
      }

      &:last-child {
          background: ${theme.colors.green};

          &:hover {
              background: ${theme.colors.green2};
          }
      }
  }

  @media (max-width: ${theme.medias.phablet}) {
    bottom:5%;
    a{
      //display:block;
      //margin:10px;
      padding: 0;
      width:200px;
    }
  }
`

class Dashboard extends Component {

    _isMounted = false ;

    constructor(props) {
        super(props);
        this.state = {
            //bannerID: 0,
            //bannerCount: 2,
            eventPage: 0,
            slideIndex: 0
        }
        //this.slider = this.slider.bind(this);
        this.eventSlider = this.eventSlider.bind(this);
        this.videoResize = this.videoResize.bind(this);
        this._slideChange = this._slideChange.bind(this);
    }

    componentWillMount() {
        //var intervalId = setInterval(this.slider, 4000);
        // store intervalId in the state so it can be accessed later:
        //this.setState({intervalId: intervalId});
    }

    componentDidMount() {
        this._isMounted = true
        window.addEventListener("resize", this.videoResize);
        //this.props.getYoutubeInfos();
        this.props.getIndexBanners();
        this.props.getActivityInfos();
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        //clearInterval(this.state.intervalId);
        window.removeEventListener("resize", this.videoResize)
    }

    videoResize(e) {
        let tar = this.refs.targetVideo;
        if (!tar) {
            return;
        }
        let pw = tar.parentElement.offsetWidth;
        let ph = tar.parentElement.offsetHeight;
        //let tw = tar.offsetWidth;
        //let th = tar.offsetHeight;
        let ratio = 16 / 9;
        if (pw / ph > ratio) {
            tar.style.height = ( pw / ph / ratio * 100) + "%";
            tar.style.width = "100%";
        } else {
            tar.style.width = ( ph / pw * ratio * 100) + "%";
            tar.style.height = "100%";
        }
    }

    // slider() {
    //     // setState method is used to update the state
    //     let cid = this.state.bannerID;
    //     let ttb = this.state.bannerCount;
    //     cid += 1;
    //     if (cid >= ttb) {
    //         cid = 0;
    //     }
    //     ;
    //     this.setState({bannerID: cid})
    // }

    eventSlider(num) {
        if(this._isMounted){
            this.setState({eventPage: num})
        }
    }

    getActivityBlock(activityInfos) {
        return (activityInfos.map(({
                                           id,
                                           url,
                                           link,
                                           title,
                                           subTitle,
                                           key
                                       }, i) => <li key={id}>
            <a href={link} target="_blank">
                <div className="pic">
                    <div className="title">{title}</div>
                    <div className="thumb">
                        <CoverImage src={url}/>
                    </div>
                </div>
                <div className="wording">{subTitle}</div>
            </a>
        </li>));
    }

    _activityRender(activityInfos) {
        let activityInfosData = activityInfos.toJS();

        return (
            <ul>
                {this.getActivityBlock(activityInfosData)}
            </ul>
        );
    }

    getActivityPagerBlock(activityInfos) {
        return (activityInfos.map(({
                                           id,
                                           url,
                                           link,
                                           title,
                                           subTitle,
                                           key
                                       }, i) => i%3 ===0 ? <li key={i} className={this.state.eventPage === Math.ceil(i/3) ? "active" : ""}
                                onClick={() => this.eventSlider(Math.ceil(i/3))}/>:""));
    }

    _activityPagerRender(activityInfos) {
        let activityInfosData = activityInfos.toJS();

        return (
            <ul>
                {this.getActivityPagerBlock(activityInfosData)}
            </ul>
        );
    }

    _slideChange(current, next) {
        if(this._isMounted){
            this.setState({ slideIndex: next });
        }
    }

    render() {

        const settings = {
            className: 'slider',
            dots: true,
            dotsClass: 'sliderbtn',
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: true,
            beforeChange: (current, next) => {
                this._slideChange(current, next);
            }
        };

        const {
            activityInfos
        } = this.props;

        const banners = this.props.banners ? this.props.banners.toJS() : [];

        return (
            <div>
                <Helmet>
                    <title>好回收 好生活</title>
                    <meta name="description" content="我們以「好回收、好生活」為信念，更以「零廢棄、全循環」為職志，我們致力推動便利、友善、效率、多元的回收與環保服務。期許能以創新思維，解決環境的難題。用簡單、愉悅的方式實踐回收、推行環保。更提供您「廢車回收」、「家電回收」、「城市環保店」、「社區資源回收」、「企業文件銷毀」、「再生塑膠粒子」、「塑膠綠色商品」等多元回收服務，誠摯歡迎您與我們一同用環保改善世界。"/>
                    <meta property="og:title" content="zero zero - 好回收 好生活"/>
                    <meta property="og:description" content="我們以「好回收、好生活」為信念，更以「零廢棄、全循環」為職志，我們致力推動便利、友善、效率、多元的回收與環保服務。期許能以創新思維，解決環境的難題。用簡單、愉悅的方式實踐回收、推行環保。更提供您「廢車回收」、「家電回收」、「城市環保店」、「社區資源回收」、「企業文件銷毀」、「再生塑膠粒子」、「塑膠綠色商品」等多元回收服務，誠摯歡迎您與我們一同用環保改善世界。"/>
                </Helmet>
                <Header atIndex={true}/>
                <PromoteSlider>
                    <Slider {...settings}>
                        {
                            banners.map((banner, i) => {
                                // console.log('this.state.slideIndex:', this.state.slideIndex);
                                // console.log('i:', i);
                                // console.log('banner:', banner);
                                if(banner.type === 'image') {
                                    return (
                                        <div key={banner.id}>
                                            <a href={banner.link} target='_blank'>
                                                <CoverImage src={banner.url}/>
                                            </a>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={banner.id}>
                                            {
                                                this.state.slideIndex !== i? "" : <iframe frameBorder="0" src={banner.link} allowFullScreen></iframe>
                                            }
                                        </div>
                                    )
                                }
                            })
                        }
                    </Slider>
                </PromoteSlider>
                {/*
                <BannerContainer>
                    <div className="video-background">
                        <iframe ref="targetVideo"
                                src={youtubeInfos.get('video')}
                                frameBorder="0" allowFullScreen/>
                    </div>
                    <div className="mobile-background">
                    </div>
                    <ShortCut>
                      <h1>{youtubeInfos.get('title')}</h1>
                        <a href={CarAppointmentOrderRoute()}>廢車回收</a>
                        <Link to={{pathname: ElectronicRoute()}}>家電回收</Link>
                    </ShortCut>

                </BannerContainer>*/}
                <Event>
                    <PageTitle title="活動訊息"/>
                    <div className="eventContainer">

                        <div className="block" style={{"left": -105 * this.state.eventPage + "%"}}>
                            {this._activityRender(activityInfos)}
                        </div>

                        <div className="block_pager">
                          {this._activityPagerRender(activityInfos)}
                        </div>
                    </div>

                </Event>

                <Review>
                    <div>
                        <h3><span>30000+ </span>使用者好評</h3>
                        <p>透過zero zero回收只需一指<br/>因為簡單。大家都讚</p>
                    </div>
                </Review>

                <Process>
                    <PageTitle title="服務流程"/>
                    <ul>
                        <li className="p1">
                            <div>線上預約</div>
                        </li>
                        <li className="p2">
                            <div>專人服務</div>
                        </li>
                        <li className="p3">
                            <div>到府回收</div>
                        </li>
                    </ul>
                </Process>

                <Service>
                    <PageTitle title="服務項目"/>
                    <ul>

                        <li className="car">
                            <a href={CarRoute()}>
                                <div className="title">
                                    <h3>廢車回收</h3>
                                    <p>賣個好價錢 快速預約到府服務</p>
                                </div>
                                <div className="thumb">
                                    <CoverImage src={awsUrl("service_car.jpg")}/>
                                </div>
                            </a>
                        </li>
                        <li className="elec">
                            <a href={ElectronicEventRoute()}>
                                <div className="title">
                                    <h3>家電家具服務</h3>
                                    <p>一指預約到府回收</p>
                                </div>
                                <div className="thumb">
                                    <CoverImage src={awsUrl("service_elec.jpg")}/>
                                </div>
                            </a>
                        </li>
                        <li className="map">
                            <Link to={{pathname: ApartmentcomplexRoute()}}>
                                <div className="title">
                                    <h3>社區資源回收</h3>
                                    <p>定期清運環境整潔無異味</p>
                                </div>
                                <div className="thumb">
                                    <CoverImage src={awsUrl("service_community.jpg")}/>
                                </div>
                            </Link>
                        </li>
                        <li className="eco">
                            <Link to={{pathname: RecycleShopRoute()}}>
                                <div className="title">
                                    <h3>城市環保站</h3>
                                    <p>變廢為實 全程追蹤管理</p>
                                </div>
                                <div className="thumb">
                                    <CoverImage src={awsUrl("service_eco.jpg")}/>
                                </div>
                            </Link>
                        </li>
                        <li className="b2b">
                            <Link to={{pathname: EnterpriseDocDestroyRoute()}}>
                                <div className="title">
                                    <h3>文件銷毀</h3>
                                    <p>企業機密零洩密</p>
                                </div>
                                <div className="thumb">
                                    <CoverImage src={awsUrl("service_b2b.jpg")}/>
                                </div>
                            </Link>
                        </li>

                    </ul>
                </Service>

                <Application>
                    <div>
                        <h3><span>下載APP </span>好處多更多</h3>
                        <p>畫面精簡/字體大適合閱讀</p>
                        <p>個人回收記錄</p>
                        <p>Z幣點數累積/查詢</p>
                        <p>綠色好康兌換中心</p>

                        <App>
                            <a className="ios" target="_blank" href="https://itunes.apple.com/tw/app/zero-zero-%E8%B3%87%E6%BA%90%E5%9B%9E%E6%94%B6%E6%9C%8D%E5%8B%99%E5%B0%88%E5%AE%B6/id1181495040?mt=8"><img src={awsUrl("apple-app-store-icon.png")}/></a>
                            <a className="android" target="_blank" href="https://play.google.com/store/apps/details?id=com.zerozero.fe&hl=zh_TW"><img src={awsUrl("google-play-icon.png")}/></a>
                        </App>
                    </div>
                </Application>

                <Recruit>
                    <h3>綠色召集令</h3>
                    <p>你就是下一個回收生力軍</p>
                    <ShortCut>
                        <Link to={{pathname: CarmaintenanceRoute()}}>廢車保修商</Link>
                        <Link to={{pathname: RecyclingbusinessRoute()}}>清運服務商</Link>
                    </ShortCut>
                </Recruit>
                <Footer/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        youtubeInfos: state.dashboard.get("YOUTUBE_INFOS"),
        activityInfos: state.dashboard.get("ACTIVITY_INFOS"),
        banners: state.dashboard.get('BANNERS'),
    }
}

export default connect(mapStateToProps, {getYoutubeInfos, getActivityInfos, getIndexBanners})(Dashboard);
