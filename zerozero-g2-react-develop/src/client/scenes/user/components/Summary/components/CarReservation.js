/**
 * Created by ryan on 2017/12/14.
 */
import React, {Component} from 'react';
import styled from 'styled-components';

import {reservationForm} from '../../../../../styles/commons';


const Container = styled.div `
  ${reservationForm};
`

class CarReservation extends Component {
    render() {
        return (
            <Container>
                {/*尚未預約就只留以下這段
                    <div className="penging reservation">尚未預約</div>
                    */}

                <div className="title reservation">預約單</div>
                <ul className="content">
                    <li>
                        <div className="item_title">車主姓名</div>
                        <div className="item_content">古先生</div>
                    </li>
                    <li>
                        <div className="item_title">身分證字號</div>
                        <div className="item_content">A111234567</div>
                    </li>
                    <li>
                        <div className="item_title">拖吊地址</div>
                        <div className="item_content">台北市大安區龍安街15號</div>
                    </li>
                    <li>
                        <div className="item_title">通訊地址</div>
                        <div className="item_content">台北市大安區龍安街15號</div>
                    </li>
                    <li>
                        <div className="item_title">車牌號碼</div>
                        <div className="item_content">AAA-0000</div>
                    </li>
                </ul>
                <ul className="content">
                    <li>
                        <div className="item_title">現場聯絡人</div>
                        <div className="item_content">古先生</div>
                    </li>
                    <li>
                        <div className="item_title">聯繫電話</div>
                        <div className="item_content">0911111111</div>
                    </li>
                    <li>
                        <div className="item_title">攜帶文件</div>
                        <div className="item_content">
                            有效保險<br/>
                            行照<br/>
                            身分證<br/>
                        </div>
                    </li>
                </ul>
            </Container>

        );
    }
}

export default CarReservation;
