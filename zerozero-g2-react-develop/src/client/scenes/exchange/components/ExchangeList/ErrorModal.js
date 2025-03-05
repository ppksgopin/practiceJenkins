import React, { Component } from 'react';
import {connect} from "react-redux";

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import { borderRadius,opacity,translate,transition,box,rotate } from '../../../../styles/mixins';

const Modal  = styled.div `
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
        ${transition("all",".5s")};

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
            margin-bottom:10px;
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
            }
        }
    }

    .overlay{
        width:100%;
        height:100%;
        background:rgba(0,0,0,.7);
    }
`

class ErrorModal extends Component  {

    render() {
        
        const {toggle, error} = this.props ;
        return (
            <Modal>
                <div className="container">

                    <div className="main">兌換失敗</div>
                    <p>
                        { error.message ? error.message : '' }
                    </p>
                    <div className="selection">
                        <div onClick={() => toggle()}>確認</div>
                    </div>
                </div>
                <div className="overlay"/>
            </Modal>
        )
    }
}


export default ErrorModal;
