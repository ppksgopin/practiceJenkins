import {filter, isEmpty, get} from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from "moment";
import {Field} from "redux-form/immutable";
import styled from 'styled-components';
import {getAreaInfo, getLocationInfo} from "../../../../data/common/action";

import {input, select} from '../../../../styles/commons';
import {borderRadius, box, clearfix, translate} from '../../../../styles/mixins';
import theme from '../../../../styles/theme';
import {awsUrl} from '../../../../utils/awsFile';
import CoverImage from '../../../common/components/CoverImage.js';
import ErrorMsg from "../../../common/components/ErrorMsg";

import {exchangeListAction} from "./action";

const Contact = styled.div`
  width:90%;
  padding-top:20px;
  margin:0 auto 50px;

  @media (max-width: ${theme.medias.phablet}) {
    border-top:1px solid #ccc;
    margin-top:-30px;
  }
  h2{
    font-size:18px;
    line-height:1.5;
    color:${theme.colors.gray};
    margin-bottom:10px;
  }

  .checkbox_Area{
    padding-left:90px;
    ${box};
    font-size:14px;
    line-height:1;
    color:#999;
    @media (max-width: ${theme.medias.phablet}) {
      padding-left:0;
    }
  }

  .multi_col{
    display:flex;
    margin-bottom:20px;

    > *{
      margin-left:10px;
      &:first-child{
        margin-left:0;
      }
    }

    @media (max-width: ${theme.medias.phablet}) {
      display:block;
      > *{
        margin-left:0;
      }
    }
  }
  .remark{
    position:relative;
    width:100%;
    h5{
      font-size:14px;
      line-height:30px;
      color:${theme.colors.gray};
      position:absolute;
      left:0;
      top:-30px;
      white-space:nowrap;
    }
    p{
      font-size: 14px;
      color: ${theme.colors.red};
      line-height: 1.4;
      margin: 0 auto 10px;
      width: 90%;
    }

    @media (max-width: ${theme.medias.phablet}) {

      &.mmt{
        margin-top:40px;
      }
    }
  }

  input[type=text]{
      width:100%;
      ${input};
      margin-bottom:0;
  }

  select, option {
      width:100%;
      ${select};
      margin-bottom:0;

  }
  .flexgroup{
    display:flex;
    width:100%;
    margin-bottom:10px;

    > *{
      margin-left:10px;
      &:first-child{
        margin-left:0;
      }
    }
  }
  label{
    font-size:16px;
    line-height:50px;
    color:${theme.colors.gray};
    white-space:nowrap;
  }

  
`

