import React, { Component } from 'react';

import {awsUrl} from '../../../utils/awsFile';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import {bound,appointmentForm} from '../../../styles/commons';
import {boxShadow,opacity, transition, borderRadius, box, clearfix,translate,textShadow} from '../../../styles/mixins';

import { Helmet } from 'react-helmet';
import ReservationForm from './components/ReservationForm';
//import ReservationForm from '../DocDestroy/components/ReservationForm';
import SubscriptionForm from '../components/SubscriptionForm';
import queryString from "query-string";

const Head = styled.div`
    padding:0;
    background:#eee url(${awsUrl("enterprise_banner_event_20190101_wood.jpg")}) no-repeat center center;
    background-size:cover;
    text-align:center;

    .video{
        height:0;
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
`;

const Review = styled.div`

    >div{
        ${bound};
        background:url(${awsUrl("enterprise_legal2.png")}) no-repeat left center;
        background-size:auto 100%;
        &.white{
            background:#fff;

            >div{
                float:left;
            }
        }
        >div{
            width:50%;
            padding:50px 0;
            float:right;

            &:first-child{
                width:45%;
                margin-left:4.5%;
            }
            &:last-child{
                padding:60px 0;
                width:30%;
            }

            @media (max-width: ${theme.medias.phablet}) {
                width:100% !important;
                margin-left:0 !important;;
                float:none !important;
                padding:30px 0 !important;
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
            padding-bottom:220px;
            background-position:bottom center;
            background-size:auto 250px;
        }
    }
`;

const ReviewW = styled.div`
    background:#fff ;
    
    >div{
        ${bound};
        background:url(${awsUrl("enterprise_legal1.png")}) no-repeat right center;
        background-size:auto 100%;

        >div{
            width:50%;
            padding:50px 0;
            float:left;

            &:first-child{
                width:45%;
                margin-right:4.5%;
            }

            &:last-child{
                padding:60px 0;
                width:35%;
            }

            @media (max-width: ${theme.medias.phablet}) {
                width:100% !important;
                margin-left:0 !important;
                margin-right:0 !important;
                float:none !important;
                padding:30px 0 !important;
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
            background-position:bottom center;
            background-size:auto 280px;
            padding-bottom:220px;
        }
    }
`;

const Certificate = styled.div`
    background:#fff;
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
            text-indent:-30px;
            padding-left:30px;

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
`;

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
`;

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
`;

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
`;

const Strength=styled.div`
    //background:#fff;
    
    > div{
        ${bound};

        > div{
            width:50%;
            padding:50px 0;
            text-align:center;
            float:left;

            > h2{
                font-size:24px;
                color:${theme.colors.blue};
                font-weight:400;
                line-height:1.5;
            }

            > ul{
                li{
                    width:50%;
                    //max-width:300px;
                    margin:0 auto;
                    float:left;
                    padding:20px 30px;
                    ${box};
                    @media (max-width: ${theme.medias.phablet}) {
                        width:100%;
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
                    }
                }

                &::after{
                    ${clearfix};
                }
            }

            @media (max-width: ${theme.medias.phablet}) {
                width:100%;
                float:none;

                &:last-child{
                    padding:0 0 50px;
                }
            }

        }

        &::after{
            ${clearfix};
        }
    }
