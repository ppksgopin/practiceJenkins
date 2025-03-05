import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import { borderRadius,transition,box,textShadow } from '../../../styles/mixins';

const Button = styled.button`
    width: 100%;
    max-width:350px;
    margin: 0 auto;
    height: 50px;
    font: inherit;
    font-size: 18px;
    font-weight:300;
    line-height: 50px !important;
    text-align: center;
    cursor: pointer;
    margin-bottom: 20px;
    outline:none;
    background: none;
    border: 1px solid #ddd;
    color: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    display:block !important;
    text-decoration: none;
    letter-spacing:0.125em;
    -webkit-appearance: none;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;

    ${transition("all", ".3s")};
    ${borderRadius("8px")};
    ${textShadow("1px 1px 2px rgba(0,0,0,.3)")};
    ${box};

    &.blue {
        background: ${theme.colors.blue};
        color: #fff;

        &:hover {
            background: ${theme.colors.blue2};
        }
    }

    &.green {
        background: ${theme.colors.green};
        color: #fff;

        &:hover {
            background: ${theme.colors.green2};
        }
    }

    &.white {
        background: #fff;
        color: ${theme.colors.gray};
        //font-weight:normal;
        ${textShadow("0px 0px 0px rgba(0,0,0,0)")};
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
    @media (max-width: ${theme.medias.phablet}) {
        max-width:none;
    }
`

export default Button;
