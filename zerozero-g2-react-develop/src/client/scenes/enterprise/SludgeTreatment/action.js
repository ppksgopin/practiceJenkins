import axios from 'axios';

import {sludgeTreatmentType, commonType} from '../../../commons/constants/actionTypes';
import { fromJS } from 'immutable';

export function loadCounties() {
    return (dispatch) => {

        const url = `common/counties`;
        const request = axios.get(url);

        request.then(response => {
            dispatch({
                type: sludgeTreatmentType.LOAD_COUNTIES,
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
                type: sludgeTreatmentType.LOAD_TOWNSHIPS,
                payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '縣市資料取得失敗，請洽管理人員'});
        });
    }
}

export function loadItems() {
    return dispatch => {
        const url = `enterprise/sludgetreatment/item/options`;
        const request = axios.get(url);

        request.then(response => {
            dispatch({
               type: sludgeTreatmentType.LOAD_ITEMS,
               payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '污泥處理清運項目取得失敗，請洽管理人員'});
        });
    }
}

export function loadPackTypes() {
    return dispatch => {
        const url = `enterprise/sludgetreatment/pack/options`;
        const request = axios.get(url);

        request.then(response => {
            dispatch({
                type: sludgeTreatmentType.LOAD_PACK_TYPES,
                payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '污泥處理盛裝方式取得失敗，請洽管理人員'});
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
            type: sludgeTreatmentType.CHANGE_FORM_VALUE,
            payload: {key, value}
        });
    }
}

export function submitForm(values) {
    return dispatch => {

        const items = values.toJS().items;
        let newItems = [];
        items.map(item => {
           if(item.code === 'D-Other') {
               newItems.push({itemType: item.code, itemOther: values.get('itemOther')});
           } else {
               newItems.push({itemType: item.code});
           }
        });
        values = values.update('items', value => fromJS(newItems));

        const packTypes = values.toJS().packTypes;
        let newPackTypes = [];
        packTypes.map(pack => {
           if(pack.code === 'SPK99') {
               newPackTypes.push({itemType: pack.code, itemOther: values.get('packOther')});
           } else {
               newPackTypes.push({itemType: pack.code});
           }
        });
        values = values.update('packTypes', value => fromJS(newPackTypes));

        const url = `enterprise/sludgetreatment/apply`;
        const request = axios.post(url, values);
        return request.then(response => {
            dispatch({type: sludgeTreatmentType.APPOINTMENT_APPLY, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '諮詢污泥處理失敗，請洽管理人員'});
            throw new Error('諮詢污泥處理失敗，請洽管理人員');
        });

    }
}
