import React, {Component} from 'react';
import {awsUrl} from '../../../../utils/awsFile';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';

import EventsFooter from '../../common/EventsFooter';
import theme from '../../../../styles/theme';
import { fbPixelCode } from '../../../../utils/zeroAdUtils';
import {
    boxShadow,
    translate,
    transition,
    borderRadius,
    box,
    clearfix,
    opacity,
    rotate
} from '../../../../styles/mixins';

const Container = styled.div `
  background:#f8f8f8;
`
const Head = styled.div `
  width:100%;
  text-align:center;
  background:${theme.colors.green};
  img{
    width:100%;
    max-width:768px;
    height:auto;
  }
`

const BlueButton = styled.a `
  display:inline-block;
  line-height:50px;
  padding:0px 50px;
  font-size:18px;
  ${borderRadius("8px")};
  text-decoration:none;
  color:#fff;
  font-weight:400;
  background:${theme.colors.blue};
`

const Title = styled.div `
  width:100%;
  margin:0 auto;
  padding:30px 30px 60px;
  text-align:center;
  position:relative;
  ${box};
  h1{
    font-size:50px;
    font-weight:900;
    color:${theme.colors.green};
    line-height:1.5;
    @media (max-width: ${theme.medias.phablet}) {
      font-size:26px;
    }
  }

  h2{
    
    font-size:35px;
    font-weight:500;
    color:${theme.colors.blue};
    line-height:1.5;
    @media (max-width: ${theme.medias.phablet}) {
      font-size:18px;
    }
  }

  h3{
    
    font-size:26px;
    font-weight:500;
    color:${theme.colors.blue};
    line-height:1.5;
    @media (max-width: ${theme.medias.phablet}) {
      font-size:18px;
    }

    span{
      display:block;
      color:${theme.colors.green};
    }
  }

  &::after{
    content:"";
    width:60px;
    height:8px;
    background:#ddd;
    ${borderRadius("4px")};
    position:absolute;
    left:50%;
    bottom:20px;
    margin-left:-30px;
  }
  &::before{
    content:"";
    width:8px;
    height:8px;
    background:#ddd;
    ${borderRadius("8px")};
    position:absolute;
    left:50%;
    bottom:0;
    margin-left:-4px;
  }
`
const Content = styled.div `
  width:100%;
  max-width:650px;
  text-align:center;
  background:#fff;
  border:1px solid #ddd;
  padding:50px 30px;
  margin:50px auto;
  position:relative;
  ${box};
  ${borderRadius("8px")};

  @media (max-width: ${theme.medias.phablet}) {
    padding:40px 15px 80px;
    margin-bottom:0;
    ${borderRadius("0px")};
  }

  &::before{
    content:"";
    width:6px;
    height:6px;
    background:#ddd;
    ${borderRadius("6px")};
    position:absolute;
    left:50%;
    top:-45px;
    margin-left:-3px;
  }

  .split{
    position:relative;
    display:block;
    width:200px;
    margin:40px auto;
    height:1px;
    background:${theme.colors.blue};

    span{
      position:absolute;
      top:50%;
      left:50%;
      background:#f4fcf1;
      color:${theme.colors.blue};
      line-height:12px;
      font-size:18px;
      padding:10px;
      white-space:nowrap;
      font-weight:500;

      ${translate("-50%", "-50%")}
    }
  }
`

const Tags = styled.div`
  > div{
    width:50%;
    font-size:18px;
    line-height:50px;
    font-weight:500;
    float:left;
    text-align:center;
    color:#fff;
    background:${theme.colors.green};
    ${borderRadius("8px 8px 0 0")};
    ${opacity(.5)};
    cursor:pointer;

    @media (max-width: ${theme.medias.phablet}) {
      font-size:14px;
    }

    &.active{
      ${opacity(1)};
    }

  }
  &::after{
    ${clearfix};
  }

`

