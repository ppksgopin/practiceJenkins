import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import { borderRadius } from '../../../styles/mixins';

const Container = styled.div`
    &.noht{
      display:none;  
    }
    h1 {
        text-align: center;
        font-size: 24px;
        line-height: 60px;
        color: ${theme.colors.gray};
        position: relative;
        letter-spacing: 0.15em;

        &::after {
            content: "";
            width: 23px;
            height: 4px;
            background: ${theme.colors.green};
            position: absolute;
            left: 50%;
            margin-left: -15px;
            top: 0px;

            ${borderRadius('2px')};
        }

        &::before {
            content: "";
            width: 4px;
            height: 4px;
            background: ${theme.colors.blue};
            position: absolute;
            left: 50%;
            margin-left: 11px;
            top: 0px;

            ${borderRadius('2px')};
        }
    }
    margin-bottom:20px;
`

export default class PageTitle extends Component  {

    constructor(props) {
        super(props);
        this.state = { 
            noht: true 
          }
    }


    componentDidMount() {
      this.setState({noht: window.noht});
    }

    render() {
        const { title } = this.props;
        return (
            <Container className={this.state.noht ? "noht" : ""}>
                <h1>{title}</h1>
            </Container>
        )
    }
}