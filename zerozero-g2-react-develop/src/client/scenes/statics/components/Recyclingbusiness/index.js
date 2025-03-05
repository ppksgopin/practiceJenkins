import React, {Component} from 'react';
import {awsUrl} from '../../../../utils/awsFile';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import {boxShadow, translate,transition, borderRadius, box, clearfix} from '../../../../styles/mixins';



const Container = styled.div `
 padding: 80px 0 0;
  min-height: 95vh;
  ${box};
  @media (max-width: ${theme.medias.phablet}) {
      padding: 50px 0 0;
  }
`
const Head = styled.div `
  background:${theme.colors.green};
  text-align:center;
  padding:80px 0;
  h1{
  	font-size:36px;
  	color:#fff;
  	font-weight:500;
  	line-height:1.5;
  	margin-bottom:20px;
  }
  h3{
  	font-size:24px;
  	color:#fff;
  	font-weight:300;
  	line-height:1.5;
  }
  @media (max-width: ${theme.medias.phablet}) {
  	padding:50px 0;
    h1{font-size:24px;}
    h3{font-size:18px;}
  }
  a{
    display:none;
    line-height:50px;
    font-size:18px;
    padding:0 40px;
    color:#fff;
    border:1px solid #fff;
    ${box};
    margin:40px auto 0;
    text-decoration:none;
    font-weight:400;
    ${borderRadius("8px")}
    &::before{
      content:"\f095";
      font-family: FontAwesome;
      margin-right:5px;
    }
    @media (max-width: ${theme.medias.phablet}) {
      display:inline-block;
    }
  }
`
const Note = styled.div `
  background:${theme.colors.red};
  text-align:center;
  padding:50px 20px;
  h3{
  	font-size:18px;
  	color:#fff;
  	font-weight:300;
  	line-height:1.5;
  	margin-bottom:10px;
  }
  p{
  	font-size:18px;
  	color:#fff;
  	font-weight:300;
  	line-height:1.5;
  }
  a{
    color:#fff;
  }
`
const Section = styled.div `
  padding:50px 0;
  max-width:${theme.medias.maxW};
  margin:0 auto;
  border-bottom:1px solid #ddd;
  &.last{
  	border:none;
  	padding-bottom:100px;
  }
  h2{
  	font-size:24px;
  	color:${theme.colors.blue};
  	font-weight:400;
  	line-height:1.5;
  	margin-bottom:40px;

  	@media (max-width: ${theme.medias.phablet}) {
  		text-align:center;
  		&::before{
  			display:block;
  		}
  	}

  	&::before{
  		content:"\f06c";
  		font-family: FontAwesome;
  		margin-right:10px;
  	}
  }
  h3{
  	font-size:18px;
  	color:${theme.colors.green};
  	font-weight:400;
  	line-height:1.5;
  	margin-bottom:20px;
  }
  p{
  	font-size:14px;
  	color:#333;
  	font-weight:300;
  	line-height:1.5;
    overflow:auto;
  }

  ul{
  	li{
  		display:inline-block;
  		width:18%;
  		margin:0 3.5%;
  		float:left;

  		@media (max-width: ${theme.medias.phablet}) {
  			float:none;
  			display:block;
  			width:90%;
  			margin: 0 auto 70px;
  		}

  		&:last-child{
  			.icon{
  				&:before{
  					display:none;
  				}
  			}
  		}

  		.icon{
  			position:relative;
  			width:100%;
  			height:0;
  			padding-top:80%;
  			border:5px solid ${theme.colors.green};
  			${borderRadius("8px")};
  			${box};



  			img{
  				position:absolute;
  				top:50%;
  				left:50%;
  				${translate("-50%","-50%")};
  			}

  			&::before{
		  		content:"\f054";
		  		position:absolute;
		  		font-size:24px;
		  		line-height:1;
		  		top:50%;
		  		margin-top:-12px;
		  		right:-32%;
		  		color:${theme.colors.green};
		  		font-family: FontAwesome;
		  	}

		  	@media (max-width: ${theme.medias.phablet}) {
		  		width:180px;
		  		padding-top:160px;
		  		margin:0 auto;

		  		&::before{
			  		content:"\f078";
			  		top:auto;
			  		bottom:-90px;
			  		margin-top:0;
			  		right:50%;
			  		margin-right:-15px;
			  	}
  			}
  		}
  		p{
			text-align:center;
			font-size:16px;
			color:#333;
			line-height:1.5;
			margin-top:15px;
		}
  	}
  	&::after{
  		${clearfix};
  	}
  }

  .item{
    width:90%;
    margin:0 auto 60px;
  	${box};
  	position:relative;

  	&.noicon{
  		padding-left:0;
  	}

  	.icon{
  		width:150px;
  		float:left;

  		img{
  			max-width:95%;
  			height:auto;
  		}
  	}

  	&::after{
  		${clearfix};
  	}
  }
  @media (max-width: ${theme.medias.phablet}) {
  	width:80%;
  	.item{
  		padding-left:75px;
      width:100%;

  		.icon{
  			position:absolute;
  			top:0;
  			left:0;
  			width:60px;
  		}
  	}
  }
`


