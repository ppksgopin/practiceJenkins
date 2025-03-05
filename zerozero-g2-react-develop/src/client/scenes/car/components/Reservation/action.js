import axios from 'axios';

import {carType, commonType} from '../../../../commons/constants/actionTypes';

export function getScrappedIdentities() {
    const url = `car/scrappedIdneities`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: carType.GET_SCRAPPED_IDENTITIES_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得報廢身份清單失敗，請洽管理人員'});
        });
    };
}

export function createReservation(orderId, createReservationDTO, callback) {
    const url = `car/order/createReservation/${orderId}`;
    const request = axios.post(url, createReservationDTO);

    return dispatch => {
        request.then(resp => {
            callback();
            dispatch({type: carType.CREATE_RESERVATION_SUCCESS, payload: createReservationDTO});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得建立預約單失敗，請洽管理人員'});
        });
    };
}

export function updateDragPaper(dragPaper) {
    return dispatch => {
        dispatch({type: carType.UPDATE_DRAG_PAPER_SUCCESS, payload: dragPaper});
    };
}

export function updateScrapPaper(scrapPaper) {
    return dispatch => {
        dispatch({type: carType.UPDATE_SCRAP_PAPER_SUCCESS, payload: scrapPaper});
    };
}

export function getAddtionSupports(orderId) {
    const url = `car/order/${orderId}/addtionSupports`;
    const request = axios.get(url);

    return dispatch => {
        request.then(resp => {
            dispatch({type: carType.GET_ADDITION_SUPPORTS_SUCCESS, payload: resp.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得額外支援服務失敗，請洽管理人員'});
        });
    };
}

export function updateSupports(supports, key) {
    return dispatch => {
        if (supports) {
            let newSupports = [];
            supports.map(support => {
                if (support.key == key) {
                    support.support = !support.support;
                }

                newSupports.push(support);
            });

            dispatch({type: carType.UPDATE_SUPPORTS_SUCCESS, payload: newSupports});
        }
    };
}
