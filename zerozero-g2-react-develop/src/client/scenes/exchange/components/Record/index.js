import React, {Component} from 'react';
import shoirt from 'shortid';
import {Helmet} from 'react-helmet';
import { isEmpty } from 'lodash';
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {compose, lifecycle} from 'recompact';
import ReactHtmlParser from 'react-html-parser';
import QRCode from 'qrcode.react';
import copy from 'copy-to-clipboard';
import {toDate} from '../../../../utils/dateTimeConverter';

import styled,{css} from 'styled-components';

import PageTitle from '../../../common/components/PageTitle';
import Zcoin from '../../../common/components/Zcoin';
import Avatar from '../../../common/components/Avatar';
import Button from '../../../common/components/Button';
import LabelSelectBox from '../../../common/components/LabelSelectBox';
import LabelTextInput from '../../../common/components/LabelTextInput';
import BlueButton from '../../../common/components/BlueButton';
import RedButton from '../../../common/components/RedButton';
import ErrorMsg from '../../../common/components/ErrorMsg';
import theme from '../../../../styles/theme';
import {bound, appointmentForm, sectionTitle, pageMenu,buttons} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import {awsUrl} from '../../../../utils/awsFile';
import ConfirmModal from '../../../common/components/ConfirmModal';
import CoverImage from '../../../common/components/CoverImage';
import BarcodeModal from '../../../common/components/BarcodeModal';

import Barcode from 'react-barcode';
//import * as actions from './action';
import {exchangeVerify, getRecord} from './action'


const Buttons = styled.div `
    ${buttons}

`

const BackButton = styled.div `
  width: 100%;
  max-width:350px;
  margin: 0 auto;
  margin-bottom: 20px;

  span{
    display:block;
    width: 100%;
    height: 50px;
    font: inherit;
    font-size: 18px;
    font-weight:300;
    line-height: 50px !important;
    text-align: center;
    color:${theme.colors.gray};
    text-decoration:none;    
    cursor: pointer;
  }
`

const SectionTitle = styled.div `
  ${sectionTitle};
`
const AppointmentForm = styled.form `
  ${appointmentForm};
  max-width: 1000px;
  .wording a{
    white-space:normal;
  }
  p{
    margin-left:16px;
    }
`

const ItemInfo = styled.div `
.item{
    width:100%;
    max-width:450px;
    padding:0 0 10px;
    margin:0 auto;
    @media (max-width: ${theme.medias.phablet}) {
        padding:0 0 10px;
    }
    .hint{
      font-size:14px;
      line-height:40px;
      text-align:center;
      color:#778184;
      margin-bottom:10px;
      margin-top:-20px;
    }

    .type {
          display: inline-block;
          font-size: 14px;
          line-height: 30px;
          height: 30px;
          color: #fff;
          background: ${theme.colors.red};
          padding: 0 15px;

          ${borderRadius('15px')};

          float: left;
          //font-weight: bold;
    }

    .item_brief {
        clear: both;
        font-size: 16px;
        color: #333;
        line-height: 1.6;
        padding-top: 15px;
        margin-bottom:15px;

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
            
          }
          .subtitle{
            display:block;
            margin-top:15px;
            font-size:14px;
            
          }
          .balance {        
            display:block;
            margin-top: 30px;
            text-align: left;
            font-size: 16px;
            line-height:25px;
            letter-spacing:0.125em;
            &::before{
              content:"";
              display:inline-block;
              width:20px;
              height:25px;
              vertical-align:top;
            }
          }
          .expire_date{
              font-size:14px;
              color:${theme.colors.gray};
              line-height:1.6;
              margin-top:5px;
              display:block;
              &::before{
                  content:"\f017";
                  font-family: FontAwesome;
                  margin-right:5px;
              }
          }

        } 
    }

    &.deduct {    
          .type {
              background: ${theme.colors.red};
          }

          .balance {
              color: ${theme.colors.red};
              &::before{
                background: url(${awsUrl("zcoin_pink.png")}) no-repeat center left;
                background-size:13px 13px;
              }
          }
    }

    &.exchange {
        .type {
            background: ${theme.colors.gray};
        }

        .balance {
            color: ${theme.colors.red};
            &::before{
              background: url(${awsUrl("zcoin_pink.png")}) no-repeat center left;
              background-size:13px 13px;
            }
        }
    }

    &.topup {
        .type {
            background: ${theme.colors.green};
        }

        .balance {
            color: ${theme.colors.green};
            &::before{
              background: url(${awsUrl("zcoin_green.png")}) no-repeat center left;
              background-size:13px 13px;
            }
        }
    }

    > div{
        ${box};

        &.barcode{
            text-align:center;
            margin-top:50px;

            > svg{
                max-width:100%;
            }
        }
        &.info{
            text-align:center;

            .wording a{
              white-spacing:normal;
            }

            table{
                line-height:1.5;
                font-size:14px;
                color:${theme.colors.gray};
                width:100%;
                text-align:left;
                

                td,th{
                  padding:10px;
                    border:1px solid #ddd;
                    word-break:break-all;

                    span{
                      float:right;
                      background:${theme.colors.gray};
                      color:#fff;
                      font-size:12px;
                      line-height:21px;
                      padding:0 4px;
                      ${borderRadius("4px")};
                      cursor:pointer;
                      margin-left:8px;
                      &.copied {

                        background: ${theme.colors.green}
                      }
                    }
                    
                }

                th{
                  min-width:85px;
                    text-align: center;
                }

                tr:nth-child(even){
                    td,th{
                        //background:#f8f8f8;
                    }
                }
            }
        }
    }
}
`

