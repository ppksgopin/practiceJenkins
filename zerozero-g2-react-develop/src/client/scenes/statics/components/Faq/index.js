import React, {Component} from 'react';
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
  padding:50px 0 0;
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

  .item{
    width:90%;
    margin:0 auto 0px;
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

class Faq extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                	<Head>
            			<h1>常見問題</h1>
            		</Head>
            		<Section>
            			<h2>如何註冊zero zero會員？</h2>
            			<div className="item noicon">
            				<ul>
            					<li>先進入zero zero平台首頁，於畫面右上方點選會員註冊或人物頭項按鈕。</li>
            					<li>進入會員註冊頁後，輸入手機號碼，您所填入的手機號碼即為會員帳號。</li>
            					<li>完成後送出驗證，將會收到內含驗證碼的手機簡訊。請將手機簡訊內的驗證碼填入，完成驗證。</li>
            					<li>驗證成功後，請填寫您欲設定的密碼。並勾選「我已經詳細閱讀、了解與接受zero zero 會員服務條款 與隱私權政策」按鈕。按下「註冊」後就完成註冊啦！</li>
            				</ul>
            				<br />
            				<p>可至新手上路了解更詳細圖文內容喔</p>
            			</div>
            		</Section>
            		<Section>
            			<h2>一個手機號碼可以申請幾個zero zero帳號呢？</h2>
            			<div className="item noicon">
            				<p>每一個手機號碼僅能綁定申請一個zero zero帳號，手機號碼即使用者帳號。</p>
            			</div>
            		</Section>
            		<Section>
            			<h2>忘記密碼了嗎？我要如何重設密碼呢？</h2>
            			<div className="item noicon">
            				<ul>
            					<li>先進入zero zero平台首頁，於畫面右上方點選會員註冊或人物頭項按鈕。</li>
            					<li>進入會員註冊頁後，點選右下角的「忘記密碼」。並於畫面上輸入您的手機號碼及您欲設定的新密碼，並點下「獲取驗證碼」。</li>
            					<li>我們將發送驗證碼簡訊至您所填寫的手機內，請將驗證碼填入，並按下「驗證」。</li>
            					<li>驗證完成後，即可擁有帳號的控制權啦！</li>
            				</ul>
            				<br />
            				<p>可至新手上路了解更詳細圖文內容喔</p>
            			</div>
            		</Section>
            		<Section>
            			<h2>註冊時，手機號碼顯示「該使用者帳號已經有人使用」該怎麼辦？</h2>
            			<div className="item noicon">
            				<p>當註冊時，發現手機號碼已被使用，代表已有用戶使用該門號進行帳號註冊申請，您可以依照重設密碼步驟找回帳號的控制權：</p>
            				<ul>            					
            					<li>先進入zero zero平台首頁，於畫面右上方點選會員註冊或人物頭項按鈕。</li>
            					<li>進入會員註冊頁後，點選右下角的「忘記密碼」。並於畫面上輸入您的手機號碼及您欲設定的新密碼，並點下「獲取驗證碼」。</li>
            					<li>我們將發送驗證碼簡訊至您所填寫的手機內，請將驗證碼填入，並按下「驗證」。</li>
            					<li>驗證完成後，即可擁有帳號的控制權啦！</li>
            				</ul>
            				<br />
            				<p>可至新手上路了解更詳細圖文內容喔</p>
            			</div>
            		</Section>
            		<Section>
            			<h2>註冊時，手機收不到驗證碼該怎辦？</h2>
            			<div className="item noicon">
            				<p>請您先與電信商確認是否有開啟阻擋企業簡訊廣告之功能，若調整後還是無法收到驗證碼，歡迎撥打免費客服專線0800-009-717，我們將有專人協助您。</p>
            			</div>
            		</Section>
            		<Section className="last">
            			<h2>註冊時，手機收不到驗證碼該怎辦？</h2>
            			<div className="item noicon">
            				<p>歡迎撥打免費專線<a href="tel:0800009717">0800-009-717</a>，我們會盡快為您解決疑問。</p>
            			</div>
            		</Section>
                </Container>
                <Footer/>
            	

            </div>);
    }
}

export default Faq;
