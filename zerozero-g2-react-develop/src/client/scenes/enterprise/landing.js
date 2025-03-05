import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './action';
import {awsUrl} from '../../utils/awsFile';
import styled from 'styled-components';
import theme from '../../styles/theme';
import {bound,appointmentForm} from '../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix,translate,textShadow,opacity} from '../../styles/mixins';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import SubscriptionForm from './components/SubscriptionForm';
import CoverImg from '../common/components/CoverImage.js';
import {
	EnterpriseDemoET,
	EnterpriseDemoFN,
	EnterpriseDemoGov,
	EnterpriseDemoMD,
	EnterpriseDemoTL,
	EnterpriseDemoFM,
	EnterpriseDemoBS
} from '../../commons/routePaths';

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

    @media (max-width: ${theme.medias.phablet}) {
        
    }
`

const Head = styled.div`
	background:${theme.colors.green};
	padding:50px 5%;
	${box};
	position:relative;

	h2{
		font-size:36px;
		color:#fff;
		line-height:1.2;
		font-weight:500;
		letter-spacing:0.1em;
		margin-bottom:30px;
		text-align:center;
	}
	
	h3{
		font-size:18px;
		color:#fff;
		line-height:1.2;
		text-align:center;
	}

	&::after{
		content:"";
		position:absolute;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 30px 30px 0 30px;
		border-color: ${theme.colors.green} transparent transparent transparent;
		left:50%;
		margin-left:-30px;
		bottom:-30px;
	}

	

	@media (max-width: ${theme.medias.phablet}) {
		h2{
			font-size:32px;
		}
		h3{
			font-size:16px;
		}
	}
`

const Partner = styled.div`
	background:#fff;
	text-align:center;
	>div{
		padding:50px 0;
		${bound};

		ul{
			margin:50px 0 0;
			li{
				display:inline-block;
				width:27%;
				margin:8px 3%;

				@media (max-width: ${theme.medias.phablet}) {
					width:93%;
		
				}

				img{
					width:auto;
					height:100px;
				}
			}
		}
		
	}
	h3{
		font-size:24px;
		color:${theme.colors.blue};
		line-height:1.5;
		font-weight:500;
		letter-spacing:0.1em;
		margin-bottom:8px;
	}

	p{
		font-size:16px;
		color:${theme.colors.gray};
		line-height:1.6;
		margin-bottom:30px;
	}


	&::after{
		${clearfix};
	}

	
