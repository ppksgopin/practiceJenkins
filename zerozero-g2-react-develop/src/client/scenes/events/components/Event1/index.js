import React, {Component} from 'react';
import {awsUrl} from '../../../../utils/awsFile';
import {Helmet} from 'react-helmet';

import styled from 'styled-components';
import EventsFooter from '../../common/EventsFooter';
import theme from '../../../../styles/theme';
import {boxShadow, translate,transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import { fbPixelCode } from '../../../../utils/zeroAdUtils';

const Container = styled.div `
  background:#f8f8f8;
`
const Head = styled.div `
  width:100%;
  text-align:center;
  background:${theme.colors.blue};
  img{
    width:100%;
    max-width:768px;
    height:auto;
  }
`

const GreenButton = styled.a `
  display:inline-block;
  line-height:50px;
  padding:0px 50px;
  font-size:18px;
  ${borderRadius("8px")};
  text-decoration:none;
  color:#fff;
  font-weight:400;
  background:${theme.colors.green};
  cursor:pointer;
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
    color:${theme.colors.blue};
    line-height:1.5;
    margin-bottom:15px;
    @media (max-width: ${theme.medias.phablet}) {
      font-size:26px;
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
    width:140px;
    margin:50px auto;
    height:1px;
    background:${theme.colors.blue};

    span{
      position:absolute;
      top:50%;
      left:50%;
      background:#fff;
      color:${theme.colors.blue};
      line-height:12px;
      font-size:12px;
      padding:10px;

      &::after{
        letter-spacing:0;
        content:"\f111";
        font-family: FontAwesome;
      }

      ${translate("-50%", "-50%")}
    }
  }

  .yt{
    width:100%;
    height:0;
    padding-top:65%;
    position:relative;

    iframe{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    }
  }

  p{
    font-size:18px;
    color:${theme.colors.green};
    line-height:1.5;
    font-weight:500;
  }
  h3{
    
    font-size:26px;
    font-weight:900;
    color:${theme.colors.blue};
    line-height:1.5;
  }

  ul{
    margin:50px auto;
    li{
      width:48%;
      float:left;
      margin-bottom:25px;
      text-align:center;

      img{
        widtH:100%;
        height:auto;
        border:4px solid ${theme.colors.blue};
        ${box};
        ${borderRadius("8px")};
        margin-bottom:10px;
        padding:15px 0;
      }

      h3{
        font-size:24px;
        font-weight:400;
        color:${theme.colors.blue};
        line-height:1.5;
      }

      p{
        font-size:16px;
        line-height:1.5;
        color:#333;
      }

      &:nth-child(odd){
        margin-right:4%;
      }
      
    }

    @media (max-width: ${theme.medias.phablet}) {
      li{
        width:100%;
        float:none;
        &:nth-child(odd){
          margin-right:0;
        }
      }
    }

    &::after{
      ${clearfix};
    }
  }

`

class Event1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {history} = this.props;
        return (

            <Container>
                <Helmet>
                    <title>回收新生活運動</title>
                    <meta name="description" content="零廢棄新紀元，系列活動搶先看！透過4大回收心法，讓我們用環保改善世界吧！"/>
                    <meta property="og:title" content="zero zero - 回收新生活運動"/>
                    <meta property="og:description" content="零廢棄新紀元，系列活動搶先看！透過4大回收心法，讓我們用環保改善世界吧！"/>
                </Helmet>
                <Head>
                    <img src={awsUrl('events/event1.jpg')}/>
                </Head>
                <Title>
                  <h1>回收新生活運動</h1>
                  <h3>
                    <span>做個驕傲回收人</span>
                    zero zero邀您一同做個驕傲回收人
                  </h3>
                  <br /><br />
                  <GreenButton onClick={() => {fbPixelCode('1194422690652224'); history.push('/user/register');}}>加入zero zero</GreenButton>
                </Title>
                <Content>
                  <div className="yt">
                    <iframe src="https://www.youtube.com/embed/ncLUHqCcckk" gesture="media" allow="encrypted-media" allowfullscreen/>
                  </div>

                  <ul>
                    <li>
                      <img src={awsUrl('events/event1_1.jpg')}/>
                      <h3>清理舊物不堆積</h3>
                      <p>還給自己原有的空間</p>
                    </li>
                    <li>
                      <img src={awsUrl('events/event1_2.jpg')}/>
                      <h3>資源回收分清楚</h3>
                      <p>展現做好回收的精神</p>
                    </li>
                    <li>
                      <img src={awsUrl('events/event1_3.jpg')}/>
                      <h3>發現物品新生命</h3>
                      <p>用舊物打造創意生活</p>
                    </li>
                    <li>
                      <img src={awsUrl('events/event1_4.jpg')}/>
                      <h3>重複使用愛地球</h3>
                      <p>減少一次性的浪費</p>
                    </li>
                  </ul>

                  <p>
                    若認同以上理念，歡迎加入我們<br />
                    現在註冊回收將送貼圖、Z幣等好禮
                  </p>
                  <h3>馬上加入zero zero吧</h3>
                  <br />
                  <GreenButton onClick={() => {fbPixelCode('1194422690652224'); history.push('/user/register')}}>立即註冊</GreenButton>

                  <div className="split">
                      <span/>
                  </div>

                  <p>
                    想了解更多關於註冊會員活動好康
                  </p>
                  <h3>LINE在一起做回收</h3>
                  <br />
                  <GreenButton onClick={() => history.push('/events/event3')}>了解詳情</GreenButton>
                </Content>
                <EventsFooter/>
            </Container>);
    }
}

export default Event1;