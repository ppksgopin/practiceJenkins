import axios from 'axios';

import {docDestroyType, commonType} from '../../../commons/constants/actionTypes';

export function loadCounties() {
    return (dispatch) => {

        const url = `common/counties`;
        const request = axios.get(url);

        request.then(response => {
            dispatch({
                type: docDestroyType.LOAD_COUNTIES,
                payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '縣市資料取得失敗，請洽管理人員'});
        });
    }
}

export function loadTownships(countyId) {
    return (dispatch) => {
        const url = `common/counties/${countyId}/townships`;
        const request = axios.get(url);

        request.then(response => {
            dispatch({
                type: docDestroyType.LOAD_TOWNSHIPS,
                payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '縣市資料取得失敗，請洽管理人員'});
        });
    }
}

export function selectCounty(countyId) {
    return (dispatch) => {
        //dispatch(changeFormValue({key:'countyId', value:countyId}));
        dispatch(loadTownships(countyId));
    }
}

export function selectTownship(townshipId) {
    return dispatch => {
        dispatch(changeFormValue({key: 'townshipId', value:townshipId}));
    }
}

export function changeFormValue({key, value}) {
    return (dispatch) => {
        dispatch({
            type: docDestroyType.CHANGE_FORM_VALUE,
            payload: {key, value}
        });
    }
}

export function submitDocDestroyForm(values) {
    return dispatch => {
        const url = `enterprise/docdestroy/apply`;
        const request = axios.post(url, values);
        return request.then(response => {
            dispatch({type: docDestroyType.APPOINTMENT_APPLY, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '預約文件銷毀失敗，請洽管理人員'});
            throw new Error('預約文件銷毀失敗，請洽管理人員');
        });

    }
}