`

const Review = styled.div`
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

			img{
				${borderRadius("8px")};
			}
		}
	}
	h3{
		font-size:24px;
		color:${theme.colors.blue};
		line-height:1.5;
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

	.majors{
		span{
			font-size:16px;
			color:#333;
			display:inline-block;
			line-height:1.5;
			width:32%;
			margin-bottom:10px;
			text-align:left;

			&::before{
	            content:"\f087 ";
	            color:${theme.colors.gray};
	            margin-right:4px;
	            font-family: FontAwesome;
	        }

	        @media (max-width: ${theme.medias.phablet}) {
				width:49%;
			}

		}
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

			img{
				${borderRadius("8px")};
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
		line-height:1.5;
		margin-bottom:10px;
		text-indent:-22px;
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

const Service=styled.div`
	background:#fff;
	padding:50px 0;

	ul{
		${bound};
		text-align:center;
	    padding:30px 0 0px;
	    @media (max-width: ${theme.medias.phablet}) {
	    	background:none;
	    }

	    li{
	      width:calc(50% - 10px);
	      text-align:center;
	      display:inline-block;
	      float:left;
	      position:relative;
	      margin-bottom:20px;
	      ${box};
	      overflow:hidden;
	      	${borderRadius("8px")};
	      	${boxShadow("4px 4px 16px rgba(0,0,0,.1)")};



	      &:nth-child(1){
	      	margin-right:20px;
	      }

	      &:nth-child(3),&:nth-child(4){
	      	margin-right:20px;
	      }

	      &:nth-child(3),&:nth-child(4),&:nth-child(5){
	      	width:calc(33.333% - 13.33px);
	      }
	      

	      a{
	      	display:block;
	      	width:100%;
	      	height:100%;
	      	position:relative;
	      	
	      	background:#000;
	      	

			> img{
				${transition('all','.3s')};
				width:100%;
	      		${opacity(1)};
	      	}

	      	&:hover{
	      		> img{
	      			-ms-transform: scale(1.05); 
					    -webkit-transform: scale(1.05); 
					    transform: scale(1.05);
	      		}

	      		h3::after{
	      			//right:0px;
	      			background:${theme.colors.green};
	      		}
	      	}
	      }

	      

	      h3{
	      	position:absolute;
	      	z-index:2;
	      	bottom:30px;
	      	left:20px;
	      	width:100%;
	      	font-size:25px;
	      	font-weight:500;
	        color:#fff;
	        line-height:1.5;
	        letter-spacing:0.125em;
	        text-align:left;
	        width:calc(100% - 40px);

	        span{
	        	font-weight:normal;
	        	display:block;
	        	font-size:14px;
	        	letter-spacing:0.05em;
	        }

	        &::after{
	        	content:"\f105";
	        	font-family:fontawesome;
		    	width:40px;
		    	height:40px;
		    	position:absolute;
		    	z-index:5;
		    	top:10px;
		    	right:10px;
		    	text-align:center;
		    	font-size:30px;
		    	line-height:40px;
		    	${borderRadius("4px")};
		  		${boxShadow("1px 1px 4px rgba(0,0,0,.4)")};
		  		background:${theme.colors.blue};
		  		letter-spacing:0;
		  		${transition('all','.3s')};
		    }
	      }

	      @media (max-width: ${theme.medias.phablet}) {


			display:block;
			width:100% !important;
			height:60vw;
			margin-right:0 !important;
			margin-bottom:15px;
			img{
				position:absolute;
				bottom:0;
				left:0;
				z-index:1;
			}
			h3{
				left:15px;
				bottom:15px;
			}

					
			}

	    }
	    &::after{
	      ${clearfix};
	    }
	}
`

const ServiceEnterprise=styled.div`

	padding:50px 0;

	ul{
		${bound};
		text-align:center;
	    padding:30px 0 0px;
	    @media (max-width: ${theme.medias.phablet}) {
	    	background:none;
	    }

	    li{
	      width:calc(33.333% - 13.33px);
	      height:0;
	      padding-top:20%;
	      display:inline-block;
	      float:left;
	      position:relative;
	      margin-bottom:20px;
	      ${box};
	      overflow:hidden;
	      	${borderRadius("8px")};
	      	${boxShadow("4px 4px 16px rgba(0,0,0,.1)")};

	      @media (max-width: ${theme.medias.phablet}) {
			width:100%;
			padding-top:40%;
			margin-right:0;
			margin-bottom:15px;

			a{
				background-size:90px auto !important;
			}
					
			}

		&:nth-child(1){
			padding-top:calc(40% + 20px);
			background:${theme.colors.blue};
			text-align:center;
			>div{
				position:absolute;
				width:100%;
				top:50%;
				left:50%;
				${translate('-50%','-50%')};
			}

			img{
				width:60%;
				height:auto;
				margin:50px auto;
				@media (max-width: ${theme.medias.phablet}) {
					display:none;
				}
			}

			h3{
				color:#fff;
				font-weight:600;
				font-size:35px;

				&::after{
					content:"\f0da";
					font-family:fontawesome;
					margin-left:15px;
				}
			}
		}
	      &:nth-child(1),&:nth-child(2),&:nth-child(4),&:nth-child(6),&:nth-child(7){
	      	margin-right:20px;
	      }

	      &:nth-child(2){
	      	a{
				background:#fff url(${awsUrl("1-icon.png")}) no-repeat left 20px center;
				&:hover{
					background:${theme.colors.green} url(${awsUrl("1-icon-on.png")}) no-repeat left 30px center;
				}
			}
	      }
	      &:nth-child(3){
	      	a{
				background:#fff url(${awsUrl("2-icon.png")}) no-repeat left 20px center;
				&:hover{
					background:${theme.colors.green} url(${awsUrl("2-icon-on.png")}) no-repeat left 30px center;
				}
			}
	      }
	      &:nth-child(4){
	      	a{
				background:#fff url(${awsUrl("3-icon.png")}) no-repeat left 20px center;
				&:hover{
					background:${theme.colors.green} url(${awsUrl("3-icon-on.png")}) no-repeat left 30px center;
				}
			}
	      }
	      &:nth-child(5){
	      	a{
				background:#fff url(${awsUrl("4-icon.png")}) no-repeat left 20px center;
				&:hover{
					background:${theme.colors.green} url(${awsUrl("4-icon-on.png")}) no-repeat left 30px center;
				}
			}
	      }
	      &:nth-child(6){
	      	a{
				background:#fff url(${awsUrl("5-icon.png")}) no-repeat left 20px center;
				&:hover{
					background:${theme.colors.green} url(${awsUrl("5-icon-on.png")}) no-repeat left 30px center;
				}
			}
	      }
	      &:nth-child(7){
	      	a{
				background:#fff url(${awsUrl("6-icon.png")}) no-repeat left 20px center;
				&:hover{
					background:${theme.colors.green} url(${awsUrl("6-icon-on.png")}) no-repeat left 30px center;
				}
			}
	      }
	      &:nth-child(8){
	      	a{
				background:#fff url(${awsUrl("7-icon.png")}) no-repeat left 20px center;
				&:hover{
					background:${theme.colors.green} url(${awsUrl("7-icon-on.png")}) no-repeat left 30px center;
				}
			}
	      }

	 
	      a{
	      	position:absolute;
	      	display:block;
	      	top:0;
	      	left:0;
	      	z-index:1;
	      	width:100%;
	      	height:100%;
	      	
	      	background:#fff;
	      	margin-bottom:20px;
	      	${transition('all','.3s')};
			

	      	&:hover{
	      		background:${theme.colors.green};

	      		p{
	      			color:#fff;
	      		}
	      	}
	      }

	      

	      p{
	      	position:absolute;
	      	z-index:2;
	      	top:50%;
	      	right:20px;
	      	font-size:23px;
	      	font-weight:600;
	        color:${theme.colors.blue};
	        line-height:40px;
	        text-align:right;
	        width:calc(100% - 40px);
	        margin-top:-20px;
	        letter-spacing:0;
	        
	      }

	      

	    }
	    &::after{
	      ${clearfix};
	    }
	}
`

class EnterpriseLanding extends Component {
	constructor(props) {
        super(props);
        this.state = {
            step: 1,
            subscriptionFormStatus:false,
            slideid:0 ,
        };
        this.changeSubscriptionFormStatus = this.changeSubscriptionFormStatus.bind(this);
    }

	componentDidMount() {
		this.props.loadSlides();
	}


    changeSubscriptionFormStatus(status) {
        this.setState({subscriptionFormStatus: status});
    }


    render() {

    	const settings = {
            className: 'slider',
            dots: true,
            dotsClass: 'sliderbtn',
            autoplay: false,
            autoplaySpeed: 4000,
            arrows: true,
            beforeChange: (current, next) => {
            	this.setState({ slideIndex: next });
            }
        };

    	const slides = this.props.slides? this.props.slides.toJS() : [];

        return (
        	<div>
				<Helmet>
					<title>企業服務</title>
				</Helmet>
				<PromoteSlider>
                        <Slider {...settings}>
                            {
                                slides.map((e, i) => {
                                    return (
                                        <div key={e.id}>
											<a>
												<CoverImg src={e.url}/>
											</a>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                </PromoteSlider>
                <Head>
                	<h2>我們的服務</h2>
                	<h3>zero zero建構全循環回收再利用服務模式，提供您專屬的環保服務團隊</h3>
                </Head>
	            <Service>
	            	<div>
	            		<ul>
	                        <li>
								<Link to={'/enterprise/docDestroy'}>
                                    <img src={awsUrl("enterprise_doc_indx.jpg")}/>
                                    <h3>文件銷毀<span>Document Destruction</span></h3>
								</Link>
	                        </li>
	                        <li>
								<Link to={'/enterprise/diskDestroy'}>
                                    <img src={awsUrl("enterprise_disk_index.jpg")}/>
                                    <h3>硬碟銷毀<span>Disk Destruction</span></h3>
								</Link>
	                        </li>
	                        <li>
								<Link to={'/enterprise/wood'}>
                                    <img src={awsUrl("enterprise_wood_index.jpg")}/>
                                    <h3>廢木材清運<span>Wood Waste Disposal</span></h3>
								</Link>
	                        </li>
	                        <li>
								<Link to={'/enterprise/food'}>
                                    <img src={awsUrl("enterprise_food_index.jpg")}/>
                                    <h3>食品報廢<span>Food Waste Disposal</span></h3>
								</Link>
	                        </li>
	                        <li>
								<Link to={'/enterprise/sludge'}>
                                    <img src={awsUrl("enterprise_slidge_index.jpg")}/>
                                    <h3>汙泥處理<span>Sludge Treatment</span></h3>
								</Link>
	                        </li>
	                    </ul>
	            	</div>
	            </Service>

	            <ServiceEnterprise>
	            	<div>
	            		<ul>
	            			<li>
		            			<div>
		            				<img src={awsUrl("0-icon.png")}/>
		            				<h3>企業用戶</h3>
	            				</div>
	            			</li>
	            			<li>
	            				<Link to={{pathname:EnterpriseDemoFM()}}>
	            					<p>食品製造業</p>
	            				</Link>
	            			</li>
	            			<li>
		            			<Link to={{pathname:EnterpriseDemoBS()}}>
		            				<p>商業服務產業</p>
		            			</Link>
	            			</li>
	            			<li>
		            			<Link to={{pathname:EnterpriseDemoET()}}>
		            				<p>電子科技產業</p>
		            			</Link>
	            			</li>
	            			<li>
		            			<Link to={{pathname:EnterpriseDemoTL()}}>
		            				<p>運輸物流產業</p>
		            			</Link>
	            			</li>
	            			<li>
		            			<Link to={{pathname:EnterpriseDemoGov()}}>
		            				<p>政府單位</p>
		            			</Link>
	            			</li>
	            			<li>
		            			<Link to={{pathname:EnterpriseDemoFN()}}>
		            				<p>金融產業</p>
		            			</Link>
	            			</li>
	            			<li>
		            			<Link to={{pathname:EnterpriseDemoMD()}}>
		            				<p>醫療產業</p>
		            			</Link>
	            			</li>
	            		</ul>
	            	</div>
	            </ServiceEnterprise>
	            
	            <Review>
	            	<div>
	        			<div>
				            <h3>zero zero永續的承諾</h3>
				            <p>我們提供一個B2B服務平台，致力於用前衛的理念與軟實力顛覆台灣環保產業，縮短企業廢棄物處理環節，降低服務成本，高效清運服務。 <br /><br />zero zero整合全台合法的夥伴廠商服務能量，並以企業為中心，提供最專業的企業回收服務。
				            </p>
			            </div>
			            <div>
			            	<img src={awsUrl("enterprise_promise.jpg")} width="100%"/>
			            </div>
		            </div>
		            
	            </Review>

	            <Certificate>
	            	<div>
	        			<div>
							<h3>zero zero 全台服務能量</h3>
				            <p>zero zero擁有全台北中南多家合法合作廠商，皆擁有合法清運執照：</p>
				            <p>透過平台清運完成後，提供合法處理報告書，讓您可查看相關清運資訊與證明。</p>
				            <p>本平台符合資訊安全規範，並紀錄車輛清運歷程，讓企業安心、有保障。</p>
				            <p>提供一站式專業清運物流團隊，讓您企業零廢棄、全循環。</p>
			            </div>
			            <div>
			            	<img src={awsUrl("enterprise_certificate.png")} width="100%"/>
			            </div>
		            </div>
		            
	            </Certificate>

	            <Partner>
	            	<div>
	        			
			            <h3>zero zero 合作廠商</h3>
			            <p>合法清運 | 全體系服務</p>
			            <ul>
			            	<li><img src={awsUrl("partner/p1.png")}/></li>
			            	<li><img src={awsUrl("partner/p2.png")}/></li>
			            	<li><img src={awsUrl("partner/p3.png")}/></li>
			            	<li><img src={awsUrl("partner/p4.png")}/></li>
			            	<li><img src={awsUrl("partner/p5.png")}/></li>
			            	<li><img src={awsUrl("partner/p6.png")}/></li>
			            	<li><img src={awsUrl("partner/p7.png")}/></li>
			            	<li><img src={awsUrl("partner/p8.png")}/></li>
			            	<li><img src={awsUrl("partner/p9.png")}/></li>
			            	<li><img src={awsUrl("partner/p10.png")}/></li>
			            	<li><img src={awsUrl("partner/p11.png")}/></li>
			            	<li><img src={awsUrl("partner/p12.png")}/></li>
			            	<li><img src={awsUrl("partner/p13.png")}/></li>
			            	<li><img src={awsUrl("partner/p14.png")}/></li>
			            	<li><img src={awsUrl("partner/p15.png")}/></li>
			            	<li><img src={awsUrl("partner/p16.png")}/></li>
			            	<li><img src={awsUrl("partner/p17.png")}/></li>
			            	<li><img src={awsUrl("partner/p18.png")}/></li>
			            </ul>
			            
		            </div>
		            
	            </Partner>

	            <More>
        			<div>
			            <h3>我們重視您的需求</h3>
			            <p>諮詢其它服務需求，我們將有專人與您聯繫。</p>
			            <br />
			            <img src={awsUrl("enterprise_more.png")} width="100%"/>
		            </div>
		            <SubscriptionForm source={4} status={this.state.subscriptionFormStatus} statusCallback={this.changeSubscriptionFormStatus}/>
	            </More>
   
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        slides: state.enterprise.landing.get("SLIDES")
    }
}

export default connect(mapStateToProps, {...actions})(EnterpriseLanding);
