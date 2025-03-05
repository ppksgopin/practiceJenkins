/**
 * Created by ryan on 2017/12/14.
 * Modified by Dennis on 2017/12/15.
 */
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";
import {browserHistory} from 'react-router'

import {profile} from '../../../../../data/auth/action';
import {getCarOrderDetail, updateCarOrderDetailOrderType, acceptQuotation, reQuoteQuotation} from './action';
import {CarReservationRoute} from '../../../../../commons/routePaths';

import styled from 'styled-components';
import {buttons, tagMenu} from '../../../../../styles/commons';

import PageTitle from '../../../../common/components/PageTitle';
import ReservationInfo from './../components/ReservationInfo';
import CarAppointment from './components/CarAppointment';
import CarQuotation from './components/CarQuotation';
import CarReservation from './components/CarReservation';
import OrderTabs from './components/OrderTabs';
import RedButton from '../../../../common/components/RedButton';

const Buttons = styled.div `
  ${buttons}

`
const TagMenu = styled.div `
  ${tagMenu}
`


class CarOrder extends Component {
    componentDidMount() {
        const {orderId, type} = this.props.match.params;

        this.props.updateCarOrderDetailOrderType(type);
        this.props.getCarOrderDetail(orderId);
    }

    changeOrderType(type) {
        this.props.updateCarOrderDetailOrderType(type);
    }

    acceptQuotation(appointmentId, quotationId) {
        this.props.acceptQuotation(appointmentId, quotationId, (appointmentId) => {
            // this.props.history.push(`user/summary/car/${orderId}/quotation`);
            this.props.history.push(CarReservationRoute(appointmentId));
        });
    }

    reQuoteQuotation(appointmentId, quotationId) {
        this.props.reQuoteQuotation(appointmentId, quotationId, (appointmentId) => {
            this.props.updateCarOrderDetailOrderType('appointment');
            this.props.getCarOrderDetail(appointmentId);
        });
    }

    handleQuotationEvent(isAccept, quotationId) {
        const {orderId} = this.props.match.params;

        if (isAccept) {
            this.acceptQuotation(orderId, quotationId);
        } else {
            this.reQuoteQuotation(orderId, quotationId);
        }
    }

    goBack() {
        this.props.history.goBack();
    }

    _orderTypeRender(type) {
        if (type === 'appointment') {
            return <CarAppointment appointment={this.props.appointment} vehicleType={this.props.orderType}/>;
        } else if (type === 'quotation') {
            return <CarQuotation handleQuotationEvent={this.handleQuotationEvent.bind(this)}
                                 orderStatus={this.props.orderStatus} appointment={this.props.appointment.toJS()}
                                 quotation={this.props.quotation} vehicleType={this.props.orderType}/>;
        } else if (type === 'reservation') {
            return <CarReservation orderStatus={this.props.orderStatus} appointment={this.props.appointment.toJS()}
                                   reservation={this.props.reservation} vehicleType={this.props.orderType}/>;
        } else {
            return '';
        }
    }

    _tagMenuRender(type) {
        return (<TagMenu>
            <ul>
                <li>
                    {
                        type === 'appointment' ? <OrderTabs className="active" name="詢價單"/> :
                            <OrderTabs onTabChange={this.changeOrderType.bind(this)} orderType="appointment"
                                       name="詢價單"/>
                    }
                </li>
                <li>
                    {
                        type === 'quotation' ? <OrderTabs className="active" name="報價單"/> :
                            <OrderTabs onTabChange={this.changeOrderType.bind(this)} orderType="quotation" name="報價單"/>
                    }

                </li>
                <li>
                    {
                        type === 'reservation' ? <OrderTabs className="active" name="預約單"/> :
                            <OrderTabs onTabChange={this.changeOrderType.bind(this)} orderType="reservation"
                                       name="預約單"/>
                    }
                </li>
            </ul>
        </TagMenu>);
    }

    render() {
        const {orderId} = this.props.match.params;
        const {orderType, orderStatusName} = this.props;

        return (
            <div>
                <Helmet>
                    <title>我的預約</title>
                </Helmet>

                <PageTitle title="廢車回收單"/>

                <ReservationInfo
                    reservationID={orderId}
                    status={orderStatusName}
                />

                {this._tagMenuRender(orderType)}
                {this._orderTypeRender(orderType)}

                <Buttons className="bob">
                    <RedButton onClick={this.goBack.bind(this)}>返回</RedButton>
                </Buttons>

                <br/><br/><br/>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        appointment: state.user.summary.carOrder.get('APPOINTMENT'),
        reservation: state.user.summary.carOrder.get('RESERVATION'),
        quotation: state.user.summary.carOrder.get('QUOTATION'),
        orderType: state.user.summary.carOrder.get('ORDER_TYPE'),
        orderStatus: state.user.summary.carOrder.get('ORDER_STATUS'),
        orderStatusName: state.user.summary.carOrder.get('ORDER_STATUS_NAME'),
    };
}

export default connect(mapStateToProps, {
    profile,
    getCarOrderDetail,
    updateCarOrderDetailOrderType,
    acceptQuotation,
    reQuoteQuotation
})(CarOrder);
