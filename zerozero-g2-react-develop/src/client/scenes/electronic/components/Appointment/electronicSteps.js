import React, { Component } from 'react';
import styled from 'styled-components';

import {awsUrl} from '../../../../utils/awsFile';
import theme from '../../../../styles/theme';
import {clearfix,borderRadius} from '../../../../styles/mixins';

const Container = styled.div `
    padding-top:50px;
    width:100%;
    height:280px;
    overflow:auto;

    .steps{
        width:100%;
        height:280px;
        text-align:center;
        white-space:nowrap;

        > div{
            margin:0 20px;
            width:150px;
            padding-top:170px;
            height:80px;
            display:inline-block;
            font-size:18px;
            color:#333;
            line-height:1.5;
            white-space:normal;
            position:relative;

            span{
                font-size:15px;
                color:${theme.colors.blue};
                line-height:1.5;
                display:block;
                width:100px;
                height:20px;
                margin:0 auto 10px;
                //font-weight:bold;
            }

            @media (max-width: ${theme.medias.phablet}) {
            }


            &:nth-child(1){
                    background:url(${awsUrl("electronic-step-deco.png")}) no-repeat top left;
                    background-size:750px 150px;
            }

            &:nth-child(2){
                    background:url(${awsUrl("electronic-step-deco.png")}) no-repeat top left -150px;
                    background-size:750px 150px;
            
            }
            &:nth-child(3){
         
                    background:url(${awsUrl("electronic-step-deco.png")}) no-repeat top left -300px;
                    background-size:750px 150px;
                
            }
            &:nth-child(4){
          
                    background:url(${awsUrl("electronic-step-deco.png")}) no-repeat top left -450px;
                    background-size:750px 150px;
                
            }
            &:nth-child(5){
         
                    background:url(${awsUrl("electronic-step-deco.png")}) no-repeat top left -600px;
                    background-size:750px 150px;
                
            }

            &::after{
                content:"\f061";
                width:40px;
                height:40px;
                text-align:center;
                line-height:40px;
                font-size:30px;
                font-family: FontAwesome;
                color:${theme.colors.blue};
                position:absolute;
                top:160px;
                right:-40px;
            }

            &:last-child{
                &::after{
                    display:none;
                }
            }

        }
    }

    @media (max-width: ${theme.medias.phablet}) {
        display:none;
    }

    

    &::after{
        ${clearfix};
    }
`

export default class ElectronicSteps extends Component  {

    constructor(props) {
        super(props);
        this.state = {
           
        }
    }


    componentDidMount() {
        
    }

    componentWillMount() {
        
    }


    render() {
        return (
            <Container>
                <div className="steps">
                    <div><span>Step 1</span>填表預約</div>
                    <div><span>Step 2</span>客服來電<br />確認預約資訊</div>
                    <div><span>Step 3</span>預約成功</div>
                    <div><span>Step 4</span>司機前往<br />清運家電</div>
                    <div><span>Step 5</span>服務完成</div>
                </div>
            </Container>
        )
    }
}