const Container = styled.div`

    border:1px solid #ddd;
    ${borderRadius('8px')};
    ${box};
    overflow:hidden;
    margin-bottom:20px;
    background:#fff;

    >.mainheader{
        height:50px;
        background:${theme.colors.gray};
        line-height:50px;
        color:#fff;
        font-size:20px;
        padding:0 35px;
        ${box};

    }

    >.detail{
        width:90%;
        margin:0 auto;

        

        >ul{
          margin:20px auto;
          >li{
            font-size:16px;
            color:${theme.colors.gray};
            line-height:26px;
            padding:15px 20px;
            border-bottom:1px dashed #ccc; 

            ${box};
            &.header{
              padding:5px 20px;
              font-size:14px;
              border-bottom:1px solid #ccc; 
              .check{
                line-height:40px;
                &::before{
                  content:"　";
                }
              }
              .name{
                line-height:40px;
                min-height:0;
                padding-left:0;
              }
              .total,.price{
                color:${theme.colors.gray};
                &::before{
                  display:none;
                }
              }
              >div{
                min-height:0;
              }
            }
            &.result{
              padding:5px 20px;
              font-size:14px;

              border-bottom:none; 
              .check{
                line-height:40px;
              }
              .name{
                line-height:40px;
                min-height:0;
                padding-left:0;
                span{
                  cursor: pointer;
                  color:${theme.colors.blue};
                  text-decoration:underline;
                }
              }
              .price{
                color:${theme.colors.gray};
                span{
                  color:${theme.colors.blue};
                }
                &::before{
                  display:none;
                }
              }
              >div{
                min-height:0;
              }
            }

            &:nth-last-child(2){
              border-bottom:1px solid #ccc;
            }

            >div{
              float:left;
              
              &.name{
                min-height:60px;
                width:calc(100% - 500px);
                ${box};
                padding-left:70px;
                position:relative;
                .thumb{
                  width:60px;
                  height:60px;
                  position:absolute;
                  left:0;
                  top:0;
                  overflow:hidden;
                }
                h2{
                  font-size:16px;
                  color:#555;
                }
                h3{
                  color:#999;
                }
              }
              &.amounth{
                width:150px;
                text-align:center;
                line-height:40px;
              }
              &.check{
                width:30px;
                text-align:left;
                line-height:60px;
                >span{
                  &::before{
                    font-size:18px;
                    content:"\f096";
                    font-family:"fontawesome";
                  }
                }
                

                &.active{
                 >span{
                    &::before{
                      content:"\f14a";
                      color:${theme.colors.blue};
                    }
                  }
                
                }
              }
              &.amount{
                width:150px;
                text-align:center;
                border:1px solid ${theme.colors.gray};
                position:relative;
                padding:0 40px;
                line-height:40px;
                ${borderRadius("8px")};
                ${box};

                .errmsg{
                  font-size:14px;
                  line-height:1;
                  color:${theme.colors.red};
                  white-space:nowrap;
                  position:absolute;
                  bottom:-30px;
                  left:50%;
                  width:auto;
                  ${translate("-50%", "0")};
                }
                span{
                  position:absolute;
                  top:0;
                  width:40px;
                  height:40px;
                  cursor:pointer;
                  &.minus{
                    left:0;
                    &::before{
                      font-size:16px;
                      line-height:40px;
                      content:"\f068";
                      font-family:"fontawesome";
                    }
                  }

                  &.plus{
                    right:0;
                    &::before{
                      font-size:16px;
                      line-height:40px;
                      content:"\f067";
                      font-family:"fontawesome";
                    }
                  }
                }
              }
              &.total,&.price{
                width:135px;
                text-align:center;
                color:${theme.colors.red};
                line-height:40px;
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
              &.delete{
                width:50px;
                text-align:center;
                line-height:40px;
                >span{
                  text-decoration:none;
                  color:${theme.colors.gray};
                  &::before{
                    font-size:26px;
                    content:"\f00d";
                    font-family:"fontawesome";
                  }
                }
              }
            }

            &::after{
              ${clearfix};
            }
          }
        }
    }
    
    @media (max-width: ${theme.medias.phablet}) {
        padding:0;
        position:relative;

        >.detail{
            border-top:1px solid #ddd;
            //width:100%;

            .contact{
                padding:0;
            }

            >ul{

              >li{
                
                text-align:right;
                &.header{
                  display:none;
                }

                >div{
                  float:none;
                  min-height:0;
                  margin-bottom:20px;

                  &.name{
                    text-align:left;
                    width:calc(100% - 32px);
                    display:inline-block;
                  }
                  &.amount{
                    width:100%;
                    padding-left:140px;
                    span{
                      &.minus{
                        left:100px;
                      }
                    }
                    &::after{
                      content:"兌換數量";
                      width:99px;
                      height:40px;
                      border-right:1px solid ${theme.colors.gray};
                      position:absolute;
                      left:0;
                      top:0;
                      text-align:center;

                    }

                    .errmsg{
                      font-size:12px;
                      bottom:-25px;
                      left:auto;
                      right:0;
                      widtH:100%;
                      text-align:right;
                      ${translate("0", "0")};
                    }
                    
                  }
                  &.check{
                    display:inline-block;
                  }
                  &.total{
                    padding-left:40px;
                    position:relative;
                    width:auto;
                    display:inline-block;
                    &::after{
                      font-size:14px;
                      content:"小計";
                      color:${theme.colors.gray};
                      width:40px;
                      height:40px;
                      position:absolute;
                      left:0;
                      top:0;
                      text-align:center;

                    }
                  }
                  &.price{
                    display:none;
                  }
                  &.delete{
                    margin-left:20px;
                    width:auto;
                    display:inline-block;
                    border:1px solid #ccc;
                    ${borderRadius("8px")};
                    padding:0 15px;
                    >span{
                      font-size:14px;
                      &::before{
                        font-size:14px;
                        content:"\f00d 刪除";
                      }
                    }
                  }
                }
                &.result{
                  .check,.name{
                    display:none;
                  }
                  .price,.amounth,.total{
                    width:auto;
                    margin-left:10px;
                    display:inline-block;
                    font-size:18px;
                  }

                  .total{
                    padding-left:0;
                    &::after{
                      display:none;
                    }
                  }
                }
              }
            }
        }
    }  
`;

