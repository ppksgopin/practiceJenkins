import React, {Component} from 'react';
import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {bound, input,select} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix,translate} from '../../../../styles/mixins';
import {awsUrl} from '../../../../utils/awsFile';
import {Field} from "redux-form/immutable";
import {connect} from "react-redux";

import ErrorMsg from '../../../common/components/ErrorMsg';
import CoverImage from '../../../common/components/CoverImage.js';

const Contact = styled.div `
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

const Container  = styled.div `

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
                a{
                  color:${theme.colors.blue};
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
                a{
                  text-decoration:none;
                  color:#DDDDDD;
                  &::before{
                    font-size:18px;
                    content:"\f096";
                    font-family:"fontawesome";
                  }
                }

                &.active{
                  a{
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
                  ${translate("-50%","0")};
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
                a{
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
                    width:100%;
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
                      ${translate("0","0")};
                    }
                    
                  }
                  &.check{
                    display:none;
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
                    a{
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
    
`

class RecordStatic extends Component  {

    constructor(props) {
        super(props);

        this.state = {
            amount:4,
        };
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {
        

        return (
            <Container>
                <div className="mainheader">
                  {this.props.typeName||"電子票券"}({this.state.amount})
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

                      <li>
                        <div className="check active"><a href="#"></a></div>
                        <div className="name">
                          <div className="thumb"><CoverImage src={awsUrl("z1.jpg")}/></div>
                          <h2>【行動電影院】我的情敵是冰箱</h2>
                          <h3>商品副標題</h3>
                        </div>
                        <div className="price">50</div>
                        <div className="amount">
                          <span className="minus"/>2<span className="plus"/>
                        </div>
                        <div className="total">100</div>
                        <div className="delete"><a href="#"></a></div>
                      </li>

                      <li>
                        <div className="check"><a href="#"></a></div>
                        <div className="name">
                          <div className="thumb"><CoverImage src={awsUrl("z1.jpg")}/></div>
                          <h2>【行動電影院】我的情敵是冰箱</h2>
                          <h3>商品副標題</h3>
                        </div>
                        <div className="price">50</div>
                        <div className="amount">
                          <span className="minus"/>2<span className="plus"/>
                        </div>
                        <div className="total">100</div>
                        <div className="delete"><a href="#"></a></div>
                      </li>

                      <li>
                        <div className="check"><a href="#"></a></div>
                        <div className="name">
                          <div className="thumb"><CoverImage src={awsUrl("z1.jpg")}/></div>
                          <h2>【行動電影院】我的情敵是冰箱</h2>
                          <h3>商品副標題</h3>
                        </div>
                        <div className="price">50</div>
                        <div className="amount">
                          <span className="minus"/>2<span className="plus"/>
                          <ErrorMsg msg="很抱歉，該商品庫存不足" classname="errmsg"/>
                        </div>
                        <div className="total">100</div>
                        <div className="delete"><a href="#"></a></div>
                      </li>

                      <li className="result">
                        <div className="check"><a href="#"></a></div>
                        <div className="name">全選 <a href="#">移除所有商品</a></div>
                        <div className="price">共<span>14</span>件</div>
                        <div className="amounth">合計點數</div>
                        <div className="total">700</div>
                      </li>
                      
                    </ul>
                  </div>
                  
                  {this.props.typeName === "實體寄送" ?
                  <Contact>
                    <h2>收件人資料</h2>
                    <br /><br />
                  
                    <div className="multi_col">

                      <div className="flexgroup">
                        <label>收件姓名*</label>
                        <input type="text" name="name" placeholder="請輸入收件者姓名"/>
                      </div>


                      <div className="flexgroup">
                        <label>聯絡電話*</label>
                        <div className="remark mmt">
                          <h5>宅配人員將以此號碼聯繫</h5>
                          <input type="text" name="phoneNumber" placeholder="請輸入聯絡電話"/>
                        </div>
                      </div>

                    </div>
                    <br /><br />
                    <div className="multi_col">

                      <div className="flexgroup">
                        <label>收件地址*</label>
                        <div className="remark">
                          <h5>實體商品將以此通訊地址寄送</h5>
                          <select>
                            <option>縣市</option>
                          </select>
                        </div>
                        <select>
                          <option>區域</option>
                        </select>
                      </div>

                      <div className="flexgroup">
                        <input type="text" name="address" placeholder="請輸入收件地址"/>
                      </div>

                    </div>

                    <div className="checkbox_Area">
                      <input type="checkbox"/> 將此收件地址同步更新至會員資料 (同步後仍保有修改之權利)
                    </div>
                    
                  </Contact>
                  :""}
                    
            </Container>
        )
    }
}



export default RecordStatic;
