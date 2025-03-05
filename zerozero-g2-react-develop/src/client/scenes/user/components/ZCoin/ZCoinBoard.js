import React, { Component } from 'react';
import { forIn } from 'lodash';
import shortid from 'shortid';
import styled from "styled-components";
import {bound} from "../../../../styles/commons";
import theme from "../../../../styles/theme";
import {awsUrl} from "../../../../utils/awsFile";
import BlueButton from "../../../common/components/BlueButton";


const ZcoinBoard = styled.div `

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
      line-height: 35px;
      &::before{
        content:"";
        width:18px;
        height:18px;
        margin-right:5px;
        margin-top: -3px;
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
      padding-top:25px;
      .des,.zc{
        display:inline-block;
        vertical-align:middle;
      }
      .des{
        margin-right:5px;
      }
      .zc{
        font-size: 16px;
        &::before{
          width:16px;
          height:16px;
          background-size:16px 16px;
        }
      }
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


class ZCoinBoard extends Component {

    constructor(props){
        super(props);
        this.renderClassified = this.renderClassified.bind(this);
    }

    renderClassified(){
        const { totalRecord: { total, classified } } = this.props  ;
        let data = [];
         forIn(classified, (value, key) => {
            //console.log('key: ', key, 'value: ', value);
             data.push(
                 <div key={shortid.generate()}>
                    <div className="des">{`${key} 前到期`}</div>
                    <div className="zc">{value}</div>
                 </div>
             )
        });

        return data ;
    }

    render() {
        const { totalRecord: { total, classified }, history, showCoinBtn=true} = this.props  ;
        //console.log('classified: ', this.props );
        return(
            <ZcoinBoard>
                <div className="info">
                    <div className="current">
                        <div className="des">您目前的Z幣</div>
                        <div className="zc">{total}</div>
                    </div>
                    <div className="expire">
                        <div className="group">
                            { this.renderClassified() }
                        </div>
                    </div>
                </div>

                {showCoinBtn ? <BlueButton onClick={() => history.push('/events/dyna/z-point?zerobanner')}>快速集Z幣</BlueButton> : undefined }

            </ZcoinBoard>
        )
    }
}

export default ZCoinBoard