class Record extends Component {

    constructor(props) {
        super(props);

        this.state = {
            amount: 4,
            eTicketSelectAll: false,
            ticketSelectAll: false,
        };

    }

    componentDidMount() {
        this.props.getLocationInfo();

    }



    componentWillReceiveProps(nextProps) {

        if (nextProps.initialValues && nextProps.initialValues.get('addressCounty') && nextProps.initialValues.get('addressCounty') !== this.props.initialValues.addressCounty && this.props.areas.size === 0) {
            this.props.getAreaInfo(nextProps.initialValues.get('addressCounty'));
        }
    }

    _citiesRender(cities) {
        let citiesData = cities.toJS();
        return (citiesData.map(({id, name}, i) => <option value={id} key={id}>{name}</option>));
    }

    _areasRender(areas) {
        let areasData = areas.toJS();
        return (areasData.map(({id, name}, i) => <option value={id} key={id}>{name}</option>));
    }

    changeCity(city) {
        if (city) {
            this.props.getAreaInfo(city);
        }
    }


    incItemVal(item) {
        //console.log('select item: ', item);
        const action = {type: 'IncVal', item}
        this.props.exchangeListAction(action);
    }

    decItemVal(itemId) {
        const action = {type: 'DecVal', itemId}
        this.props.exchangeListAction(action);
    }

    removeItem(itemId) {
        const action = {type: 'Remove', itemId}
        this.props.exchangeListAction(action);
    }

    toggleItem(itemId) {
        const action = {type: 'ToggleSelect', itemId}
        this.props.exchangeListAction(action);
    }

    toggleSelectAll(type) {

        this.setState(preState => {
            return {
                ...preState,
                [type]: !preState[type],
            }
        }, () => {
            if (this.state[type]) {
                this.props.exchangeListAction({type: 'SelectAll', payload: type});
            } else {
                this.props.exchangeListAction({type: 'DeSelectAll', payload: type});
            }
        })
    }

    removeAll(type) {
        this.props.exchangeListAction({type: 'RemoveAll', payload: type});
    }

