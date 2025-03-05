import {awsUrl} from '../../utils/awsFile';

import styled, { css } from 'styled-components';
import theme from '../theme';
import { transition, borderRadius, box, clearfix,boxShadow,opacity } from '../mixins';

const bound = css`
  margin: 0 auto;
  width: 95%;
  max-width: ${theme.medias.maxW};
`

const input = css`
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 18px;
    color: #333;
    padding: 0 15px;
    border: 1px solid #ddd;
    background: #fff;
    margin-bottom: 20px;
    outline: none;
    min-width: 1px;
    ${borderRadius('8px')};
    ${box};
    &.error {
        border-color:${theme.colors.red} !important;
    }

    &:focus {
      border-color: #999;
    }

    &.green{
        border-color: ${theme.colors.green};
    }
    &.gray{
        border-color: ${theme.colors.gray};
    }
`
const textarea = css`
    height: 150px;
    width: 100%;
    line-height: 1.5;
    font-size: 14px;
    color: #333;
    padding: 10px 15px;
    border: 1px solid #ddd;
    background: #fff;
    margin-bottom: 20px;
    outline: none;
    min-width: 1px;
    ${borderRadius('8px')};
    ${box};
    &.error {
        border-color: ${theme.colors.red};
    }

    &:focus {
      border-color: #999;
    }
`

const sectionTitle = css`
    text-align: center;
    font-size: 18px;
    line-height: 50px;
    height:50px;
    color: #fff;
    background: ${theme.colors.gray};
    position: relative;

    ${boxShadow('0 1px 4px rgba(0, 0, 0, 0)')};

    &.green {
      background: ${theme.colors.green};
      color: #fff;
    }

    .back{
        width:50px;
        height:50px;
        position:absolute;
        z-index:100;
        top:0;
        left:0;
        font-size:25px;
        text-align:center;
        line-height:50px;
        color:#fff;
        cursor:pointer;
        &::before{
          content:"\f053";
          font-family: FontAwesome;
        }
        @media (max-width: ${theme.medias.phablet}) {
            height:40px;
            line-height:40px;
            font-size: 20px;
        }

    }
    
    @media (max-width: ${theme.medias.phablet}) {
        //height:40px;
        //line-height:40px;
        //font-size: 15px;
    }
`

const select = css`
    background-size: 6px 5px;
    border: 1px solid #ddd;
    overflow: hidden;
    color: #333;
    width: 100%;
    outline: none;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    letter-spacing:0;
    padding: 0 24px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    padding-right: 25px;
    margin-bottom: 20px;

    ${borderRadius('8px')};
    ${box};

    &::-ms-expand {
        /* for IE 11 */
        display: none;
    }

    &:focus {
        outline: none;
        border-color:#999;

    }
    &.error{
        border-color:${theme.colors.red} !important;
    }
    &.disabled{
        background: #fff;
        pointer-events:none;
    }

    &:required {
        outline: none;
        border-color:#ddd;
        box-shadow:none;
    }
`

const pageMenu = css`
    height: 50px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    text-align: center;
    margin: 0px auto 0;
    -webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar {
      display: none;
    }
    ul {
      white-space: nowrap;
      overflow: auto;
      li {
          display: inline-block;

          a {
              display: block;
              height: 50px;
              line-height: 50px;
              font-size: 16px;
              color: ${theme.colors.gray};
              text-decoration: none;
              margin: 0 10px;
              cursor:pointer;

              ${transition('all', '.3s')};

              &.car{
                &::before{
                    content:"\f1b9";
                    font-family: FontAwesome;
                    margin-right:5px;
                }
              }

              &.motorcycle{
                &::before{
                    content:"\f21c";
                    font-family: FontAwesome;
                    margin-right:5px;
                }
              }

              &.active {
                  color: ${theme.colors.blue};
              }
          }
      }
    }
`

const subPageMenu = css`
    height: 50px;
    text-align: center;
    margin: 0px auto 0;
    -webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar {
      display: none;
    }
    ul {
      white-space: nowrap;
      overflow: auto;
      padding:10px 0;
      li {
          display: inline-block;

          a {
              display: block;
              height: 30px;
              line-height: 30px;
              font-size: 14px;
              color: ${theme.colors.gray};
              text-decoration: none;
              padding: 0 10px;
              cursor:pointer;

              ${transition('all', '.3s')};

              &.active {
                  color: #fff;
                  background:${theme.colors.blue};
                  ${borderRadius('15px')};
              }
          }
      }
    }
`

