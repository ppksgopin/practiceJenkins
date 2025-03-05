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
  border-bottom:1px solid #ddd;
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
    width:100%;
    margin:0 auto 60px;
  	${box};
  	position:relative;

  	&.noicon{
  		padding-left:0;
  	}

  	.icon{
  		width:160px;
  		float:left;
  		margin-top:-30px;

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
  			margin-top:0px;
  			width:60px;
  		}
  	}
  }
`


class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                	<SectionHead>
                		<img src={awsUrl("stastic/logo.png")} width="391" height="241"/>
                		<br /><br />
                		<h1>關於我們</h1>
                		<br /><br /><br />
                		<p>
                			妳好，你好，地球共好。<br />
                			隨著世界各地的資源日漸耗竭，我們正面臨來自環境的嚴峻挑戰，<br />
                			「回收再利用」已成為全球最重要的共同課題。
                			<br /><br />
                			zero zero團隊以「好回收、好生活」為信念，更以「零廢棄、全循環」為職志，我們致力推動便利、友善、效率、多元的回收與環保服務。期許能以創新思維，解決環境的難題。用簡單、愉悅的方式實踐回收、推行環保。</p>
                	</SectionHead>
            		<Section>
            			<h2>什麼是zero zero</h2>
            			<div className="item noicon">
	            			<p>zero zero共有兩個0，一個0代表「零廢棄」，另一個0代表「全循環」，結合在一起即是無限符號「∞」的縮寫，表現我們想為台灣打造資源物料回收再利用，達到「循環經濟」的決心。<br />
	            			品牌色澤鮮亮，揉合自然的藍綠與草綠，並融入笑臉般的意象，體現出品牌的「友善」性格。並為了表達團隊親切的服務態度，以及英文諧音在地化的體貼，以「妳好你好」一詞作為品牌中譯，期待與我們接觸的每個人，都可以一同與地球共好。</p>
            			</div>
            		</Section>
            		<Section>
            			<h2>zero zero的理念目標</h2>
            			<div className="item noicon">
            				<h3>零廢棄、全循環</h3>
	            			<p>目前的日常生活用品，多半採「線性生產」造物模式，依循「原料→生產→銷售→使用→廢棄」步驟，一經製造就面臨廢棄的命運，這種模式再不調整，資源耗盡、垃圾汙染等問題將愈來愈棘手。zero zero提倡「全循環」的造物模式，讓造物直線兩端接合，廢棄物將再度成為原料，同時減少垃圾與資源耗竭的環保問題。<br /><br />
                    提到「環保」，您是否感到任重而道遠，知易而行難呢？<br /><br />
                    我們都明白地球的環境持續劣化，生存環境正面臨威脅，改變不能等明天，如果您也認同「零廢棄、全循環」的理念，可以從最簡單的「回收」行動做起，zero zero提供多種回收管道、環保知識及文章刊物，誠摯邀請您與我們一同為地球盡一份綠吧！</p>
            			</div>
            		</Section>
            		<Section>
            			<h2>專業且全方位的服務</h2>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/s1.png")} width="141" height="144"/>
            				</div>
	            			<h3>廢車回收</h3>
	            			<p>極具競爭力的合作利潤模式</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/s2.png")} width="141" height="144"/>
            				</div>
	            			<h3>家電回收</h3>
	            			<p>到府搬運電視、冰箱、洗衣機、冷氣機、電腦主機等大型家電的回收服務。另提供民眾付費到府清運家具、家庭廢棄物之服務。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/s3.png")} width="141" height="144"/>
            				</div>
	            			<h3>社區資源回收</h3>
	            			<p>定期清運、儲區規畫、提高社區滿意度的最佳回收方案。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/s4.png")} width="141" height="144"/>
            				</div>
	            			<h3>城市環保店</h3>
	            			<p>全台最新穎的小型資源回收站，是附近居民、商家回收的好夥伴。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/s5.png")} width="141" height="144"/>
            				</div>
	            			<h3>企業文件銷毀</h3>
	            			<p>定期清運、儲區規畫、提高社區滿意度的最佳回收方案。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/s6.png")} width="141" height="144"/>
            				</div>
	            			<h3>再生塑膠粒子</h3>
	            			<p>亞洲第一家榮獲藍天使標章的再生塑料供應商，提供高品質再生塑料的販售服務</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/s7.png")} width="141" height="144"/>
            				</div>
	            			<h3>塑膠綠色商品</h3>
	            			<p>將再生塑膠粒子製成商品，自有研發、設計團隊，提供企業代工製作服務。</p>
            			</div>
            		</Section>

            		<Note>
            			<h3>想了解更多關於我們的資訊？</h3>
            			<p>免費商洽專線：<a href="tel:0800009717">0800-009-717</a></p>
            		</Note>
                </Container>
                <Footer/>


            </div>);
    }
}

export default About;
