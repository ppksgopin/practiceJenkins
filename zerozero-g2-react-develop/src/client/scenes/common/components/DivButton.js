import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import { borderRadius,transition,box,textShadow } from '../../../styles/mixins';

const DivButton = styled.div`
    width: 100%;
    margin: 0 auto;
    height: 50px;
    font: inherit;
    font-size: 18px;
    
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    margin-bottom: 20px;
    outline:none;
    background: none;
    border: 0;
    color: inherit;
    
    line-height: 50px;
    overflow: visible;
    padding: 0;
    letter-spacing:0.125em;
    border: 1px solid #ddd;


    ${transition("all", ".3s")};
    ${borderRadius("8px")};
    ${textShadow("1px 1px 2px rgba(0,0,0,.3)")};
    ${box};

    &.blue {
        background: ${theme.colors.blue};
        color: #fff;
        font-weight:500;

        &:hover {
            background: ${theme.colors.blue2};
        }
    }

    &.green {
        background: ${theme.colors.green};
        color: #fff;
        font-weight:500;

        &:hover {
            background: ${theme.colors.green2};
        }
    }

    &.white {
        background: #fff;
        color: ${theme.colors.gray};
        border: 1px solid #ddd;
        ${textShadow("0px 0px 0px rgba(0,0,0,0)")};

        ${box};
    }

    &.btn_zcoin {
        &::before {
            content: '\f0d6';
            font-family: FontAwesome;
            margin-right: 5px;
        }
    }

    &.btn_edit {
        &::before {
            content: '\f2c0';
            font-family: FontAwesome;
            margin-right: 5px;
        }
    }
`

export default DivButton;
