import React, { Component } from 'react';

import {awsUrl} from '../../../utils/awsFile';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import {bound,appointmentForm} from '../../../styles/commons';
import {boxShadow,opacity, transition, borderRadius, box, clearfix,translate,textShadow} from '../../../styles/mixins';

import ReservationForm from './components/ReservationForm';
import SubscriptionForm from '../components/SubscriptionForm';
import { Helmet } from 'react-helmet';
import queryString from "query-string";

const Head = styled.div`
	padding:0;
	background:#eee url(${awsUrl("enterprise_banner_event_202301_disk.jpg")}) no-repeat center center;
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
			background:#eee url(${awsUrl("enterprise_hd_strength.jpg")}) no-repeat center left;
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
	background:#f8f8f8;

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

const Items=styled.div`
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
			margin-bottom:15px;
		}
		> p{
			font-size:16px;
			color:#333;
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
	          background: url(${awsUrl("items1.png")}) no-repeat center center;
	          background-size: 71px auto;

	          &.p2{
	          	background: url(${awsUrl("items2.png")}) no-repeat center center;
	          	background-size: 80px auto;
	          }
	          &.p3{
	          	background: url(${awsUrl("items3.png")}) no-repeat center center;
	          	background-size: 111px auto;
	          }
	          &.p4{
	          	background: url(${awsUrl("items4.png")}) no-repeat center center;
	          	background-size: 100px auto;
	          }
	      }

	      h3{
	      	font-size:18px;
	        color:#333;
	        line-height:1.5;
	        letter-spacing:0.125em;
	      }

	      p{
	      	font-size:13px;
	      	line-height:1.4;
	      	color:#aaa;
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

export default class DiskDestroy extends Component {
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
					<title>硬碟銷(消)毀 | 企業服務</title>
				</Helmet>
        		<Head>
		            <div className="video">
		            	<div className="video_title">
			            	<h3>硬碟銷毀<br/>徹底摧毀 零洩密</h3>
			            	<p>極致將實體結構加以破壞，達到資安機密零風險、零洩密</p>
			            	<a onClick={() => this.gotoStep(1)}>立即諮詢</a>
		            	</div>

		            </div>
	            </Head>
	            <Data>
	            	<ul>
	            		<li>
	            			<div>
		            			<span>13,120</span>顆<br />銷(消)毀量
	            			</div>
	            		</li>
	            		<li>
	            			<div>
	            				<span>6,560</span>公斤<br />資源再利用
	            			</div>
	            		</li>
	            		<li>
	            			<div>
	            				<span>11,207</span>公斤<br />成功減碳量
	            			</div>
	            		</li>
	            	</ul>
	            </Data>

	            <Energy>
	            	<div>
	            		<h2>服務能量</h2>
	            		<ul>
	                        <li>
	                        	<img src={awsUrl("enterprise_e1.jpg")} width="100%"/>
	                            <h3>硬碟消磁</h3>
	                            <p>日本大廠ADC (Advance Design Corp.)設備，廠商符合ISO 27001(資訊安全管理體系的國際規範)，專利傾斜式托盤強化消磁效果，瞬間產生超強磁力，磁場強度可達10,000 Oe以上，瞬間1秒能將儲存資料徹底銷(消)毀。</p>
	                        </li>
	                        <li>
	                        	<img src={awsUrl("enterprise_e2.jpg")} width="100%"/>
	                            <h3>硬碟破壞</h3>
	                            <p>符合美國國防部與國安局(NSA)硬碟物理破壞之國際規範，提供電動與手動設備，破壞時間只需5秒，超強力鑽孔重力達5噸，使硬碟外觀與電路板破壞外，最重要會將儲存資料之碟片傷害到無法使用與復原程度。</p>
	                        </li>
	                        <li>
	                        	<img src={awsUrl("enterprise_e3.jpg")} width="100%"/>
	                            <h3>硬碟清運</h3>
	                            <p>整合一條龍清運服務，當硬碟銷(消)毀結束時，我們配合合法回收服務業者，讓您節省搜尋成本與運送成本，使有效資源再利用，減少環境破壞與污染，完整達到資安機密零洩密。</p>
	                        </li>
	                    </ul>
	            	</div>
	            </Energy>
	            <Strength>
	            	<div>
		            	<div>
		            		<h2>服務優勢</h2>
		            		<ul>
		            			<li>
		            				<h3>專業銷(消)毀</h3>
		            				<p>提供硬碟消磁、硬碟破壞、硬碟抽驗，與整合銷毀清運作業一條龍服務，滿足您統包服務的需求。</p>
		            			</li>
		            			<li>
		            				<h3>全程監控</h3>
		            				<p>硬碟銷(消)毀過程中，可依據個人需求提供全程監控服務，嚴謹紀錄銷(消)毀流程與防範銷毀弊端，確保我們銷(消)毀服務品質。</p>
		            			</li>
		            			<li>
		            				<h3>服務證明</h3>
		            				<p>我們提供《銷(消)毀證明書》、《銷(消)毀紀錄報告書》等文件，並依客戶需求提供銷(消)毀作業流程紀錄。</p>
		            			</li>
		            			<li>
		            				<h3>專屬預約</h3>
		            				<p>提供預約銷(消)毀與寄件銷毀服務，本公司設立資安銷(消)毀服務中心，您可透過預約或寄件方式至本公司，零風險、省成本。</p>
		            			</li>
		            		</ul>
		            	</div>
	            	</div>
	            </Strength>

	            <Review>
	            	<div>
		            	<div className="yt">
							<iframe width="100%" height="100%" src="https://www.youtube.com/embed/vk2XUq4tOjU"
									title="YouTube video player" frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen></iframe>
		            	</div>
		            </div>
        			<div>
			            <h3>資安機密銷(消)毀首選<br />zero zero專業硬碟銷(消)毀服務</h3>
			            <p>徹底摧毀實體硬碟、極致破壞整體結構
			            	<span>個人資安：理財檔案、工作資料、私密檔案 <br />
			            	金融機構：保單、財報、客戶個資檔案 <br />
			            	會計事務所：財務報表、客戶個資檔案 <br />
			            	政府機關：公文、財報、採購單、標單檔案 <br />
			            	醫療機構：病歷檔案、藥單、檢驗報告檔案 <br />
			            	科技業：客戶資料、產品設計圖、產品研發數據檔案 <br />
			            	法律機構：判決書、起訴書、憑證、傳票、帳務資料檔案 </span>
			            </p>
			            <a onClick={() => this.gotoStep(1)}>立即諮詢</a>
		            </div>


	            </Review>

	            <ServiceMode>
	            	<h2>專屬您的服務模式</h2>
	            	<div>
	            		<div>
		            		<ul>
		            			<li>
		            				<h3>到府銷(消)毀服務</h3>
		            				<p>配合客戶預約銷(消)毀時間，我們派遣專人到府執行硬碟銷(消)毀作業，並依客戶需求提供銷(消)毀證明。</p>
		            			</li>
		            			<li>
		            				<h3>預約銷(消)毀服務</h3>
		            				<p>我們設立資安機密銷(消)毀服務中心，配合客戶預約銷(消)毀時間，我們將有專人現場執行硬碟銷(消)毀作業，並依客戶需求提供銷(消)毀證明。</p>
		            			</li>
		            			<li>
		            				<h3>寄件銷(消)毀服務</h3>
		            				<p>我們提供客戶透過寄件方式送至本公司，後續將會安排例行性銷(消)毀作業時間，銷毀完後依客戶需求提供銷(消)毀證明。</p>
		            			</li>
		            		</ul>
	            		</div>
	            	</div>
	            </ServiceMode>

	            <Items>
	            	<div>
	            		<h2>服務品項</h2>
	            		<p>zero zero針對二手硬碟、汰換硬碟、光碟片、磁碟片等需要銷(消)毀、報廢、回收，提供徹底銷(消)毀服務</p>
	            		<ul>
	                        <li>
	                            <div className="p1"/>
	                            <h3>3.5硬碟</h3>
	                            <p>(HDD)</p>
	                        </li>
	                        <li>
	                            <div className="p2"/>
                                <h3>2.5硬碟</h3>
                                <p>(HDD)</p>
	                        </li>
	                        <li>
	                            <div className="p3"/>
                                <h3>光碟片</h3>
                                <p>(CD、VCD、DVD、MD)</p>
	                        </li>
	                        <li>
	                            <div className="p4"/>
                                <h3>磁碟片</h3>
                                <p>(3.5吋、5.25吋、8吋)</p>
	                        </li>
	                    </ul>
	            	</div>
	            </Items>

	            <Certificate>
	            	<div>
	        			<div>
							<h3>zero zero 符合專業銷(消)毀規範</h3>
				            <p>本平台合作夥伴廠商擁有合法清運執照。</p>
				            <p>符合中大型企業與政府機關硬碟銷(消)毀安全程序，並可提供服務證明以利內控稽核。</p>
				            <p>提供到府服務與專屬預約，專業硬碟銷(消)毀零洩密。</p>
				            <p>一條龍服務流程，讓您的寶貴資料完全不外洩且節省成本。</p>
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
	                            <p>貼心且用心再次確認您的硬碟銷(消)毀之需求。</p>
	                        </li>
	                        <li>
	                            <h3>3/銷(消)毀作業</h3>
	                            <div className="p3"/>
	                            <p>雙方確認報價後，將安排車趟到府銷(消)毀或至本公司預約銷(消)毀。</p>
	                        </li>
	                        <li>
	                            <h3>4/抽檢確認</h3>
	                            <div className="p4"/>
	                            <p>嚴謹提供現場抽驗檢測，確認每一個銷(消)毀作業環節、零洩密。</p>
	                        </li>
	                        <li>
	                            <h3>5/銷(消)毀證明</h3>
	                            <div className="p5"/>
	                            <p>提供《銷(消)毀證明書》、《銷(消)毀紀錄報告書》等文件，展現專業服務品質。</p>
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
					{/*<SubscriptionForm source={3} status={this.state.subscriptionFormStatus} statusCallback={this.changeSubscriptionFormStatus}/>*/}
	            </More>
            </div>
        )
    }
}