const Balance = styled.div `
    
    .caculate{
        margin-top:30px;
         > p{
            text-align:center;
            font-size:14px;
            color:#333;
            line-height:1.5;
            span{
                color:${theme.colors.green};
            }
            margin-bottom:5px;
        }
    }

`

class Record extends Component {


    constructor(props) {
        super(props);
        this.state = {
            toggleConfirmModal:false,
            barcodeModalisOpen:false,
            copied:false,
        }
        this.toggleBarcodeModal = this.toggleBarcodeModal.bind(this);
        this.copyCodeToClipboard = this.copyCodeToClipboard.bind(this);
        this.renderReceiverInfo = this.renderReceiverInfo.bind(this);
    }

    componentDidMount() {
        const recordId = this.props.match.params['recordId'];
        this.props.getRecord(recordId);
        this.renderVerifyButton = this.renderVerifyButton.bind(this);
        this.verifyVoucher = this.verifyVoucher.bind(this);
    }

    verifyVoucher(recordId) {
        const { history } = this.props;
        //this.props.verifyForCode3(recordId, history);
        this.props.exchangeVerify(recordId, history);
    }

    renderVerifyButton(record) {
        if(record.verifyMethod === 3 && record.status === 1){
            return (
                <div>
                    <BlueButton type='button' onClick={e => {
                        this.setState({toggleConfirmModal:!this.state.toggleConfirmModal});
                    }}>
                        標記為已使用
                    </BlueButton>
                </div>
            )
        } else if(record.verifyMethod === 4 && record.status === 1) {
            return (
                <Buttons>
                    <BlueButton type='button' onClick={e => {
                        this.setState({toggleConfirmModal:!this.state.toggleConfirmModal});
                    }}>
                        標記為已使用(店員專用按鈕)
                    </BlueButton>
                </Buttons>
            )
        }
    }

    toggleBarcodeModal() {
        this.setState({barcodeModalisOpen: !this.state.barcodeModalisOpen});
    }

    copyCodeToClipboard(text) {
        //copy(text);
        // console.log('copy text: ', text);
        this.setState(preState => {
            return {
                ...preState,
                copied: true,
            }
        }, () => copy(text))
    }

    renderReceiverInfo() {
        const record = this.props.record && this.props.record.toJS();
        return [{type: '收件人姓名', value: record.receiverName}, {type: '聯絡電話', value: record.receiverPhone}, {type: '收件地址', value: record.receiverAddress}].map(i => {
            return (
                <tr key={shoirt.generate()}>
                    <th>{i.type}</th>
                    <td>{i.value}</td>
                </tr>
            )
        })
    }