const Page = styled.div`
  padding:30px 20px 50px;
  border:1px dotted ${theme.colors.green};
  background:#f4fcf1;
  text-align:left;
  ${box};
  ${borderRadius("0 0 8px 8px")};

  > h2{
    font-size:16px;
    color:#333;
    line-height:1.5;
  }

  > h3{
    font-size:16px;
    color:${theme.colors.blue};
    line-height:32px;
    font-weight:500;

    &::before{
      color:${theme.colors.green};
      display:inline-block;
      font-weight:100;
      content:"\f0c8";
      font-family: FontAwesome;
      margin-right:6px;
      font-size:12px;
      line-height:32px;
      ${rotate("45deg")};
    }
  }

  > p{
    font-size:14px;
    color:#333;
    line-height:1.5;
    padding-left:20px;
  }

  .line-sticker{
    margin-top:10px;
    border:1px solid ${theme.colors.green};
    ${borderRadius("8px")};
    ${box};
  }

  > ul{
      padding-left:20px;
      list-style: decimal outside none;
      overflow:auto;
    li{
      font-size:14px;
      color:#333;
      line-height:1.5;
      margin-left:20px;

    }
  }

  .buttons{
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
          justify-content: center;

    a{
      width:100%;
      display:inline-block;
      text-decoration:none;
      font-size:18px;
      font-weight:400;
      color:#fff;
      background:${theme.colors.red};
      text-align:center;
      line-height:40px;
      ${borderRadius("8px")};
    }

    a:last-child{
      margin-left:5px;
    }
    a:first-child{
      margin:0px;
    }
  }

  .process{
    display: -webkit-flex;
    display: flex;
    padding-top:40px;
    text-align:center;
    @media (max-width: ${theme.medias.phablet}) {
      display: block;
    }

    a{
      font-size:13px;
      line-height:30px;
    }

    >div{
      width:100%;
      position:relative;
      background:#fff;
      border:1px solid ${theme.colors.green};
      padding:40px 10px 10px;
      ${borderRadius("8px")};
      ${box};
      margin:5px;
      margin-right:25px;

      @media (max-width: ${theme.medias.phablet}) {
        margin-bottom:80px;
      }

      &::after{
        content:"\f061";
        font-family: FontAwesome;
        position:absolute;
        width:30px;
        height:30px;
        line-height:30px;
        font-size:20px;
        text-align:center;
        color:${theme.colors.green};
        z-index:1;
        top:50%;
        right:-30px;
        margin-top:-15px;
        letter-spacing:0;
        @media (max-width: ${theme.medias.phablet}) {
            content:"\f063";
            top:auto;
            bottom:-40px;
            right:50%;
            margin-top:0;
            margin-right:-15px;
        }
      }

      p{
        font-size:14px;
        color:#333;
        line-height:1.2;
        letter-spacing:0;
      }
      h3{
        text-align:center;
        font-size:15px;
        letter-spacing:0;
        color:#e2445b;
        line-height:1.8;
        font-weight:500;
      }

      &:nth-child(2){
        .step{
          &::before{
            content:"\f0f6";
          }
        }
      }

      &:nth-child(3){
        margin-right:5px;
        &::after{
          content:"";
        }
        .step{
          &::before{
            content:"\f06b";
          }
        }
      }

      .step{
        position:absolute;
        z-index:1;
        top:-30px;
        left:50%;
        margin-left:-30px;
        width:60px;
        height:60px;
        background:${theme.colors.red};
        text-align:center;
        color:#fff;
        font-size:36px;
        ${borderRadius("100%")};
        line-height:55px;
        letter-spacing:0;
        
        &::before{
          font-weight:100;
          content:"\f2c0";
          font-family: FontAwesome;
        }

      }
    }
  }

  table{
    width:100%;
    background:#fff;
    border:1px solid ${theme.colors.green};
    font-weight:400;
    td{
      border:1px solid ${theme.colors.green};
      padding:12px 8px;
      text-align:center;
      font-size:16px;
      color:#333;
    }

    th{
      border:1px solid ${theme.colors.green};
      padding:8px;
      text-align:center;
      font-size:16px;
      color:#fff;
      background:${theme.colors.blue};

      &.darker{
        background:${theme.colors.green};
      }
    }
  }
`


