import React, { Component } from 'react';


import {awsUrl} from '../../../utils/awsFile';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import {bound,appointmentForm} from '../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix,translate,textShadow,opacity} from '../../../styles/mixins';

import ReservationForm from './components/ReservationForm';
import { Helmet } from 'react-helmet';
import SubscriptionForm from '../components/SubscriptionForm';

import Slider from 'react-slick';
import queryString from "query-string";

const Head = styled.div`
    padding:0;
    background:#eee url(${awsUrl("enterprise_banner_event_202301_food.jpg")}) no-repeat center center;
    background-size:cover;
    text-align:center;

    .video{
        width:100%;
        height:100vh;
        max-height:52vw;
        position:relative;

        iframe{
            position:absolute;
            pointer-events:none;
            top:0;
            left:0;
            width:100%;
            height:100%;
            z-index:1;
        }

        .video_title{
            position:absolute;
            z-index:2;
            width:100%;
            height:100%;
            top:0px;
            left:0;
        }
    }
    h3{
        font-size:36px;
        color:#fff;
        line-height:1.2;
        font-weight:500;
        letter-spacing:0.1em;
        margin-bottom:20px;
        display:none;
    }

    p{
        font-size:16px;
        color:#fff;
        line-height:1.5;
        margin-bottom:30px;
        display:none;
    }

    a{
        display:inline-block;
        color:#fff;
        font-size:20px;
        font-weight:500;
        background:${theme.colors.green};
        ${borderRadius("8px")};
        padding:0px 35px;
        line-height:50px;
        height:50px;
        text-decoration:none;
        cursor:pointer;
        width:100%;
        height:100%;
        padding:0;
        ${opacity(0)};
    }

    @media (max-width: ${theme.medias.phablet}) {
        .video{
            height:52vw;
        }
        
    }
`

const Review = styled.div`
    ${bound};
    >div{
        width:50%;
        padding:50px 0;
        float:left;

        &:first-child{
            
            width:45%;
            margin-right:4.5%;
        }

        @media (max-width: ${theme.medias.phablet}) {
            width:100% !important;
            margin-right:0 !important;;
            float:none;
            padding:30px 0;
        }
    }

    .yt{
        width:100%;
        height:0;
        padding-top:56.25%;
        position:relative;
        background:#eee;
        iframe{
            position:absolute;
            z-index:1;
            top:0;
            lefT:0;
            height:100%;
            width:100%;
        }
    }

    h3{
        font-size:24px;
        color:${theme.colors.blue};
        line-height:1.2;
        font-weight:500;
        letter-spacing:0.1em;
        margin-bottom:20px;
    }

    p{
        font-size:18px;
        color:#333;
        line-height:1.6;
        margin-bottom:30px;

        span{
            margin-top:20px;
            color:#999;
            font-size:15px;
            display:block;
        }
    }

    a{
        display:inline-block;
        font-size:15px;
        color:#fff;
        font-size:16px;
        font-weight:500;
        background:${theme.colors.green};
        ${borderRadius("8px")};
        padding:0px 25px;
        line-height:40px;
        height:40px;
        text-decoration:none;
        cursor:pointer;
    }
    &::after{
        ${clearfix};
    }

    @media (max-width: ${theme.medias.phablet}) {
        text-align:center;
    }
`

const Certificate = styled.div`
    >div{
        ${bound};
        >div{
            width:50%;
            padding:20px 0;
            float:right;

            &:first-child{
                padding:50px 0 30px;
                width:45%;
                margin-left:4.5%;
            }

            @media (max-width: ${theme.medias.phablet}) {
                width:100% !important;
                margin-left:0 !important;;
                float:none;
            }
        }
        h3{
            font-size:24px;
            color:${theme.colors.blue};
            line-height:1.2;
            font-weight:500;
            letter-spacing:0.1em;
            margin-bottom:20px;
        }

        p{
            font-size:16px;
            color:#333;
            line-height:1.5;
            margin-bottom:10px;
            text-indent:-23px;
            padding-left:23px;

            &::before{
                color:${theme.colors.green};
                content:"\f00c";
                position:relative;
                font-family: FontAwesome;
                margin-right:5px;
            }
        }

        a{
            display:inline-block;
            font-size:15px;
            color:#fff;
            font-size:16px;
            font-weight:500;
            background:${theme.colors.green};
            ${borderRadius("8px")};
            padding:0px 25px;
            line-height:40px;
            height:40px;
            text-decoration:none;
            cursor:pointer;
        }
        &::after{
            ${clearfix};
        }

        @media (max-width: ${theme.medias.phablet}) {
            text-align:center;

            p{
                text-align:left;
            }
        }
    }
`