const reservationForm = css`
font-weight:normal;
  display: block;
  width: 100%;
  padding:0;
  max-width:800px;
  min-height:300px;
  margin:0 auto 50px;
  background:#fff;
  border-top:none;
  padding:50px;
  ${borderRadius("0 0 8px 8px")};
  ${box};
  ${boxShadow("1px 1px 4px rgba(0,0,0,.2)")}
    .expire{
        font-size:14px;
        color:${theme.colors.red};
        text-align:center;
        line-height:40px;
        &::before{
            content:"\f017";
            font-family: FontAwesome;
            margin-right:5px;
        }
    }

  .title{
    font-size:24px;
    color:${theme.colors.blue};
    line-height:2;
    border-bottom:1px solid #ddd;
    margin-bottom:10px;
    padding-bottom:10px;

    &.inquiry{
      &::before{
        content:"\f044";
        font-family: FontAwesome;
        margin-right:8px;
      }
    }

    &.car{
      &::after{
        content:"\f1b9";
        font-family: FontAwesome;
        float:right;
        color:${theme.colors.gray};
        width:50px;
        text-align:center;
        padding-bottom:10px;
        border-bottom:3px solid #ddd;
      }
    }
    &.motorcycle{
      &::after{
        content:"\f21c";
        font-family: FontAwesome;
        float:right;
        color:${theme.colors.gray};
        width:50px;
        text-align:center;
        padding-bottom:10px;
        border-bottom:3px solid #ddd;
      }
    }
    &.quotation{
      &::before{
        content:"";
        width:35px;
        height:40px;
        display:inline-block;
        background:url(${awsUrl("icon_quotation.png")}) no-repeat left center;
        background-size:27px 27px;
        vertical-align:middle;
      }
    }
    &.reservation{
      &::before{
        content:"";
        width:35px;
        height:40px;
        display:inline-block;
        background:url(${awsUrl("icon_reservation.png")}) no-repeat left center;
        background-size:27px 27px;
        vertical-align:middle;
      }
    }
    &.download{
      &::before{
        content:"\f0ed";
        font-family: FontAwesome;
        margin-right:8px;
      }
    }
  }

  .content{
    margin-bottom:20px;
    border-bottom:1px solid #ddd;
    &:last-child{
      border:none;
    }
    li{
        border-bottom:1px dotted #eee;
        &:last-child{
      border:none;
    }
      .item_title{
        font-size:16px;
        color:${theme.colors.gray};
        line-height:1.5;
        width:38%;
        display:inline-block;
        float:left;

        &.fullsize{
            width:100%;
            float:none;
        }
      }

      .item_content{
        width:60%;
        text-align:right;
        font-size:16px;
        color:#333;
        line-height:1.5;
        float:right;

        &.fullsize{
            width:100%;
            float:none;
        }

        &.bottons{
            span{
                color:#fff;
                background:${theme.colors.blue};
                cursor:pointer;
                line-height:35px;
                padding:0 15px;
                ${borderRadius('8px')};
                text-align:left;
                &::before{
                    content:"\f0f6";
                    font-family: FontAwesome;
                    margin-right:8px;
                  }
            }
        }

        &.time{
            color:${theme.colors.blue};
            &::before{
            content:"\f017";
            font-family: FontAwesome;
            margin-right:5px;
          }
        }

        &.cat{
            span{
                &::before{
                    content:"\f02b";
                    font-family: FontAwesome;
                    margin-right:2px;
                    color:${theme.colors.green};
                  }
            }
        }

        span{
            margin:3px;
            display:inline-block;
        }
      }

      &.sumup{
        background:#f8f8f8;
        .item_content{
            color:${theme.colors.blue};
        }
      }
      &.total{
        //background:#f8f8f8;
        .item_content{
            color:${theme.colors.red};
            font-size:24px;
            font-weight:bold;
        }
      }
      &:nth-child(even){
        //background:#f8f8f8;
      }
      &::after{
        ${clearfix};
      }
      padding:10px;
    }
  }

  .penging{
    padding:180px 0 70px;
    text-align:center;
    font-size:18px;
    color:#ccc;
    line-height:1.5;

    &.quotation{
        background:url(${awsUrl("icon_quotation.png")}) no-repeat center center;
        background-size:70px 70px;
    }
    &.reservation{
        background:url(${awsUrl("icon_reservation.png")}) no-repeat center center;
        background-size:70px 70px;
    }

    &.download{
        padding:70px 0 70px;
        &::before{
            content:"\f0ed";
            font-family: FontAwesome;
            font-size:100px;
            display:block;
            line-height:1.2;
            color:${theme.colors.blue};
          }
    }
  }


  @media (max-width: ${theme.medias.phablet}) {
    padding:20px;
    ${borderRadius("0")};
  }
}
`
const tagMenu = css`
    height: 57px;
    text-align: center;
    margin: 0px auto 0;
    position:relative;
    background:${theme.colors.gray};
    -webkit-overflow-scrolling: touch;
    ::-webkit-scrollbar {
      display: none;
    }
    ul {
        width:100%;
        max-width:800px;
        white-space: nowrap;
        overflow: auto;
        margin:0 auto;
        position:relative;
        top:8px;
        overflow:hidden;
        display:flex;
      li {
          display: inline-block;
          width:100%;
          border-right:1px solid rgba(255,255,255,.2);
          ${box};

          &:last-child{
            border:none;
          }


          a {
              display: block;
              height: 50px;
              line-height: 50px;
              font-size: 18px;
              color: #fff;
              text-decoration: none;
              margin: 0px;
              cursor:pointer;
              width:100%;
            ${borderRadius("8px 8px 0 0")};
              ${transition('all', '.3s')};


              &.car{
                &::before{
                    content:"\f1b9";
                    font-family: FontAwesome;
                    margin-right:5px;
                }
              }

              &.motorbike{
                &::before{
                    content:"\f21c";
                    font-family: FontAwesome;
                    margin-right:5px;
                }
              }

              &.active {
                  color: ${theme.colors.blue};
                  background:#f8f8f8;
                  background:#fff;
              }
          }
      }
    }
`