class Event3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagID: 0
        }
        this._swipeTag = this._swipeTag.bind(this);
        this._fbPixel = this._fbPixel.bind(this);
    }

    _swipeTag(num) {
        this.setState({
            "tagID": num,
        })

    }

    _fbPixel(){
        fbPixelCode('1194422690652224');
    }

    render() {
        return (
            <Container>
                <Helmet>
                    <title>LINE在一起做回收</title>
                    <meta name="description" content="加入會員就抽紀念好用LINE貼圖，限時活動到2/28(三)止，快來註冊抽好康啦！"/>
                    <meta property="og:title" content="zero zero - LINE在一起做回收"/>
                    <meta property="og:description" content="加入會員就抽紀念好用LINE貼圖，限時活動到2/28(三)止，快來註冊抽好康啦！"/>
                </Helmet>
                <Head>
                    <img src={awsUrl('events/event3.jpg')}/>
                </Head>
                <Title>
                    <h1>LINE在一起做回收</h1>
                    <h2>
                        貼圖、Z幣好禮二重送
                    </h2>
                </Title>
                <Content>

                    <Tags>
                        <div className={this.state.tagID == 0 ? "active" : ""} onClick={() => this._swipeTag(0)}>
                            加入抽專屬貼圖
                        </div>
                        <div className={this.state.tagID == 1 ? "active" : ""} onClick={() => this._swipeTag(1)}>
                            Z幣週週大放送
                        </div>
                    </Tags>

                    { this.state.tagID == 0 ?

                        <Page>
                            <h2>想免費獲得回收新生活運動兼具可愛、實用的LINE貼圖嗎？現在加入會員，我們將會於抽獎日共抽出1000位幸運兒～快來註冊zero zero會員吧！</h2>
                            <br />
                            <div className="buttons">
                                <Link style={{"maxWidth": "250px"}} to="/user/register" onClick={this._fbPixel}>馬上註冊會員</Link>
                            </div>
                            <br />
                            <h3>活動日期</h3>
                            <p>即日起到 2/28(三) 止</p>
                            <br />
                            <h3>活動流程</h3>
                            <div className="process">
                                <div>
                                    <div className="step"></div>
                                    <h3>完成註冊</h3>
                                </div>
                                <div>
                                    <div className="step"></div>
                                    <h3>填LINE資料</h3>
                                </div>
                                <div>
                                    <div className="step"></div>
                                    <h3>加好友贈禮</h3>
                                </div>
                            </div>
                            <br />
                            <h3>開獎日期</h3>
                            <p>2/9(五)、3/9(五)，於zero zero粉絲團公佈中獎名單。</p>
                            <br />
                            <h3>活動獎勵</h3>
                            <p>活動指定的LINE貼圖乙組，每次開獎將抽出500名，共1000名。</p>
                            <br />
                            <h3>領獎方式</h3>
                            <p>中獎後我們將寄送簡訊給您，請填妥簡訊內連結的表單內容，我們將加您LINE好友，並在7個工作天(不含例假日)內使用送禮功能將獎勵送至您指定的LINE帳號裡。</p>
                            <br />
                            <h3>注意事項</h3>
                            <p>中獎後請開放您的LINE好友申請功能，我們將會使用zero zero贈獎帳號加您好友，以利後續贈獎聯繫。</p>
                            <br />
                            <h3>貼圖一覽</h3>
                            <img className="line-sticker" style={{width:"100%"}} src={awsUrl('events/line.png')}/>
                        </Page>

                        :

                        <Page>
                            <h2>活動期間，只要成為會員，將可以參加每週抽Z幣的好康喔！即早註冊，中獎機會越大！</h2>
                            <br />
                            <h3>活動日期</h3>
                            <p>即日起到 2/28 止</p>
                            <br />
                            <h3>開獎日期</h3>
                            <p>每週一於粉絲團開獎，1/29、2/5、2/12、2/26、3/5。(2/19為春節期間，暫停一次)</p>
                            <br />
                            <table>
                                <tr>
                                    <th className="darker">參與資格</th>
                                    <td>完成註冊</td>
                                </tr>
                                <tr>
                                    <th>獎勵名額</th>
                                    <td>每週100名</td>
                                </tr>
                                <tr>
                                    <th className="darker">活動獎勵</th>
                                    <td>Z幣50點</td>
                                </tr>
                            </table>
                            <div className="split"><span>馬上行動</span></div>
                            <div className="buttons">
                                <Link style={{"maxWidth": "250px"}} to="/user/register" onClick={this._fbPixel}>註冊會員</Link>
                            </div>
                            <br />
                            <h3>Z幣是什麼？</h3>
                            <p>Z幣是zero zero提供的點數服務。您可以在兌換中心中使用，免費獲得實際精選的好康喔！</p>
                            <br />
                            <div className="buttons">
                                <Link style={{"maxWidth": "250px"}} to="/exchange">兌換好康去</Link>
                            </div>
                            <br />
                            <h3>注意事項</h3>
                            <ul>
                                <li>本活動抽獎資格採累計制，您可能重複中獎。越早加入會員完成回收越有機會中獎哦
                                </li>
                                <li>
                                    我們將寄送簡訊通知中獎的幸運兒，請於開獎日時留意您的手機，祝您中獎
                                </li>
                            </ul>
                        </Page>

                    }

                </Content>
                <EventsFooter/>
            </Container>);
    }
}

export default Event3;
