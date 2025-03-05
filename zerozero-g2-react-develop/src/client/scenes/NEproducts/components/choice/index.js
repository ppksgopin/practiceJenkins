import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {awsUrl} from '../../../../utils/awsFile';
import {
    CarAppointmentRoute,UserSummaryRoute
} from '../../../../commons/routePaths' ;

import theme from '../.././../../styles/theme';
import {bound} from '../../../../styles/commons/index';
import {opacity, transition, borderRadius, translate, box} from '../../../../styles/mixins/index';


const Actions = styled.div `
    width:100%;
    margin:-50px auto 0;
    text-align:center;
    background:${theme.colors.gray};
    padding:50px 0 100px;

    .main{
        font-size:40px;
        line-height:1.5;
        color:#fff;
        letter-spacing:0.125em;
        margin-bottom:40px;
        @media (max-width: ${theme.medias.phablet}) {
          font-size:24px;
        }
    }

    ul{
        ${bound};
        white-space:nowrap;
        overflow:auto;
        li{
            display:inline-block;
            background:#fff;
            ${borderRadius("8px")};
            width:400px;
            margin:40px;
            padding-bottom:50px;

            overflow:hidden;

            @media (max-width: ${theme.medias.phablet}) {
                width:47%;
                margin:1%;
                padding-bottom:30px;
            }
            
            h3{
                font-size:35px;
                color:#fff;
                line-height:1.8;
                padding:50px 0 70px;
                background:#c0cfd4;
                ${transition("all", ".3s")};
                span{
                    display:block;
                    font-size:24px;
                    line-height:50px;
                    &::before{
                        content:"";
                        width:20px;
                        height:2px;
                        background:#fff;
                        display:block;
                        margin:0px auto 20px;
                    }
                }

                @media (max-width: ${theme.medias.phablet}) {
                    padding:30px 0 50px;
                    font-size:16px;
                    span{
                        font-size:14px;
                        line-height:30px;
                    }
                }
            }
            a{
                display:inline-block;
                font-size:16px;
                padding:0 20px;
                line-height:40px;
                height:40px;
                color:#fff;
                background:${theme.colors.gray};
                ${borderRadius("8px")};
                ${transition("all", ".3s")};
                text-decoration:none;

                margin:5px;
                margin-top:-10px;
                cursor:pointer;
                &:hover{
                    background:${theme.colors.blue};
                }

                @media (max-width: ${theme.medias.phablet}) {
                  font-size:14px;
                  line-height:30px;
                    height:30px;
                    padding:0 10px;
                }
            }

            .icon{
                width:100px;
                height:100px;
                ${borderRadius("100%")};
                position:relative;
                top:-50px;
                background:${theme.colors.gray} url(${awsUrl("car_quotation.png")}) no-repeat center center;
                background-size:50px 40px;
                margin:0 auto;
                ${transition("all", ".3s")};
            }

            &:last-child{
                .icon{
                    background:${theme.colors.gray} url(${awsUrl("car_reservation.png")}) no-repeat center center;
                    background-size:42px 48px;
                }
            }

            @media (max-width: ${theme.medias.phablet}) {
                .icon{
                    width:60px;
                    height:60px;
                    top:-30px;
                    background-size:30px 24px;
                }
                &:last-child{
                    .icon{
                        background-size:25px 29px;
                    }
                }
            }

            &:hover{
                h3{
                    background:${theme.colors.blue};
                }
                .icon{
                    background-color:${theme.colors.blue};
                }
            }

        }
    }

`

