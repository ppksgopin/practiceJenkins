import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import { borderRadius } from '../../../styles/mixins';
import {buttons,appointmentInfo} from '../../../styles/commons';
import BlueButton from './BlueButton';
import ErrorMsg from './ErrorMsg';

const Container = styled.div`
    ${appointmentInfo};
`

const Buttons = styled.div `
  ${buttons}
`
const Subtitle = styled.div`
    font-size:14px;
    text-align:left;
    line-height:1.5;
    color:${theme.colors.green};
    margin:10px auto;
    text-align:center;
`
const Textarea = styled.textarea`
    font-size:14px;
    text-align:left;
    line-height:1.5;
    width:100%;
    color:#000;
    margin:0 auto;
    height:100px;
    ${borderRadius('3px')};
`
const Stars = styled.div`
    text-align:center;
    direction: rtl;
    margin:0 auto 30px;

    &:hover{
        > div{
            &.active,&.active ~ div{
                &::after{
                    content:"\f006";
                    color:${theme.colors.gray};
                }
            }
        }
    }

    >div{
        display:inline-block;
        width:40px;
        height:40px;
        font-size:40px;
        line-height:40px;
        text-align:center;
        padding:5px;
        cursor:pointer;

        &::after{
            content:"\f006";
            font-family: FontAwesome;
            
            color:${theme.colors.gray};
        }

        &.active,&.active ~ div{
            &::after{
                content:"\f005";
                color:${theme.colors.blue};
            }
        }
        &:hover,&:hover ~ div{
            &::after{
                content:"\f005" !important;
                color:${theme.colors.blue} !important;
            }
        }
    }
`

export default class Review extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            comment:'',
            evaluate: false,
            appointmentId :'',
        };
        this._onClick = this._onClick.bind(this);
        this._afterEvaluate = this._afterEvaluate.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.error !=='') {
            this.setState({
                "errorMsg" : nextProps.error
            })
        }
    }

    _onClick(score) {
        this.setState({
            "score": score,
            "errorMsg":""
        });
    }

    _afterEvaluate(e) {
        e.preventDefault();
        const { brief , saved, onSave , appointmentId} = this.props;
        if(this.state.score ==='' || this.state.score ===0 ) {
            this.setState({
                "errorMsg" : '您尚未評分'
            })
        }else {
            const { error } = this.props ;
            const evaluation = {appointmentId: appointmentId, evaluation : this.state.score , comment :this.state.comment }
            //console.log('evaluation data :' , evaluation);
            if(!saved){
                onSave(evaluation);
            }
        }

    }

    _onChange(e) {
        // console.log('value ', e.currentTarget.value) ;
        this.setState({
            "comment" : e.currentTarget.value
        })
    }

    render() {
        const { brief , saved ,onSave , appointmentId} = this.props;
        return (
            <Container>
            {!saved?
                <div className="blocks">
                    <div className="block">
                        <div className="review"/>
                        <div className="brief gray">謝謝您使用zero zero的服務，對服務給點評價吧。</div>
                        <ErrorMsg msg={this.state.errorMsg} classname=""/>
                    </div>
                    <div className="block">
                        <Subtitle>整體評分</Subtitle>
                        <Stars>
                            <div onClick={(e) => this._onClick(5)} className={this.state.score==5?"active":""}></div>
                            <div onClick={(e) => this._onClick(4)} className={this.state.score==4?"active":""}></div>
                            <div onClick={(e) => this._onClick(3)} className={this.state.score==3?"active":""}></div>
                            <div onClick={(e) => this._onClick(2)} className={this.state.score==2?"active":""}></div>
                            <div onClick={(e) => this._onClick(1)} className={this.state.score==1?"active":""}></div>
                        </Stars>
                        <Subtitle>其他建議</Subtitle>
                        <Textarea onChange={(e) => this._onChange(e)}></Textarea>
                    </div>
                </div>
            :""}

                <br/><br/>

            {!saved?
                <Buttons className="bob">
                    <BlueButton onClick={(e) => this._afterEvaluate(e)}>送出評價</BlueButton>
                </Buttons>
            :""}

            {saved?
                <div className="blocks">
                    <div className="block">
                        <div className="review"/>
                        <div className="brief gray">評價已送出，感謝您的回饋讓zero zero可以更好。</div>
                    </div>
                </div>
            :""}

            <br/><br/>

            {saved?
                <Buttons className="bob">
                    <BlueButton onClick={(e) => this._afterEvaluate()}>結束</BlueButton>
                </Buttons>
            :""}

            </Container>
        )
    }
}
