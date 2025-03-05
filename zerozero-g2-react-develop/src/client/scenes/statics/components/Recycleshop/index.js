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

  iframe{
  	max-width:100%;
  }
`


class Recycleshop extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                	<Head>
            			<h1>環保創新 微型創業</h1>
            			<h3>回饋環境賺綠金</h3>
                  <a href="tel:0800009717">聯絡我們</a>
            		</Head>
            		<Section>
            			<h2>加盟的3大好處</h2>
            			<div className="item noicon">
            				<h3>資源回收「好生意」</h3>
	            			<p>扭轉傳統對於回收站雜亂的不良觀感，zero zero營造乾淨明亮、回收便利的城市環保店，加盟主將擁有良好的工作環境，並將服務深入鄰里。</p>
	            		</div>
	            		<div className="item noicon">
            				<h3>綠色行銷「好注意」</h3>
	            			<p>由總部策畫集客活動，例如：環保講堂、舊物新生DIY、針對孩童的小小店長等活動，提高店鋪好感度，協助加盟主開發不同階層的新顧客。</p>
	            		</div>
	            		<div className="item noicon">
            				<h3>環保商品「好主意」</h3>
	            			<p>環保意識抬頭，更多消費者願意購買綠色商品，總部致力開發各式優質產品，加盟店不僅有回收服務，亦販售綠色商品，複合式經營讓收益再翻升。</p>
	            		</div>
            		</Section>
            		<Section>
            			<h2>加盟的3大條件</h2>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/condition.png")} width="117" height="122"/>
            				</div>
	            			<h3>店面條件</h3>
	            			<p>樓層/坪數：1樓/28~40坪<br />
	            			門面寬度：4米以上(位於巷道必須在5米以上)
	            			</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/fund.png")} width="117" height="122"/>
            				</div>	
	            			<h3>資金條件</h3>
	            			<p>自備創業資金58.8萬元</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/advantage.png")} width="117" height="122"/>
            				</div>
	            			<h3>加分條件</h3>
	            			<p>性別不拘，全職經營。身體健康、體力良好、喜歡與人交朋友，具環保推廣熱忱，熟悉展店鄰近區域居民與風氣者尤佳。</p>
            			</div>
            		</Section>
            		<Section>
            			<h2>zero zero經營流程</h2>
            			<ul>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/group.png")} width="100" height="100"/>
	            				</div>
	            				<p>招募會員及推廣</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/recycle_g.png")} width="118" height="111"/>
	            				</div>
	            				<p>資源回收集點活動</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/transportation-truck.png")} width="104" height="63"/>
	            				</div>
	            				<p>專屬清運與銷貨</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/cash.png")} width="93" height="93"/>
	            				</div>
	            				<p>每月統一入帳</p>
            				</li>
            			</ul>
            		</Section>
            		<Section className="last">
            			<h2>zero zero相關報導</h2>
            			<div className="item noicon">
            				<iframe width="560" height="315" src="https://www.youtube.com/embed/ncLUHqCcckk" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
            			</div>
            		</Section>
            		<Note>
            			<h3>想了解更多加盟訊息？</h3>
            			<p>免費商洽專線：<a href="tel:0800009717">0800-009-717</a></p>
            		</Note>
                </Container>
                <Footer/>
            	

            </div>);
    }
}

export default Recycleshop;