const checkboxGroup = css`
    width:100%;
    position:relative;

    &.ordinary{
        > div{
            border:none;
            text-align:left;
            padding-left:35px;

            &::after{
                display:block;
                content:"\f096";
            }
        }
        input[type="checkbox"]:checked ~ div,input[type="radio"]:checked ~ div{
            //font-weight:normal;
            background: none;
            border: none !important;
            color:#a7a7a7;
            padding-left:35px;
            &::after{
                content:"\f046";
                color:${theme.colors.green};
                //animation-name: none;
            }
        }
    }

    &.small{
        @media (max-width: 380px) {
            >div{
                font-size:12px !important;
            }
        }
    }

    input[type="checkbox"],input[type="radio"]{
        position:absolute;
        top:0;
        left:0;
        display:none;
    }
    
    > div{
        height: 50px;
        width: 100%;
        line-height: 50px;
        font-size: 18px;
        color: #a7a7a7;
        padding: 0 0;
        border: 1px solid #ddd;
        background: #fff;
        outline: none;
        cursor:pointer;
        text-align:center;
        overflow:hidden;
        position:relative;

        ${transition('padding', '.3s')};

        ${borderRadius('8px')};
        ${box};

        &::after{
            position:absolute;
            top:0;
            left:10px;
            content:"\f00c";
            font-family: FontAwesome;
            display:none;
        }

        @media (max-width: ${theme.medias.phablet}) {
                font-size: 16px;
            }
    }

    input[type="checkbox"].error ~ div,input[type="radio"].error ~ div{
        border-color:${theme.colors.red} !important;
        color:${theme.colors.red};
    }

    input[type="checkbox"]:checked ~ div,input[type="radio"]:checked ~ div{
        //font-weight:bold;
        background: ${theme.colors.green};
        border: 1px solid #ddd !important;
        color:#fff;
        padding-left:15px;
        &::after{
            display:block;
            animation-name: pop;
            animation-duration: .3s;
            animation-iteration-count: 1;
        }
        
               
        @keyframes pop {
            0% {
                top: 20px;
            }

            90% {
                top: -3px;
            }

            98% {
                top: 1px;
            }

            100% {
                top: 0px;
            }
        }
    }
`
const buttons = css`
    

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;

    > button {
        margin:0 2.5px;
        flex: 1 1 350px;
        @media (max-width: ${theme.medias.phablet}) {
            margin:0px;
        }
    }

    @media (max-width: ${theme.medias.phablet}) {
        position:fixed;
        bottom:0;
        left:0;
        width:100%;
        z-index:100;


        button{
            margin-bottom:0;
            border:none;
            ${boxShadow('0 0 4px rgba(0,0,0,.2)')};
            ${borderRadius('8px 8px 0 0')};
        }
    }

    
`
const userForm = css`
  	width: 90%;
    max-width: 350px;
    margin: 50px auto 0;
    padding-bottom: 50px;

    input[type=text], input[type=password], input[type=email] {
        ${input};
    }

    select, option {
        ${select};
    }

    .multi_col {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;

        .zone {
            -webkit-flex: none;
            flex: none;
            width: auto;
            min-width:90px;
            border-right: none;
            position: relative;

			     ${borderRadius('8px 0 0 8px')};

        }

        .row_name {
            -webkit-flex: none;
            -moz-flex: none;
            flex: none;
            width: 100px;
            font-size: 18px;
            line-height: 50px;
            text-align: left;
            color: ${theme.colors.gray};
        }

        .zone_phone {
        	${borderRadius('0 8px 8px 0')};
        }

        .verify_btn {
            -webkit-flex: none;
            -moz-flex: none;
            flex: none;
            width: 130px;
            margin-left: 9px;
        }

        .verify_input {
            border: 1px solid ${theme.colors.green};
            text-align: center;
            &:focus {
              border-color: ${theme.colors.green};
            }
        }
    }

    label.gender {
        display: block;
        font-size: 18px;
        color: ${theme.colors.gray};
        line-height: 50px;
        margin-bottom: 10px;
        width: 100%;
        text-align: left;
        cursor: pointer;
    }

    .error_msg {
        font-size: 14px;
        color: ${theme.colors.red};
        text-align: center;
        line-height: 1.4;
        margin: 0 auto 10px;
        width: 90%;
        //font-weight: bold;
    }

    .wording {
        font-size: 14px;
        line-height: 1.5;
        color: #666;
        font-weight:400;
        text-align: center;
        margin: 10px auto;
        width: 90%;

        a {
            white-space: nowrap;
            color: ${theme.colors.blue};
            text-decoration: none;
        }
    }

    .text_link {
        text-align: center;
        font-size: 14px;
        color: #ccc;
        line-height: 1.5;
        letter-spacin:1.5em;

        a {
            font-size: 14px;
            color: #666;
            text-decoration: none;
            //font-weight: bold;
            ${transition('all', '.3s')};
            margin:0 8px;

            &:hover {
                color: ${theme.colors.blue};
            }
        }
    }
`

