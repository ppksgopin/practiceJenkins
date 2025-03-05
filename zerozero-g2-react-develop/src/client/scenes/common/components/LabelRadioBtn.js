import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import theme from '../../../styles/theme';
import {opacity, borderRadius, transition, box} from '../../../styles/mixins';


const Container = styled.label`
    display:inline-block;
    font-size:18px;
    color:#333;
    line-height:30px !important;
    vertical-align:middle;
    margin-bottom:20px;

    input{
        position: absolute; left: -9999px;
    }

    input:checked+span{
       
        &::before{
            content:"\f046";
            color:${theme.colors.green};
        }
       
    }

    >div{
        display:inline-block;
        margin-right:15px;
        cursor:pointer !important;

        &:last-child{
            margin-right:0;
        }

        label{
            cursor:pointer !important;

            span{
                &::before{
                    content:"\f096";
                    font-family:Fontawesome;
                    margin-right:5px;
                    color:${theme.colors.gray};
                }
            }
        }
    }

`;

export default class LabelRadioBtn extends Component {

    constructor(props) {
        super(props);
        this.renderRadio = this.renderRadio.bind(this);
    }


    renderRadio(option, inputProps) {
        return (
            <div key={`${option.name}-${option.value}`}>
                <label>
                    <input
                        {...inputProps}
                        name={option.name}
                        value={option.value}
                        type="radio"
                    /> <span>{option.label}</span>
                </label>
            </div>
        )
    }

    render() {
        const {options} = this.props;
        return (
            <Container>
                {
                    options && options.length>0 && options.map(option => this.renderRadio(option, this.props.input))
                }
            </Container>
        )
    }
}