const Showcases = styled.div`

    padding:50px 0;
    text-align:center;

    .slick-next{
        right:10px;
        z-index:10;
    }
    .slick-prev{
        left:10px;
        z-index:10;
    }
    >div{
        width:100%;
        margin:0px auto;

        h2{
            font-size:24px;
            color:${theme.colors.gray};
            line-height:1.2;
            font-weight:500;
            letter-spacing:0.1em;
            margin:0 auto 30px;
            max-width:80%;
        }



        .slick-slide{
            width:400px;
            padding:0px;
            ${box};
            z-index:1;
            position:relative;

            &.slick-center{
                z-index:5;
                >div{
                    ${boxShadow("0px 2px 8px rgba(0,0,0,.5)")};
                    background:#666;
                    margin-top:10px;
                    padding-bottom:20px;
                }
                img{
                    border-color:${theme.colors.blue};
                    ${opacity(1)};
                }
                h3{
                    color:${theme.colors.blue};
                }
                p{
                    color:#fff;
                }
            }

            >div{
                background:#555;
                text-align:left;
                margin-top:20px;
                margin-bottom:20px;
                ${transition("all",".5s")};
                ${boxShadow("0px 0px 2px rgba(0,0,0,.4)")};

                img{
                    background:#000;
                    width:100%;
                    pointer-events:none;
                    margin-bottom:30px;
                    border-bottom:6px solid #666;
                    ${opacity(.6)};
                }

                h3{
                    color:#ccc;
                    font-size:20px;
                    line-height:1.5;
                    letter-spacing:0.1em;
                    padding:0 20px;
                    margin-bottom:8px;
                    ${box};
                    pointer-events:auto;
                }

                p{
                    font-size:16px;
                    color:#ccc;
                    line-height:1.5;
                    padding:0 20px;
                    ${box};
                    min-height:90px;
                    pointer-events:auto;
                }
            }

        }

        

        @media (max-width: ${theme.medias.phablet}) {
            .slick-slide{
                width:250px;
            }
        }
    }
`

const Water = styled.div`
    background:#fff;
    >div{
        ${bound};
        >div{
            width:50%;
            padding:20px 0;
            float:left;

            &:first-child{
                padding:50px 0 30px;
                width:45%;
                margin-right:4.5%;
            }

            @media (max-width: ${theme.medias.phablet}) {
                width:100% !important;
                margin-right:0 !important;;
                float:none;
            }
        }
        h3{
            font-size:24px;
            color:${theme.colors.blue};
            line-height:1.2;
            font-weight:500;
            letter-spacing:0.1em;
            margin-bottom:20px;
        }

        p{
            font-size:16px;
            color:#333;
            line-height:1.6;
            margin-bottom:30px;
            letter-spacing:0.01em;

            span{
                margin-top:20px;
                color:#999;
                font-size:13px;
                display:block;
            }
        }

        a{
            display:inline-block;
            font-size:15px;
            color:#fff;
            font-size:16px;
            font-weight:500;
            background:${theme.colors.green};
            ${borderRadius("8px")};
            padding:0px 25px;
            line-height:40px;
            height:40px;
            text-decoration:none;
            cursor:pointer;
        }
        img{
            ${borderRadius("8px")};
            overflow:hidden;
        }
        &::after{
            ${clearfix};
        }

        @media (max-width: ${theme.medias.phablet}) {
            text-align:center;
        }
    }
`

