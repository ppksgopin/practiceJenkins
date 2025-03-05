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

class Satisfaction extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                	<Head>
            			<h1>滿意保證</h1>
            		</Head>
            		<Section className="last">
            			<h2>滿意保證</h2>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/efficient.png")} width="120" height="134"/>
            				</div>
	            			<h3>承諾「有效率的處理速度」</h3>
	            			<p>我們提供顧客「簡易、方便、快速」的回收服務，您可以透過我們的平台體驗簡易快速的預約、客服細心的安排規劃及有效率的專業處裡，讓您確實解決回收問題！</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/call.png")} width="124" height="132"/>
            				</div>	
	            			<h3>保證「每週7天、親切專業的客服服務」</h3>
	            			<p>我們保證預約後24小時內將會主動與您聯繫，並安排最適合您的回收方式及時間。若您回收當日臨時有事，需要變更回收時間或取消，歡迎提前通知我們，我們將安排其他合適您的回收時間。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/fund.png")} width="117" height="121"/>
            				</div>
	            			<h3>確定「每個回收物品妥善處理」</h3>
	            			<p>我們致力於「零廢棄、全循環」的理念，不管是紙類、塑膠、金屬等物品回收後，將分別回到合法的循環系統裡。讓回收物能再次循環利用，減少自然資源的濫伐，讓我們一同打造永續的未來！<br />
	            			zero zero為臺灣搖籃到搖籃（Cradle to Cradle®）的成員之一。主張循環經濟，設計產品時選用可回收的原料，再透過回收製成新的產品。希望達到減少有害原料使用、世界資源耗損，讓地球環境更美好。

</p>
            			</div>
            		</Section>
                </Container>
                <Footer/>
            	

            </div>);
    }
}

export default Satisfaction;
