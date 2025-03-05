import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";
import shortid from 'shortid';
import styled from 'styled-components';
import {UserRoute} from '../../../../commons/routePaths';
import {profile} from '../../../../data/auth/action';
import {bound} from '../../../../styles/commons';
import {borderRadius, box, clearfix, transition} from '../../../../styles/mixins';
import theme from '../../../../styles/theme';
import {awsUrl} from '../../../../utils/awsFile';
import BlueButton from '../../../common/components/BlueButton';
import CoverImage from '../../../common/components/CoverImage';
import GreenButton from '../../../common/components/GreenButton';
import Record from "./Record";

import Loading from '../../../common/components/Loading_Component/Loading';

import PageTitle from '../../../common/components/PageTitle';

import * as actions from './action';

const Container = styled.div`
  margin-bottom:70px;
  .more{
    text-align:center;
    font-size:14px;
    color:#a7a7a7;
    width:auto;
    line-height:50px;
    margin:10px auto 0;
    cursor:pointer;
    ${transition("color", ".3s")};

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
const Tabs = styled.div`
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
const Buttons = styled.div`

  clear:both;
  padding-top:30px;
  text-align:center;
  button{
    display:inline-block !important;
    margin-right:30px;
    &:last-child{
      margin-right:0;
    }
  }
  @media (max-width: ${theme.medias.phablet}) {
    width:90%;
    margin:0 auto;
    button{
      display:block !important;
      margin-right:0;
    }
  }
}
`

const ExchangeContainer = styled.div`

  width: 100%;
  padding: 35px;
  background:#fff;
  border:1px solid #ccc;
  position:relative;
  z-index:1;
  top:-1px;

  ${box};
  ${bound};

  >ul{
    display: flex;
    flex-wrap:wrap;
    align-content:stretch;    
    li {
      width: calc(50% - 10px);
      margin: 5px;
      border: 1px solid #ddd;
      padding: 20px;
      background: #fff;
      cursor: pointer;
      
      ${box};
      ${borderRadius('8px')};
      &::after{
        ${clearfix};
      }
      
      a {
          text-decoration:underline;
      }

      .type {
        display: inline-block;
        font-size: 14px;
        line-height: 30px;
        height: 30px;
        color: #fff;
        background: ${theme.colors.gray};
        padding: 0 15px;
        ${borderRadius('15px')};
        float: left;
      }

      .item_brief {
        clear: both;
        font-size: 16px;
        color: #333;
        line-height: 20px;
        padding:15px 0;

        .photo{
          width:30%;
          margin-right:10px;
          float:left;
          padding:5px;
          border:1px solid #ddd;
          background:#fff;
          height:0;
          padding-top:30%;
          position:relative;
          >div{
            position:absolute;
            z-index:1;
            width:100%;
            height:100%;
            top:0;
            left:0;
            overflow:hidden;
          }
        }

        .info{
          overflow:auto;

          .name{
            display:block;
            margin-bottom:5px;
            
          }
          .subtitle{
            display:block;
            margin-bottom:5px;
            font-size:14px;
            color:#999;
            
          }
          .balance {        
            display:block;
            text-align: left;
            font-size: 16px;
            line-height:20px;
            letter-spacing:0.125em;
            color:${theme.colors.red};
            margin-bottom:5px;
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
          .expire_date{
            font-size:14px;
            color:${theme.colors.gray};
            line-height:1.6;
            display:block;
            &::before{
              font-size:16px;
              content:"\f017";
              font-family: FontAwesome;
              margin-right:5px;
            }
          }
        } 
      }
    }
  }
  
  @media (max-width: ${theme.medias.phablet}) {
    padding: 30px 10px;
    >ul{
      display: block;
      li {
        margin: 0 0 8px;
        width:100%;
        .type {
          display:none;
        }
        .item_brief {
          padding:0;
          .info{
            .name{
              margin-bottom:20px;
            }
            .subtitle{
              display:none;
            }
          }
        }
      }
    }
  }

`

const RecordContainer = styled.div`

  width: 100%;
  padding: 35px;
  background:#fff;
  border:1px solid #ccc;
  position:relative;
  z-index:1;
  top:-1px;

  ${box};
  ${bound};

  >ul{

  }

  
  
  @media (max-width: ${theme.medias.phablet}) {
    padding: 30px 10px;
    
  }

`