const More = styled.div`
    ${bound};
    >div{
        width:50%;
        padding:20px 0;
        float:left;

        &:first-child{
            padding:50px 0 30px;
            width:45%;
            margin-right:4.5%;
        }

        &:last-child{

        }

        @media (max-width: ${theme.medias.phablet}) {
            width:100% !important;
            margin-right:0 !important;;
            float:none;

            &:last-child{
                img{
                    margin-top:0px;
                }
            }
        }
    }
    h3{
        font-size:24px;
        color:${theme.colors.blue};
        line-height:1.2;
        font-weight:500;
        letter-spacing:0.1em;
        margin-bottom:20px;
    }

    p{
        font-size:16px;
        color:#333;
        line-height:1.6;
        margin-bottom:30px;

        span{
            color:#999;
            font-size:13px;
            display:block;
        }
    }

    .check{
        width:80px;
        height:80px;
        border:2px solid ${theme.colors.green};
        line-height:80px;
        text-align:center;
        color:${theme.colors.green};
        font-size:40px;
        ${box};
        ${borderRadius("100%")};
        margin:20px auto;
        letter-spacing:0;
        position:relative;
        animation-name: jump;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        &::before{
            content:"\f00c";
            position:relative;
            font-family: FontAwesome;
        }
              
        @keyframes jump {
            0% {
                top: 0px;
            }

            70% {
                top: 0px;
            }

            85%{
                top:-10px;
            }

            97% {
                top: 2px;
            }

            100% {
                top: 0px;
            }
        }
    }


    form{
        background:#fff;
        padding:30px !important;
        margin-top:20px !important;
        ${borderRadius("8px")};
        ${box};
        ${appointmentForm};
        border:1px solid #ddd;

        input{
            height:40px !important;
            line-height:40px !important;
        }

        select{
            height:40px !important;
            line-height:40px !important;
        }
        label{
            line-height:35px;
        }

    }
    &::after{
        ${clearfix};
    }

    @media (max-width: ${theme.medias.phablet}) {
        text-align:center;
    }
`

const Data = styled.div`
    background:${theme.colors.blue};
    padding:40px 0;

    >ul{
        ${bound};
        li{
            text-align:center;
            width:33.33%;
            float:left;
            font-size:18px;
            color:#333;
            font-weight:400;
            line-height:1.8;
            span{
                font-size:36px;
                font-weight:500;
                line-height:1;
                vertical-align:text-bottom;
                margin-right:5px;
                color:#fff;
            }
            border-right:1px solid rgba(255,255,255,.3);
            ${box};

            &:last-child{
                border:none;
            }

            >div{
                display:inline-block;
            }

            &::before{
                content:"";
                display:inline-block;
                width:70px;
                height:70px;
                background: url(${awsUrl("data4.png")}) no-repeat center center;
                background-size: 70px auto;
                margin-right:10px;
            }

            &:nth-child(2){
                &::before{
                    background: url(${awsUrl("data2.png")}) no-repeat center center;
                    background-size: 60px auto;
                }
            }
            &:nth-child(3){
                &::before{
                    background: url(${awsUrl("data3.png")}) no-repeat center center;
                    background-size: 70px auto;
                }
            }
        }

        &::after{
            ${clearfix};
        }
    }

    @media (max-width: ${theme.medias.phablet}) {
       ul{
        li{
            padding:40px 0;
            width:100%;
            border:none;
            >div{
                display:inline-block;
            }

            &::before{
                display:inline-block;
                margin-right:10px;
            }
        }
       }
    }
`

