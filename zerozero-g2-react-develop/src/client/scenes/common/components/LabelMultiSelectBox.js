import React from 'react';
import Select from 'react-select';
import styled, {css} from 'styled-components';
import theme from "../../../styles/theme";
import {opacity, borderRadius, transition, box} from '../../../styles/mixins';

const Container = styled.div`
    width:100%;
    position:relative;
    z-index:10;

    &.active{
        label{
            top:-10px;
            font-size:13px;
            line-height:20px;
            ${opacity(1)};
            color:#aaa;
        }
    }

    .label_name{
        font-size:13px;
        line-height:20px;
        color:#aaa;
        background:#fff;
        position:relative;
        margin-left:10px;
        padding:0 5px;
        z-index:10;
        display:inline-block;

        &.active{
            color:${theme.colors.green};
        }
    }
    .sb{
        margin-top:-8px;
        margin-bottom:20px;
        background:#fff;

        .sb_dennis__control{
            background:#fff;
            ${borderRadius('8px')};
            border-color:#ddd;
            padding:0;
            height:auto;
            outline:none;
            &.sb_dennis__control--is-focused{
                border-color:#aaa;
                box-shadow:none;
            }
        }
        .sb_dennis__value-container{
            margin:0;
            padding:10px 10px;
        }
        .sb_dennis__multi-value{
            background:#eee;
            font-size:16px;
            line-height:20px;
            margin:1px;
        }
        .sb_dennis__input{
            input[type=text]{
                margin:0;
                line-height:20px !important;
                height:auto !important;
            }
        }
    }

`;

export default class LabelMultiSelectBox extends React.Component {


    render() {
        const {id, name, label, placeholder, options, classname, input, meta, getOptionLabel, getOptionValue} = this.props;

        const active = input.value || (meta.dirty && meta.valid && !meta.error);
        const error = meta.touched && meta.error;

        let className = '';
        className = className + (active ? ' active' : '');
        className = className + ' ' + (classname || '');
        return (
            <Container>
                {label ? <div className={active ? 'label_name active' : 'label_name'}>{label}</div> : ""}
                <Select {...this.props}
                        className={'sb'}
                        classNamePrefix='sb_dennis'
                        id={id}
                        name={name}
                        options={options}
                        placeholder ={placeholder}
                        getOptionLabel={getOptionLabel}
                        getOptionValue={getOptionValue}
                        value={input.value}
                        isMulti
                        onChange={value => input.onChange(value)}
                >
                </Select>
            </Container>
        )
    }
}