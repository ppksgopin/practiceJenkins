import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";
import {Link} from 'react-router';

import * as actions from './action';
import {profile} from '../../../../data/auth/action';
import {toDate} from '../../../../utils/dateTimeConverter';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {bound, userForm, buttons,subPageMenu} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import {awsUrl} from '../../../../utils/awsFile';

import PageTitle from '../../../common/components/PageTitle';
import Avatar from '../../../common/components/Avatar';
import Button from '../../../common/components/Button';
import Zcoin from '../../../common/components/Zcoin';
import CoverImage from '../../../common/components/CoverImage';
import BlueButton from '../../../common/components/BlueButton';
import Barcode from 'react-barcode';

import Loading from '../../../common/components/Loading_Component/Loading';

import {
    UserRoute
} from '../../../../commons/routePaths';


const Container = styled.div `
  margin-bottom:70px;
  .more{
    text-align:center;
    font-size:14px;
    color:#a7a7a7;
    width:auto;
    line-height:50px;
    margin:10px auto 0;
    cursor:pointer;
    ${transition("color",".3s")};

    &::before{
      content:"\f067";
      font-family: FontAwesome;
      margin-right:5px;
    }
    
    &:hover{
        color:${theme.colors.blue};
    }
  }
`
const Tabs = styled.div `
  ${box};
  ${bound};
  position:relative;
  z-index:2;
  >ul{
    li{
      display:inline-block;
      height:50px;
      margin-right:5px;
      width:160px;
      &:last-child{
          margin-right:0;
      }
      a{
        width:100%;
        height:100%;
        text-align:center;
        font-size:18px;
        display:block;
        line-height:50px;
        color:#fff;
        text-decoration:none;
        background:${theme.colors.gray};
        ${borderRadius('5px 5px 0 0')};
        border:1px solid #ccc;
        border-bottom:none;
        ${box};

        &.active{
          background:#fff;
          color:${theme.colors.blue};
        }
      }
    }
  }

  @media (max-width: ${theme.medias.phablet}) {
    >ul{
      display:flex;
      li{
        width:100%;
      }
    }
  }
`


const ZCoinContainer = styled.div `

  width: 100%;
  padding: 35px;
  background:#fff;
  border:1px solid #ccc;
  top:-1px;
  position:relative;
  z-index:1;

  ${box};
  ${bound};

  >ul{

    li {
      padding:10px 50px;
      ${box};
      
      a {
          text-decoration:underline;
      }

      width:100%;
      display:flex;
      border-bottom:1px dashed ${theme.colors.gray};

      &.header{
        border-bottom:1px solid #ccc;
        .type{
          background:none;
          color:${theme.colors.gray};
        }
        .balance{
          color:${theme.colors.gray};
          font-size:14px;
          &::before{
            display:none;
          }
        }
      }
      .type{
        font-size: 14px;
        line-height: 30px;
        height: 30px;
        color: #fff;
        background: ${theme.colors.gray};
        text-align:center;
        ${borderRadius('15px')};
        width:80px;
        margin-right:50px;
        flex:none;
      }
      .date{
        font-size: 14px;
        line-height: 30px;
        color: ${theme.colors.gray};
        width:90px;
        margin-right:50px;
        text-align:center;
        flex:none;
      }
      .name{
        font-size: 14px;
        line-height: 30px;
        color: ${theme.colors.gray};
        width:100%;
        margin-right:50px;
      }

      .balance{
        color: ${theme.colors.red};
        font-size: 16px;
        line-height: 30px;
        width:90px;
        flex:none;
        &::before{
          content:"";
          width:16px;
          height:16px;
          margin-right:5px;
          display:inline-block;
          vertical-align:middle;
          background: url(${awsUrl("zcoin_pink.png")}) no-repeat center left;
          background-size:16px 16px;
        }
      }
    }
  }

  @media (max-width: ${theme.medias.phablet}) {
    padding:10px 0;
    >ul{
      li{
        padding:10px;
        display:block;
        position:relative;
        padding-left:80px;
        padding-right:100px;

        &::after{
          ${clearfix};
        }

        &.header{
          display:none;
        }
        .type{
          display:inline-block;
          font-size: 12px;
          width:60px;
          position:absolute;
          left:10px;
          top:15px;
          margin-right:0;
        }
        .date,.name{
          display:inline-block;
          line-height: 20px;
          width:100%;
          margin-right:0;
          text-align:left;
        }

        .balance{
          display:inline-block;
          position:absolute;
          right:10px;
          width:80px;
          top:15px;
          text-align:right;
        }
      }
    }
    
  }
`

