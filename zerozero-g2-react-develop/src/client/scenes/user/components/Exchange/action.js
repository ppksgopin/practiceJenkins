import axios from 'axios';

import {userExchangeType, commonType} from '../../../../commons/constants/actionTypes';
import { loadingData } from '../../../../data/common/action';

/**
 * v2.10.0 修改api
 * @returns {function(*, *): Promise<AxiosResponse<T>>}
 */
export function getVouchers() {
    return (dispatch, getState) => {

        dispatch(loadingData(true));

        const criteria = getState().user.exchangeRecord.get('CRITERIA').toJS();

        const voucherPage = getState().user.exchangeRecord.getIn(['VOUCHERS', 'page']) ;
        const criteriaPage = getState().user.exchangeRecord.getIn(['CRITERIA', 'page']) ;

        if(voucherPage !== criteriaPage) {
            return axios.post('user/vouchers', criteria).then(res => {
                return res.data
            }).then(data => {
                dispatch({type: userExchangeType.GET_VOUCHERS_SUCCESS, payload: data});
            }).catch(error => {
                console.log('error: ', error);
                dispatch({type: userExchangeType.GET_VOUCHERS_FAIL, payload: error.response.data });
                dispatch({type: commonType.MESSAGE_FAIL, payload: '取得兌換記錄失敗，請洽管理人員'});
            }).finally(() => {
                dispatch(loadingData(false));
            });
        }else {
            dispatch(loadingData(false))
        }
    }
}

/**
 * @deprecated
 * @returns {Function}
 */
/*export function loadVouchers() {

    return (dispatch, getState) => {

        dispatch(loadingData(true));

        const voucherPage = getState().user.exchangeRecord.getIn(['VOUCHERS', 'page']) ;
        const criteriaPage = getState().user.exchangeRecord.getIn(['CRITERIA', 'page']) ;

        if(voucherPage !== criteriaPage) {
            let promises = [];
            promises.push(dispatch(getVouchers()));
            Promise.all(promises).then(() => {
                dispatch(loadingData(false));
            }).catch(() => { dispatch(loadingData(false)) });
        }else{
            dispatch(loadingData(false))
        }
    }
}*/

export function loadUserRecords() {
    return dispatch => {
        dispatch(loadingData(true));
        axios.get('user/orders').then(res => {
            dispatch({ type: userExchangeType.GET_RECORD_SUCCESS, payload: res.data});
        }).catch(error => {
            console.log('Load Records Fail: ', error);
            dispatch({type: userExchangeType.GET_RECORD_FAIL, payload: error.response.data })
            dispatch(loadingData(false));
        }).finally(() => {
            dispatch(loadingData(false));
        })
    }
}

export function setRecordTypeAndLoadData(type) {
    console.log('type');
    return (dispatch, getState) => {

        dispatch({type: userExchangeType.SET_USER_EXCHANGE_CRITERIA, payload: {key: 'recordType', value: type}});

        const voucherPage = getState().user.exchangeRecord.getIn(['VOUCHERS', 'page']) ;
        const criteriaPage = getState().user.exchangeRecord.getIn(['CRITERIA', 'page']) ;
        if(type === 'v') {
            console.log('voucherPage:',voucherPage);
            console.log('criteriaPage:',criteriaPage);
            if(voucherPage !== criteriaPage ) {
                dispatch({type: userExchangeType.SET_USER_EXCHANGE_CRITERIA, payload: {key: 'page', value: 1}});
                //dispatch({type: userExchangeType.SET_USER_EXCHANGE_CRITERIA, payload: {key: 'filter', value: 'total'}});
                dispatch(getVouchers());
            }
        } else {
            dispatch(loadUserRecords());
        }
    }
}

export function setVoucherTypesAndLoadVouchers(type) {
    console.log('setVoucherTypesAndLoadVouchers', type);
    return (dispatch) => {
        dispatch({type: userExchangeType.SET_USER_EXCHANGE_CRITERIA, payload: {key: 'filter', value: type}});
        dispatch({type: userExchangeType.SET_USER_EXCHANGE_CRITERIA, payload: {key: 'page', value: 1}});
        dispatch(getVouchers());
    }
}

export function setVoucherSortOrder(type) {
    return dispatch => {
        dispatch({type: userExchangeType.SET_USER_EXCHANGE_CRITERIA, payload: {key: 'sortOrder', value: type}})
        dispatch({type: userExchangeType.SET_USER_EXCHANGE_CRITERIA, payload: {key: 'page', value: 1}});
        dispatch(getVouchers());
    }
}

export function more() {
    return (dispatch, getState) => {
        const page = getState().user.exchangeRecord.get('CRITERIA').toJS().page;
        dispatch({type: userExchangeType.SET_USER_EXCHANGE_CRITERIA, payload: {key: 'page', value: page+1}});
        dispatch(getVouchers());
    }
}
