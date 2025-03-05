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
        const { id, name, label, options, classname, error, onChange, value } = this.props;

        const { onFocus } = this.state;
        let className = '';
        className = className + (onFocus? ' active' : '');
        className = className + ' ' + (classname || '');

        return (
            <Container className={className}>
                <select
                        className={error ? 'error ' + classname : classname}
                        id={id}
                        name={name}
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        >
                    {options.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}

                </select>
                <label className={label ? "" : "hide"}>{label}</label>
            </Container>
        )
    }
}