const appointmentForm = css`
    width: 100%;
    max-width: 700px;
    margin: 50px auto 0;
    padding-bottom: 50px;

    @media (max-width: ${theme.medias.phablet}) {
        //margin: 0 auto;
        //padding-bottom:0;
    }

    .brief{
        font-size:18px;
        text-align:center;
        line-height:1.5;
        width:80%;
        color:${theme.colors.green};
        margin:25px auto;

        &.gray{
            margin:0 auto;
            color:${theme.colors.gray};
        }
    }

    .dashed-split{
        width:100%;
        height:0px;
        border-top:1px dashed #ddd;
        margin:20px 0 40px;
        width:150%;
        margin-left:-25%;
    }

    input[type=text], input[type=password] {
        ${input};
    }

    textarea{
        ${textarea};
    }

    select, option {
        ${select};
    }

    .checkbox_group{
        ${checkboxGroup};
    }

    .reminder{
        font-size:14px;
        line-height:1.5;
        color:#333;
        margin-bottom:30px;
        text-indent:-21px;
        margin-left:21px;

		.item_price {		    
			text-align: center;
			ul {
				width: 30%;
				margin: 0 auto;
				text-align: left;
			}
		}
		
		> span {
		    color:#FF0000;
		}
		

        &::before{
            content:"\f0a2";
            font-family: FontAwesome;
            margin-right:5px;
            color:${theme.colors.blue};
        }
    }

    .block{
        padding:40px 60px;
        background:#fff;
        border:1px solid #ddd;
        ${borderRadius('8px')};
        ${box};
        overflow:hidden;
        margin-bottom:8px;

        @media (max-width: ${theme.medias.phablet}) {
            padding:20px 30px;
            ${borderRadius('0')};
            //margin-bottom:-1px;
            border-left:none;
            border-right:none;
        }
    }

    .block_title{
        position:relative;
        font-size:24px;
        line-height:50px;
        height:50px;
        color:${theme.colors.gray};
        margin-bottom:30px;
        overflow:hidden;
        margin-left:-20px;

        &.secondary{
            font-size:18px;
            line-height:40px;
            height:40px;
            margin-left:0px;
            margin-bottom:0px;
            &::before{
                display:none;
            }

            &::after{
                display:none;
            }
        }

        &.third{
            font-size:18px;
            line-height:40px;
            height:40px;
            margin-left:0px;
            border-bottom:1px solid ${theme.colors.gray};
            &::before{
                display:none;
            }

            &::after{
                display:none;
            }
        }

        &::before{
            content:"\f111";
            font-size:15px;
            line-height:50px;
            font-family: FontAwesome;
            margin-right:8px;
            vertical-align:top;
        }

        &::after{
            content:'';
            vertical-align:top;
            display:inline-block;
            width:100%; 
            height:50%;
            margin-right:-100%;
            margin-left:10px;
            border-bottom:1px solid ${theme.colors.gray};
        }
        @media (max-width: ${theme.medias.phablet}) {
            font-size:18px;
            line-height:40px;
            height:40px;
            margin-left:0px;
            &::before{
                font-size:12px;
                line-height:40px;
            }
        }
    }

    .grid3D2M{
        margin-bottom:20px;

        > div{
            width:calc(33.3333% - 6px);
            float:left;
            margin-left:9px;
            margin-bottom:9px;

            &:nth-child(3n+1){
                margin-left:0;
            }
        }

        &::after{
            ${clearfix};
        }

        @media (max-width: ${theme.medias.phablet}) {
            > div{
                width:calc(50% - 9px);
                &:nth-child(3n+1){
                    margin-left:9px;
                }
                &:nth-child(2n+1){
                    margin-left:0;
                }
            }
        }
        
    }

    .multi_col {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;

        .noflex{
            -webkit-flex: none;
            flex: none;
            width: 100%;
        }

        > div{
            width:100%;
            margin-left:9px;

            &:nth-child(1){
                margin-left:0;
            }
        }

        .checkbox_group > div{
            margin-bottom:20px;
        }

    }

    .error_msg {
        font-size: 14px;
        color: ${theme.colors.red};
        text-align: center;
        line-height: 1.4;
        margin: 0 auto 10px;
        width: 90%;
        //font-weight: bold;
    }

    .wording {
        font-size: 14px;
        line-height: 1.5;
        color: #333;
        text-align: center;
        margin: 10px auto;
        width: 90%;
        font-weight:400;

        a {
            white-space: nowrap;
            color: ${theme.colors.blue};
            text-decoration: none;
        }

        h3{
            color:${theme.colors.gray};
            font-weight:400;
            margin-bottom:10px;
        }
        p{
            margin-left:16px;

            &::before{
                content:"";
                display:inline-block;
                width:8px;
                height:8px;
                background:#333;
                text-align:center;
                position:relative;
                margin-left:-16px;
                margin-right:8px;
                ${borderRadius("8px")};
            }
        }
    }

    .text_link {
        text-align: center;
        font-size: 14px;
        color: #ccc;
        line-height: 1.5;
        letter-spacin:1.5em;

        a {
            font-size: 14px;
            color: #666;
            text-decoration: none;
            //font-weight: bold;
            ${transition('all', '.3s')};
            margin:0 8px;

            &:hover {
                color: ${theme.colors.blue};
            }
        }
    }
`

