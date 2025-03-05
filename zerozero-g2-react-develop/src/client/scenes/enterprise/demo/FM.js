import React, { Component } from 'react';

import { awsUrl } from '../../../utils/awsFile';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import { bound, appointmentForm } from '../../../styles/commons';
import { boxShadow, opacity, transition, borderRadius, box, clearfix, translate, textShadow } from '../../../styles/mixins';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';

const Head = styled.div `
    padding:0;
    background:#eee url(${awsUrl("demo/demo_banner.jpg")}) no-repeat center center;
    background-size:cover;
    text-align:center;

    .banner{
        height:0;
        width:100%;
        height:100vh;
        max-height:52vw;
        position:relative;

        
    }
    
    @media (max-width: ${theme.medias.phablet}) {
        .banner{
            height:52vw;
        }
        
    }
`;
const Filter = styled.div `
    background:${theme.colors.green};

    ul{
        background:${theme.colors.gray};
        text-align:center;
        padding:10px 0;

        li{
            display:inline-block;
            font-size:18px;
            color:rgba(255,255,255,.6);
            padding:0 15px;
            font-weight:500;
            line-height:30px;
            cursor:pointer;
            margin:2px 0;
            border-right:1px solid rgba(255,255,255,.3);
            position:relative;

            &:last-child{
                border:none;
            }

            &.active{
                color:#fff;

                &::after{
                    position:absolute;
                    content:"";
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 0 7.5px 10px 7.5px;
                    border-color: transparent transparent #fff transparent;
                    bottom:-13px;
                    left:50%;
                    margin-left:-7.5px;
                }
            }
            
        }
    }
    
`;
const ServiceMode = styled.div `
    background:#fff;
    padding:0px 0 50px;
    text-align:center;

    @keyframes fadeIn {
        0% {
            top:20px;
            ${opacity(0)};
        }

        100% {
            top:0;
            ${opacity(1)};
        }
    }

    ul{    
        width:100%;
        text-align:center;
        padding:10px 0;

        li{
            display:inline-block;
            font-size:15px;
            color:${theme.colors.gray};
            line-height:30px;
            cursor:pointer;
            padding:0px 15px;
            margin:2px 5px;
            ${box};
            border:1px solid rgba(255,255,255,0);
            ${borderRadius('15px')};
            ${opacity(0)};
            top:20px;
            ${transition("all",".3s")};
            animation-name: fadeIn;
            animation-delay: 0;
            animation-duration: .6s;
            animation-fill-mode: forwards;
            position:relative;

            &:nth-child(2){
                animation-delay: .1s;
            }
            &:nth-child(3){
                animation-delay: .2s;
            }
            &:nth-child(4){
                animation-delay: .3s;
            }
            &:nth-child(5){
                animation-delay: .4s;
            }
            &:nth-child(6){
                animation-delay: .5s;
            }
            &:nth-child(7){
                animation-delay: .6s;
            }
            &:nth-child(8){
                animation-delay: .7s;
            }
            &:nth-child(9){
                animation-delay: .8s;
            }

            &:hover{
                border-color:#ddd;
            }

            &.active{
                color:#fff;
                border-color:${theme.colors.blue} !important;
                background:${theme.colors.blue};
                
            }

            @media (max-width: ${theme.medias.phablet}) {
                border-color:#ddd;
            }
            
        }

        @media (max-width: ${theme.medias.phablet}) {
            font-size:18px;
            text-align:center;
        }
    }

    @media (max-width: ${theme.medias.phablet}) {
        padding:0 5% 30px;
    }
    h2{
        font-size:24px;
        color:${theme.colors.blue};
        font-weight:500;
        line-height:1.3;
        padding-bottom:15px;
        width:100%;
        margin-bottom:50px;
        border-bottom:2px solid ${theme.colors.blue};
        text-align:left;

        &::before{
            font-family:'fontawesome';
            content:"\f0eb";
            margin-right:8px;
        }

        @media (max-width: ${theme.medias.phablet}) {
            font-size:18px;
            text-align:center;
            margin-bottom:30px;
        }
    }

    h3{
        font-size:18px;
        color:#000;
        font-weight:900;
        line-height:1.5;
        width:100%;
        margin-bottom:15px;
        text-align:left;
        @media (max-width: ${theme.medias.phablet}) {
            text-align:center;
        }

    }

    p{
        font-size:15px;
        color:#333;
        line-height:1.4;
        text-align:left;

        @media (max-width: ${theme.medias.phablet}) {
        }

        span{
            font-weight:900;
            color:#000;
        }
    }

    a{
        clear:both;
        display:inline-block;
        width:auto;
        margin:30px auto;
        text-align:center;
        background:${theme.colors.green};
        font-size:18px;
        line-height:30px;
        color:#fff;
        padding:0 15px;
        ${borderRadius('8px')};
        text-decoration:none;
    }

    .logo{
        margin:50px auto 50px;
        text-align:center;


        img{
            max-width:25%;
            height:auto;
            margin:4%;

            @media (max-width: ${theme.medias.phablet}) {
                max-width:40%;
                
            }
        }

        &.lg{
            img{
                max-width:50%;
                @media (max-width: ${theme.medias.phablet}) {
                    max-width:50%;
                    
                }
            }
        }

        &.lg2{
            img{
                max-width:70%;
                @media (max-width: ${theme.medias.phablet}) {
                    max-width:70%;
                    
                }
            }
        }
    }

    .vsm{
        .slick-track{
            top:40px;
        }
        .slick-list{
            padding-bottom:80px !important;
        }
        .slick-slide,slick-cloned{
            position:relative;
            top:60px !important;
            z-index:1;
            
            >div{
                -ms-transform: scale(.8);
                -webkit-transform: scale(.8);
                transform: scale(.8);
                ${transition("all",".5s")};
                overflow:hidden;
                width:100%;
                background:#fff;
                position:relative;

                > img{
                    width:100%;
                    height:300px;
                    ${transition("opacity",".5s")};
                    ${opacity(.3)};

                    @media (max-width: ${theme.medias.phablet}) {
                        height:230px;
                    }
                }

                p{
                    position:absolute;
                    width:100%;
                    bottom:0;
                    left:0;
                    padding:15px;
                    font-size:15px;
                    line-height:1.4;
                    color:#fff;
                    background:rgba(0,0,0,.6);
                    ${box};
                    ${opacity(-2)};
                    ${transition("opacity","1.5s")};

                }
            }

            
        }
        .slick-center{
            z-index:5;
            
            >div{
                -ms-transform: scale(1);
                -webkit-transform: scale(1);
                transform: scale(1);

                >img{
                    ${opacity(1)};
                }

                p{
                    ${opacity(1)};
                }
            }
            top:0px !important;
        }
        .slick-center + div{
            top:-60px !important;
        }
        .slick-arrow{
            z-index:20;

            &.slick-prev{
                left:5px;
            }
            &.slick-next{
                right:15px;
            }

            &::before{
                font-size:30px;
                color:#fff !important;
                ${textShadow('1px 1px 6px rgba(0,0,0,.5)')};
            }
        }
    }

    section{
        animation-name: fadeIn;
        animation-delay: 0;
        animation-duration: .6s;
        animation-fill-mode: forwards;
        position:relative;
        border-bottom:1px solid #eee;
        ${opacity(0)};
        &:nth-child(2){
            animation-delay: .1s;
        }
        &:nth-child(3){
            animation-delay: .2s;
        }
        &:nth-child(4){
            animation-delay: .3s;
        }
        &:nth-child(5){
            animation-delay: .4s;
        }
        &:nth-child(6){
            animation-delay: .5s;
        }
        &:nth-child(7){
            animation-delay: .6s;
        }
        &:nth-child(8){
            animation-delay: .7s;
        }
        &:nth-child(9){
            animation-delay: .8s;
        }

        &:last-child{
            border:none;
        }
        ${bound};
        > div{
            
            padding:50px 0;
            border-top:1px dashed #eee;

            &:first-child{
                border:none;
            }

            @media (max-width: ${theme.medias.phablet}) {
                padding:30px 0;
            }

            > div{
                width:45%;
                float:left;

                &:last-child{
                    margin-left:9%;
                }

                > ul{
                    padding:20px 30px;
                    ${box};
                    li{
                        width:100%;
                        min-height:110px;
                        margin-bottom:30px;
                        ${box};
                        

                        @media (max-width: ${theme.medias.phablet}) {
                            width:100%;
                            padding-left:0px;
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
                    margin:0 auto 30px !important;
                }

            }

            &::after{
                ${clearfix};
            }   
        }
    }
`