const ServiceMode=styled.div`
    background:#fff;
    padding:50px 0;
    > h2{
        font-size:24px;
        color:${theme.colors.gray};
        font-weight:400;
        line-height:1.5;
        text-align:center;
        width:100%;
        margin-bottom:30px;

    }
    
    > div{
        ${bound};
        > div{
            width:50%;
            float:left;

            @media (max-width: ${theme.medias.phablet}) {
                width:100%;
                float:none;
            }
            > ul{
                padding:20px 30px;
                ${box};
                li{
                    width:100%;
                    min-height:110px;
                    margin-bottom:30px;
                    ${box};
                    padding-left:120px;
                    
                    background-image:url(${awsUrl("icon_servicemode1.png")});
                    background-repeat:no-repeat;
                    background-position:top left 20px;
                    background-size:80px auto;

                    &:nth-child(2){
                        background-image:url(${awsUrl("icon_servicemode2.png")});
                    }

                    &:nth-child(3){
                        background-image:url(${awsUrl("icon_servicemode3.png")});
                    }

                    > h3{
                        font-size:18px;
                        color:${theme.colors.gray};
                        line-height:2;
                        margin-bottom:15px;
                        border-bottom:1px solid rgba(0,0,0,.1);
                        

                        @media (max-width: ${theme.medias.phablet}) {
                            text-align:center;
                        }

                    }
                    > p{
                        font-size:13px;
                        color:#333;
                        line-height:1.4;
                        text-align:left;
                    }

                    @media (max-width: ${theme.medias.phablet}) {
                        width:100%;
                        padding-left:0px;
                        padding-top:55px;
                        background-position:top center;
                        background-size:50px auto;
                        margin:20px auto 30px;
                    }
                }

                &::after{
                    ${clearfix};
                }
            }

            @media (max-width: ${theme.medias.phablet}) {
                width:100%;
                float:none;
            }

        }

        &::before{
            content:"";
            display:block;
            width:50%;
            height:400px;
            float:right;
            margin:20px 0;
            background:#eee url(${awsUrl("enterprise_hd_servicemode.jpg")}) no-repeat center center;
            background-size:cover;

            ${borderRadius("8px")};
            
            @media (max-width: ${theme.medias.phablet}) {
                width:90%;
                float:none;
                margin:0 auto;
                height:0;
                padding-top:60%;
            }
        }

        &::after{
            ${clearfix};
        }
    }
`

const Strength=styled.div`
    background:#fff;
    
    > div{
        ${bound};
        > div{
            width:50%;
            padding:50px 0;
            text-align:center;
            float:left;

            > h2{
                font-size:24px;
                color:${theme.colors.gray};
                font-weight:400;
                line-height:1.5;
            }

            > ul{
                li{
                    width:49%;
                    //max-width:300px;
                    margin:0 auto;
                    display:inline-block;
                    padding:20px 30px;
                    ${box};
                    @media (max-width: ${theme.medias.phablet}) {
                        width:100%;
                        display:block;
                    }

                    > h3{
                        font-size:18px;
                        color:${theme.colors.gray};
                        line-height:2;
                        margin-bottom:15px;
                        border-bottom:1px solid rgba(0,0,0,.1);

                    }
                    > p{
                        font-size:15px;
                        color:#333;
                        line-height:1.4;
                        text-align:left;
                    }
                }

                &::after{
                    ${clearfix};
                }
            }

            @media (max-width: ${theme.medias.phablet}) {
                width:100%;
                float:none;
            }

        }

        &::before{
            content:"";
            display:inline-block;
            width:50%;
            height:450px;
            float:right;
            margin:20px 0;
            background:#eee url(${awsUrl("enterprise_food_strength.jpg")}) no-repeat center left;
            background-size:cover;

            ${borderRadius("8px")};
            
            @media (max-width: ${theme.medias.phablet}) {
                display:none;
            }
        }

        &::after{
            ${clearfix};
        }
    }
`