const appointmentInfo = css`
    width: 100%;
    max-width: 550px;
    margin: 50px auto 0;
    padding-bottom: 50px;
    @media (max-width: ${theme.medias.phablet}) {
        //margin: 0 auto;
        //padding-bottom:0;
    }

    .check{
        width:80px;
        height:80px;
        border:2px solid ${theme.colors.gray};
        line-height:75px;
        text-align:center;
        color:${theme.colors.gray};
        font-size:40px;
        ${box};
        ${borderRadius("100%")};
        margin:20px auto;
        letter-spacing:0;
        position:relative;
        animation-name: jump;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        &::before{
            content:"\f00c";
            position:relative;
            font-family: FontAwesome;
        }
              
        @keyframes jump {
            0% {
                top: 0px;
            }

            70% {
                top: 0px;
            }

            85%{
                top:-10px;
            }

            97% {
                top: 2px;
            }

            100% {
                top: 0px;
            }
        }

    }

    .review{
        width:80px;
        height:80px;
        border:2px solid ${theme.colors.green};
        line-height:80px;
        text-align:center;
        color:${theme.colors.green};
        font-size:40px;
        ${box};
        ${borderRadius("100%")};
        margin:20px auto;
        letter-spacing:0;
        position:relative;
        animation-name: jump;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        &::before{
            content:"\f087";
            position:relative;
            font-family: FontAwesome;
        }
              
        @keyframes jump {
            0% {
                top: 0px;
            }

            70% {
                top: 0px;
            }

            85%{
                top:-10px;
            }

            97% {
                top: 2px;
            }

            100% {
                top: 0px;
            }
        }

    }

    .dashed-split{
        width:100%;
        height:0px;
        border-top:1px dashed #ddd;
        margin:20px 0 30px;
        width:150%;
        margin-left:-25%;
    }

    .brief{
        font-size:18px;
        text-align:center;
        line-height:1.5;
        width:80%;
        color:${theme.colors.green};
        margin:25px auto;

        &.gray{
            margin:0 auto;
            color:${theme.colors.gray};
        }
    }



    .reminder{
        font-size:14px;
        line-height:1.5;
        color:#333;
        margin-bottom:15px;
        text-indent:-21px;
        margin-left:21px;
      
        &.middle{
            text-align:center;
            text-indent:0;
            margin-left:0;
        }

        &.sweet{
            color:${theme.colors.red};
            &::before{
                content:"\f0a2";
                color:${theme.colors.red};
            }
        }

        &::before{
            content:"\f0a2";
            font-family: FontAwesome;
            margin-right:5px;
            color:${theme.colors.blue};
        }     
    }
    
    .blocks{
        background:#fff;
        border:1px solid #ddd;
        ${borderRadius('8px')};
        ${box};
        overflow:hidden;
        margin-bottom:8px;

        .block{
            border-top:1px dashed #ddd;
            padding:40px 60px;
            ${box};

            &:first-child{
                border:none;
            }

            > .item{
                border-bottom:1px solid #ddd;
                padding-bottom:20px;
                margin-bottom:20px;
                position:relative;
            }

            &.done{
                .block_title{
                    &::after{
                        display:none;
                    }
                }
            }
        }

        @media (max-width: ${theme.medias.phablet}) {
            .block{
                padding:20px 30px;
            }

            ${borderRadius('0')};
            border-left:none;
            border-right:none;
        }
    }

    .block_answer{
        font-size:18px;
        color:#333;
        line-height:25px;
        margin-left:100px;
        margin-right:30px;
        @media (max-width: ${theme.medias.phablet}) {
            margin-left:0;
        }
    }

    .block_title{
        position:absolute;
        width:100%;
        font-size:18px;
        line-height:25px;
        height:25px;
        color:${theme.colors.gray};
        margin-bottom:5px;
        top:0;
        left:0;

        &::after{
            content:"";
            position:absolute;
            top:0;
            right:0;
            content:"\f05d";
            font-family: FontAwesome;
            font-size:24px;
            line-height:25px;
            margin:0;
            color:${theme.colors.blue};
        }
        
        @media (max-width: ${theme.medias.phablet}) {
            position:relative;
            font-size:15px;
        }
    }   
`

export {
  buttons, reservationForm,tagMenu,bound,userForm,input,select,sectionTitle,pageMenu,subPageMenu,appointmentForm,appointmentInfo
}
