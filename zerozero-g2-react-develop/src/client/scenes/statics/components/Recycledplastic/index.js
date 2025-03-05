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
  	margin-bottom:50px;
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


class Recycledplastic extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                	<Head>
            			<h1>未來新趨勢 再生塑料</h1>
            			<h3>亞洲第一家國際認證</h3>
                  <a href="tel:0800009717">聯絡我們</a>
            		</Head>

            		<Section>
            			<h2>成功的企業實例</h2>
            			<div className="item noicon">
	            			<h3>歐萊德O'right</h3>
	            			<p>使用回收標誌2號HDPE材質的塑膠牛奶瓶，再製成環保瓶器，其製程的碳排量只有同容量塑膠瓶的1/4，打造出髮妝界第一瓶100％再生塑膠瓶。小小的再生塑料粒子更令歐萊德獲得多項國際認證，穩站亞洲綠色髮妝第一品牌。</p>
	            			<div className="imgs">
	            				<img src={awsUrl("stastic/oright.jpg")}/>
	            				<img src={awsUrl("stastic/oright1.jpg")}/>
	            				<img src={awsUrl("stastic/oright2.jpg")}/>
	            			</div>
            			</div>
            		</Section>

            		<Section>
            			<h2>提供您產品的加分優勢</h2>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/like.png")} width="116" height="110"/>
            				</div>
	            			<h3>多項國際認證</h3>
	            			<p>我們是亞洲第一家通過「德國藍天使認證」的再生塑料供應商，代表可追溯塑膠來源的完整流程，及完善的生產管理制度。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/recycle.png")} width="117" height="122"/>
            				</div>	
	            			<h3>原料來源優質</h3>
	            			<p>從回收源頭取得物料，對貨源完全掌握，一條龍生產。原料來自合法工廠，亦有政府支持，加上比同業加倍嚴謹的廢水與空汙管控。</p>
            			</div>
            			<div className="item">
            				<div className="icon">
            					<img src={awsUrl("stastic/microscope.png")} width="89" height="125"/>
            				</div>
	            			<h3>專業研發團隊</h3>
	            			<p>頂尖技術研發，熟悉塑料各式加工法。並擁有大數據塑料資料庫，豐富的塑料改質經驗。保留您的產品原先優點，再強化競爭優勢。</p>
            			</div>
            		</Section>

            		<Section>
            			<h2>專業洽談的服務流程</h2>
            			<ul>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/handshake_g.png")} width="112" height="85"/>
	            				</div>
	            				<p>客戶聯繫與拜訪</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/checklist.png")} width="74" height="103"/>
	            				</div>
	            				<p>確認產品需求</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/molecule.png")} width="83" height="105"/>
	            				</div>
	            				<p>塑料物性調整</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/quality.png")} width="100" height="104"/>
	            				</div>
	            				<p>生產及協助認證</p>
            				</li>
            			</ul>
            		</Section>

            		<Section className="mode2">
            			<h2>具競爭力的產品項目</h2>
            
	            			<div className="table">
	            				<div className="cat">
	            					<div>分類</div>
	            					<div>產品</div>
	            					<div>來源</div>
	            				</div>
	            				<div>
	            					<div>HDPE</div>
	            					<div>碎片、粒子</div>
	            					<div>例如：牛奶瓶、優酪乳瓶、清潔劑瓶</div>
	            				</div>
	            				<div>
	            					<div>PP</div>
	            					<div>碎片、粒子</div>
	            					<div>例如：每日C果汁瓶</div>
	            				</div>
	            			</div>
	            		
            			<ul>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/HDPE1.jpg")} width="112" height="100"/>
	            				</div>
	            				<p>HDPE碎片</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/HDPE2.jpg")} width="112" height="100"/>
	            				</div>
	            				<p>HDPE粒子</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/PP1.jpg")} width="112" height="100"/>
	            				</div>
	            				<p>PP碎片</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/PP2.jpg")} width="112" height="100"/>
	            				</div>
	            				<p>PP粒子</p>
            				</li>
            			</ul>
            		</Section>

            		<Section className="last mode2">
            			<h2>國際認證品質保證</h2>
            			<ul>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/blueangel.png")} width="153" height="181"/>
	            				</div>
	            				<p>藍天使供應商認證</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/SGS.jpg")} width="218" height="179"/>
	            				</div>
	            				<p>SGS碳足跡認證</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/PIDC.jpg")} width="200" height="99"/>
	            				</div>
	            				<p>PIDC 100%消費後塑膠認證</p>
            				</li>
            				<li>
            					<div className="icon">
	            					<img src={awsUrl("stastic/TUV.jpg")} width="168" height="181"/>
	            				</div>
	            				<p>TUV 100%消費後塑膠認證</p>
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

export default Recycledplastic;