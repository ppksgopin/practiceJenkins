import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";
import shortid from 'shortid';
import styled from 'styled-components';

import {UserRoute} from '../../../../commons/routePaths';
import {bound} from '../../../../styles/commons';
import {borderRadius, box, clearfix, transition} from '../../../../styles/mixins';
import theme from '../../../../styles/theme';
import {awsUrl} from '../../../../utils/awsFile';
import {toDate} from '../../../../utils/dateTimeConverter';

import Loading from '../../../common/components/Loading_Component/Loading';

import PageTitle from '../../../common/components/PageTitle';
import Record from './Record' ;
import {getUserZCoins, getUserTotalZcoins} from './action';
/*import Record from './Record';*/
import ZCoinBoard from "./ZCoinBoard";


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


const ZCoinContainer = styled.div`

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

const ZcoinBoard = styled.div`

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

class ZCoin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            zCoinType: 'all',
            page: 1,
            rowsPerPage: 4,
            records: [],
        };

        this.onHandlePageChange = this.onHandlePageChange.bind(this);
        this.toggleExchangePoints = this.toggleExchangePoints.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.zCoins !== this.props.zCoins) {
            this.setState(prevState => {
                return{
                    ...prevState,
                    records: this.props.zCoins.toJS()
                }
            })
        }
    }

    componentDidMount() {
        this.props.getUserTotalZcoins();
        this.props.getUserZCoins();

    }

    toggleExchangePoints(type) {
        const {zCoins} = this.props;
        this.setState(preState => {
            return {
                ...preState,
                page: 1,
                zCoinType: type,
                records: zCoins.toJS().filter(r => r.recordType === type ),
            }
        }, () => {
            return this.renderRecords();
        })
    }

    renderRecords() {
        if(this.state.records.length === 0) {
            return <div> 無點數記錄 </div>
        }else {
            return this.state.records.slice(0, (this.state.page * this.state.rowsPerPage))
                .map( r => {
                    return (
                        <Record key={shortid.generate()} {...r}/>
                    )
                })
        }
    }

    toggleAllRecord() {
        const {zCoins} = this.props ;
        this.setState(preState => {
            return {
                ...preState,
                page: 1,
                zCoinType: 'all',
                records: zCoins.toJS()
            }
        }, () => {
            return this.renderRecords();
        })
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
        const {zCoins, isLoading, history, totalRecord} = this.props;
        const totalPage = Math.ceil(this.state.records.length/this.state.rowsPerPage) ;
        const currentPage = `(${this.state.page}/${totalPage})`;

        return (
            <Container>
                <Loading isLoading={isLoading} message='載入中...'/>
                <Helmet>
                    <title>我的Z幣</title>
                </Helmet>

                <BackButton>
                    <button onClick={() => history.push(UserRoute())}>返回會員中心</button>
                </BackButton>
                <PageTitle title='我的Z幣'/>

                <ZCoinBoard totalRecord={totalRecord.toJS()} history={this.props.history}/>

                <Tabs>
                    <ul>
                        <li>
                            <a className={this.state.zCoinType === 'all' ? 'active' : ''} href="javascript: void(0)"
                               onClick={() => this.toggleAllRecord()}>所有紀錄</a>
                        </li>
                        <li>
                            <a className={this.state.zCoinType === 'a' ? 'active' : ''} href="javascript: void(0)"
                               onClick={() => this.toggleExchangePoints('a')}>積點紀錄</a>
                        </li>
                        <li>
                            <a className={this.state.zCoinType === 'd' ? 'active' : ''} href="javascript: void(0)"
                               onClick={() => this.toggleExchangePoints('d')}>扣點紀錄</a>
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
                        { this.renderRecords() }
                    </ul>
                    {
                        totalPage > this.state.page
                            ? <div className="more" onClick={() => this.onHandlePageChange()}>更多記錄 {currentPage}</div>
                            : undefined
                    }

                </ZCoinContainer>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        zCoins: state.user.zCoin.get('ZCOINS'),
        totalRecord: state.user.zCoin.get('TotalRecord'),
        isLoading: state.data.common.get('IS_LOADING'),
    }
}

export default connect(mapStateToProps, {getUserTotalZcoins, getUserZCoins})(ZCoin);