const Process=styled.div`
    padding:50px 0;
    background:#fff;

    >div{
        ${bound};
        text-align:center;

        > h2{
            font-size:24px;
            color:${theme.colors.gray};
            font-weight:400;
            line-height:1.5;
        }
    }

    ul{
        padding:30px 0 50px;
        @media (max-width: ${theme.medias.phablet}) {
            background:none;
        }

        li{
          width:20%;
          text-align:center;
          display:inline-block;
          float:left;
          ${box};
          padding:0 15px;
          margin-bottom:30px;

          >div{
              display:block;
              width:111px;
              height:111px;
              margin:10px auto;
              background: url(${awsUrl("process1.png")}) no-repeat center center;
              background-size: 71px auto;

              &.p2{
                background: url(${awsUrl("process2.png")}) no-repeat center center;
                background-size: 80px auto;
              }
              &.p3{
                background: url(${awsUrl("process3.png")}) no-repeat center center;
                background-size: 111px auto;
              }
              &.p4{
                background: url(${awsUrl("process4.png")}) no-repeat center center;
                background-size: 100px auto;
              }
              &.p5{
                background: url(${awsUrl("process5.png")}) no-repeat center center;
                background-size: 80px auto;
              }
          }

          h3{
            font-size:18px;
            color:${theme.colors.gray};
            line-height:1.5;
            letter-spacing:0.125em;
          }

          p{
            font-size:13px;
            line-height:1.4;
            color:#333;
            text-align:left;
            max-width:200px;
            margin:0 auto;
          }

          @media (max-width: ${theme.medias.phablet}) {
            width:100%;
            float:none;
            }

        }
        &::after{
          ${clearfix};
        }
    }
`

const Energy=styled.div`
    padding:50px 0;
    background:#f8f8f8;

    >div{

        > h2{
            font-size:24px;
            color:${theme.colors.gray};
            font-weight:400;
            line-height:1.5;
            text-align:center;
        }
    }

    ul{
        ${bound};
        text-align:center;
        padding:30px 0 50px;
        @media (max-width: ${theme.medias.phablet}) {
            background:none;
        }

        li{
          width:33.3333%;
          text-align:center;
          display:inline-block;
          float:left;
          ${box};
          padding:0 15px;
          margin-bottom:30px;

          img{
            margin-bottom:15px;
            ${borderRadius("8px")};
            ${boxShadow("1px 1px 2px rgba(0,0,0,.2)")};
          }

          h3{
            font-size:18px;
            color:${theme.colors.gray};
            line-height:1.5;
            letter-spacing:0.125em;
            margin-bottom:15px;
          }

          p{
            font-size:13px;
            line-height:1.4;
            color:#333;
            text-align:left;
            margin:0 auto;
          }

          @media (max-width: ${theme.medias.phablet}) {
            width:100%;
            float:none;
            }

        }
        &::after{
          ${clearfix};
        }
    }
`

const Reuse=styled.div`
    padding:50px 0 250px;
    //background:#fff;
    background-image:url(${awsUrl("enterprise_food_reuse_bg.png")});
    background-repeat:no-repeat;
    background-position:center bottom;
    @media (max-width: ${theme.medias.phablet}) {
        padding-bottom:100px;
        background-size:150% auto;
    }

    >div{
        ${bound};
        text-align:center;

        > h2{
            font-size:24px;
            color:${theme.colors.gray};
            font-weight:400;
            line-height:1.5;
            margin-bottom:15px;
        }
        > p{
            font-size:18px;
            color:#333;
            font-weight:400;
            line-height:1.5;
            margin-bottom: 30px;
        }

        > a{
            display:inline-block;
            font-size:15px;
            color:#fff;
            font-size:16px;
            font-weight:500;
            background:${theme.colors.green};
            ${borderRadius("8px")};
            padding:0px 25px;
            line-height:40px;
            height:40px;
            text-decoration:none;
            cursor:pointer;
        }
    }

    ul{
        padding:50px 0 30px;
        @media (max-width: ${theme.medias.phablet}) {
            background:none;
        }

        li{
          width:50%;
          text-align:center;
          display:inline-block;
          float:left;
          ${box};
          padding:0 15px;
          margin-bottom:30px;

          >div{
              display:block;
              width:90%;
              max-width:400px;
              margin:0px auto 20px;

              img{
                width:100%;
                ${borderRadius("8px")};
              }
          }

          h3{
            font-size:20px;
            color:#000;
            line-height:1.5;
            letter-spacing:0.125em;
            margin:0 auto 8px;
            max-width:400px;
          }

          p{
            font-size:15px;
            line-height:1.4;
            color:#666;
            text-align:left;
            max-width:400px;
            margin:0 auto;
          }

          @media (max-width: ${theme.medias.phablet}) {
            width:100%;
            float:none;
            }

        }
        &::after{
          ${clearfix};
        }
    }
`;

