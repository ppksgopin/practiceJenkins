import React, { Component } from 'react';
import { connect } from "react-redux";
import styled from 'styled-components';
import {resetMessage} from "../../../data/common/action";
import theme from '../../../styles/theme';

const Container = styled.div`
    font-size: 14px;
    color: ${theme.colors.red};
    text-align: center;
    line-height: 1.4;
    margin: 0 auto 10px;
    width: 90%;
`

class ErrorMsg extends Component  {

    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
       // this.props.resetMessage();
    }

    render() {
        const { msg, classname } = this.props;
        //console.log('MESSAGE: ', msg);
        return (
            <Container className={classname}>
                {msg}
            </Container>
        )
    }
}

export default connect(null, {resetMessage})(ErrorMsg);