    render() {
        const {items, initialValues, cities, areas, error , touched, submitErrors={} } = this.props;
        const eTicket = items.filter(item => item.itemType === 1);
        const ticket = items.filter(item => item.itemType === 2);
        const eTicketSub = calSubTotal(eTicket);
        const ticketSub = calSubTotal(ticket);
        let et = {total: 0, num: 0};
        let t = {total: 0, num: 0};

        return (
            <div>

                {eTicket.length > 0 ?
                    <Container>
                        <div className="mainheader">
                            {eTicket.length > 0 ?
                                `電子票券(${eTicket.length})`
                                : undefined}
                        </div>

                        <div className="detail">
                            <ul>
                                <li className="header">
                                    <div className="check"></div>
                                    <div className="name">商品名稱</div>
                                    <div className="price">Z幣</div>
                                    <div className="amounth">兌換數量</div>
                                    <div className="total">小計</div>
                                    <div className="delete">刪除</div>
                                </li>

                                {eTicket.map((item, idx) => {
                                    let errorMsg = "" ;
                                    const subTotal = item.coins * item.itemVal;
                                    et.total += item.isSelected ? subTotal : 0;
                                    et.num += item.isSelected ? 1 : 0;
                                    errorMsg = item.outStockMsg ? item.outStockMsg : (item.exchangeLimit && (item.exchangeLimitMax < item.itemVal)) ? `最多兌換${item.exchangeLimitMax}組` : "";
                                    return (
                                        <li key={idx}>
                                            <div className={`check ${item.isSelected ? 'active' : ''}`}><span onClick={() => this.toggleItem(item.itemId)}></span></div>
                                            <div className="name">
                                                <div className="thumb"><CoverImage src={item.imageURL}/></div>
                                                <h2>{item.name}</h2>
                                                <h3>{item.subtitle}</h3>
                                            </div>
                                            <div className="price">{item.coins}</div>
                                            <div className="amount">
                                                <span className="minus" onClick={() => this.decItemVal(item.itemId)}/>
                                                {item.itemVal}
                                                <span className="plus" onClick={() => this.incItemVal(item)}/>
                                                {errorMsg && errorMsg!=="" ? <ErrorMsg msg={errorMsg} classname="errmsg"/> : ""}

                                            </div>
                                            <div className="total">{subTotal}</div>
                                            <div className="delete"><span onClick={() => this.removeItem(item.itemId)}></span></div>
                                        </li>
                                    )
                                })}

                                <li className="result">
                                    <div className={`check ${this.state.eTicketSelectAll ? 'active' : ''}`}>
                                        <span onClick={() => this.toggleSelectAll('eTicketSelectAll')} />
                                    </div>
                                    <div className="name">
                                       全選 <span onClick={() => this.removeAll('eTicket')}>移除所有商品</span>
                                    </div>
                                    <div className="price">共<span>{et.num}</span>件</div>
                                    <div className="amounth">合計點數</div>
                                    <div className="total">{et.total}</div>
                                </li>

                            </ul>
                        </div>
                    </Container> : ""}

                {ticket.length > 0 ?
                    <Container>
                        <div className="mainheader">
                            {ticket.length > 0 ?
                                `實體票券(${ticket.length})`
                                : undefined}
                        </div>

                        <div className="detail">
                            <ul>
                                <li className="header">
                                    <div className="check"></div>
                                    <div className="name">商品名稱</div>
                                    <div className="price">Z幣</div>
                                    <div className="amounth">兌換數量</div>
                                    <div className="total">小計</div>
                                    <div className="delete">刪除</div>
                                </li>

                                {ticket.map((item, idx) => {
                                    let errorMsg = "" ;
                                    const subTotal = item.coins * item.itemVal;
                                    t.total += item.isSelected ? subTotal : 0;
                                    t.num += item.isSelected ? 1 : 0;
                                    errorMsg = item.outStockMsg ? item.outStockMsg : (item.exchangeLimit && (item.exchangeLimitMax < item.itemVal))  ? `最多兌換${item.exchangeLimitMax}組` : "";
                                    return (
                                        <li key={idx}>
                                            <div className={`check ${item.isSelected === true ? 'active' : ''}`}
                                                 ><span onClick={() => this.toggleItem(item.itemId)}></span></div>
                                            <div className="name">
                                                <div className="thumb"><CoverImage src={item.imageURL}/></div>
                                                <h2>{item.name}</h2>
                                                <h3>{item.subtitle}</h3>
                                            </div>
                                            <div className="price">{item.coins}</div>
                                            <div className="amount">
                                                <span className="minus" onClick={() => this.decItemVal(item.itemId)}/>
                                                {item.itemVal}
                                                <span className="plus" onClick={() => this.incItemVal(item)}/>
                                                {errorMsg && errorMsg!=="" ? <ErrorMsg msg={errorMsg} classname="errmsg"/> : ""}
                                            </div>
                                            <div className="total">{subTotal}</div>
                                            <div className="delete">
                                                <span onClick={() => this.removeItem(item.itemId)}></span>
                                            </div>
                                        </li>
                                    )
                                })}

                                <li className="result">
                                    <div className={`check ${this.state.ticketSelectAll ? 'active' : ''}`}>
                                        <span onClick={() => this.toggleSelectAll('ticketSelectAll')} />
                                    </div>
                                    <div className="name" >
                                        全選 <span onClick={() => this.removeAll('ticket')}>移除所有商品</span>
                                    </div>
                                    <div className="price">共<span>{t.num}</span>件</div>
                                    <div className="amounth">合計點數</div>
                                    <div className="total">{t.total}</div>
                                </li>

                            </ul>
                        </div>
                        {!isEmpty(filter(ticket, (i) => i.isSelected)) ?
                            <Contact>
                                <h2>收件人資料</h2>
                                <br/><br/>

                                <div className="multi_col">

                                    <div className="flexgroup">
                                        <label>收件姓名*</label>
                                        <div className="remark">
                                            <Field type="text" name="receiverName" component="input" placeholder="請輸入姓名"/>
                                            <p>{ get(submitErrors.toJS(), 'receiverName')}</p>
                                        </div>
                                    </div>

                                    <div className="flexgroup">
                                        <label>聯絡電話*</label>
                                        <div className="remark mmt">
                                            <h5>宅配人員將以此號碼聯繫</h5>
                                            <Field type="text" name="receiverPhone" component="input"
                                                   placeholder="請輸入聯絡電話"/>
                                            <p>{ get(submitErrors.toJS(), 'receiverPhone')}</p>
                                        </div>
                                    </div>

                                </div>
                                <br/><br/>
                                <div className="multi_col">

                                    <div className="flexgroup">
                                        <label>收件地址*</label>
                                        <div className="remark">
                                            <h5>實體商品將以此通訊地址寄送</h5>
                                            <Field name="receiverCounty" component="select"
                                                   onChange={e => this.changeCity(e.target.value)}>
                                                <option value="-1">縣市</option>
                                                {this._citiesRender(cities)}
                                            </Field>
                                            <p>{ get(submitErrors.toJS(), 'receiverCounty')}</p>
                                        </div>
                                        <div className="flexgroup">
                                            <div className="remark">
                                            <Field name="receiverTownship" component="select">
                                                <option value="-1">區域</option>
                                                {this._areasRender(areas)}
                                            </Field>
                                            <p>{ get(submitErrors.toJS(), 'receiverTownship')}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flexgroup">
                                        <div className="remark">
                                        <Field type="text" name="receiverAddress" component="input"
                                               placeholder="請輸入收件地址"/>
                                        <p>{ get(submitErrors.toJS(), 'receiverAddress')}</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="checkbox_Area">
                                    <Field name="updateToUserProfile" type="checkbox"
                                           component="input"/> 將此收件地址同步更新至會員資料 (同步後仍保有修改之權利)
                                </div>

                            </Contact>
                            : ""}

                    </Container> : ""}
            </div>

        )
    }
}


function mapStateToProps(state) {
    return {
        cities: state.data.common.get('LOCATION'),
        areas: state.data.common.get('AREA'),
    }
}

export default connect(mapStateToProps, {
    exchangeListAction,
    getLocationInfo,
    getAreaInfo,
})(Record);

/**
 * @param collection
 */
function calSubTotal(collection) {
    let sub = {total: 0, subTotal: 0, num: 0}
    let subTotalCoins = 0;
    let subNum = 0;
    collection.forEach((item) => {
        if (item.isSelected) {
            subTotalCoins += (item.coins * item.itemVal);
            subNum += 1
        }
    });

    return {subTotalCoins, subNum}
}