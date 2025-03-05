/**
 * Created by ryan on 2017/12/14.
 * Modified by Dennis on 2017/12/15.
 */
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";

import {profile} from '../../../../data/auth/action';
import {fetchElectronicById} from './data/action';
import {toDate} from '../../../../utils/dateTimeConverter';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {buttons,bound, reservationForm,sectionTitle} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';

import PageTitle from '../../../common/components/PageTitle';
import ReservationInfo from './components/ReservationInfo';
import RedButton from '../../../common/components/RedButton';

import { UserSummaryRoute } from '../../../../commons/routePaths';

const Buttons = styled.div `
  ${buttons}

`

const SectionTitle = styled.div `
  ${sectionTitle};
`
const Container = styled.div `
  ${reservationForm};
`


class ElecReservation extends Component {
    componentWillMount() {
        this.props.profile();
    }

    componentDidMount(){
        const { appointmentId } = this.props.match.params;
        this.props.fetchElectronicById(appointmentId);
    }

    _onClickGoBack() {

    }

    render() {
        const  { userAppointment } = this.props ;
        const { electronicAppointment } = userAppointment.toJS() ;
        const {appointmentId , statusName , county, townShip, bookingTimes =[], contactTime, contactPhone, items=[]} = electronicAppointment ;
        return (
            <div>
                <Helmet>
                    <title>我的預約</title>
                </Helmet>

                <PageTitle title="家電回收單"/>

                <ReservationInfo
                    reservationID={appointmentId}
                    status={statusName}
                />

                <Container>
                    <div className="title inquiry">回收項目</div>
                    <ul className="content">
                      <li>
                        <div className="item_title">回收地區</div>
                        <div className="item_content">{county} {townShip}</div>
                      </li>
                      <li>
                        <div className="item_title">回收品項</div>
                        <div className="item_content">{items.map((item, index) => {return item})}</div>
                      </li>
                      <li>
                        <div className="item_title">預約時間</div>
                        <div className="item_content">{bookingTimes.map((t, index) => {return t})}</div>
                      </li>
                      <li>
                        <div className="item_title">聯絡時間</div>
                        <div className="item_content">{contactTime}</div>
                      </li>
                      <li>
                        <div className="item_title">聯繫電話</div>
                        <div className="item_content">{contactPhone === 'null' ? '' : contactPhone}</div>
                      </li>

                    </ul>

                </Container>

                <Buttons className="bob">
                    <RedButton onClick={ (e) => this.props.history.goBack()}>返回</RedButton>
                </Buttons>

                <br /><br /><br />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userProfile: state.data.auth.get('PROFILE'),
        userAppointment: state.user.summary.userAppointment ,
    }
}

export default connect(mapStateToProps, { profile ,fetchElectronicById})(ElecReservation);
