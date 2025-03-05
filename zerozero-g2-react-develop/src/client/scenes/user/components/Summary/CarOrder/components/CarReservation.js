/**
 * Created by ryan on 2017/12/14.
 */
import React, {Component} from 'react';
import styled from 'styled-components';

import {reservationForm} from '../../../../../../styles/commons';


const Container = styled.div `
  ${reservationForm};
`

class CarReservation extends Component {
    _contactRender(name, phone) {
        if (name != null && phone != null && name.length > 0 && phone.length > 0) {
            return (
                <div>
                    <li>
                        <div className="item_title">現場聯絡人</div>
                        <div className="item_content">{name}</div>
                    </li>
                    < li>
                        <div className="item_title"> 聯繫電話</div>
                        <div className="item_content">{phone}</div>
                    </li>
                </div>);
        }
    }

    _paperRender(papers) {
        let result = [];
        for (let i = 0; i < papers.length; i++) {
            result.push(<div key={i}>{papers[i]}<br/></div>);
        }

        return result;
    }

    _reservationRender() {
        const {appointment, reservation} = this.props;
        const reservationJS = reservation.toJS();
        return (
            <div>
                <div className="title reservation">預約單</div>
                <ul className="content">
                    <li>
                        <div className="item_title">車主姓名/公司名稱</div>
                        <div className="item_content">{reservationJS.ownerName}</div>
                    </li>
                    <li>
                        <div className="item_title">身分證字號/統一編號</div>
                        <div className="item_content">{reservationJS.ownerIdentityNumber}</div>
                    </li>
                    <li>
                        <div className="item_title">拖吊地址</div>
                        <div className="item_content">{reservationJS.address}</div>
                    </li>
                    <li>
                        <div className="item_title">通訊地址</div>
                        <div className="item_content">{reservationJS.residenceAddress}</div>
                    </li>
                    <li>
                        <div className="item_title">車牌號碼</div>
                        <div className="item_content">{reservationJS.plateNumber}</div>
                    </li>
                </ul>
                <ul className="content">
                    {this._contactRender(reservationJS.contactName1, reservationJS.contactPhone1)}
                    {this._contactRender(reservationJS.contactName2, reservationJS.contactPhone2)}

                    <li>
                        <div className="item_title">拖吊方式</div>

                        <div className="item_content">
                            {reservationJS.dragMethod}
                        </div>
                    </li>

                    <li>
                        <div className="item_title">拖車攜帶文件</div>

                        <div className="item_content">
                            {this._paperRender(reservationJS.dragPaper)}
                        </div>
                    </li>

                    <li>
                        <div className="item_title">車籍報廢攜帶文件</div>

                        <div className="item_content">
                            {this._paperRender(reservationJS.scrapPaper)}
                        </div>
                    </li>
                </ul>
                <ul className="content">
                    <li>
                        <div className="item_title">代辦車籍報廢</div>

                        <div className="item_content">
                            {reservationJS.agencyScrap ? "是" : "否"}
                        </div>
                    </li>

                    <li>
                        <div className="item_title">零件代拆卸</div>

                        <div className="item_content">
                            {reservationJS.removeParts ? "是" : "否"}
                        </div>
                    </li>
                </ul>
            </div>
        );
    }

    hasReservation() {
        const {orderStatus, reservation} = this.props;
        console.log("ORDER_STATUS = " + orderStatus);

        if (orderStatus === 'CRSS03' || orderStatus === 'CRSS04' || orderStatus === 'CRSS06' && reservation != null) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <Container>
                {this.hasReservation() == false ? <div className="penging reservation">尚未預約</div> :
                    this._reservationRender()
                }
            </Container>

        );
    }
}

export default CarReservation;