    render() {

        const record = this.props.record && this.props.record.toJS();
        // console.log('isEmpty code1', isEmpty(record.code1), 'seqNo:', record.seqNo, 'conponType:', record.conponType === 'text');
        //console.log('record:', record);
        return (
            <div>
                <Helmet>
                    <title>兌換中心-兌換詳情</title>
                </Helmet>

                <PageTitle title="兌換詳情"/>

                <AppointmentForm>
                    <div className="block">
                        <div className="block_title third">您兌換的商品如下</div>

                        <ItemInfo>
                            <div className="item exchange">
                                <div className="type">{record.statusName}</div>
                                <div className="item_brief">
                                    <div className="photo"><div><CoverImage src={record.photo}/></div></div>
                                    <div className="info">
                                        <span className="name">{record.name}</span>
                                        <span className="subtitle">{record.subtitle}</span>
                                        <span className="balance">{record.zcoins}</span>
                                        <span className="expire_date">使用期限 : {toDate(record.expireDate)}</span>
                                    </div>
                                </div>


                            </div>
                        </ItemInfo>



                        <div className="dashed-split"/>

                        <ItemInfo>
                            <div className="item">


                                <div className="info">


                                    {/*<div className="seqid">商品序號 <span>{record.itemGUID}</span></div>*/}

                                    { record.couponType === 'barcode' ?
                                        <div className="barcode" onClick={this.toggleBarcodeModal}>
                                            <div className="hint">【請出示此畫面給店員】</div>
                                            {
                                                record.code1 &&
                                                <Barcode
                                                    value={record.code1}
                                                    displayValue={true}
                                                    height={85}
                                                />
                                            }
                                            {
                                                record.code2 &&
                                                <Barcode
                                                    value={record.code2}
                                                    displayValue={false}
                                                    height={85}
                                                />

                                            }
                                            {
                                                record.code3 &&
                                                <Barcode
                                                    value={record.code3}
                                                    displayValue={false}
                                                    height={85}
                                                />
                                            }
                                        </div> : ""
                                    }
                                    {
                                        record.couponType === 'qrcode' ?
                                            (
                                                <div className="qr">
                                                    <div className="hint">【請出示此畫面給店員】</div>
                                                    <QRCode value={record.code1} size={230}/>
                                                </div>
                                            ) : ""
                                    }
                                    <br /><br />
                                    <table>
                                        <tr>
                                            <th>兌換序號</th>
                                            {record.itemType === 1 && record.couponType === 'url' ? ( //URL
                                            <td>
                                                <span className={this.state.copied ? "copied" : ""} onClick={() => this.copyCodeToClipboard(record.seqNo)} >複製</span>
                                                <a href={record.seqNo} target="_blank">{ record.seqNo }</a>
                                            </td>
                                            ): <td>
                                                <span className={this.state.copied ? "copied" : ""} onClick={() => this.copyCodeToClipboard(record.seqNo)} >複製</span>
                                                { isEmpty(record.seqNo) ? "" : record.seqNo }
                                            </td>
                                            }

                                            {/*{//20210525 ZZG2-2222
                                                record.itemType === 1 && record.couponType === 'url' && ( //URL
                                                    <td>
                                                        <span className={this.state.copied ? "copied" : ""} onClick={() => this.copyCodeToClipboard(record.code1)} >複製</span>
                                                        <a href={record.code1} target="_blank">{ record.code1 }</a>
                                                    </td>
                                                )
                                            }
                                            {
                                                record.itemType === 1 && record.couponType === 'text' && ( //Text
                                                    <td>

                                                        <span className={this.state.copied ? "copied" : ""} onClick={() => this.copyCodeToClipboard(isEmpty(record.code1) ? "" : record.code1)}>複製</span>
                                                        { isEmpty(record.code1) ? "" : record.code1 }
                                                    </td>
                                                )
                                            }
                                            {
                                                (record.itemType === 2 || (record.itemType === 1 && ['barcode', 'qrcode'].includes(record.couponType))) && (//實體商品、Qrcode、Barcode
                                                    <td>

                                                        <span className={this.state.copied ? "copied" : ""} onClick={() => this.copyCodeToClipboard(record.code1)} >複製</span>
                                                        { isEmpty(record.code1) ? "" : record.code1 }
                                                    </td>
                                                )
                                            }*/}
                                        </tr>
                                        {
                                            record.storeUrl ?
                                              (
                                                <tr>
                                                    <th>商城網址</th>
                                                    <td><a href={record.storeUrl} target="_blank">{record.storeUrl}</a></td>
                                                </tr>
                                              ) : undefined
                                        }

                                        <tr>
                                            <th>使用期限</th>
                                            <td>{toDate(record.expireDate)}</td>
                                        </tr>
                                        <tr>
                                            <th>票券編號</th>
                                            <td>{record.id}</td>
                                        </tr>

                                        { record.itemType === 2  && this.renderReceiverInfo() }

                                    </table>
                                </div>
                            </div>
                        </ItemInfo>


                        <div>
                            {/*<BlueButton>標記為已使用</BlueButton>*/}
                            {this.renderVerifyButton(record)}

                            {
                                this.state.toggleConfirmModal && (
                                    <ConfirmModal
                                        title='標記為已使用'
                                        content='點擊「確定」後，兌換券將無法回復。'
                                        yesText='確認'
                                        cancelText='取消'
                                        yesCallback={e => this.verifyVoucher(record.id)}
                                        cancelCallback={(e) => {
                                            this.setState({toggleConfirmModal: !this.state.toggleConfirmModal},
                                                () => console.log('Cancel Callbackk')
                                            )
                                        }}
                                    />
                                )
                            }

                            <BackButton><span onClick={() =>  this.props.history.push('/user/exchange')}>返回我的兌換</span></BackButton>
                        </div>


                        <div className="dashed-split"/>

                        <div style={{ "textAlign":"left"}}>
                            <h3 style={{"color":"#a5bbc2", "font-weight":"400px", "margin-bottom":"10px"}}>電子卷使用須知：</h3>
                            {ReactHtmlParser(record.itemDescription)}
                        </div>
                    </div>

                    <br/><br/>
                </AppointmentForm>
                {this.state.barcodeModalisOpen ?
                  <BarcodeModal
                    bc1={record.code1}
                    bc2={record.code2}
                    bc3={record.code3}
                    onRequestClose={this.toggleBarcodeModal}
                  >
                  </BarcodeModal>:
                ""}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        record: state.exchange.record.get("RECORD"),
    }
}

export default connect(mapStateToProps, { getRecord,  exchangeVerify})(Record);


function isValidHttp(value) {
    let url ;
    try{
        url = new URL(value)
    }catch (e) {
        return false
    }
    return url.protocol === 'http:' || url.protocol === 'https:'
}