export default class FM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cat: 0,
            subcat: 0,
        };
        this.changeCat = this.changeCat.bind(this);
        this.changeSubCat = this.changeSubCat.bind(this);
    }

    changeCat(num) {
        this.setState({ cat: num });
    }

    changeSubCat(num) {
        this.setState({ subcat: num });
    }

    componentDidMount() {
        
    }

    render() {
        const settings = {
            className: "vsm",
            centerMode: true,
            centerPadding: '0px',
            vertical: true,
            verticalSwiping: false,
            slidesToShow: 1,
            dots: false,
            arrows: true,
            speed: 500,
            infinite: false,
            focusOnSelect: false,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1
                    }
                }
            ]
        };
        const { cat, subcat } = this.state;

        return (
            <div>
                <Helmet>
                    <title>食品產業 | 企業服務案例</title>
                </Helmet>
                <Head>
                    <div className="banner"/>
                </Head>
                <Filter>
                    <ul>
                        <li onClick={() => this.changeCat(0)} className={cat==0?"active":""}>All</li>
                        <li onClick={() => this.changeCat(1)} className={cat==1?"active":""}>食品報廢</li>
                    </ul>
                </Filter>

                <ServiceMode>
                    {cat==1?
                    <ul>
                        <li onClick={() => this.changeSubCat(0)} className={subcat==0?"active":""}>包裝食品報廢</li>
                        <li onClick={() => this.changeSubCat(1)} className={subcat==1?"active":""}>生食熟食報廢</li>
                        <li onClick={() => this.changeSubCat(2)} className={subcat==2?"active":""}>食品醬料報廢</li>
                        <li onClick={() => this.changeSubCat(3)} className={subcat==3?"active":""}>食品原料報廢</li>
                    </ul>
                    :""}

                    {cat==0 || (cat==1&&subcat==0)?
                    <section>
                        <div>
                            <h2>包裝食品報廢案例</h2>
                            <div>
                                <h3>泡麵</h3>
                                <p>本次食品報廢案例-｢泡麵｣，因產品特性或相關衛生法令規定，於過期或變質後無法久存者需進行食品報廢流程，本次透過畜牧廠再生利用處理方式，將泡麵包裝拆解、粉碎後進行蒸煮，並充分消毒殺菌後，在打碎成粥狀提供給小豬們當飼料，把可回收的報廢食品做最大化使用，有效珍惜資源、尊重食物。透過合法食品報廢處理流程，zero zero核發食品報廢證明書，並依據客戶需求提供報廢作業流程之紀錄，讓食品報廢的歷程能確實被追蹤，鞏固食品報廢、銷毀最佳防線。</p>
                                <div className="logo">
                                    <img src={awsUrl("demo/logo/ef.png")}/>
                                </div>
                            </div>
                            <div>
                                <Slider {...settings}>
                                    <div data-fancybox="g1" data-caption="1.包裝食品報廢" href={awsUrl("demo/fm/fm1/1/1.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm1/1/1.png")}/>
                                            <p>1.包裝食品報廢</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g1" data-caption="2.包裝食品拆解" href={awsUrl("demo/fm/fm1/1/2.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm1/1/2.png")}/>
                                            <p>2.包裝食品拆解</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g1" data-caption="3.包裝食品壓碎" href={awsUrl("demo/fm/fm1/1/3.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm1/1/3.png")}/>
                                            <p>3.包裝食品壓碎</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g1" data-caption="4.畜牧廠再生利用處理" href={awsUrl("demo/fm/fm1/1/4.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm1/1/4.png")}/>
                                            <p>4.畜牧廠再生利用處理</p>
                                        </div>
                                        
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h3>奶粉罐</h3>
                                <p>本次食品報廢案例-｢奶粉罐｣，因產品特性或相關衛生法令規定，於過期或變質後無法久存者需進行食品報廢流程，本次透過畜牧廠再生利用處理方式，將奶粉罐罐裝拆解，奶粉加入食品色素銷毀，後續將奶粉倒入飼料槽進行畜牧飼料蒸煮過程，充分消毒殺菌後，在打碎成粥狀提供給小豬們當飼料，把可回收的報廢食品做最大化使用，有效珍惜資源、尊重食物。透過合法食品報廢處理流程，zero zero核發食品報廢證明書，並依據客戶需求提供報廢作業流程之紀錄，讓食品報廢的歷程能確實被追蹤，鞏固食品報廢、銷毀最佳防線。</p>
                                <div className="logo lg2">
                                    <img src={awsUrl("demo/logo/mc.png")}/>
                                </div>
                            </div>
                            <div>
                                <Slider {...settings}>
                                    <div data-fancybox="g2" data-caption="1.包裝食品報廢" href={awsUrl("demo/fm/fm1/2/1.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm1/2/1.png")}/>
                                            <p>1.包裝食品報廢</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g2" data-caption="2.包裝食品拆解" href={awsUrl("demo/fm/fm1/2/2.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm1/2/2.png")}/>
                                            <p>2.包裝食品拆解</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g2" data-caption="3.包裝食品壓碎" href={awsUrl("demo/fm/fm1/2/3.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm1/2/3.png")}/>
                                            <p>3.包裝食品加入醬料銷毀</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g2" data-caption="4.畜牧廠再生利用處理" href={awsUrl("demo/fm/fm1/2/4.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm1/2/4.png")}/>
                                            <p>4.畜牧廠再生利用處理</p>
                                        </div>
                                        
                                    </div>
                                </Slider>
                            </div>
                            
                        </div>
                        <Link to={{
                            pathname: '/enterprise/food',
                            search: 'step=1'
                        }}>立即諮詢</Link>

                    </section>:""}

                    {cat==0 || (cat==1&&subcat==1)?
                    <section>
                        <div>
                            <h2>生食熟食報廢案例</h2>
                            <div>
                                <h3>生食類-螃蟹</h3>
                                <p>本次食品報廢案例-｢生食類-螃蟹｣，因產品特性或相關衛生法令規定，於過期或變質後無法久存者需進行食品報廢流程，本次透過畜牧廠再生利用處理方式，將螃蟹粉碎後進行蒸煮，並充分消毒殺菌後，在打碎成粥狀提供給小豬們當飼料，把可回收的報廢食品做最大化使用，有效珍惜資源、尊重食物。透過合法食品報廢處理流程，zero zero核發食品報廢證明書，並依據客戶需求提供報廢作業流程之紀錄，讓食品報廢的歷程能確實被追蹤，鞏固食品報廢、銷毀最佳防線。</p>
                                <div className="logo lg">
                                    <img src={awsUrl("demo/logo/ya.png")}/>
                                </div>
                            </div>
                            <div>
                                <Slider {...settings}>
                                    <div data-fancybox="g3" data-caption="1.包裝食品報廢" href={awsUrl("demo/fm/fm2/1/1.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm2/1/1.png")}/>
                                            <p>1.生食熟食報廢</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g3" data-caption="2.包裝食品拆解" href={awsUrl("demo/fm/fm2/1/2.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm2/1/2.png")}/>
                                            <p>2.生食熟食破碎</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g3" data-caption="3.包裝食品壓碎" href={awsUrl("demo/fm/fm2/1/3.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm2/1/3.png")}/>
                                            <p>3.焚化再生能源處理</p>
                                        </div>
                                        
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h3>生食類-貝類</h3>
                                <p>本次食品報廢案例-｢生食類-貝類｣，因產品特性或相關衛生法令規定，於過期或變質後無法久存者需進行食品報廢流程，本次透過焚化再生能源處理方式，將貝類進行焚化後，破壞大部份的有機物質，減少食品報廢產生沼氣和滲入地下水狀況，並讓焚化爐生產蒸氣或電力等能源。透過合法食品報廢處理流程，zero zero核發食品報廢證明書，並依據客戶需求提供報廢作業流程之紀錄，讓食品報廢的歷程能確實被追蹤，鞏固食品報廢、銷毀最佳防線。</p>
                                <div className="logo">
                                    <img src={awsUrl("demo/logo/syf.png")}/>
                                </div>
                            </div>
                            <div>
                                <Slider {...settings}>
                                    <div data-fancybox="g4" data-caption="1.包裝食品報廢" href={awsUrl("demo/fm/fm2/2/1.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm2/2/1.png")}/>
                                            <p>1.生食熟食報廢</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g4" data-caption="2.包裝食品拆解" href={awsUrl("demo/fm/fm2/2/2.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm2/2/2.png")}/>
                                            <p>2.生食熟食破碎</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g4" data-caption="3.包裝食品壓碎" href={awsUrl("demo/fm/fm2/2/3.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm2/2/3.png")}/>
                                            <p>3.焚化再生能源處理</p>
                                        </div>
                                        
                                    </div>
                                </Slider>
                            </div>
                            
                        </div>
                        <Link to={{
                            pathname: '/enterprise/food',
                            search: 'step=1'
                        }}>立即諮詢</Link>
                    </section>:""}

                    {cat==0 || (cat==1&&subcat==2)?
                    <section>
                        <div>
                            <h2>食品醬料報廢案例</h2>
                            <div>
                                <h3>紅酒</h3>
                                <p>本次食品報廢案例-｢紅酒｣，因產品特性或相關衛生法令規定，於過期或變質後無法久存者需進行食品報廢流程，本次透過畜牧廠再生利用處理方式，將紅酒傾倒置畜牧飼料儲槽，並倒入醬油銷毀，透過充分消毒殺菌後，蒸煮成粥狀提供給小豬們當飼料，把可回收的報廢食品做最大化使用，有效珍惜資源、尊重食物。透過合法食品報廢處理流程，zero zero核發食品報廢證明書，並依據客戶需求提供報廢作業流程之紀錄，讓食品報廢的歷程能確實被追蹤，鞏固食品報廢、銷毀最佳防線。</p>
                                <div className="logo lg">
                                    <img src={awsUrl("demo/logo/kf.png")}/>
                                </div>
                            </div>
                            <div>
                                <Slider {...settings}>
                                    <div data-fancybox="g5" data-caption="1.食品醬料報廢" href={awsUrl("demo/fm/fm3/1/1.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm3/1/1.png")}/>
                                            <p>1.食品醬料報廢</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g5" data-caption="2.畜牧廠再生利用處理" href={awsUrl("demo/fm/fm3/1/2.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm3/1/2.png")}/>
                                            <p>2.畜牧廠再生利用處理</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g5" data-caption="3.畜牧廠再生利用處理" href={awsUrl("demo/fm/fm3/1/3.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm3/1/3.png")}/>
                                            <p>3.畜牧廠再生利用處理</p>
                                        </div>
                                        
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h3>食用醋</h3>
                                <p>本次食品報廢案例-｢食用醋｣，因產品特性或相關衛生法令規定，於過期或變質後無法久存者需進行食品報廢流程，本次透過畜牧廠再生利用處理方式，將食用醋玻璃罐裝拆除外包裝、分選塑膠、玻璃瓶部分做回收，食用醋液體倒入廚餘桶，並於廚餘桶子倒入醬油銷毀，送至畜牧廠傾倒置畜牧飼料儲槽，並透過充分消毒殺菌後，蒸煮成粥狀提供給小豬們當飼料，把可回收的報廢食品做最大化使用，有效珍惜資源、尊重食物。透過合法食品報廢處理流程，zero zero核發食品報廢證明書，並依據客戶需求提供報廢作業流程之紀錄，讓食品報廢的歷程能確實被追蹤，鞏固食品報廢、銷毀最佳防線。</p>
                                <div className="logo lg">
                                    <img src={awsUrl("demo/logo/strita.png")}/>
                                </div>
                            </div>
                            <div>
                                <Slider {...settings}>
                                    <div data-fancybox="g6" data-caption="1.食品醬料報廢" href={awsUrl("demo/fm/fm3/2/1.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm3/2/1.png")}/>
                                            <p>1.食品醬料報廢</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g6" data-caption="2.食品醬料報廢" href={awsUrl("demo/fm/fm3/2/2.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm3/2/2.png")}/>
                                            <p>2.食品醬料報廢</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g6" data-caption="3.食品醬料銷毀" href={awsUrl("demo/fm/fm3/2/3.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm3/2/3.png")}/>
                                            <p>3.食品醬料銷毀</p>
                                        </div>
                                        
                                    </div>
                                </Slider>
                            </div>
                            
                        </div>
                        <Link to={{
                            pathname: '/enterprise/food',
                            search: 'step=1'
                        }}>立即諮詢</Link>
                    </section>:""}

                    {cat==0 || (cat==1&&subcat==3)?
                    <section>
                        <div>
                            <h2>食品原料報廢案例</h2>
                            <div>
                                <h3>食品添加物原料</h3>
                                <p>本次食品報廢案例-｢食品添加物原料｣，因產品特性或相關衛生法令規定，於過期或變質後無法久存者需進行食品報廢流程，本次透過畜牧廠再生利用處理方式，將食品添加物原料袋破壞倒入廚餘桶，並於廚餘桶子倒入醬油銷毀，送至畜牧廠傾倒置畜牧飼料儲槽，並透過充分消毒殺菌後，蒸煮成粥狀提供給小豬們當飼料，把可回收的報廢食品做最大化使用，有效珍惜資源、尊重食物。透過合法食品報廢處理流程，zero zero核發食品報廢證明書，並依據客戶需求提供報廢作業流程之紀錄，讓食品報廢的歷程能確實被追蹤，鞏固食品報廢、銷毀最佳防線。</p>
                                <div className="logo">
                                    <img src={awsUrl("demo/logo/yestop.png")}/>
                                </div>
                            </div>
                            <div>
                                <Slider {...settings}>
                                    <div data-fancybox="g7" data-caption="1.食品原料報廢" href={awsUrl("demo/fm/fm4/1/1.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm4/1/1.png")}/>
                                            <p>1.食品原料報廢</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g7" data-caption="2.食品原料報廢" href={awsUrl("demo/fm/fm4/1/2.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm4/1/2.png")}/>
                                            <p>2.食品原料報廢</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g7" data-caption="3.畜牧廠再生利用處理" href={awsUrl("demo/fm/fm4/1/3.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm4/1/3.png")}/>
                                            <p>3.畜牧廠再生利用處理</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g7" data-caption="4.畜牧廠再生利用處理" href={awsUrl("demo/fm/fm4/1/4.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm4/1/4.png")}/>
                                            <p>4.畜牧廠再生利用處理</p>
                                        </div>
                                        
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h3>食用果汁原料</h3>
                                <p>本次食品報廢案例-｢食用果汁原料｣，因產品特性或相關衛生法令規定，於過期或變質後無法久存者需進行食品報廢流程，本次透過畜牧廠再生利用處理方式，將食用果汁原料破壞倒入廚餘桶，並於廚餘桶子倒入醬油銷毀，送至畜牧廠傾倒置畜牧飼料儲槽，並透過充分消毒殺菌後，蒸煮成粥狀提供給小豬們當飼料，把可回收的報廢食品做最大化使用，有效珍惜資源、尊重食物。透過合法食品報廢處理流程，zero zero核發食品報廢證明書，並依據客戶需求提供報廢作業流程之紀錄，讓食品報廢的歷程能確實被追蹤，鞏固食品報廢、銷毀最佳防線。</p>
                                <div className="logo lg">
                                    <img src={awsUrl("demo/logo/dgbt.png")}/>
                                </div>
                            </div>
                            <div>
                                <Slider {...settings}>
                                    <div data-fancybox="g8" data-caption="1.食品原料報廢" href={awsUrl("demo/fm/fm4/2/1.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm4/2/1.png")}/>
                                            <p>1.食品原料報廢</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g8" data-caption="2.食品原料報廢" href={awsUrl("demo/fm/fm4/2/2.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm4/2/2.png")}/>
                                            <p>2.食品原料報廢</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g8" data-caption="3.食品原料報廢" href={awsUrl("demo/fm/fm4/2/3.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm4/2/3.png")}/>
                                            <p>3.食品原料報廢</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g8" data-caption="4.畜牧廠再生利用處理" href={awsUrl("demo/fm/fm4/2/4.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm4/2/4.png")}/>
                                            <p>4.畜牧廠再生利用處理</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g8" data-caption="5.畜牧廠再生利用處理" href={awsUrl("demo/fm/fm4/2/5.png")}>
                                        <div>
                                            <img src={awsUrl("demo/fm/fm4/2/5.png")}/>
                                            <p>5.畜牧廠再生利用處理</p>
                                        </div>
                                        
                                    </div>
                                </Slider>
                            </div>
                            
                        </div>
                        <Link to={{
                            pathname: '/enterprise/food',
                            search: 'step=1'
                        }}>立即諮詢</Link>
                    </section>:""}

                </ServiceMode>
            </div>
        )
    }
}