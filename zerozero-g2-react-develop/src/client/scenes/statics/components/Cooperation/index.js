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

const SectionHead = styled.div `
	padding:50px 0;
  max-width:${theme.medias.maxW};
  margin:0 auto;
  border-bottom:0px solid #ddd;
  text-align:center;

  img{
  	max-width:60%;
  	height:auto;
  }
  h1{
  	font-size:36px;
  	line-height:1.5;
  	color:#333;
  	font-weight:400;
  }
  p{
  	font-size:18px;
  	color:#333;
  	font-weight:300;
  	line-height:1.5;
  }
  @media (max-width: ${theme.medias.phablet}) {
  	width:80%;
  }
`

const Section = styled.div `
  padding:50px 0;
  max-width:${theme.medias.maxW};
  margin:0 auto;
  border-bottom:0px solid #ddd;
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

  > ul{
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

    > ul{
      list-style: decimal outside none;
      overflow:auto;

      li{
        font-size:14px;
          color:#333;
          font-weight:300;
          line-height:1.5;
          margin-left:20px;       
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


class Cooperation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                	<Head>
            			<h1>環保不必低調默默</h1>
            			<h3>一同擴大行動愛地球</h3>
                  <a href="tel:0800009717">聯絡我們</a>
            		</Head>
            		<SectionHead>
            			<p>隨著資源日漸耗竭，想為地球盡份力的想法在心裡萌芽，但卻不知道如何行動嗎？<br />
            			zero zero邀您一同為「綠」發聲，因為您的加入將會產生1加1大於2的效力。<br />
            			為了給下一代美好的地球，拯救環境不能等，請讓我們用「綠」在一起吧！</p>
            		</SectionHead>
            		<Section>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/team.png")} width="117" height="122"/>
            				</div>
	            			<h3>「企業夥伴」，我們提供您：</h3>
	            			<ul>
                      <li>品牌形象綠色加值</li>
                      <li>專業的環保顧問</li>
                      <li>完善的回收規劃</li>
	            			  <li>社會企業責任推手</li>
	            			</ul>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/green-earth.png")} width="117" height="122"/>
            				</div>	
	            			<h3>「綠色商品供應商」，我們提供您：</h3>
	            			<ul>
                      <li>實體及網路通路販售</li>
                      <li>定期電子報新訊分享</li>
                      <li>客製化再生塑膠瓶器</li>
                      <li>品牌環保形象再加分</li>
                    </ul>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/light-bulb.png")} width="102" height="134"/>
            				</div>
	            			<h3>「行銷活動合作」，我們提供您：</h3>
	            			<ul>
                      <li>環保活動企劃及設計</li>
                      <li>實質環保內容執行</li>
                      <li>活動聯名行銷推廣</li>
                      <li>行銷受眾名單交流</li>
                    </ul>
            			</div>
            		</Section>
            		<Section>
            			<div className="item noicon">
	            			<p>zero zero也樂意與「政府單位」、「同業公司」、「環保團體」等單位合作，提供我們的回收服務與產業資源，一同號召群眾參與綠色行動，讓我們的環境能變得更美好。<br />
	            			只要您跟我們一樣想由「綠」出發，為環境做些小小的改變，都歡迎與我們分享您的想法，一同為地球共好。</p>
            			</div>
            		</Section>
            		<Note>
            			<h3>共同發掘更多愛地球的可能</h3>
            			<p>免費商洽專線：<a href="tel:0800009717">0800-009-717</a></p>
            		</Note>
                </Container>
                <Footer/>
            	

            </div>);
    }
}

export default Cooperation;