const Modal = styled.div `
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:99999;
    ${opacity(0)};
    animation-name: fadeIn;
    animation-duration: .5s;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards;

    @keyframes fadeIn {
        100% {
            ${opacity(1)};
        }
    }

    .container{
        position:absolute;
        top:50%;
        left:50%;
        width:90%;
        max-width:800px;
        max-height:90%;
        background:#fff;
        ${box};
        padding:50px 0px;
        text-align:center;
        ${translate("-50%", "-50%")};
        ${borderRadius("8px")};
        ${transition("all", ".5s")};

        .close{
            position:absolute;
            top:5px;
            right:5px;
            width:40px;
            height:40px;
            line-height:40px;
            text-align:center;
            font-size:24px;
            color:#ccc;
            cursor:pointer;
            &::before{
                content:"\f00d";
                font-family: FontAwesome;
            }
            &:hover{
                color:${theme.colors.blue};
            }
        }

        .main{
            font-size:20px;
            color:${theme.colors.gray};
            margin-bottom:30px;
            line-height:1.5;
        }

        .selection{
            > a{
                display:inline-block;
                text-decoration:none;
                font-size:16px;
                line-height:40px;
                height:40px;
                margin:5px 10px;
                color:#fff;
                width:220px;
                background:${theme.colors.blue};
                ${borderRadius("8px")};
                cursor:pointer;

                &:last-child{
                    background:${theme.colors.gray};
                }
            }
        }
    }

    .overlay{
        width:100%;
        height:100%;
        background:rgba(0,0,0,.7);
    }
`

const List = styled.ul `

  display: block;
  width: 100%;
  padding:10px;
  max-width:800px;
  margin:0 auto;
  max-height:300px;
  overflow:auto;
  text-align:left;
  ${box};

  li {
      width: 100%;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      padding: 10px 20px;
      padding-left:135px;
      background: #fff;
      position:relative;
      height:120px;
      overflow:hidden;
      cursor:pointer;
      ${box};
      ${borderRadius("8px")};
      font-weight:100;

      &::after{
        content:"";
        position:absolute;
        z-index:0;
        top:0;
        left:0;
        width:120px;
        height:100%;
        background:#ddd;
        pointer-events:none;
      }

      .date{
        font-size:14px;
        color:${theme.colors.gray};
        line-height:30px;
        border-bottom:1px solid #eee;
        padding-bottom:5px;
        margin-bottom:5px;
      }

      .title{
        font-size:24px;
        color:#333;
        line-height:1.5;
      }
      .id{
        font-size:14px;
        color:${theme.colors.gray};
        line-height:1.5;
        span{
          color:${theme.colors.green};
        }
      }

      .status{
        position:absolute;
        top:10px;
        right:20px;
        font-size:14px;
        color:#fff;
        background:${theme.colors.red};
        line-height:30px;
        padding:0 15px;
        ${borderRadius("8px")};
      }

      &.elec{
        &::after{
          background:#14d095 url(${awsUrl("list_icon_elec.png")}) no-repeat center center;
          background-size:42px 70px;
        }
      }

      &.car{
        &::after{
          background:#1aa397 url(${awsUrl("list_icon_car.png")}) no-repeat center center;
          background-size:79px 51px;
        }
      }

  }

  @media (max-width: ${theme.medias.phablet}) {
    padding:5px 0;
    min-height:60vh;
    li {
      height:auto;
      ${borderRadius("0")};
      margin-bottom:5px;
      padding: 10px;
      padding-left:115px;

      &::after{
        width:100px;
      }

      .title{
        font-size:18px;
      }
      .status{
        right:10px;
        padding:0 8px;
      }
    }
  }
}
`

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
        }
        this._openModal = this._openModal.bind(this);
    }

    _openModal(e) {
        this.setState({
            "isModal": !this.state.isModal,
        })
    }


    render() {
        return (
            <div>
                <Actions id="actions">
                    <ul>
                        <li>
                            <h3><span>報廢回收</span>汽機車詢價</h3>
                            <div className="icon"/>
                            <Link to={{pathname: CarAppointmentRoute()}}>立即詢價</Link>
                        </li>
                        <li>
                            <h3><span>報廢回收</span>汽機車報廢</h3>
                            <div className="icon"/>
                            <a onClick={(e) => this._openModal(e)}>立即預約</a>
                        </li>
                    </ul>
                </Actions>

                {this.state.isModal ?
                    <Modal>
                        <div className="container">

                            <div className="main">您是否已使用廢車王詢價功能？</div>

                            <div className="selection">
                                <Link to={{pathname: UserSummaryRoute('CAR')}}>已使用，選擇詢價單</Link>
                                <Link to={{pathname: CarAppointmentRoute()}}>未使用，立即詢價</Link>
                            </div>
                            <div className="close" onClick={(e) => this._openModal(e)}/>
                        </div>
                        <div className="overlay" onClick={(e) => this._openModal(e)}/>
                    </Modal>
                    : ""}


            </div>);
    }
}

export default Reservation;