const Items=styled.div`
    padding:50px 0;
    background:#fff;

    >div{
        ${bound};
        text-align:center;

        > h2{
            font-size:24px;
            color:${theme.colors.gray};
            font-weight:400;
            line-height:1.5;
            margin-bottom:15px;
        }
        > p{
            font-size:18px;
            color:#333;
            font-weight:400;
            line-height:1.5;
            margin-bottom: 30px;
        }

        > a{
            display:inline-block;
            font-size:15px;
            color:#fff;
            font-size:16px;
            font-weight:500;
            background:${theme.colors.green};
            ${borderRadius("8px")};
            padding:0px 25px;
            line-height:40px;
            height:40px;
            text-decoration:none;
            cursor:pointer;
        }
    }

    ul{
        padding:50px 0 30px;
        @media (max-width: ${theme.medias.phablet}) {
            background:none;
        }

        li{
          width:25%;
          text-align:center;
          display:inline-block;
          float:left;
          ${box};
          padding:0 15px;
          margin-bottom:30px;

          >div{
              display:block;
              width:90%;
              max-width:300px;
              margin:0px auto 20px;

              img{
                width:100%;
                ${borderRadius("8px")};
              }
          }

          h3{
            font-size:20px;
            color:#333;
            line-height:1.5;
            letter-spacing:0.125em;
            margin-bottom:8px;
          }

          p{
            font-size:15px;
            line-height:1.4;
            color:#999;
            text-align:left;
          }

          @media (max-width: ${theme.medias.phablet}) {
            width:100%;
            float:none;
            }

        }
        &::after{
          ${clearfix};
        }
    }
`;

