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

    ul{
      list-style: disc outside none;
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


class Apartmentcomplex extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                	<Head>
            			<h1>社區大樓 資源回收服務</h1>
            			<h3>專業清運 完整規劃</h3>
                  <a href="tel:0800009717">聯絡我們</a>
            		</Head>
            		<Section>
            			<h2>完善的社區幫手</h2>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/transportation-truck_B.png")} width="116" height="76"/>
            				</div>
	            			<h3>定期專業清運</h3>
	            			<p>專業的清運人員將定期至社區或大樓清運資源回收物，使資收區域保持整潔乾淨，衛生無虞，並讓回收物妥善再利用。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/trash.png")} width="117" height="122"/>
            				</div>	
	            			<h3>協助儲區規劃</h3>
	            			<ul>
                      <li>提供完善的儲存設備。<br />
	            			如：資源分類回收桶、網袋等。</li>
                    <li>提供視覺一致且清晰的文宣用品。<br />
	            			如：資收分類海報、回收知識宣導海報、資收桶分類桶貼等
                    </li>
                    </ul>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/recommended.png")} width="117" height="122"/>
            				</div>
	            			<h3>我們的附加服務</h3>
	            			<ul>
                      <li>大型家電到府搬運。</li>
	            			  <li>汽機車報廢回收服務</li>
                    </ul><br />
                    <p>客戶能受到完善且全面的專業回收服務。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/smile.png")} width="117" height="122"/>
            				</div>
	            			<h3>打造清爽宜居的環境</h3>
	            			<p>友善、快速及體貼的清運團隊，大幅提升住戶滿意度，以及社區的幸福感。</p>
            			</div>
            		</Section>
            		<Section>
            			<h2>我們的服務對象</h2>
            			<div className="item noicon">
	            			<p>住宅社區、商用大樓、鄰里社區…等，若有需求歡迎來電洽詢。</p>
	            		</div>
            		</Section>
            		<Section className="last">
            			<h2>快速的合作流程</h2>
            			<ul>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/check-form.png")} width="78" height="90"/>
	            				</div>
	            				<p>來電洽詢</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/telemarketer.png")} width="77" height="94"/>
	            				</div>
	            				<p>專人諮詢</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/certificate.png")} width="71" height="90"/>
	            				</div>
	            				<p>現場評估、簽約</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/transportation-truck.png")} width="104" height="63"/>
	            				</div>
	            				<p>清運服務</p>
            				</li>
            			</ul>
            		</Section>
            		<Note>
            			<h3>想了解更多服務內容？</h3>
            			<p>免費商洽專線：<a href="tel:0800009717">0800-009-717</a></p>
            		</Note>
                </Container>
                <Footer/>
            	

            </div>);
    }
}

export default Apartmentcomplex;