const ZcoinBoard = styled.div `

  padding-bottom:30px;
  
  .current{
    width:100%;
    max-width:175px;
    text-align:left;
    .zc {
      font-size: 24px;
      &::before{
        width:24px;
        height:24px;
        background-size:24px 24px;
      }
    }
  }

  .expire{
    width:100%;
    max-width:175px;
    text-align:right;
    border-left:1px solid #ddd;
    

    .zc {
      font-size: 16px;
      &::before{
        width:16px;
        height:16px;
        background-size:16px 16px;
      }
    }
  }
  .des {
      font-size: 14px;
      color: ${theme.colors.gray};
      line-height: 1.8;
  }
  
  .info{
    display:flex;
    justify-content: center;
    align-items:center;
    margin-bottom:40px;
  }

  .zc {
      font-size: 18px;
      color: ${theme.colors.red};
      line-height: 1.8;
      &::before{
        content:"";
        width:18px;
        height:18px;
        margin-right:5px;
        display:inline-block;
        vertical-align:middle;
        background: url(${awsUrl("zcoin_pink.png")}) no-repeat center left;
        background-size:18px 18px;
      }
  }
  @media (max-width: ${theme.medias.phablet}) {
    width:90%;
    margin:0 auto;
    
    .info{
      display:block;
    }
    .current{
      max-width:none;
      text-align:center;
    }
    .expire{
      padding-top:25px;
      margin-top:25px;
      text-align:center;
      border:none;
      border-top:1px solid #ddd;
      max-width:none;
      .des,.zc{
        display:inline-block;
        vertical-align:middle;
      }
      .des{
        margin-right:5px;

      }
    }
  }
`
const BackButton = styled.div `
  height:0px;
  ${bound};
  position:relative;
  z-index:2;

  button{
    color:${theme.colors.gray};
    width: auto;
    margin: 0;
    height: 60px;
    font: inherit;
    font-size: 16px;
    line-height: 60px;
    text-align: left;
    cursor: pointer;
    outline:none;
    background: none;
    border: none;
    line-height: normal;
    padding: 0;
    text-decoration: none;
    -webkit-appearance: none;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;

        &::before{
          content:"\f060";
          font-family:"fontawesome";
          margin-right:5px;
        }

  }
  
  @media (max-width: ${theme.medias.phablet}) {
    display:none;
  }
`

