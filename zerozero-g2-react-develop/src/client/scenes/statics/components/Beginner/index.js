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
  padding:50px 0 0;
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
      font-size:18px;
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

  p{
    width:50%;
  	font-size:18px;
  	color:#333;
  	font-weight:300;
  	line-height:27px;
  	overflow:auto;
    padding-left:35px;
    ${box};

    a{
      color:${theme.colors.blue};
    }
    span{
      display:inline-block;
      margin-left:-35px;
      width:27px;
      height:27px;
      margin-right:8px;
      color:#fff;
      text-align:center;
      letter-spacing:0;
      background:${theme.colors.green};
      font-weight:900;
      ${borderRadius("100%")};
      
    }
  }

  .item{
    width:90%;
    margin:0 auto 30px;
  	${box};
  	position:relative;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;

  	&.noicon{
  		padding-left:0;
  	}

  	.icon{
  		width:50%;
  		
      


      &.good{
        img{
          margin:20px auto;
          display:block;
          max-width:200px;
        }
      }

  		img{
  			max-width:95%;
  			height:auto;
  		}
  	}

  }
  @media (max-width: ${theme.medias.phablet}) {
  	width:80%;
  	.item{
      display: block;

  		.icon{
  			width:100%;
        margin-bottom:8px;
        &.good{
          img{
            margin:20px auto;
            max-width:120px;
          }
        }
        img{
          max-width:100%;
        }
  		}
  	}
    p{
      width:100%;
      font-size:14px;
      line-height:21px;
      padding-left:29px;
      span{
        margin-left:-29px;
        width:21px;
        height:21px;
      }
    }
  }
`

class Beginner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
            		<Section>
            			<h2>如何成為zero zero會員？</h2>
            			<div className="item">
            				<div className="icon">
                      <img src={awsUrl("stastic/1_01.jpg")}/>
                    </div>
                    <p><span>1</span>進入<a href="/user/register">會員註冊頁</a>。</p>
            			</div>
                  <div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/1_02.jpg")}/>
                    </div>
                    <p><span>2</span>輸入您的手機號碼。此手機號碼即為會員帳號，一個手機門號僅能申請一個帳號。</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/1_03.jpg")}/>
                    </div>
                    <p><span>3</span>點下「獲取驗證碼」，驗證碼簡訊將寄送至您所填寫的手機內，請將驗證碼填入，並按下「驗證」。</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/1_04.jpg")}/>
                    </div>
                    <p><span>4</span>驗證成功後，請填寫您欲設定的密碼。並勾選「我已經詳細閱讀、了解與接受zero zero會員服務條款與隱私權政策」按鈕。並按下「註冊」。</p>
                  </div>
                  <div className="item">
                    <div className="icon good">
                      <img src={awsUrl("stastic/thumbs-up.svg")}/>
                    </div>
                    <p><span>5</span>恭喜成為會員，您可以盡情在zero zero平台上使用回收預約功能，用環保愛護地球。</p>
                  </div>
            		</Section>

            		<Section>
            			<h2>忘記密碼或想重設密碼該怎麼辦？</h2>
            			<div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/2_01.jpg")}/>
                    </div>
                    <p><span>1</span>進入<a href="/user/login">會員登入頁</a>。點選「忘記密碼」。</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/2_02.jpg")}/>
                    </div>
                    <p><span>2</span>輸入您註冊的手機號碼及您欲設定的新密碼，並點下「獲取驗證碼」。</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/2_03.jpg")}/>
                    </div>
                    <p><span>3</span>驗證碼簡訊將寄送至您所填寫的手機內，請將驗證碼填入，並按下「驗證」。</p>
                  </div>
                  <div className="item">
                    <div className="icon good">
                      <img src={awsUrl("stastic/thumbs-up.svg")}/>
                    </div>
                    <p><span>4</span>恭喜您，已解決忘記密碼或重設密碼的問題啦！<br />如果還是無法解決您的問題，歡迎來電與我們聯絡，我們會盡快為您服務。<br />免費客服專線：<a href="tel:0800009717">0800-009-717</a></p>
                  </div>
            		</Section>

                <Section>
                  <h2>如何將車輛報廢車回收？</h2>
                  <div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/3_01.jpg")}/>
                    </div>
                    <p><span>1</span>進入<a href="/car">廢車回收首頁</a>。</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/3_02.jpg")}/>
                    </div>
                    <p><span>2</span>第一次進入，請先點選「廢車詢價」，輸入車輛資訊。</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/3_03.jpg")}/>
                    </div>
                    <p><span>3</span>客服收到詢價資訊，會電話聯繫確認，並回覆系統報價單。</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/3_04.jpg")}/>
                    </div>
                    <p><span>4</span>於報價有效期限內，點選「接受報價」，填寫預約回收單。</p>
                  </div>
                  <div className="item">
                    <div className="icon good">
                      <img src={awsUrl("stastic/thumbs-up.svg")}/>
                    </div>
                    <p><span>5</span>專員連繫確認後，等待司機上門拖吊，即完成回收。</p>
                  </div>
                </Section>

            		<Section className="last">
            			<h2>如何預約家電回收呢？</h2>
            			<div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/4_01.jpg")}/>
                    </div>
                    <p><span>1</span>來到zero zero首頁點選「<a href="/electronic">家電回收</a>」。</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/4_02.jpg")}/>
                    </div>
                    <p><span>2</span>進入家電回收預約內頁，請依序將您的回收資訊填入表單內。</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/4_03.jpg")}/>
                    </div>
                    <p><span>3</span>填完回收資訊後，最後請輸入能聯絡到您的手機號碼，並頁面下方的「送出」按鈕。</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/4_04.jpg")}/>
                    </div>
                    <p><span>4</span>送出資料後，會再請您確認一次預約資料，若需要修改資訊，請點選「返回修改」；若確認資訊無誤請按下方的「確認送出」。</p>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <img src={awsUrl("stastic/4_05.jpg")}/>
                    </div>
                    <p><span>5</span>恭喜您，完成家電回收預約了！後續客服人員會再與您聯繫，並安排到府回收的時間。</p>
                  </div>
            		</Section>
                <Note>
                  <h3>還有其他問題沒獲得解答嗎？</h3>
                  <p>歡迎撥打免費專線：<a href="tel:0800009717">0800-009-717</a>，我們會盡快為您解決疑問。</p>
                </Note>
                </Container>
                <Footer/>
            	

            </div>);
    }
}

export default Beginner;