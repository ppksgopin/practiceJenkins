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

export default class Gov extends Component {
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
                    <title>政府單位 | 企業服務案例</title>
                </Helmet>
                <Head>
                    <div className="banner"/>
                </Head>
                <Filter>
                    <ul>
                        <li onClick={() => this.changeCat(0)} className={cat==0?"active":""}>All</li>
                        <li onClick={() => this.changeCat(1)} className={cat==1?"active":""}>文件銷毀</li>
                        <li onClick={() => this.changeCat(2)} className={cat==2?"active":""}>廢木材清運</li>
                    </ul>
                </Filter>

                <ServiceMode>

                    {cat==0 || cat==1 ?
                    <section>
                        <div>
                            <h2>文件銷毀案例</h2>
                            <div>
                                <h3></h3>
                                <p>zero zero提供一條龍文件銷毀整體服務，服務範圍包含各縣市政府機關，針對批次性文件銷毀或定期性文件銷毀需求之客戶，皆會以客戶方便作業時間為前提，並於約定好的服務時間派遣專業服務人員前往收件，在GPS專業車隊錄影監控下將機密銷毀文件直送水銷銷毀中心，進行機密文件銷毀作業，zero zero專員將會透過系統後台協助客戶將文件銷毀流程做照片紀錄，最後將依據客戶需求可提供銷毀證明或報告書，以嚴謹的處理態度，帶給客戶安心、放心的感受。</p>
                                <div className="logo">
                                    <img src={awsUrl("demo/logo/nfa.png")}/>
                                    <img src={awsUrl("demo/logo/bch.png")}/>
                                    <img src={awsUrl("demo/logo/houli.png")}/>
                                </div>
                            </div>
                            <div>
                                <Slider {...settings}>
                                    <div data-fancybox="g1" data-caption="1.銷毀專車" href={awsUrl("demo/gov/gov1/1.png")}>
                                        <div>
                                            <img src={awsUrl("demo/gov/gov1/1.png")}/>
                                            <p>1.銷毀專車</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g1" data-caption="2.銷毀專車" href={awsUrl("demo/gov/gov1/2.png")}>
                                        <div>
                                            <img src={awsUrl("demo/gov/gov1/2.png")}/>
                                            <p>2.銷毀專車</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g1" data-caption="3.進入水銷廠" href={awsUrl("demo/gov/gov1/3.png")}>
                                        <div>
                                            <img src={awsUrl("demo/gov/gov1/3.png")}/>
                                            <p>3.進入水銷廠</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g1" data-caption="4.封閉式水銷銷毀" href={awsUrl("demo/gov/gov1/4.png")}>
                                        <div>
                                            <img src={awsUrl("demo/gov/gov1/4.png")}/>
                                            <p>4.封閉式水銷銷毀</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g1" data-caption="5.封閉式水銷銷毀" href={awsUrl("demo/gov/gov1/5.png")}>
                                        <div>
                                            <img src={awsUrl("demo/gov/gov1/5.png")}/>
                                            <p>5.封閉式水銷銷毀</p>
                                        </div>
                                        
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <Link to={{
                            pathname: '/enterprise/docdestroy',
                            search: 'step=1'
                        }}>立即諮詢</Link>

                    </section>:""}

                    {cat==0 || cat==2 ?
                    <section>
                        <div>
                            <h2>廢木材清運案例</h2>
                            <div>
                                <h3></h3>
                                <p>zero zero提供廢木材清運服務，服務範圍包含各縣市政府機關，針對批次性廢木材或定期性廢木材清運需求之客戶，皆會以客戶方便作業時間為前提，並於約定好清運服務時間派遣專業清運司機前往作業，zero zero擁有多元車種，第一線協助您根據現場情形清理您的廢木材、廢木棧板、廢木箱等，zero zero透過後端再利用廠的協助，將這些廢木材合法回收並進行申報後，再將這些廢木材分類、處理，最後提供給燃柴鍋爐使用者，讓廢棄木材能夠產生熱能將資源循環再利用。</p>
                                <div className="logo">
                                    <img src={awsUrl("demo/logo/tcglab.png")}/>
                                    <img src={awsUrl("demo/logo/tcc.png")}/>
                                    <img src={awsUrl("demo/logo/tp.png")}/>
                                </div>
                            </div>
                            <div>
                                <Slider {...settings}>
                                    <div data-fancybox="g2" data-caption="1.廢木材清運" href={awsUrl("demo/gov/gov2/1.png")}>
                                        <div>
                                            <img src={awsUrl("demo/gov/gov2/1.png")}/>
                                            <p>1.廢木材清運</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g2" data-caption="2.廢木材清運" href={awsUrl("demo/gov/gov2/2.png")}>
                                        <div>
                                            <img src={awsUrl("demo/gov/gov2/2.png")}/>
                                            <p>2.廢木材清運</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g2" data-caption="3.廢木棧板清運" href={awsUrl("demo/gov/gov2/3.png")}>
                                        <div>
                                            <img src={awsUrl("demo/gov/gov2/3.png")}/>
                                            <p>3.廢木棧板清運</p>
                                        </div>
                                        
                                    </div>
                                    <div data-fancybox="g2" data-caption="4.廢木材清運" href={awsUrl("demo/gov/gov2/4.png")}>
                                        <div>
                                            <img src={awsUrl("demo/gov/gov2/4.png")}/>
                                            <p>4.廢木材清運</p>
                                        </div>
                                        
                                    </div>

                                </Slider>
                            </div>
                        </div>
                        <Link to={{
                            pathname: '/enterprise/wood',
                            search: 'step=1'
                        }}>立即諮詢</Link>

                    </section>:""}

                </ServiceMode>
            </div>
        )
    }
}