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
        overflow:hidden;
        white-space:nowrap;
        width:auto;
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
    }


    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {
        const {id, name, label, placeholder, options, classname, input, meta} = this.props;

        const active = input.value || (meta.dirty && meta.valid && !meta.error);
        const error = meta.touched && meta.error;

        let className = '';
        className = className + (active ? ' active' : '');
        className = className + ' ' + (classname || '');

        return (
            <Container className={className}>
                <select {...input}
                        className={error ? 'error ' + classname : classname}
                        id={id}
                        name={name}
                        >

                    <option className="hide"
                            hidden
                            value={-1}
                            disabled
                            key={-111}
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