class ZCoinBK extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeRecordType: undefined,
            activeVoucherType: undefined
        };

        this.onRecordTypeSelected = this.onRecordTypeSelected.bind(this);
        this.onVoucherTypeSelected = this.onVoucherTypeSelected.bind(this);
    }

    componentDidMount() {

        this.props.profile();

        const { recordType, recordStatus } = this.props.match.params;
        let activeVoucherType;
        this.props.loadZCoins();
        if(recordType) {
            if(recordType === 'e') {
                activeVoucherType = recordStatus;
                this.setState({activeVoucherType}, () => this.props.loadVouchers());
            }
        }
    }

    renderVouchers(vouchers) {
        const {history} = this.props;
        const records = vouchers && vouchers.get('records') ? vouchers.get('records').toJS() : [];

        return records.map((r, i) => {
            const typeClassName = 'exchange';

            return (
                <li className={typeClassName} key={r.id}
                    onClick={() => history.push(`/exchange/record/${r.recordId}`)}>
                    {this.state.activeVoucherType === 'unused'  && (
                        <div className="type">未使用</div>
                    )}
                    {this.state.activeVoucherType === 'used'  && (
                        <div className="type">已使用</div>
                    )}
                    {this.state.activeVoucherType === 'expired'  && (
                        <div className="type">已過期</div>
                    )}

                    <div className="item_brief">
                        <span className="photo"><div><CoverImage src={r.photo}/></div></span>
                        <div className="info">
                            <span className="name">{r.exchangeItemName}</span>
                            <span className="subtitle">{r.subtitle}</span>
                            <div className="balance">{r.coins}</div>
                            <span className="expire_date">使用期限 : {r.expireTime}</span>
                        </div>
                    </div>
                    {

                    }

                </li>
            );
        });
    }

    renderZcoinRecordsOrVouchers() {
        const {zCoins, vouchers, criteria} = this.props;

        const {total, records} = zCoins.toJS();
        const { recordType } = criteria.toJS();

        if(recordType === 'e') {
            return this.renderVouchers(vouchers);
        } else {
            return this.renderZCoin(records);
        }
    }

    renderZCoin(ZCoinsRecords) {
        const records = ZCoinsRecords || [];
        return records.map((r, i) => {

            return (
                <li key={r.id}>
                    <div className="type">積點＋</div>
                    {/*<div className="type">扣點－</div>*/}
                    <div className="date">{toDate(r.time)}</div>
                    <div className="name">{r.eventName}</div>
                    <div className="balance">{r.coins}</div>
                </li>
            );
        });
    }

    onRecordTypeSelected(e, type) {
        //e.preventDefault();
        this.setState({
            activeRecordType: type,
            activeVoucherType: 'total'
        }, this.props.setRecordTypeAndLoadZCoins(type));
    }

    onVoucherTypeSelected(e, type) {
        const newActiveVoucherType = this.state.activeVoucherType === type ? 'total': type;
        this.setState({activeVoucherType: newActiveVoucherType}, () => {
            this.props.setVoucherTypesAndLoadVouchers(newActiveVoucherType);
        });
    }


    render() {
        const {zCoins, vouchers, userProfile, criteria, history, isLoading} = this.props;
        const {photo} = userProfile.toJS();
        const {total, records} = zCoins.toJS();
        const { recordType } = criteria.toJS();
        let recordLength = 0;
        if(recordType === 'e') {
            recordLength = vouchers ? vouchers.get('records').size : 0;
        } else {
            recordLength = records ? records.length : 0;
        }
        return (
            <Container>
                <Loading isLoading={isLoading} message='載入中...' />
                <Helmet>
                    <title>我的Z幣</title>
                </Helmet>

                <BackButton><button onClick={() => history.push(UserRoute())}>返回會員中心</button></BackButton>
                <PageTitle title='我的Z幣'></PageTitle>



                <ZcoinBoard>
                    <div className="info">
                        <div className="current">
                            <div className="des">您目前的Z幣</div>
                            <div className="zc">{total}</div>
                        </div>
                        <div className="expire">
                            <div className="group">
                                <div className="des">2020/09/30前到期</div>
                                <div className="zc">0</div>
                            </div>
                            <div className="group">
                                <div className="des">2020/09/30前到期</div>
                                <div className="zc">1980</div>
                            </div>
                        </div>
                    </div>
                    <BlueButton onClick={() => history.push('/events/dyna/z-point?zerobanner')}>快速集Z幣</BlueButton>
                </ZcoinBoard>


                <Tabs>
                    <ul>
                        <li>
                            <a className='active' href="javascript: void(0)" >所有紀錄</a>
                        </li>
                        <li>
                            <a className='' href="javascript: void(0)" >積點紀錄</a>
                        </li>
                        <li>
                            <a className='' href="javascript: void(0)">扣點紀錄</a>
                        </li>
                    </ul>
                </Tabs>


                <ZCoinContainer>

                    <ul>
                        <li className="header">
                            <div className="type">狀態</div>
                            <div className="date">日期</div>
                            <div className="name">事件</div>
                            <div className="balance">Z幣</div>
                        </li>
                        {this.renderZcoinRecordsOrVouchers()}
                    </ul>
                    {
                        recordLength > 0 ? <div className="more" onClick={() => this.props.more()}>更多記錄</div> : undefined
                    }

                </ZCoinContainer>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        zCoins: state.user.zCoin.get('ZCOINS'),
        vouchers: state.user.zCoin.get('VOUCHERS'),
        criteria: state.user.zCoin.get('CRITERIA'),
        userProfile: state.data.auth.get('PROFILE'),
        isLoading: state.data.common.get('IS_LOADING'),
    }
}

export default connect(mapStateToProps, {...actions, profile})(ZCoinBK);
