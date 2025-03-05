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
    background:#eee url(${awsUrl("enterprise_banner_event_20190324_sludge.jpg")}) no-repeat center center;
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



const More = styled.div`
   
`;


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
                        font-size:13px;
                        color:#333;
                        line-height:1.4;
                        text-align:left;
                    }
                }

                &::after{
                    ${clearfix};
                }
            }
            
            > a {
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
            background:#eee url(${awsUrl("enterprise_sludge_strength.jpg")}) no-repeat center right;
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
`;



const Items=styled.div`
    padding:50px 0;
    background:#f8f8f8;

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
            font-size:16px;
            color:#333;
            font-weight:400;
            line-height:1.5;
            width:90%;
            margin:0 auto;
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

          &:nth-child(even){
            margin-top:80px;
          }

          >div{
              display:block;
              width:90%;
              max-width:300px;
              margin:0px auto 20px;

              img{
                width:100%;
                ${borderRadius("100%")};
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
          }

          @media (max-width: ${theme.medias.phablet}) {
            width:100%;
            float:none;
            &:nth-child(even){
            margin-top:0px;
          }
            }

        }
        &::after{
          ${clearfix};
        }
    }
`;

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
            background:#eee url(${awsUrl("enterprise_sludge_servicemode.jpg")}) no-repeat center center;
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

export default class SludgeTreatment extends Component {
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
                    <title>污泥處理服務 | 企業服務</title>
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

                <ServiceMode>
                    <h2>污泥處理品項</h2>
                    <div>
                        <div>
                            <ul>
                                <li>
                                    <h3>有機性污泥 (D-0901)</h3>
                                    <p>生物處理程序所產生之生物污泥或含揮發性(VS)固體物量超過30%以上之污泥，主要處理方式為熱處理。</p>
                                </li>
                                <li>
                                    <h3>無機性污泥 (D-0902)</h3>
                                    <p>物理或化學處理程序所產生之化學污泥或含揮發性(VS)固體物量低於30%以下之污泥，主要處理方式包括熱處理、固化處理和物力處理。</p>
                                </li>
                                <li>
                                    <h3>混合物污泥 (D-0999)</h3>
                                    <p>非屬公告應回收或再利用污泥或其混合物，主要處理方式包括熱處理。</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ServiceMode>

                <ReservationForm {...this.props}/>

                <Process>
                    <div>
                        <h2>服務流程</h2>
                        <ul>
                            <li>
                                <h3>1/線上諮詢</h3>
                                <div className="p1"/>
                                <p>填寫諮詢表單並加入Line:@df717，將立即為您服務。</p>
                            </li>
                            <li>
                                <h3>2/專員服務</h3>
                                <div className="p2"/>
                                <p>貼心專員線上即時確認您的污泥清運之需求。</p>
                            </li>
                            <li>
                                <h3>3/抽樣送檢</h3>
                                <div className="p4"/>
                                <p>填寫送樣單，並連同樣品、TCLP資料一起寄送到處理機構。</p>
                            </li>
                            <li>
                                <h3>4/清運作業</h3>
                                <div className="p3"/>
                                <p>報價合約簽訂後，立即安排車趟到府清運。</p>
                            </li>
                            <li>
                                <h3>5/清運證明</h3>
                                <div className="p5"/>
                                <p>清運環節合法處理，可依需求提供相關證明文件。</p>
                            </li>
                        </ul>
                    </div>
                </Process>

                <Items>
                    <div>
                        <h2>資源永續循環‧污泥材料化</h2>
                        <p>透過先進處理技術，將企業所產生之污泥材料化，製成回填材料瀝青混凝土、灰渣混凝土、環保水泥、人工粒料及消波塊等，不僅增加污泥再利用的價值，也可以降低企業對於污泥的處理費用，塑造讓資源永續循環的企業形象。</p>
                        <ul>
                            <li>
                                <div><img src={awsUrl("sludge_01.jpg")}/></div>
                                <h3>環保水泥磚</h3>
                            </li>
                            <li>
                                <div><img src={awsUrl("sludge_02.jpg")}/></div>
                                <h3>CLSM</h3>
                                <p>(控制性低強度回填材料)</p>
                            </li>
                            <li>
                                <div><img src={awsUrl("sludge_03.jpg")}/></div>
                                <h3>消波塊</h3>
                            </li>
                            <li>
                                <div><img src={awsUrl("sludge_04.jpg")}/></div>
                                <h3>人工粒料</h3>
                            </li>
                        </ul>
                        <a onClick={() => this.gotoStep(1)}>立即諮詢</a>
                    </div>
                </Items>

                <Certificate>
                    <div>
                        <div>
                            <h3>zero zero 專業合法 全台服務能量</h3>
                            <p>本平台合作夥伴廠商擁有合法清運執照。</p>
                            <p>服務能量遍及全台，全省北中南多家合法配合清運處理廠。</p>
                            <p>一條龍服務流程，處理污泥再無後顧之憂，共同守護您的企業品牌!</p>
                            <br /><br />
                            <a onClick={() => this.gotoStep(1)}>立即諮詢</a>
                        </div>
                        <div>
                            <img src={awsUrl("enterprise_certificate.png")} width="100%"/>
                        </div>
                    </div>
                </Certificate>

                <Strength>
                    <div>
                        <div>
                            <h2>服務優勢</h2>
                            <ul>
                                <li>
                                    <h3>專業合法清運</h3>
                                    <p>平台合作夥伴皆擁有合法執照，擁有豐富的清運經驗，100%保障透過合法的處理管道。</p>
                                </li>
                                <li>
                                    <h3>全方位諮詢服務</h3>
                                    <p>業務專員現場取樣，協助判別污泥申報類別與廢清書申報建議，提供全方位專業諮詢服務。</p>
                                </li>
                                <li>
                                    <h3>豐富車輛資源</h3>
                                    <p>可即時安排車趟，根據需求提供合適的車輛，將污泥運送至政府合法處理廠進行處理。</p>
                                </li>
                                <li>
                                    <h3>全省服務範圍</h3>
                                    <p>服務範圍擴及全省，配合全省北中南區後端處理場，讓污泥合法清運處理並進行申報。</p>
                                </li>
                            </ul>
                            <a onClick={() => this.gotoStep(1)}>立即諮詢</a>
                        </div>

                    </div>
                </Strength>
            </div>
        )
    }
}
