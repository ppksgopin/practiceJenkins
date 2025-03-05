import axios from 'axios';

import {diskDestroyType, commonType} from '../../../commons/constants/actionTypes';

export function loadCounties() {
    return (dispatch) => {

        const url = `common/counties`;
        const request = axios.get(url);

        request.then(response => {
            dispatch({
                type: diskDestroyType.LOAD_COUNTIES,
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
                type: diskDestroyType.LOAD_TOWNSHIPS,
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
            type: diskDestroyType.CHANGE_FORM_VALUE,
            payload: {key, value}
        });
    }
}

export function submitDiskDestroyForm(values) {
    return dispatch => {
        const url = `enterprise/diskdestroy/apply`;
        const request = axios.post(url, values);
        return request.then(response => {
            dispatch({type: diskDestroyType.APPOINTMENT_APPLY, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '預約磁碟銷毀失敗，請洽管理人員'});
            throw new Error('預約磁碟銷毀失敗，請洽管理人員');
        });

    }
}