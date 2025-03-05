import axios from 'axios';
import {commonType, enterpriseType} from "../../commons/constants/actionTypes";

export function loadSlides() {
    return (dispatch) => {

        const url = `common/enterpriseSlides`;
        const request = axios.get(url);

        request.then(response => {
            dispatch({
                type: enterpriseType.LOAD_SLIDES,
                payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '圖片取得失敗，請洽管理人員'});
        });
    }
}

export function submitSubscriptionForm(values) {
    return dispatch => {
        const url = `common/subscribe`;
        const request = axios.post(url, values);
        return request.then(response => {
            dispatch({type: enterpriseType.SUBSCRIPTION_APPLY, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '預約企業服務失敗，請洽管理人員'});
            throw new Error('預約企業服務失敗，請洽管理人員');
        });
    }
}

export function loadSubscriptionSources() {
    return dispatch => {
        const url = `common/subscriptionSources`;
        const request = axios.get(url);

        request.then(response => {
           dispatch({
               type: enterpriseType.LOAD_SUBSCRIPTION_SOURCES,
               payload: response.data
           })
        });
    }
}