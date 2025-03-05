/**
 * Created by ryan on 2017/12/14.
 */
import React, {Component} from 'react';
import styled from 'styled-components';

import {reservationForm} from '../../../../../styles/commons';

const Container = styled.div `
  ${reservationForm};
`

class CarQuotation extends Component {
    render() {
        return (
            <Container>
                {/*尚未報價就只留以下這段
                    <div className="penging quotation">尚未報價</div>
                    */}


                <div className="title quotation">報價項目</div>
                <ul className="content">
                    <li>
                        <div className="item_title">車體回收</div>
                        <div className="item_content">5000</div>
                    </li>
                    <li>
                        <div className="item_title">鋁圈四個</div>
                        <div className="item_content">500</div>
                    </li>
                    <li>
                        <div className="item_title">觸媒轉換器</div>
                        <div className="item_content">1000</div>
                    </li>
                    <li className="sumup">
                        <div className="item_title">總計</div>
                        <div className="item_content">6500</div>
                    </li>
                </ul>
                <ul className="content">
                    <li>
                        <div className="item_title">環保獎金</div>
                        <div className="item_content">5000</div>
                    </li>
                    <li>
                        <div className="item_title">貨物稅減免</div>
                        <div className="item_content">6000</div>
                    </li>
                    <li className="sumup">
                        <div className="item_title">總計</div>
                        <div className="item_content">11000</div>
                    </li>

                </ul>
                <ul className="content">
                    <li className="total">
                        <div className="item_title">最高合計</div>
                        <div className="item_content">17500</div>
                    </li>
                </ul>
            </Container>
        );
    }
}

export default CarQuotation;
