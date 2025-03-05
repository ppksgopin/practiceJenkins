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
  &.mode2{
  	> ul{
  		li{
  			.icon{
  				border:none;
  				padding-top:100%;
  				&::before{
  					display:none;
  				}
  			}
  		}
  	}
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
  				max-width:100%;
  				height:auto;
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
		  		width:180px !important;
		  		padding-top:160px !important;
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

    .imgs{
    	margin-top:50px;
    	img{
    		display:inline-block;
	  		width:26.33%;
	  		height:auto;
	  		margin:0 3.5%;
	  		float:left;
    	}
    	&::after{
    		${clearfix};
    	}

    	@media (max-width: ${theme.medias.phablet}) {
    		text-align:center;
    		img{
    			float:none;
    			width:100%;
    			max-width:250px;
    			margin:30px auto 0px;
    		}
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

  .table{
  	margin-bottom:20px;
	>div{
		> div{
			min-height:40px;
			font-size:16px;
			color:#333;
			line-height:24px;
			width:20%;
			padding:8px 10px;
			float:left;
			${box};
			@media (max-width: ${theme.medias.phablet}) {
				font-size:14px;
			}

			&:nth-child(2){
				width:30%;
			}

			&:nth-child(3){
				width:50%;
			}
		}

		border-bottom:1px solid #ddd;

		&.cat{
			border:none;
			background:${theme.colors.green};
			div{
				color:#fff;
			}
		}

		&::after{
			${clearfix};
		}
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


class Greenproduct extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                	<Head>
            			<h1>塑膠再生永續循環</h1>
            			<h3>發掘更多綠能機會</h3>
                  <a href="tel:0800009717">聯絡我們</a>
            		</Head>

            		<Section>
            			<h2>成功的企業實例</h2>
            			<div className="item noicon">
	            			<h3>富士全錄</h3>
	            			<p>將報廢的印表機、事務機外殼拆解，再生並結合企業贈品巧思，製成了環保文具組。在企業贈禮的同時，也落實了社會責任和循環經濟理念。</p>
	            			<div className="imgs">
	            				<img src={awsUrl("stastic/fuji.png")}/>
	            				<img src={awsUrl("stastic/fuji1.jpg")}/>
	            				<img src={awsUrl("stastic/fuji2.jpg")}/>
	            			</div>
            			</div>
            			<div className="item noicon">
	            			<h3>歐萊德O'right</h3>
	            			<p>將回收標誌2號的HDPE材質塑膠牛奶瓶，再生加工製成環保瓶器，推出亞洲髮妝界第一瓶100％再生塑膠瓶，令歐萊德穩站綠色髮妝第一品牌。</p>
	            			<div className="imgs">
	            				<img src={awsUrl("stastic/oright.jpg")}/>
                      <img src={awsUrl("stastic/oright1.jpg")}/>
                      <img src={awsUrl("stastic/oright2.jpg")}/>
	            			</div>
            			</div>
            		</Section>

            		<Section>
            			<h2>塑膠循環創新服務</h2>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/recycletree.png")} width="116" height="121"/>
            				</div>
	            			<h3>塑膠產品綠化</h3>
	            			<p>以減碳、回收材利用及製程調整角度，提供企業更環保永續的塑膠製程及產品。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/flask.png")} width="117" height="122"/>
            				</div>	
	            			<h3>再生塑膠產品設計</h3>
	            			<p>擁有多年經驗及技術，整合設計、開發製程一條龍，保持良好的效率。並持續發展委託代工、設計加工的環保產品。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/microscope.png")} width="91" height="127"/>
            				</div>
	            			<h3>環保塑膠材料改良</h3>
	            			<p>依據產品需求，提供再生塑膠的材料特性客製化服務；以及再利用專業製程評估。</p>
            			</div>
            		</Section>

            		<Section>
            			<h2>已合作開發的品項</h2>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/bag.png")} width="116" height="124"/>
            				</div>
	            			<h3>已合作開發的品項</h3>
	            			<p>將回收塑膠2號的HDPE及5號的PP材質，重新再製應用到包裝材上，加上單一材質的綠色設計，讓再生包裝材能夠再次100%被回收。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/pencil.png")} width="117" height="122"/>
            				</div>	
	            			<h3>再生塑膠文具</h3>
	            			<p>將回收塑膠5號的PP材質，經過重新造粒及加工，製成文具小物。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/coke.png")} width="110" height="123"/>
            				</div>
	            			<h3>再生環保瓶器</h3>
	            			<p>將回收標誌2號HDPE材質的牛奶瓶再製成環保瓶器，達成循環經濟理念。</p>
            			</div>
            		</Section>

            		<Section className="mode2">
            			<h2>客製化商品實例</h2>
            			<ul>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/p1.jpg")} width="207" height="211"/>
	            				</div>
	            				<p>購物袋</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/p2.jpg")} width="207" height="211"/>
	            				</div>
	            				<p>文具組</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/p3.jpg")} width="207" height="211"/>
	            				</div>
	            				<p>文件夾</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/p4.jpg")} width="207" height="211"/>
	            				</div>
	            				<p>各類瓶器</p>
            				</li>
            			</ul>
            		</Section>

            		<Section className="last">
            			<h2>塑膠循環再生合作流程</h2>
            			<ul>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/recycle_g.png")} width="103" height="109"/>
	            				</div>
	            				<p>消費後塑膠回收</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/checklist.png")} width="74" height="103"/>
	            				</div>
	            				<p>再生塑膠粒子</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/light-bulb-g.png")} width="83" height="105"/>
	            				</div>
	            				<p>綠色創意設計</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/sustainable.png")} width="100" height="104"/>
	            				</div>
	            				<p>環保新商品</p>
            				</li>
            			</ul>
            		</Section>

            		<Note>
            			<h3>想了解更多提升產品價值資訊？</h3>
            			<p>免費商洽專線：<a href="tel:0800009717">0800-009-717</a></p>
            		</Note>
                </Container>
                <Footer/>
            	

            </div>);
    }
}

export default Greenproduct;