const TypeFilter = styled.div`
  width:100%;
  margin-bottom:10px;
  &::after{
    ${clearfix};
  }
  >ul{
    display:inline-block;
    width:calc(100% - 135px);
    li{
      display:inline-block;
      margin-right:30px;
      width:auto;
  
      &::last-child{
          margin-right:0;
      }
      a{
        height:100%;
        text-align:center;
        font-size:16px;
        display:inline-block;
        line-height:16px;
        padding-bottom:15px;
        color:${theme.colors.gray};
        text-decoration:none;
        ${borderRadius('5px 5px 0 0')};
        ${box};

        &.active{
          color:${theme.colors.blue};
          border-bottom:4px solid ${theme.colors.blue};
        }
      }
    }
  }
  @media (max-width: ${theme.medias.phablet}) {
    >ul{
      width:calc(100% - 50px);
      li{
        margin-right:15px;
        a{
          font-size:15px;
        }
      }
    }
  }
`

const Filter = styled.div`
    width:135px;
    height:30px;
    position:relative;
    float:right;
    ${box};
    margin-top:-8px;

    &::before{
      content:"\f160排序";
      font-family: FontAwesome;
      width:50px;
      height:30px;
      line-height:30px;
      font-size:14px;
      position:absolute;
      top:0;
      left:0;
      color:#999;
    }
    @media (max-width: ${theme.medias.phablet}) {
      width:50px;
      
      > ul{
        display:none;
      }
    }

    > ul{
      top:0px;
      right: 0px;
      position:absolute;
      width:80px;
      padding-top:30px;

      ${borderRadius("5px")};
      border:1px solid #ccc;

      li{
        line-height:30px;
        text-indent:10px;
        color:#aaa;
        font-size:14px;
        display:none;
        cursor:pointer;
        white-space:nowrap;
        overflow:hidden;

        &:hover{
            color:#333;
        }

        &.active{
            position:absolute;
            top:0;
            left:0;
            z-index:1;
            display:block;
            color:#333;
        }
      }
    }
    &:hover{
      >ul{
        background:#fff;
        display:block;
        li{
            display:block;
        }
      }
    }
`
const BackButton = styled.div`
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

class Exchange extends Component {


    constructor(props) {
        super(props);
        this.state = {
            activeRecordType: 'v',
            activeVoucherType: undefined,
            isLoading: true,
            exchangeType: 'vouchers',
            page:1,
        };

        this.onRecordTypeSelected = this.onRecordTypeSelected.bind(this);
        this.onVoucherTypeSelected = this.onVoucherTypeSelected.bind(this);
        this.onHandlePageChange = this.onHandlePageChange.bind(this);
    }

    componentDidMount() {
        //this.props.profile();

        /*const {recordType, recordStatus} = this.props.match.params;
        let activeVoucherType;*/

        //this.props.loadZCoins();

        /*if(recordType) {
            if(recordType === 'e') {
                activeVoucherType = recordStatus;
                this.setState({activeVoucherType}, () => this.props.loadVouchers());
            }
        }*/
      //2022/03/04 修改為進入我的兌換頁取unused 的資料
      this.props.setVoucherTypesAndLoadVouchers('unused')
      //this.props.getVouchers();
    }

    renderVouchers() {

        const { history, vouchers} = this.props;
        const { records } = vouchers.toJS();
        //const records = vouchers && vouchers.get('records') ? vouchers.get('records').toJS() : [];

        return records.map((r, i) => {
            const typeClassName = 'exchange';

            return (
                <li className={typeClassName} key={shortid.generate()}
                    onClick={() => history.push(`/exchange/record/${r.id}`)}>

                    <div className="type">{r.statusName}</div>
                    <div className="item_brief">
                        <span className="photo"><div><CoverImage src={r.photo}/></div></span>
                        <div className="info">
                            <span className="name">{r.itemName}</span>
                            <span className="subtitle">{r.subtitle}</span>
                            <div className="balance">{r.coins}</div>
                            <span className="expire_date">使用期限 : {r.expireTime}</span>
                        </div>
                    </div>

                </li>
            );
        });
    }

    onRecordTypeSelected(type) {
        //e.preventDefault();
        this.setState(preState => {
            return{
                ...preState,
                activeRecordType: type,
            }
        }, this.props.setRecordTypeAndLoadData(type));
    }

    onVoucherTypeSelected(e, type) {

        const newActiveVoucherType = this.state.activeVoucherType === type ? 'total' : type;

        this.setState({activeVoucherType: newActiveVoucherType}, () => {
            this.props.setVoucherTypesAndLoadVouchers(newActiveVoucherType);
        });
    }

    onVoucherSetSort(type) {
        this.props.setVoucherSortOrder(type);
    }

    onHandlePageChange() {
        this.setState(preState => {
            return {
                ...preState,
                page: this.state.page +1
            }
        })
    }

    render() {
        const {vouchers, criteria, history, isLoading, exchangeRecords} = this.props;
        const { filter, sortOrder } = criteria.toJS();
        const {records, page, totalPage, unused } = vouchers.toJS();
        const rowsPerPage = 4 ;

        return (
            <Container>
                <Loading isLoading={isLoading} message='載入中...'/>
                <Helmet>
                    <title>我的兌換</title>
                </Helmet>

                <BackButton>
                    <button onClick={() => history.push(UserRoute())}>返回會員中心</button>
                </BackButton>
                <PageTitle title='我的兌換'/>

                <Tabs>
                    <ul>
                        <li>
                            <a className={this.state.activeRecordType==='v' ? 'active' : ''} href="javascript: void(0)" onClick={() => this.onRecordTypeSelected('v')}>所有兌換券</a>
                        </li>
                        <li>
                            <a className={this.state.activeRecordType==='r' ? 'active' : ''} href="javascript: void(0)" onClick={() => this.onRecordTypeSelected('r')}>兌換紀錄</a>
                        </li>
                    </ul>

                </Tabs>


                {/*所有兌換券*/}
                { this.state.activeRecordType === 'v'
                    ? <ExchangeContainer>
                        <TypeFilter>
                            <ul>
                                <li>
                                    <a className={filter === 'unused' && 'active'}
                                       href="javascript: void(0)"
                                       onClick={e => this.onVoucherTypeSelected(e, 'unused')}>未使用({unused})</a>
                                </li>
                                <li>
                                    <a className={filter === 'used' && 'active'}
                                       href="javascript: void(0)"
                                       onClick={e => this.onVoucherTypeSelected(e, 'used')}>已使用</a>
                                </li>
                                <li>
                                    <a className={filter === 'expired' && 'active'}
                                       href="javascript: void(0)"
                                       onClick={e => this.onVoucherTypeSelected(e, 'expired')}>已過期</a>
                                </li>
                            </ul>
                            <Filter>
                                <ul>
                                    <li className={sortOrder ==='newest' ? 'active': ''} onClick={() => this.onVoucherSetSort('newest')}>最新</li>
                                    <li className={sortOrder === 'expire' ? 'active': ''} onClick={() => this.onVoucherSetSort('expire')}>到期日</li>
                                </ul>
                            </Filter>
                        </TypeFilter>
                        <ul>
                            {this.renderVouchers()}
                        </ul>
                        {
                            totalPage > page ?
                                <div className="more" onClick={() => this.props.more()}>更多記錄</div> : undefined
                        }
                    </ExchangeContainer>
                    : <RecordContainer>
                        <ul>
                            { exchangeRecords.toJS().slice( 0, (this.state.page) * rowsPerPage)
                                .map((record) => {
                                return <Record key={shortid.generate()} record={record} route={this.props.history}/>
                            })}
                        </ul>
                        { Math.ceil(exchangeRecords.toJS().length/rowsPerPage) > this.state.page
                            ? <div className="more" onClick={() => this.onHandlePageChange()}>更多記錄</div>
                            : undefined}

                    </RecordContainer>

                }

                <Buttons>
                    <GreenButton onClick={() => history.push('/events/dyna/z-point?zerobanner')}>快速集Z幣</GreenButton>
                    <BlueButton onClick={() => history.push('/exchange')}>兌換中心</BlueButton>
                </Buttons>


            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        vouchers: state.user.exchangeRecord.get('VOUCHERS'),
        exchangeRecords: state.user.exchangeRecord.get('RECORDS'),
        criteria: state.user.exchangeRecord.get('CRITERIA'),
        userProfile: state.data.auth.get('PROFILE'),
        isLoading: state.data.common.get('IS_LOADING'),
    }
}

export default connect(mapStateToProps, {...actions, profile})(Exchange);
