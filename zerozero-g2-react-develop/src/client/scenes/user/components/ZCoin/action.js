import axios from 'axios';

import {zCoinsType, commonType, dashBoardType, auth} from '../../../../commons/constants/actionTypes';
import { loadingData } from '../../../../data/common/action';


/**
 * v2.10.0 統一使用這個method
 * @returns {function(*): Promise<{total: *}>}
 */
export function getUserTotalZcoins() {
    const url = `user/zcoins/total`;
    const request = axios.get(url);

    return dispatch => {
        return request.then(response => {
            dispatch({type: zCoinsType.GET_USER_TOTAL_RECORD, payload: response.data});
        }, error => {
            if(error && error.response.status === 401) {
                dispatch({type: auth.LOGIN_FAIL});
            } else {
                dispatch({type: commonType.MESSAGE_FAIL, payload: '取得Z幣失敗，請洽管理人員'});
            }
        });
    };
}

export function getUserZCoins() {
    return dispatch => {
        dispatch(loadingData(true));
        axios.get('user/zcoins/records').then(res => {
            dispatch({type: zCoinsType.GET_ZCOINS_SUCCESS, payload: res.data})
        }).catch(error => {
            dispatch({type: zCoinsType.GET_ZCOINS_FAIL, payload: error.response.data ? error.response.data : "" });
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得Z幣記錄失敗，請洽管理人員'});
        }).finally(error => {
            dispatch(loadingData(false));
        })
    }
}

/**
 * @deprecated
 * @returns {function(*, *): Promise<AxiosResponse<T>>}
 */
export function getZCoins() {
    return (dispatch, getState) => {

        const url = `user/queryUserCoinRecords`;

        const criteria = getState().user.zCoin.get('CRITERIA').toJS();

        const request = axios.post(url, criteria);
        return request.then(response => {
            dispatch({type: zCoinsType.GET_ZCOINS_SUCCESS, payload: response.data});
        }, error => {
            //console.log('getZcoins error:', error);
            dispatch({type: zCoinsType.GET_ZCOINS_FAIL, payload: error.response.data ? error.response.data : "" });
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得Z幣失敗，請洽管理人員'});
        })
    };
}

export function getVouchers() {
    return (dispatch, getState) => {
        const criteria = getState().user.zCoin.get('CRITERIA').toJS();

        const url = `user/vouchers/${criteria.filter}/${criteria.page}`;

        const request = axios.get(url);
        return request.then(response => {
            dispatch({type: zCoinsType.GET_VOUCHERS_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: zCoinsType.GET_VOUCHERS_FAIL, payload: error.response.data});
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得兌換記錄失敗，請洽管理人員'});
        });
    }
}

export function loadZCoins() {
    return dispatch => {

        dispatch(loadingData());

        let promises = [];
        promises.push(dispatch(getZCoins()));

        Promise.all(promises).then(() => {
            dispatch(loadingData(false));
        });
    }
}

export function loadVouchers() {

    return dispatch => {

        dispatch(loadingData());

        let promises = [];
        promises.push(dispatch(getVouchers()));

        Promise.all(promises).then(() => {
            dispatch(loadingData());
        });
    }

}

export function setRecordTypeAndLoadZCoins(type) {
    return (dispatch, getState) => {

        dispatch({type: zCoinsType.SET_CRITERIA, payload: {key: 'recordType', value: type}});
        dispatch({type: zCoinsType.SET_CRITERIA, payload: {key: 'page', value: 1}});
        if(type === 'e') {
            dispatch({type: zCoinsType.SET_CRITERIA, payload: {key: 'filter', value: 'total'}});
            dispatch(loadVouchers());
        } else {
            dispatch(loadZCoins());
        }
    }
}

export function setVoucherTypesAndLoadVouchers(type) {
    return (dispatch) => {
        dispatch({type: zCoinsType.SET_CRITERIA, payload: {key: 'recordType', value: 'e'}});
        dispatch({type: zCoinsType.SET_CRITERIA, payload: {key: 'filter', value: type}});
        dispatch({type: zCoinsType.SET_CRITERIA, payload: {key: 'page', value: 1}});
        dispatch(loadVouchers());
    }
}

export function more() {
    return (dispatch, getState) => {
        const page = getState().user.zCoin.get('CRITERIA').toJS().page;
        const recordType = getState().user.zCoin.get('CRITERIA').toJS().recordType;
        dispatch({type: zCoinsType.SET_CRITERIA, payload: {key: 'page', value: page+1}});
        if(recordType === 'e') {
            dispatch(loadVouchers());
        } else {
            dispatch(loadZCoins());
        }

    }
}