export default class FoodClearance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: -1,
            subscriptionFormStatus:false
        };

        this.gotoStep = this.gotoStep.bind(this);
        this.changeSubscriptionFormStatus = this.changeSubscriptionFormStatus.bind(this);
    }

    gotoStep(p) {
        //this.setState({step: p});
        let top = document.getElementById("rf").offsetTop; //Getting Y of target element
        window.scrollTo(0, top - 60);
    }

    changeSubscriptionFormStatus(status) {
        this.setState({subscriptionFormStatus: status});
    }

    initScrollByQuery() {
        if(this.state.step === 1) {
            this.gotoStep();
        }
    }

    componentDidMount() {
        const queryStringValues = queryString.parse(this.props.location.search);
        if(queryStringValues.step) {
            this.setState({
                step:parseInt(queryStringValues.step)
            })
        }
    }

    render() {

        this.state.step === 1 ? this.initScrollByQuery() : undefined;

        const settings = {
          className: "center",
          focusOnSelect: true,
          centerMode: true,
          infinite: true,
          centerPadding: "0px",
          speed: 500,
          dots: true,
          //slidesToScroll: 1
          swipeToSlide: false,
          variableWidth: true
        };

        return (
            <div>
                <Helmet>
                    <title>食品報廢 | 企業服務</title>
                </Helmet>
                <Head>
                    <div className="video">
                        <div className="video_title">
                            <h3>食品報廢服務</h3>
                            <p>合法再利用處理、讓資源不浪費</p>
                            <a onClick={() => this.gotoStep(1)}>立即諮詢</a>
                        </div>
                    </div>
                </Head>
                
                
                <Review>
                    <div>
                        <div className="yt">
                            {/*<iframe width="100%" height="100%" src="https://youtu.be/rS8ppsS1bgk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>*/}
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rS8ppsS1bgk"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                    <div>
                        <h3>專業食品報廢服務</h3>
                        <p>
                            <span>zero zero透過多管道再利用方式銷毀各式食品相關產品，建立完整食品銷毀流程，讓資源循環再利用，
與企業共同堅守食品銷毀安全，是企業值得信賴的長期合作平台。</span>
                        </p>
                        <a onClick={() => this.gotoStep(1)}>立即諮詢</a>
                    </div>
                </Review>

                <Strength>
                    <div>
                        <div>
                            <h2>服務優勢</h2>
                            <ul>
                                <li>
                                    <h3>專業合法報廢</h3>
                                    <p>平台合作夥伴廠商皆擁有合法執照，能夠針對食品加工、原料、零售業等食品處理。</p>
                                </li>
                                <li>
                                    <h3>再利用處理廠</h3>
                                    <p>配合合法再利用處理廠，讓報廢非浪費，提供更全面的全循環清運方案。</p>
                                </li>
                                <li>
                                    <h3>豐富車輛資源</h3>
                                    <p>根據您產出的各種食品報廢需求，提供多元車輛運送至政府合法處理場進行處理。</p>
                                </li>
                                <li>
                                    <h3>銷毀證明報告</h3>
                                    <p>報廢完成後，依客戶需求提供食品報廢報告書，快速讓企業查看相關食品銷毀數據與報告。</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Strength>

                <Reuse>
                    <div>
                        <h2>再利用循環管道</h2>
                        <p>讓可用資源產生能源，建立完善的再利用體系</p>
                        <a onClick={() => this.gotoStep(1)}>詳情瞭解</a>
                        <ul>
                            <li>
                                <div><img src={awsUrl("enterprise_food_reuse_p1.jpg")}/></div>
                                <h3>畜牧廠</h3>
                                <p>米飯、麵條、麵包、蔬果殘渣、牛奶、肉品等，畜牧廠能處理不腐敗的報廢品，生熟食皆會透過蒸煮設備殺菌打成漿後成為飼料。</p>
                            </li>
                            <li>
                                <div><img src={awsUrl("enterprise_food_reuse_p2.jpg")}/></div>
                                <h3>堆肥廠</h3>
                                <p>不適合豬隻食用的食品廢棄物，如甲殼類、果皮類、食品添加物等，可以被送至堆肥廠，回收食品廢棄物，將有機物回歸自然。</p>
                            </li>
                        </ul>
                    </div>
                </Reuse>

                <Items>
                    <div>
                        <h2>食品報廢品項</h2>
                        <p>隨意交由不合法清除業者 罰金代價高</p>
                        <a onClick={() => this.gotoStep(1)}>報廢諮詢</a>
                        <ul>
                            <li>
                                <div><img src={awsUrl("enterprise_food_p1.jpg")}/></div>
                                <h3>過期食品</h3>
                                <p>過期商品庫存或不良瑕疵品，如餅乾、糖果、罐頭、飲料。</p>
                            </li>
                            <li>
                                <div><img src={awsUrl("enterprise_food_p2.jpg")}/></div>
                                <h3>食品原料</h3>
                                <p>生產過程中之原料與添加物，如麵粉、奶粉、食品調料。</p>
                            </li>
                            <li>
                                <div><img src={awsUrl("enterprise_food_p3.jpg")}/></div>
                                <h3>生食熟食</h3>
                                <p>加工及調配過程中產出的食品廢棄物或下腳料，如冷凍食品、生熟食品下腳料、調味料等。</p>
                            </li>
                            <li>
                                <div><img src={awsUrl("enterprise_food_p4.jpg")}/></div>
                                <h3>包裝食品</h3>
                                <p>產出食品成品之各式包裝食品，如罐裝、瓶裝、箱裝、玻璃盛裝等。</p>
                            </li>
                        </ul>
                    </div>
                </Items>

                <Showcases>
                    <div>
                        <h2>zero zero 全台服務能量 合法食品報廢再利用</h2>
                        <Slider {...settings}>
                          <div>
                            <div>
                                <img src={awsUrl("sc01.jpg")}/>
                                <h3>包裝食品報廢</h3>
                                <p>泡麵、速食麵、醬料包等報廢</p>
                            </div>
                          </div>
                          <div>
                            <div>
                                <img src={awsUrl("sc02.jpg")}/>
                                <h3>生食熟食報廢</h3>
                                <p>海鮮、肉類加工製品、有機物等報廢</p>
                            </div>
                          </div>
                          <div>
                            <div>
                                <img src={awsUrl("sc03.jpg")}/>
                                <h3>食品醬料報廢</h3>
                                <p>果醬、番茄醬、醬油、醬料包、調味料、油包等報廢</p>
                            </div>
                          </div>
                          <div>
                            <div>
                                <img src={awsUrl("sc04.jpg")}/>
                                <h3>食品醬料報廢</h3>
                                <p>醬料、調味料罐等報廢</p>
                            </div>
                          </div>
                          <div>
                            <div>
                                <img src={awsUrl("sc05.jpg")}/>
                                <h3>食品原料報廢</h3>
                                <p>食品原料、食品加工等報廢</p>
                            </div>
                          </div>
                          <div>
                            <div>
                                <img src={awsUrl("sc06.jpg")}/>
                                <h3>食品報廢流程</h3>
                                <p>北中南多家合法配合處理廠</p>
                            </div>
                          </div>
                          <div>
                            <div>
                                <img src={awsUrl("sc07.jpg")}/>
                                <h3>食品銷毀流程</h3>
                                <p>北中南多家合法配合處理廠</p>
                            </div>
                          </div>
                          <div>
                            <div>
                                <img src={awsUrl("sc08.jpg")}/>
                                <h3>食品銷毀流程</h3>
                                <p>再利用處理機制</p>
                            </div>
                          </div>
                          <div>
                            <div>
                                <img src={awsUrl("sc09.jpg")}/>
                                <h3>食品銷毀報告書</h3>
                                <p>提供食品銷毀數據與結案報告</p>
                            </div>
                          </div>
                          <div>
                            <div>
                                <img src={awsUrl("sc10.jpg")}/>
                                <h3>專業銷毀能量</h3>
                                <p>合作夥伴廠商擁有合法清運執照</p>
                            </div>
                          </div>
                        </Slider>
                    </div>
                </Showcases>

                <Process>
                    <div>
                        <h2>服務流程</h2>
                        <ul>
                            <li>
                                <h3>1/線上諮詢</h3>
                                <div className="p1"/>
                                <p>填寫諮詢表單並加入LINE@，將可立即為您服務。</p>
                            </li>
                            <li>
                                <h3>2/專員服務</h3>
                                <div className="p2"/>
                                <p>貼心且專業再次確認您的食品報廢之需求。</p>
                            </li>
                            <li>
                                <h3>3/清運作業</h3>
                                <div className="p3"/>
                                <p>雙方確認報價後，將立即安排車趟到府清運。</p>
                            </li>
                            <li>
                                <h3>4/報廢銷毀</h3>
                                <div className="p4"/>
                                <p>依程序安排報廢銷毀作業，並完成食品報廢之流程。</p>
                            </li>
                            <li>
                                <h3>5/清運證明</h3>
                                <div className="p5"/>
                                <p>清運環節合法處理，可依需求提供相關證明文件。</p>
                            </li>
                        </ul>
                    </div>
                </Process>

                <ReservationForm {...this.props}/>
                <More>
                    {/* 2019/03/11 因應ZZG2-1399 移除下方註解程式碼*/}
                    {/*<div>*/}
                        {/*<h3>想諮詢<br />更多服務資訊</h3>*/}
                        {/*<p>zero zero未來將推出更多清運服務與資訊，邀請您一同參與。</p>*/}
                        {/*<br />*/}
                        {/*<img src={awsUrl("enterprise_more.png")} width="100%"/>*/}
                    {/*</div>*/}
                    {/*<SubscriptionForm source={6} status={this.state.subscriptionFormStatus} statusCallback={this.changeSubscriptionFormStatus}/>*/}
                </More>
            </div>
        )
    }
}
