/**
 * Created by ryan on 2017/12/14.
 */
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";

import {profile} from '../../../../data/auth/action';
import {toDate} from '../../../../utils/dateTimeConverter';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {buttons,bound, reservationForm, tagMenu,sectionTitle} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';

import PageTitle from '../../../common/components/PageTitle';
import ReservationInfo from './components/ReservationInfo';
import RedButton from '../../../common/components/RedButton';

const Buttons = styled.div `
  ${buttons}

`

const TagMenu = styled.div `
  ${tagMenu}
`

const SectionTitle = styled.div `
  ${sectionTitle};
`

const Container = styled.div `
  ${reservationForm};
`

class CarReservation extends Component {
    componentWillMount() {
        this.props.profile();
    }

    render() {

        return (
            <div>
                <Helmet>
                    <title>我的預約</title>
                </Helmet>

                <PageTitle title="廢車回收單"/>

                {/*尚未預約就改成詢價中*/}
                <ReservationInfo
                    reservationID = "201707062"
                    status="已預約"
                    classname="done"
                />
                
                <TagMenu>
                    <ul>
                        <li>
                            <a href="#">詢價單</a>
                        </li>
                        <li>
                            <a href="#">報價單</a>
                        </li>
                        <li>
                            <a className="active" href="#">預約單</a>
                        </li>
                    </ul>
                </TagMenu>

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
                
                <Buttons className="bob">
                    <RedButton>返回</RedButton>
                </Buttons>

                <br /><br /><br />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { userProfile: state.data.auth.get('PROFILE')}
}

export default connect(mapStateToProps, { profile })(CarReservation);
