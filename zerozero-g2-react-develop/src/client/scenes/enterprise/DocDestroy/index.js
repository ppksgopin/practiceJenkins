import React, { Component } from 'react';

import {awsUrl} from '../../../utils/awsFile';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import {bound,appointmentForm} from '../../../styles/commons';
import {boxShadow,opacity, transition, borderRadius, box, clearfix,translate,textShadow} from '../../../styles/mixins';

import ReservationForm from './components/ReservationForm';
import SubscriptionForm from '../components/SubscriptionForm';
import { Helmet } from 'react-helmet';
import queryString from 'query-string';

const Head = styled.div`
	padding:0;
	background:#eee url(${awsUrl("enterprise_banner_event_20190101_doc.jpg")}) no-repeat center center;
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
		font-size:16px;
		color:#333;
		line-height:1.6;
		margin-bottom:30px;

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
	&::after{
		${clearfix};
	}

	@media (max-width: ${theme.medias.phablet}) {
		text-align:center;
	}
`

const Certificate = styled.div`
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
				background: url(${awsUrl("data1.png")}) no-repeat center center;
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
			background:#eee url(${awsUrl("enterprise_strength.jpg")}) no-repeat center right;
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

export default class DocDestroy extends Component {
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
        let top = document.getElementById("rf").offsetTop; //Getting Y of target element
		window.scrollTo(0, top);
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
					<title>文件銷毀 | 企業服務</title>
				</Helmet>
        		<Head>
		            <div className="video">
		            	<div className="video_title">
			            	<h3>文件銷毀<br/>企業機密零洩密</h3>
				            <p>封閉式(Closed-Loop)水銷機密文件銷毀機制，讓您的機密零風險</p>
			            	<a onClick={() => this.gotoStep(1)}>立即預約</a>
		            	</div>
		            </div>
	            </Head>
	            <Data>
	            	<ul>
	            		<li>
	            			<div>
		            			<span>653</span>家<br />企業參與
	            			</div>
	            		</li>
	            		<li>
	            			<div>
	            				<span>272,100</span>公斤<br />資源再利用
	            			</div>
	            		</li>
	            		<li>
	            			<div>
	            				<span>161,472</span>公斤<br />成功減碳量
	            			</div>
	            		</li>
	            	</ul>
	            </Data>
	            <Strength>
	            	<div>
		            	<div>
		            		<h2>服務優勢</h2>
		            		<ul>
		            			<li>
		            				<h3>機密銷毀</h3>
		            				<p>提供您封閉式破碎銷毀模式，直接進入銷毀處理廠，嚴謹建構徹底銷毀之使命。</p>
		            			</li>
		            			{/*<li>*/}
		            			{/*	<h3>即時監控</h3>*/}
		            			{/*	<p>提供您全程銷毀影像監控，確保機密資料不外洩，保證銷毀服務品質，展現對您服務的重視度。</p>*/}
		            			{/*</li>*/}
		            			<li>
		            				<h3>價格有感</h3>
		            				<p>透過標準化及合理化收費訂定，提供《批次性文件銷毀服務-車次計價》報價機制。</p>
		            			</li>
		            			<li>
		            				<h3>服務保證</h3>
		            				<p>提供《銷毀證明書》與佐證資料，展現機密服務品質保證。</p>
		            			</li>
		            		</ul>
		            	</div>
	            	</div>
	            </Strength>

	            <Review>
	            	<div>
		            	<div className="yt">
							<iframe width="100%" height="100%" src="https://www.youtube.com/embed/paJTfdkqUsc"
									title="YouTube video player" frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe>
		            	</div>
		            </div>
        			<div>
			            <h3>超過百家企業<br />選擇zero zero 機密文件銷毀服務</h3>
			            <p>各產業共同好評見證 零洩密、零風險
			            	<span>金融機構: 保單、財報、客戶個資 <br />
			            	會計事務所: 財務報表、客戶個資 <br />
			            	政府機關: 公文、財報、採購單、標單 <br />
			            	醫療機構: 病歷表、藥單、檢驗報告 <br />
			            	科技業: 客戶資料、產品設計圖、產品研發數據 <br />
			            	法律機構: 判決書、起訴書、憑證、傳票、帳務資料 </span>
			            </p>
			            <a onClick={() => this.gotoStep(1)}>立即諮詢</a>
		            </div>


	            </Review>

	            <Water>
	            	<div>
	        			<div>
				            <h3>封閉式水銷服務</h3>
				            <p>
				            	將過期的保密資料加水，透過紙漿機高速渦輪攪碎成紙漿，快速銷毀大量的機密文件，再造成再生紙，提倡環保，為維護水銷機器的銷毀品質，非紙質文件是不能投入的違禁品!
				            	<span>非紙質違禁品:<br />塑膠文件夾、膠裝邊條、相片紙、塑膠封面</span>
				            </p>
				            <br />
			            	<img src={awsUrl("enterprise_forbidden.png")} width="100%"/>
			            </div>
			            <div>
			            	<img src={awsUrl("enterprise_water.jpg")} width="100%"/>
			            </div>
		            </div>
	            </Water>

	            <Certificate>

        			<div>
			            <h3>zero zero 合法專業<br />全台服務能量</h3>
			            <p>合法甲級清運執照，ISO 9001、ISO 14001、ISO 18001國際認證</p>
			            <p>服務能量遍及全台，全省北中南多家合法配合銷毀處理紙廠</p>
			            <p>封閉式水銷服務，到府服務，機密安全零洩密</p>
			            <p>“全循環、零廢棄”- 企業辦公文件環保再生</p>
		            </div>
		            <div>
		            	<img src={awsUrl("enterprise_certificate.png")} width="100%"/>
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
	                            <p>貼心且用心再次確認您的文件銷毀之需求。</p>
	                        </li>
	                        <li>
	                            <h3>3/到府載運</h3>
	                            <div className="p3"/>
	                            <p>雙方確認報價資訊後，立即幫您安排車趟到府載運。</p>
	                        </li>
	                        <li>
	                            <h3>4/紙廠銷毀</h3>
	                            <div className="p4"/>
	                            <p>依照約定銷毀日期直送處理廠。</p>
	                        </li>
	                        <li>
	                            <h3>5/銷毀證明</h3>
	                            <div className="p5"/>
	                            <p>提供《銷毀證明書》佐證資料。</p>
	                        </li>
	                    </ul>
	            	</div>
	            </Process>
	            <ReservationForm {...this.props}/>
	            <More>
					{/* 2019/03/11 因應ZZG2-1399 移除下方註解程式碼*/}
        			{/*<div>*/}
			            {/*<h3>獲取<br />更多服務資訊</h3>*/}
			            {/*<p>zero zero未來將推出更多清運服務與資訊，邀請您一同參與。</p>*/}
			            {/*<br />*/}
			            {/*<img src={awsUrl("enterprise_more.png")} width="100%"/>*/}
		            {/*</div>*/}
					{/*<SubscriptionForm source={2} status={this.state.subscriptionFormStatus} statusCallback={this.changeSubscriptionFormStatus}/>*/}
	            </More>
            </div>
        )
    }
}
