import React, {Component} from 'react';
import {awsUrl} from '../../../../utils/awsFile';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import BlueButton from '../../../common/components/BlueButton';
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
  }

  
  @media (max-width: ${theme.medias.phablet}) {
  	width:80%;
  }
`


class Freezcoin extends Component {
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
              			<h1>Z幣是什麼？</h1>
              		</Head>
                  <Section>
                      <img src={awsUrl('zcoin.png')}/>
                      <br /><br />
                      <p>Z幣就是您做回收的獎勵！<br />
                      而且可以直接兌換成商品好康喔！</p>
                  </Section>
              		<Section>
                      <img src={awsUrl('process2.png')} width="100" height="auto"/>
                      <br /><br />
  	            			<p>只要您成為zero zero會員<br />
                      或使用zero zero的回收服務<br />
                      就可以獲得Z幣</p>
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

export default Freezcoin;