import axios from 'axios';

import {woodClearanceType, commonType} from '../../../commons/constants/actionTypes';
import { fromJS } from 'immutable';

export function loadCounties() {
    return (dispatch) => {

        const url = `common/counties`;
        const request = axios.get(url);

        request.then(response => {
            dispatch({
                type: woodClearanceType.LOAD_COUNTIES,
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
                type: woodClearanceType.LOAD_TOWNSHIPS,
                payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '縣市資料取得失敗，請洽管理人員'});
        });
    }
}

export function loadItems() {
    return dispatch => {
        const url = `enterprise/woodclearance/options`;
        const request = axios.get(url);

        request.then(response => {
            dispatch({
               type: woodClearanceType.LOAD_ITEMS,
               payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '廢木材清運項目取得失敗，請洽管理人員'});
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
            type: woodClearanceType.CHANGE_FORM_VALUE,
            payload: {key, value}
        });
    }
}

export function submitForm(values) {
    return dispatch => {

        const items = values.toJS().items;
        let newItems = [];
        items.map(item => {
           if(item.code === 'EAWT04') {
               newItems.push({itemType: item.code, itemOther: values.get('itemOther')});
           } else {
               newItems.push({itemType: item.code});
           }
        });
        values = values.update('items', value => fromJS(newItems));

        const url = `enterprise/woodclearance/apply`;
        const request = axios.post(url, values);
        return request.then(response => {
            dispatch({type: woodClearanceType.APPOINTMENT_APPLY, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '諮詢廢木材清運失敗，請洽管理人員'});
            throw new Error('諮詢廢木材清運失敗，請洽管理人員');
        });

    }
}
