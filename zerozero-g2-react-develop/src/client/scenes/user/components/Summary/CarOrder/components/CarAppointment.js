/**
 * Created by ryan on 2017/12/14.
 * Modified by Dennis on 2017/12/15.
 */
import React, {Component} from 'react';

import styled from 'styled-components';
import {reservationForm} from '../../../../../../styles/commons';
import ImageList from '../../../../../common/components/ImageList';

const Container = styled.div `
  ${reservationForm};
`

class CarAppointment extends Component {
    _specialCasesRender(specialCases) {
        if(!specialCases) return;

        return (specialCases.map((special, i) => <li key={i}>
            <div className="item_title">特殊狀況</div>
            <div className="item_content">{special}</div>
        </li>));
    }

    _carEquRender(appointment) {
        if (appointment == null) return;

        return (
            <ul className="content">
                <li>
                    <div className="item_title">是否有鋁圈</div>
                    <div className="item_content">{appointment.get('aluminumRim')}</div>
                </li>
                <li>
                    <div className="item_title">是否有觸媒</div>
                    <div className="item_content">{appointment.get('catalyticConverter')}</div>
                </li>
                <li>
                    <div className="item_title">配備是否完全</div>
                    <div className="item_content">{appointment.get('parts')}</div>
                </li>

                {this._specialCasesRender(appointment.get('specialCases'))}
                {<ImageList pics={appointment.get('pics')}/>}
            </ul>
        );
    }

    _motoSpecialRender(appointment) {
        if (appointment == null || appointment.get('specialCases') == null || appointment.get('specialCases').size == 0) return;

        return (
            <ul className="content">
                {this._specialCasesRender(appointment.get('specialCases'))}
                {<ImageList pics={appointment.get('pics')}/>}
            </ul>
        );
    }

    render() {
        const {appointment} = this.props;
        const appointmentJs = appointment.toJS();

        return (
            <Container>
                <div className={appointmentJs.vehicleTypeId == 1 ? "title inquiry car" : "title inquiry motorcycle"}>
                    詢價項目
                </div>
                <ul className="content">
                    <li>
                        <div className="item_title">所在地區</div>
                        <div className="item_content">{appointmentJs.county} {appointmentJs.township}</div>
                    </li>
                    <li>
                        <div className="item_title">用戶登記</div>
                        <div className="item_content">{appointmentJs.vehicleRegisterType}</div>
                    </li>
                    {
                        appointmentJs.vehicleTypeId == 2 ?
                            <li>
                                <div className="item_title">引擎</div>
                                <div className="item_content">{appointmentJs.motorcycleEngine}</div>
                            </li>
                            : ""
                    }
                    <li>
                        <div className="item_title">廠牌</div>
                        <div className="item_content">{appointmentJs.brandsName}</div>
                    </li>
                    <li>
                        <div className="item_title">車款</div>
                        <div className="item_content">{appointmentJs.styleName}</div>
                    </li>
                    <li>
                        <div className="item_title">排氣量</div>
                        <div className="item_content">{appointmentJs.engineDisplacement}</div>
                    </li>
                    <li>
                        <div className="item_title">出廠年份</div>
                        <div className="item_content">{appointmentJs.manufactureYear}</div>
                    </li>
                    <li>
                        <div className="item_title">車牌號碼</div>
                        <div className="item_content">{appointmentJs.plateNumber}</div>
                    </li>
                </ul>
                {
                    appointmentJs.vehicleTypeId == 1 ?
                        this._carEquRender(appointment)
                        :
                        this._motoSpecialRender(appointment)
                }

                <ul className="content">
                    <li>
                        <div className="item_title">備註</div>
                        <div className="item_content">{appointmentJs.inquiryRemark}</div>
                    </li>
                    <li>
                        <div className="item_title">聯絡人</div>
                        <div className="item_content">{appointmentJs.userName}</div>
                    </li>
                    <li>
                        <div className="item_title">聯絡電話</div>
                        <div className="item_content">{appointmentJs.userPhone}</div>
                    </li>
                    <li>
                        <div className="item_title">住家電話</div>
                        <div className="item_content">{appointmentJs.homePhone}</div>
                    </li>
                </ul>


            </Container>
        );
    }
}


export default CarAppointment;
