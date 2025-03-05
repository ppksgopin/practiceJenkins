import React, {Component} from 'react';
import {awsUrl} from '../../../../utils/awsFile';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import BlueButton from '../../../common/components/BlueButton';
import GreenButton from '../../../common/components/GreenButton';
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
`

const SectionHead = styled.div `
  padding:50px 0;
  max-width:${theme.medias.maxW};
  margin:0 auto;
  border-bottom:0px solid #ddd;
  text-align:center;

  h3{
    font-size:24px;
    line-height:1.5;
    color:${theme.colors.blue};
    font-weight:400;
    @media (max-width: ${theme.medias.phablet}) {
      font-size:18px;
    }
  }
  p{
    font-size:18px;
    color:#333;
    font-weight:300;
    line-height:1.5;
  }
  @media (max-width: ${theme.medias.phablet}) {
    width:80%;
  }
`

const Section = styled.div `
  text-align:center;
  padding:50px 0;
  max-width:${theme.medias.maxW};
  margin:0 auto;
  border-bottom:0px solid #ddd;
  &.last{
    border:none;
    padding-bottom:100px;
  }
  h3{
    font-size:24px;
    text-align:center;
    color:${theme.colors.gray};
    font-weight:400;
    line-height:1.5;
    @media (max-width: ${theme.medias.phablet}) {
      font-size:18px;
    }
  }

  p{
    text-align:center;
    font-size:18px;
    color:#333;
    font-weight:300;
    line-height:1.5;
    overflow:auto;

    span{
      color:${theme.colors.green};
      font-weight:400;
    }
  }

  .item{
    width:30%;
    margin:1%;
    display:inline-block;
    padding:30px 30px 10px;
    border:3px solid ${theme.colors.green};
    ${box};
    ${borderRadius("8px")};

    @media (max-width: ${theme.medias.phablet}) {
      width:100%;
      margin:0 0 20px;
    }

    .fb{
      background:#3B5998 !important;
    }

  }

  
  @media (max-width: ${theme.medias.phablet}) {
    width:80%;
  }
`


class Waytozcoin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { history } = this.props;
        return (
            <div>
                <Header/>
                <Container>
                  <Head>
                    <h1>如何集Z幣？</h1>
                  </Head>
                  <SectionHead>
                      <h3>想要蒐集更多Z幣兌換好康嗎？<br />
                      有很多方式可以集得滿滿的Z幣喔！</h3>
                  </SectionHead>
                  <Section>
                      <div className="item">
                        <img src={awsUrl('process2.png')} width="auto" height="100"/>
                        <br /><br />
                        <p>加入zero zero會員<br />
                        首次回收獲得<span>200</span>Z幣</p>
                        <br />
                        <GreenButton onClick={() => history.push('/user/register')}>我要加入會員</GreenButton>
                      </div>
                      <div className="item">
                        <img src={awsUrl('process1.png')} width="auto" height="100"/>
                        <br /><br />
                        <p>預約回收服務<br />
                        獲得高達<span>1500</span>Z幣</p>
                        <br />
                        <GreenButton onClick={() => window.location='http://onelink.to/hqnwmp'}>我要預約</GreenButton>
                      </div>
                      <div className="item">
                        <img src={awsUrl('logo.png')} width="auto" height="100"/>
                        <br /><br />
                        <p>參加zero zero粉絲頁舉辦的贈Z幣活動</p>
                        <br />
                        <GreenButton target="_blank" onClick={() => window.open("https://www.facebook.com/TWzerozero/", "_blank")}>前往臉書粉絲團</GreenButton>
                      </div>
                  </Section>
                  <Section>
                      <h3>集越多Z幣，換越多商品<br />
                      來兌換中心瞧瞧有些好康吧！</h3>
                      <br />
                      <BlueButton onClick={() => history.push('/exchange')}>前往Z幣兌換中心</BlueButton>
                  </Section>
                </Container>
                <Footer/>
              

            </div>);
    }
}

export default Waytozcoin;
