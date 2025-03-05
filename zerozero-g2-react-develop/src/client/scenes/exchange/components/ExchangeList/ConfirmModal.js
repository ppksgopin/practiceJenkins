import React, {Component} from 'react';

import styled from 'styled-components';
import {borderRadius, box, opacity, transition, translate} from '../../../../styles/mixins';
import theme from '../../../../styles/theme';
import {awsUrl} from '../../../../utils/awsFile';

const Modal = styled.div`
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
        max-width:500px;
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
            font-size:24px;
            color:${theme.colors.gray};
            margin-bottom:30px;
            line-height:1.5;
        }

        p{
            font-size:16px;
            color:${theme.colors.gray};
            line-height:1.5;
            margin-bottom:30px;

            span{
                color:${theme.colors.green};
            }
        }

        .selection{
            > div{
                display:inline-block;
                font-size:16px;
                line-height:40px;
                height:40px;
                margin:5px;
                color:#fff;
                width:220px;
                background:${theme.colors.blue};
                ${borderRadius("8px")};
                cursor:pointer;

                &.cancel{
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

const ZcoinBoard = styled.div`

  padding-bottom:30px;
  
  .current{
    display:inline-block;
    text-align:left;
    >div {
      font-size: 16px;
      color: ${theme.colors.gray};
      line-height: 1.4;
      margin-bottom:10px;

      span{
          color: ${theme.colors.red};
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

  
  
  .info{
    display:flex;
    justify-content: center;
    align-items:center;
  }


  @media (max-width: ${theme.medias.phablet}) {
    width:90%;
    margin:0 auto;

  }
`

class ConfirmModal extends Component {

    render() {

        const {toggle, total, totalCoins} = this.props;
        const remainder = total - totalCoins;
        return (
            <Modal>
                <div className="container">

                    <div className="main">您即將送出兌換<br/>請再次確認資訊</div>
                    <ZcoinBoard>
                        <div className="info">
                            <div className="current">
                                <div>本次兌換Z幣：<span>{totalCoins}</span></div>
                                <div>即將剩餘Z幣：<span>{remainder}</span></div>
                            </div>
                        </div>
                    </ZcoinBoard>
                    <div className="selection">
                        <div className="cancel" onClick={() => toggle()}>取消</div>
                        {remainder < 0 ?
                            <div className="cancel">餘額不足</div>
                            : <div onClick={() => toggle('submit')}>確認送出</div>
                        }
                    </div>
                </div>
                <div className="overlay"/>
            </Modal>
        )
    }
}


export default ConfirmModal;
