/**
 * Created by ryan on 2017/12/14.
 */
import React, {Component} from 'react';
import styled from 'styled-components';
import {FormattedNumber} from 'react-intl';

import {reservationForm} from '../../../../../../styles/commons';
import BlueButton from '../../../../../common/components/BlueButton';
import WhiteButton from '../../../../../common/components/WhiteButton';


const Container = styled.div `
  ${reservationForm};
`

const Buttons = styled.div `
  display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;

    > button {
        margin:0 2.5px;
        flex: 1 1 350px;
    }
`

class CarQuotation extends Component {
    hasQuotation() {
        const {orderStatus, quotation} = this.props;
        if (orderStatus === 'CRSS02' || orderStatus === 'CRSS04' || orderStatus === 'CRSS06' && quotation != null) {
            return true;
        } else if(quotation != null && quotation.get("accept")) {
            return true;
        } else {
            return false;
        }
    }

    accept() {
        const {quotation} = this.props;
        this.props.handleQuotationEvent(true, quotation.get('id'));
    }

    reQuote() {
        const {quotation} = this.props;
        this.props.handleQuotationEvent(false, quotation.get('id'));
    }

    /**
     * 如果狀態是已報價，即使已接受報價，仍然可以填寫預約單
     * 如果狀態是已預約，且已接受報價，不可以填寫預約單
     * 已預約的定義是：已報價且已填寫預單單
     * @returns {boolean}
     */
    couldAcceptQuotationAndWriteReservation() {
        const {orderStatus, quotation} = this.props;
        if (orderStatus === 'CRSS02') { // 已報價
            return true;
        }

        if (orderStatus === 'CRSS04') { // 已預約
            return false;
        }

        return false;
    }

    _quotationRender() {
        const {appointment, quotation} = this.props;
        const quotationJS = quotation.toJS();

        return (
            <div>
                <div className="title quotation">報價項目</div>
                {
                    quotationJS.basePrice != 0
                        ?
                        <ul
                            className="content">
                            <li>
                                < div
                                    className="item_title"> 車體回收金
                                </div>
                                <div className="item_content"><FormattedNumber value={quotationJS.basePrice}/></div>
                            </li>
                            {
                                appointment.vehicleTypeId == 1 ? <li>
                                        <div className="item_title">鋁圈(四個)</div>
                                        <div className="item_content"><FormattedNumber value={quotationJS.aluminumRim}/>
                                        </div>
                                    </li>
                                    :
                                    ''
                            }
                            {
                                appointment.vehicleTypeId == 1 ? <li>
                                        <div className="item_title"> 觸媒轉換器</div>
                                        <div className="item_content"><FormattedNumber
                                            value={quotationJS.catalyticConverter}/>
                                        </div>
                                    </li>
                                    :
                                    ''
                            }
                            <li className="sumup">
                                <div className="item_title">總計</div>
                                <div className="item_content"><FormattedNumber value={quotationJS.equippedTotal}/></div>
                            </li>
                        </ul>
                        :
                        ''

                }
                <div className="title quotation">可申請補助項目</div>
                <ul className="content">
                    <li>
                        <div className="item_title">申請環保署獎勵金</div>
                        <div className="item_content"><FormattedNumber value={quotationJS.bonus}/></div>
                    </li>
                    {
                        (appointment.vehicleTypeId == 2 && quotationJS.subsidyMotorcycle > 0) ?
                            <li>
                                <div className="item_title">二行程機車補助金</div>
                                <div className="item_content"><FormattedNumber value={quotationJS.subsidyMotorcycle}/>
                                </div>
                            </li>
                            :
                            ''
                    }
                    <li>
                        <div className="item_title">買新車貨物稅減免</div>
                        <div className="item_content"><FormattedNumber value={quotationJS.taxReduce}/></div>
                    </li>
                    <li className="sumup">
                        <div className="item_title">總計</div>
                        <div className="item_content"><FormattedNumber value={quotationJS.subsidyTotal}/></div>
                    </li>

                </ul>

                <ul className="content">
                    <li>
                        <div className="item_title">備註</div>
                        <div className="item_content">{quotationJS.quotationRemark}</div>
                    </li>
                </ul>


                {this.couldAcceptQuotationAndWriteReservation() == false
                    ?
                    ''
                    :
                    <div>
                        <div className="expire">報價單有效時間 : {new Date(quotationJS.deadline).toLocaleDateString()}</div>
                        <br/>
                        <br/>
                        <Buttons>
                            {(new Date(quotationJS.deadline)).valueOf() > (Date.parse(new Date())).valueOf() ?
                                <BlueButton onClick={this.accept.bind(this)}>接受報價</BlueButton> :
                                <BlueButton onClick={this.reQuote.bind(this)}>重新報價</BlueButton>}
                        </Buttons>
                    </div>
                }
            </div>
        );
    }

    render() {

        return (
            <Container>

                {this.hasQuotation() == false ? <div className="penging quotation">尚未報價</div> :
                    this._quotationRender()
                }
            </Container>
        );
    }
}

export default CarQuotation;
