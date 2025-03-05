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


class Carmaintenance extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                	<Head>
            			<h1>專業免費行銷推廣</h1>
            			<h3>拓展事業服務版圖</h3>
                  <a href="tel:0800009717">聯絡我們</a>
            		</Head>
            		<Section>
            			<h2>技術好卻賺不到錢？</h2>
            			<div className="item noicon">
	            			<p>
	            				1.	原廠保固越來越長。<br />
	            				2.	70%的車主透過網路找車廠，一般車廠卻不會網路行銷。<br />
	            				3.	車廠知名度不夠，消費者只能憑價格隨便挑。<br />
	            				4.	現今，影響客戶上門的主因是「網路口碑評價」。
	            			</p>
	            		</div>
            		</Section>
            		<Section>
            			<h2>免費有力的行銷管道</h2>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/coding.png")} width="117" height="122"/>
            				</div>
	            			<h3>專屬網頁製作及維護</h3>
	            			<p>為車廠製作專屬網頁，24小時專人管理，無需自行花大錢製作網站，也不用後續操作維護。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/target.png")} width="117" height="122"/>
            				</div>	
	            			<h3>實體及數位多元化的行銷</h3>
	            			<p>協助規劃實體廣告曝光、投放網路廣告等強力管道，為您打造絕佳的曝光機會。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/handshake.png")} width="123" height="94"/>
            				</div>
	            			<h3>擔任雙方的溝通橋樑</h3>
	            			<p>我們負責與顧客溝通，確定車廠接單時間，派給您最精準合適的顧客。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/fund.png")} width="117" height="122"/>
            				</div>
	            			<h3>提供顧客誘因，產生商機</h3>
	            			<p>蒐集顧客大數據並分析，發贈電子文宣及優惠券，鼓勵車主到店消費，實際導客讓車廠超有感！</p>
            			</div>
            		</Section>
            		<Section>
            			<h2>我們是您最有力的後盾</h2>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/tasks.png")} width="117" height="122"/>
            				</div>
	            			<h3>專業的行銷企劃</h3>
	            			<p>為業主打造最佳品牌，及規畫有效的行銷活動。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/networking.png")} width="117" height="122"/>
            				</div>
	            			<h3>完善的會員制度</h3>
	            			<p>電子化控管，建立完整的客戶資訊。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/communication.png")} width="116" height="120"/>
            				</div>
	            			<h3>專屬的客服人員</h3>
	            			<p>擔任車廠與車主的溝通橋樑。</p>
            			</div>
            		</Section>
            		<Section className="last">
            			<h2>公開透明的合作流程</h2>
            			<ul>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/handshake_g.png")} width="116" height="93"/>
	            				</div>
	            				<p>拜訪、諮詢與簽約</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/computer.png")} width="100" height="92"/>
	            				</div>
	            				<p>製作專屬網頁及宣傳</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/id-card.png")} width="96" height="90"/>
	            				</div>
	            				<p>會員預約保修服務</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/car-repair.png")} width="93" height="93"/>
	            				</div>
	            				<p>顧客上門維修及消費</p>
            				</li>
            			</ul>
            		</Section>
            		<Note>
            			<h3>了解更多保修商合作好處？</h3>
            			<p>免費商洽專線：<a href="tel:0800009717">0800-009-717</a></p>
            		</Note>
                </Container>
                <Footer/>
            	

            </div>);
    }
}

export default Carmaintenance;
