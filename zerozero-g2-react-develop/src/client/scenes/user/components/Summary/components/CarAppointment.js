/**
 * Created by ryan on 2017/12/14.
 * Modified by Dennis on 2017/12/15.
 */
import React, {Component} from 'react';

import styled from 'styled-components';
import {reservationForm} from '../../../../../styles/commons';


const Container = styled.div `
  ${reservationForm};
`

class CarAppointment extends Component {
    render() {
        const {vehicleType} = this.props;

        return (
            <Container>
                <div className={vehicleType == 1 ? "title inquiry car" : "title inquiry motorcycle"}>詢價項目</div>
                <ul className="content">
                    <li>
                        <div className="item_title">所在地區</div>
                        <div className="item_content">台北市 大安區</div>
                    </li>
                    <li>
                        <div className="item_title">用戶登記</div>
                        <div className="item_content">自用</div>
                    </li>
                    {
                        vehicleType == 2 ?
                            <li>
                                <div className="item_title">引擎</div>
                                <div className="item_content">四行程</div>
                            </li>
                            : ""
                    }
                    <li>
                        <div className="item_title">廠牌</div>
                        <div className="item_content">本田</div>
                    </li>
                    <li>
                        <div className="item_title">車款</div>
                        <div className="item_content">Fits</div>
                    </li>
                    <li>
                        <div className="item_title">排氣量</div>
                        <div className="item_content">1600</div>
                    </li>
                    <li>
                        <div className="item_title">出廠年份</div>
                        <div className="item_content">2005</div>
                    </li>
                    <li>
                        <div className="item_title">車牌號碼</div>
                        <div className="item_content">AKK-0705</div>
                    </li>
                </ul>
                {
                    vehicleType == 1 ?
                        <ul className="content">
                            <li>
                                <div className="item_title">是否有鋁圈</div>
                                <div className="item_content">是</div>
                            </li>
                            <li>
                                <div className="item_title">是否有觸媒</div>
                                <div className="item_content">是</div>
                            </li>
                            <li>
                                <div className="item_title">配備是否完全</div>
                                <div className="item_content">是</div>
                            </li>
                            <li>
                                <div className="item_title">特殊狀況</div>
                                <div className="item_content">無</div>
                            </li>
                        </ul>
                        /*<ImageUploader pics={pics} max={0}/>*/
                        : ""
                }

                <ul className="content">
                    <li>
                        <div className="item_title">備註</div>
                        <div className="item_content">周六上午</div>
                    </li>
                    <li>
                        <div className="item_title">聯絡人</div>
                        <div className="item_content">古先生</div>
                    </li>
                    <li>
                        <div className="item_title">聯絡電話</div>
                        <div className="item_content">0911123456</div>
                    </li>
                </ul>


            </Container>
        );
    }
}


export default CarAppointment;
