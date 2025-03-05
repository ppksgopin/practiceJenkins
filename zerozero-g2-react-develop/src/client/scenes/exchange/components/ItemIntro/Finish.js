import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {compose, lifecycle} from 'recompact';

import styled,{css} from 'styled-components';

import PageTitle from '../../../common/components/PageTitle';
import Zcoin from '../../../common/components/Zcoin';
import BlueButton from '../../../common/components/BlueButton';
import Button from '../../../common/components/Button';
import theme from '../../../../styles/theme';
import {bound, appointmentInfo, sectionTitle, pageMenu,buttons} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import * as actions from './action';
import {UserZCoinRoute, ExchangeRecordDetailRoute, UserExchangeRoute} from '../../../../commons/routePaths';
import {IndexRoute} from "../../../../commons/routePaths";


const Buttons = styled.div `
  ${buttons}
`
const SectionTitle = styled.div `
  ${sectionTitle};
`
const AppointmentInfoContainer = styled.div `
    background:#fff;
    padding:50px 20px 0;
    ${box};

    form{
        margin:0 auto;
    }

`
const AppointmentInfo = styled.form `
  ${appointmentInfo};
`
const Congrat = styled.div `
    h3{
        font-size:24px;
        color:${theme.colors.gray};
        line-height:1.5;
        margin-bottom:30px;
        font-weight:400;
        text-align:center;
        @media (max-width: ${theme.medias.phablet}) {
            font-size:18px;
        }
    }
    p{
        font-size:14px;
        color:#333;
        line-height:1.5;

        span{
            color:${theme.colors.green};
        }
    }
`
const ItemInfo = styled.div `
.item{
    width:100%;
    max-width:400px;
    padding:0 0 50px;
    margin:0 auto;
    @media (max-width: ${theme.medias.phablet}) {
        padding:0;
        margin-bottom:0px;
    }

    > div{
        ${box};

        &.thumb{
            padding:0;
            img{
                width:100%;
                height:auto;
            }
            margin-bottom:50px;
        }
        &.info{
            h3{
                font-size:24px;
                color:${theme.colors.gray};
                line-height:1.5;
                margin:0px auto 30px;
            }
            p{
                font-size:16px;
                color:#333;
                line-height:1.5;
                margin-bottom:30px;
            }

            .price{
                font-size:36px;
                //font-weight:bold;
                text-align:center;
                color:${theme.colors.red};
                line-height:1.5;
            }

            .expire{
                font-size:14px;
                color:${theme.colors.red};
                text-align:center;
                line-height:40px;
                border-top:1px solid #ddd;
                border-bottom:1px solid #ddd;
                &::before{
                    content:"\f017";
                    font-family: FontAwesome;
                    margin-right:5px;
                }
            }
        }
    }
}
`

const BackButton = styled.div `
  width: 100%;
max-width:350px;
margin: 0 auto;
margin-bottom: 20px;

  a{
    display:block;
    width: 100%;
    height: 50px;
    font: inherit;
    font-size: 18px;
    font-weight:300;
    line-height: 50px !important;
    text-align: center;
    color:${theme.colors.blue};
    text-decoration:none;    

  }
`

class Finish extends Component {

    componentDidMount() {
        gtag('event','conversion',{'send_to':'AW-851066983/jlBnCOfF03sQ54DplQM'});
    }

    render() {

        const item = this.props.item.toJS();

        const { coins } = this.props;

        return (
            <div>
                <Helmet>
                    <title>兌換中心-兌換完成</title>
                </Helmet>

                <PageTitle title="兌換清單"/>

                <AppointmentInfoContainer>
                    <AppointmentInfo>
                        
                        <div className="block">
                            <div className="check"/>
                            <Congrat>
                                <br />
                                <h3>太棒了<br />恭喜您成功兌換</h3>
                                <p>已發送電子票券給您，可於本頁下方「<span>我的兌換</span>」查看 票券詳情。提醒您電子票券有使用期限，請即早使用。</p><br />
                            </Congrat>

                            {/*<ItemInfo>*/}
                                {/*<div className="item">*/}
                                    {/*<div className="item">*/}
                                        {/*<div className="thumb">*/}
                                            {/*<img src={item.imageURL || "https://unsplash.it/400/400/?random&v=1"}/>*/}
                                        {/*</div>*/}
                                        {/*<div className="info">*/}
                                            {/*<h3>{item.name}</h3>*/}
                                            {/*<p>{item.subtitle}</p>*/}
                                            {/*<br /><br />*/}
                                            {/*<div className="price">*/}
                                                {/*{item.coins}Z*/}
                                            {/*</div>*/}
                                            {/*<div className="expire">*/}
                                                {/*使用期限 : {item.expireDate}*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</ItemInfo>*/}
                            {/*<div className="dashed-split"/>*/}
                        </div>
                        

                        <br/><br/>
                        <div>
                            <BlueButton onClick={e => {e.preventDefault(); this.props.history.push(UserExchangeRoute())}}>我的兌換</BlueButton>
                            <BackButton><a href={IndexRoute()}>回首頁</a></BackButton>
                        </div>

                    </AppointmentInfo>
                </AppointmentInfoContainer>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        item: state.exchange.item.get("ITEM"),
        coins: state.dashboard.get('TOTAL_COINS') || 0
    }
}

export default connect(mapStateToProps, actions)(Finish);
