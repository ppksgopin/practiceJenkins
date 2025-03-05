import axios from 'axios';

import {carType, commonType} from '../../../../../commons/constants/actionTypes';

export function getCarOrderDetail(orderId) {
    const url = `car/order/${orderId}`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: carType.GET_CAR_ORDER_DETAIL_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得訂單詳細失敗，請洽管理人員'});
        });
    };
}

export function updateCarOrderDetailOrderType(type) {
    return dispatch => {
        dispatch({type: carType.UPDATE_CAR_ORDER_DETAIL_ORDERTYPE, payload: type});
    };
}

export function acceptQuotation(appointmentId, orderId, callback) {
    const url = `car/order/accept/quotation/${orderId}`;
    const request = axios.post(url);

    return dispatch => {
        request.then(resp => {
            callback(appointmentId);
            dispatch({type: carType.ACCEPT_QUOTATION_SUCCESS, payload: resp.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '接受報價失敗，請洽管理人員'});
        });
    };
}

export function reQuoteQuotation(appointmentId, orderId, callback) {
    const url = `car/order/reQuote/quotation/${orderId}`;
    const request = axios.post(url);

    return dispatch => {
        request.then(resp => {
            callback(appointmentId);
            dispatch({type: carType.REQOUTE_QUOTATION_SUCCESS, payload: resp.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '重新報價失敗，請洽管理人員'});
        });
    };
}
