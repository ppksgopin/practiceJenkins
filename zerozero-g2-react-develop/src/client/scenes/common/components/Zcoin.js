import React, { Component } from 'react';

import {awsUrl} from '../../../utils/awsFile';

import styled from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div`
    display: -webkit-flex;
    display:         flex;
    -webkit-align-items: center;
      align-items: center;
    -webkit-justify-content: center;
      justify-content: center;

      >div{
        padding-left:60px;
        background:url(${awsUrl("zcoin_new.png")}) no-repeat center left;
        background-size:20px 37px;
        position:relative;
        height:60px;
        &::before{
            content:"";
            position:absolute;
            top:10px;
            left:40px;
            height:40px;
            width:1px;
            background:${theme.colors.green};
        }
      }

    h3{
        text-align:left;
        font-size:14px;
        line-height:20px;
        color:${theme.colors.green};
    }
    p{
        text-align:left;
        font-size:30px;
        line-height:40px;
        color:${theme.colors.green};
    }
`
export default class Zcoin extends Component  {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        
    }

    componentWillMount() {
        
    }

    render() {
        const { balance, wording = '您的Z幣' } = this.props;
        return (
            <Container>
                <div>
                    <h3>{wording}</h3>
                    <p>{balance}</p>
                </div>
            </Container>
        )
    }
}