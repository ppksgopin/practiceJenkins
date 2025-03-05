import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import theme from '../../../styles/theme';
import {opacity, borderRadius, transition, box} from '../../../styles/mixins';


const Container = styled.div`
    width:100% !important;
    position:relative;

    &.active{
        label{
            top:-10px;
            font-size:13px;
            line-height:20px;
            ${opacity(1)};
            color:#aaa;
        }
    }

    label{
        z-index:1;
        position:absolute;
        top:1px;
        left:10px;
        padding:0 5px;
        font-size:18px;
        color:#bbb;
        line-height:48px;
        background:#fff;
        pointer-events:none;
        ${opacity(1)};

        ${transition("all, .3s")}
    }

    input{
        &::placeholder {
            ${opacity(1)};
            ${transition("all, .3s")};
        }
        &:placeholder-shown:not(:focus)::placeholder {
            //${opacity(0)};
        }
    }
    input.error{
        border-color:${theme.colors.red} !important;
    }
    input.error ~ label{
        color:${theme.colors.red} !important;
    }

    input:required {
        outline: none;
        border-color:#ddd;
        box-shadow:none;
    }

    input:focus ~ label{
        top:-10px;
        font-size:13px;
        line-height:20px;
        ${opacity(1)};
        color:${theme.colors.green};
    }

    input:valid ~ label{
        
    }
    .hide{
        display:none;
    }
`

export default class LabelTextInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            onFocus: false,
        }

        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onFocus(e) {
        this.setState({onFocus: true});
    }

    onBlur(e) {
        this.setState({onFocus: false});
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {
        const {id, name, label, placeholder, required, classname, error, onChange, value } = this.props;
        const { onFocus } = this.state;
        let className = '';
        className = className + (onFocus? ' active' : '');
        className = className + ' ' + (classname || '');

        return (
            <Container className={className}>
                <input
                       className={error ? 'error ' + classname : classname}
                       type="text"
                       id={id}
                       name={name}
                       placeholder={placeholder || ''}
                       required={required ? "required" : ''}
                       value={value}
                       onFocus={this.onFocus}
                       onBlur={this.onBlur}
                       onChange={(e) => onChange(e.target.value)}
                       />
                <label>{label} {error}</label>
            </Container>
        )
    }
}