`;

const Process=styled.div`
    padding:50px 0;
    //background:#fff;

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
          width:25%;
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
`;

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

        >p{
            ${bound};
            margin:20px auto;
            font-size:18px;
            color:#000;
            font-weight:100;
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
            margin-bottom:25px;
            width:150px;
          }

          h3{
            font-size:20px;
            color:#333;
            line-height:1.5;
            letter-spacing:0.125em;
            margin-bottom:15px;
          }

          p{
            font-size:15px;
            line-height:1.4;
            color:#999;
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
          width:33%;
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

export default class WoodClearance extends Component {
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

    initScrollByQuery() {
        if(this.state.step === 1) {
            this.gotoStep();
        }
    }

    changeSubscriptionFormStatus(status) {
        this.setState({subscriptionFormStatus: status});
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

        return (
        	<div>
				<Helmet>
					<title>廢木材清運 | 企業服務</title>
				</Helmet>
        		<Head>
                    <div className="video">
                        <div className="video_title">
                            <h3>廢木材清運服務</h3>
                            <p>擁有專業、合法清運證照服務團隊</p>
                            <a onClick={() => this.gotoStep(1)}>立即諮詢</a>
                        </div>
                    </div>
                </Head>
                
                
                <Energy>
                    <div>
                        <h2>服務優勢</h2>
                        <p>zero zero擁有豐富的車輛及再利用廠等後端資源，第一線協助您清運廢木材、枯枝落葉、廢木棧板，透過後端再利用廠的協助，將這些廢木材合法清運處理並進行申報，讓廢棄木材能夠產生熱能資源循環再利用。</p>
                        <ul>
                            <li>
                                <img src={awsUrl("wood_strength_1.png")}/>
                                <h3>專業合法清運</h3>
                                <p>平台合作夥伴廠商皆擁有合法清運執照，能夠針對企業申報之Ｒ類廢木材進行合法清運。</p>
                            </li>
                            <li>
                                <img src={awsUrl("wood_strength_2.png")}/>
                                <h3>豐富車輛資源</h3>
                                <p>根據您產出的各種廢木材需求，提供多元車輛運送至政府合法處理場進行處理。</p>
                            </li>
                            <li>
                                <img src={awsUrl("wood_strength_3.png")}/>
                                <h3>全省服務範圍</h3>
                                <p>配合全省北中南區後端合作資源，讓廢木材合法清運處理並進行申報，產生熱能資源循環再利用。</p>
                            </li>
                        </ul>
                    </div>
                </Energy>

                <ReviewW>
                    <div>
                        <div>
                            <h3>為何需要合法處理</h3>
                            <p>委託不合法清除業者 需負連帶清理責任
                                <span>1.「廢棄物清理法部分條文修正案」於106年1月18日奉總統令公布，並於1月20日正式生效。<br />2. 第30條修正明定事業委託清理其廢棄物，應與受託人就該廢棄物負連帶清理責任。<br />3. 受託者未妥善清理，且委託事業未盡相當注意義務者，委託事業應與受託者就該廢棄物負連帶清理及環境改善責任。<br /><br />環保署強調，強化事業之連帶清理及環境改善責任，並將再利用產品之標示、流向追蹤等規定入法。如發生非法棄置等重大違規案件，將受到更為嚴格之法律制裁。因此，環保署再次呼籲各界應確實遵守本法規定清除、處理及再利用廢棄物，期能持續邁向更美好的環境。</span>
                            </p>
                            <a onClick={() => this.gotoStep(1)}>瞭解更多</a>
                        </div>
                        <div>
                            <img src={awsUrl("enterprise_find1.png")} width="100%"/>
                        </div>
                    </div>  
                </ReviewW>

                <Review>
                    <div>
                        <div>
                            <h3>未合法處理案例</h3>
                            <p>隨意交由不合法清除業者 罰金代價高
                                <span>1. 堆置廢木材持續悶燒，附近空氣品質差，環保局開罰。<br />2. 抓不怕！業者再度偷倒廢木材，環保局開罰。<br />3. 農地冒出廢木材山，環保局開罰。<br />4. 欲賺環保財，非法回填廢木材混合物，估計約3400公噸，遭環保局查獲並舉發。<br />5. 清除業者以合法掩飾非法，依違反廢棄物清理法移送偵辦。</span>
                            </p>
                            <a onClick={() => this.gotoStep(1)}>免開罰諮詢</a>
                        </div>
                        <div>
                            <img src={awsUrl("enterprise_find2.png")} width="100%"/>
                        </div>
                    </div>
                    
                </Review>

                <Items>
                    <div>
                        <h2>廢木材清運品項</h2>
                        <p>zero zero 平台提供公開透明專業合法清運服務，能夠針對各類型的廢木材如 : 木棧板、木箱、裝潢板、美耐板、貼皮木板、系統家具、木製家具、拆除木板、密集板、枯枝落葉、漂流木等，進到合法廢木材後端處理廠，讓有效資源再利用，愛護生態環境，保護您企業的名聲。</p>
                        <ul>
                            <li>
                                <div><img src={awsUrl("enterprise_wood_p1.jpg")}/></div>
                                <h3>木棧板、木箱</h3>
                                <p>科技廠、製造業、大型賣場、物流中心所使用的木棧板，或是包裝機台或其他物品之大型木箱。</p>
                            </li>
                            <li>
                                <div><img src={awsUrl("enterprise_wood_p2.jpg")}/></div>
                                <h3>裝潢板、密集板、貼皮板</h3>
                                <p>系統廚具工廠、木材家具商、裝修等產出之木材切邊料、密集板、裝潢木板、木製家具、貼皮木板、含膠含漆木板、美耐板。</p>
                            </li>
                            <li>
                                <div><img src={awsUrl("enterprise_wood_p3.jpg")}/></div>
                                <h3>枯枝落葉、漂流木</h3>
                                <p>公園、工廠、家庭、路邊所產出的路樹、落葉或颱風過後的樹木、漂流木、落葉。</p>
                            </li>
                        </ul>
                        <a onClick={() => this.gotoStep(1)}>立即諮詢</a>
                    </div>
                </Items>

                <Strength>
                    <div>
                        <div>
                            <h2>豐富車輛資源</h2>
                            <ul>
                                <li>
                                    <h3>3.5噸貨車</h3>
                                    <p>少量廢木材進行清運<br />載重量500公斤<br />約木棧板20片</p>
                                </li>
                                <li>
                                    <h3>17噸夾子車</h3>
                                    <p>中等數量廢木材進行清運<br />載重量3000公斤<br />約木棧板180片</p>
                                </li>
                                <li>
                                    <h3>26噸夾子車</h3>
                                    <p>大量廢木材進行清運<br />載重量6000公斤<br />約木棧板250片</p>
                                </li>
                                <li>
                                    <h3>35噸夾子車</h3>
                                    <p>超大量廢木材進行清運<br />載重量8000公斤<br />約木棧板300片</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <img src={awsUrl("enterprise_trucks.jpg")} width="100%"/>
                        </div>
                    </div>
                </Strength>

                <Certificate>
                    <div>
                        <div>
                            <h3>zero zero 符合專業銷毀規範</h3>
                            <p>本平台合作夥伴廠商擁有合法清運執照。</p>
                            <p>服務能量遍及全台，全省北中南多家合法配合清運處理廠。</p>
                            <p>提供廢木材合法再利用處理機制，達到資源永續循環，共同守護您企業品牌。</p>
                            <br /><br />
                            <a onClick={() => this.gotoStep(1)}>立即諮詢</a>
                        </div>
                        <div>
                            <img src={awsUrl("enterprise_certificate.png")} width="100%"/>
                        </div>
                    </div>
                    
                </Certificate>

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
                                <p>貼心且專業再次確認您的廢木材清運之需求。</p>
                            </li>
                            <li>
                                <h3>3/清運作業</h3>
                                <div className="p3"/>
                                <p>雙方確認報價後，將立即安排車趟到府清運。</p>
                            </li>
                            <li>
                                <h3>4/清運證明</h3>
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
                    {/*<SubscriptionForm source={5} status={this.state.subscriptionFormStatus} statusCallback={this.changeSubscriptionFormStatus}/>*/}
                </More>
            </div>
        )
    }
}
