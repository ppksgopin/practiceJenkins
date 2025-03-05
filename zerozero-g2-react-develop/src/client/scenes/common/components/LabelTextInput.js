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
        line-height:45px;
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
            ${opacity(0)};
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
            valid: false,
            modified: false,
            inputValue: props.defaultvalue || ''
        };

        this._valueChange = this._valueChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.inputValue !== nextProps.defaultvalue) {
            this.setState({inputValue: nextProps.defaultvalue});
        }
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    _valueChange(event) {
        this.setState({
            "valid": event.target.value,
            "modified": true,
            "inputValue": event.target.value
        });

        if (this.props.input && this.props.input.onChange) {
            const {onChange} = this.props.input;
            onChange(event.target.value);
        } else {
            const {onChange} = this.props;
            onChange(event.target.value);
        }
    }

    render() {
        const {id, name, label, placeholder, defaultvalue, must, classname, input, error } = this.props;
        return (
            <Container
                className={this.state.modified ? (this.state.valid ? "active " + classname : classname) : ((this.state.valid || defaultvalue) ? "active " + classname : classname)}>
                <input {...input} className={classname} type="text" id={id} name={name} placeholder={placeholder || ""}
                       value={this.state.inputValue} required={must ? "required" : ""}
                       onChange={(e) => this._valueChange(e)} />
                <label>{error || label}</label>
            </Container>
        )
    }
}