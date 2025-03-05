import React, { Component } from 'react';

import styled from 'styled-components';
import theme from '../../../styles/theme';
import { borderRadius } from '../../../styles/mixins';
import {buttons,appointmentInfo} from '../../../styles/commons';
import BlueButton from './BlueButton';

const Container = styled.div`
    ${appointmentInfo};
`

const Buttons = styled.div `
  ${buttons}
`

export default class Finish extends Component  {

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        
    }

    componentWillMount() {
        
    }

    render() {
        const { brief } = this.props;
        return (
            <Container>
                <div className="brief">{brief}</div>
                <div className="blocks">
                    <div className="block">
                        <div className="check"/>
                        <br />
                        <div className="dashed-split"/>
                        <div className="reminder">我們於24小時內將有專人與您聯繫，請您留意手機及
Email，謝謝。</div>
                        
                    </div>
                </div>

                <br/><br/>
                <Buttons className="bob">
                    <BlueButton>結束</BlueButton>
                </Buttons>

            </Container>
        )
    }
}