class Recyclingbusiness extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                	<Head>
            			<h1>共享綠金 事業放大術</h1>
            			<h3>歡迎成為清運夥伴</h3>
                  <a href="tel:0800009717">聯絡我們</a>
            		</Head>
            		<Section>
            			<h2>成為夥伴三大好處</h2>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/money-bag.png")} width="96" height="114"/>
            				</div>
	            			<h3>提供企業商機</h3>
	            			<p>我們將成為您與客戶的橋梁，線上即時匹配，快速引薦客戶。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/report.png")} width="96" height="133"/>
            				</div>	
	            			<h3>清運管理系統</h3>
	            			<p>提供系統化管理模式，讓您的清運資訊自動化、數據化。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/team.png")} width="117" height="121"/>
            				</div>
	            			<h3>環保資訊交流</h3>
	            			<p>佈局亞洲、服務全台，將提供您最新、可靠的產業資訊。</p>
            			</div>
            		</Section>
            		<Section>
            			<h2>我們的專業優勢</h2>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/fund.png")} width="117" height="122"/>
            				</div>
	            			<h3>挖掘綠金</h3>
	            			<p>極具競爭力的合作利潤模式</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/advantage.png")} width="117" height="122"/>
            				</div>
	            			<h3>專業行銷智庫</h3>
	            			<p>提供線上線下一體化行銷服務</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/bar-chart.png")} width="96" height="107"/>
            				</div>
	            			<h3>專業環保顧問</h3>
	            			<p>超過15年以上專業經營合法事業廢棄物服務經驗</p>
            			</div>
            		</Section>
            		<Section>
            			<h2>如何成為合作夥伴</h2>
            			<div className="item noicon">
	            			<p>具備 營業登記證、廢棄物清運證照(甲級或乙級) 的公司企業。</p>
            			</div>
            		</Section>
            		<Section>
            			<h2>支持零廢棄全循環 需要更多綠色夢想家</h2>
            			<div className="item noicon">
	            			<p>台灣的環保產業線下不透明，導致非法焚燒、掩埋、隨意傾倒等清運問題屢見不鮮！<br />
	            			邀請有志一同的合法清運廠商加入平台，改善企業廢棄物問題，與zero zero 並肩打造環保生態服務鏈。</p>
            			</div>
            		</Section>
            		<Note>
            			<h3>綠色夥伴，我們需要您一同打拼！</h3>
            			<p>免費商洽專線：<a href="tel:0800009717">0800-009-717</a></p>
            		</Note>
                </Container>
                <Footer/>
            	

            </div>);
    }
}

export default Recyclingbusiness;
