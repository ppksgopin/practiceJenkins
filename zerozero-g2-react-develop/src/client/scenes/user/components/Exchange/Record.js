import React, {Component} from 'react';
import { isEmpty } from 'lodash';
import moment from "moment";
import shortid from 'shortid';
import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {bound, userForm, sectionTitle, buttons,pageMenu,subPageMenu} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import {awsUrl} from '../../../../utils/awsFile';

import CoverImage from '../../../common/components/CoverImage';


const Container  = styled.li `

    border:1px solid #ddd;
    ${borderRadius('8px')};
    ${box};
    overflow:hidden;
    margin-bottom:20px;

    >.mainheader{
        height:40px;
        background:${theme.colors.gray};
        >div{
          text-align:center;
          float:left;
          line-height:40px;
          color:#fff;
          &.action,&.balance{
            &::before,&::after{
              display:none;
            }
          }
        }
        &::after{
          ${clearfix};
        }
    }
    >.brief{
        min-height:60px;
        padding:17px 0;
        ${box};
        >div{
          text-align:center;
          float:left;
          font-size:14px;
          color:${theme.colors.gray};
          line-height:26px;
          &.action{
            color:${theme.colors.blue};
            cursor:pointer;
          }
          &.balance{
            font-size:16px;
            color:${theme.colors.red};
          }
        }
        &::after{
          ${clearfix};
        }
    }

    >.detail{
        width:90%;
        margin:0 auto;

        .contact{
          margin-bottom:20px;
          padding:0 20px;
          ${box};
          h3{
            font-size:14px;
            line-height:1.5;
            color:${theme.colors.gray};
            margin-bottom:10px;
          }
          p{
            font-size:14px;
            line-height:1.5;
            color:#999;
          }
        }

        >ul{
          margin-bottom:20px;
          >li{
            font-size:14px;
            color:${theme.colors.gray};
            line-height:26px;
            padding:15px 20px;
            border-bottom:1px dashed #ccc; 

            ${box};
            &.header{
              border-bottom:1px solid #ccc; 
              .name{
                padding-left:0;
              }
              .total{
                &::before{
                  display:none;
                }
              }
              >div{
                min-height:0;
              }
            }
            &:last-child{
              border-bottom:1px solid #ccc; 
            }
            >div{
              float:left;
              min-height:60px;
              &.name{
                width:calc(100% - 400px);
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
              &.amount{
                width:100px;
                text-align:center;
              }
              &.total{
                width:150px;
                text-align:center;
                color:${theme.colors.red};
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
              &.checkOrder{
                width:150px;
                text-align:center;
                span{
                  cursor: pointer;
                  text-decoration:none;
                  color:${theme.colors.gray};
                  &::before{
                    content:"\f002 查看";
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
    .date{
        width:200px;
    }
    .balance{
        width:120px;
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
    .action{
        width:180px;
        &::after{
          content:"\f078";
          font-family:"fontawesome";
          margin-left:5px;
        }

        &.expand{
          &::after{
            content:"\f077";
          }
        }
    }
    .id{
        width:calc(100% - 500px);
    }
    @media (max-width: ${theme.medias.phablet}) {
        padding:50px 10px 0;
        position:relative;
        >.mainheader{
            display:none;
        }
        .date{
            width:calc(100% - 90px);
            &::before{
                content:"兌換日期 ";
            }
        }
        .balance{
            width:90px;
            text-align:right !important;
        }
        .id{
            width:100%;
            position:absolute;
            top:0;
            left:0;
            padding:10px 10px;
            height:50px;
            background:${theme.colors.gray};
            color:#fff !important;
            text-align:left !important;
            ${box};
            &::before{
                content:"訂單編號 ";
            }
        }
        .action{
            margin-top:20px;
            width:100%;
        }

        >.detail{
            border-top:1px solid #ddd;
            width:100%;

            .contact{
                padding:0;
            }

            >ul{

              >li{
                padding-left:70px;

                &.header{
                  display:none;
                }

                >div{
                  float:none;
                  min-height:0;

                  &.name{
                    width:100%;
                    padding-left:0;

                    .thumb{
                      left:-70px;
                    }
                  }
                  &.amount{
                    width:auto;
                    text-align:left;
                    display:inline-block;
                    margin-right:30px;
                    &::before{
                        content:"數量　";
                    }
                  }
                  &.total{
                    display:inline-block;
                    width:auto;
                    text-align:left;
                  }
                  &.check{
                    margin-top:10px;
                    width:100%;
                    text-align:left;
                    a{
                      &::before{
                        content:"\f002 查看票券";
                      }
                    }
                  }
                }
              }
            }
        }
    }
    
`

class Record extends Component  {

    constructor(props) {
        super(props);

        this.state = {
            expand: false,
        };

        this.toggleExpand = this.toggleExpand.bind(this);
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    toggleExpand() {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { record, route } = this.props ;

        return (
            <Container>
                <div className="mainheader">
                  <div className="date">兌換日期</div>
                  <div className="id">訂單編號</div>
                  <div className="balance">Z幣</div>
                  <div className="action"></div>
                </div>
                <div className="brief">
                  <div className="date">{record.exchangeDate && moment(record.exchangeDate).format('YYYY/MM/DD')}</div>
                  <div className="id">{record.id}</div>
                  <div className="balance">{record.totalCoins}</div>
                  <div className={this.state.expand?"action expand":"action"} onClick={e => this.toggleExpand()}>{this.state.expand?"收合明細":"展開明細"}</div>
                </div>
                {this.state.expand === true && (
                    <div className="detail">
                      <ul>
                        <li className="header">
                          <div className="name">商品品項</div>
                          <div className="amount">數量</div>
                          <div className="total">合計</div>
                          <div className="check">查看票券</div>
                        </li>
                          { record.items.map(item => {
                              return(
                                  <li key={shortid.generate()}>
                                      <div className="name">
                                          <div className="thumb"><CoverImage src={item.photo}/></div>
                                          <h2>{item.name}</h2>
                                          <h3>{item.subtitle}</h3>
                                      </div>
                                      <div className="amount">1</div>
                                      <div className="total">{item.zcoins}</div>
                                      <div className="checkOrder"><span onClick={ () => route.push(`/exchange/record/${item.orderItemId}`)} /></div>
                                  </li>
                              )
                          })}
                      </ul>
                        { !isEmpty(record.receiverName) && !isEmpty(record.receiverPhone) && !isEmpty(record.receiverAddress)
                            ? <div className="contact">
                                <h3>收件人資訊</h3>
                                <p>收件人姓名：{record.receiverName}</p>
                                <p>聯絡電話：{record.receiverPhone}</p>
                                <p>收件地址：{record.receiverAddress}</p>
                            </div> : undefined
                        }

                    </div>
                )}
            </Container>
        )
    }
}



export default Record;
