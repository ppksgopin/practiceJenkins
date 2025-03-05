import React, {Component} from 'react';
import {awsUrl} from '../../../utils/awsFile';
import styled, {css} from 'styled-components';
import theme from '../../../styles/theme';
import {opacity, borderRadius, transition, box} from '../../../styles/mixins';
import {select} from '../../../styles/commons';


const Container = styled.div`
    width:100%;
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
        white-space:nowrap;
        width:auto;
        overflow:hidden;
        max-width:calc(100% - 30px);
        ${opacity(1)};
        ${transition("all, .3s")}
    }

    select:focus ~ label{
        top:-10px;
        font-size:13px;
        line-height:20px;
        ${opacity(1)};
        color:${theme.colors.green};
    }
    select.error ~ label{
        color:${theme.colors.red};
    }

    select, option {}

    .hide{
        display:none;
    }
`

export default class LabelSelectBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
        this._valueChange = this._valueChange.bind(this);
        this._clicked = this._clicked.bind(this);
    }


    componentDidMount() {

    }

    componentWillMount() {

    }

    _valueChange(event) {
        this.setState({
            "active": true
        });

        if (this.props.input && this.props.input.onChange) {
            const {onChange} = this.props.input;
            onChange(event.target.value);
        }

        const {onChangeAction} = this.props;
        if (onChangeAction) {
            onChangeAction(event.target.value);
        }
    }

    _clicked(e) {
        this.setState({
            //"active":true
        })
    }

    render() {
        const {id, name, label, placeholder, options, must, defaultvalue, classname} = this.props;
        return (
            <Container className={(this.state.active || defaultvalue) ? "active" : ""}>
                <select className={classname}
                        id={id}
                        name={name}
                        required={must ? "required" : ""}
                        defaultValue={defaultvalue || -1}
                        onChange={(e) => this._valueChange(e)}
                        onClick={(e) => this._clicked(e)}>

                    <option className="hide"
                            hidden
                            value={-1}
                            disabled
                    >
                        {label ? "" : placeholder}
                    </option>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}

                </select>
                <label className={label ? "" : "hide"}>{label}</label>
            </Container>
        )
    }
}