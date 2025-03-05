import axios from 'axios';

import {foodClearanceType, commonType} from '../../../commons/constants/actionTypes';
import { fromJS } from 'immutable';

export function loadCounties() {
    return (dispatch) => {

        const url = `common/counties`;
        const request = axios.get(url);

        request.then(response => {
            dispatch({
                type: foodClearanceType.LOAD_COUNTIES,
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
                type: foodClearanceType.LOAD_TOWNSHIPS,
                payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '縣市資料取得失敗，請洽管理人員'});
        });
    }
}

export function loadItems() {
    return dispatch => {
        const url = `enterprise/foodclearance/options`;
        const request = axios.get(url);

        request.then(response => {
            dispatch({
               type: foodClearanceType.LOAD_ITEMS,
               payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '廢木材清運項目取得失敗，請洽管理人員'});
        });
    }
}

export function loadUnits() {
    return dispatch => {
        const url = `enterprise/foodclearance/units`;
        const request = axios.get(url);

        request.then(response => {
            dispatch({
                type: foodClearanceType.LOAD_UNITS,
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
            type: foodClearanceType.CHANGE_FORM_VALUE,
            payload: {key, value}
        });
    }
}

export function submitForm(values) {
    return dispatch => {

        const items = values.toJS().items;
        let newItems = [];
        items.map(item => {
            if(item.code === 'EFST05') {
                newItems.push({itemType: item.code, itemOther: values.get('itemOther')});
            } else {
                newItems.push({itemType: item.code});
            }
        });
        values = values.update('items', value => fromJS(newItems));

        const url = `enterprise/foodclearance/apply`;
        const request = axios.post(url, values);
        return request.then(response => {
            dispatch({type: foodClearanceType.APPOINTMENT_APPLY, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '預約食品報廢失敗，請洽管理人員'});
            throw new Error('預約食品報廢失敗，請洽管理人員');
        });

    }
}
