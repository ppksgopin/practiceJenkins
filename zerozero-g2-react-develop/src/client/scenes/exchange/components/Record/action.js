import axios from 'axios';
import { commonType, exchangeType, zCoinsType } from '../../../../commons/constants/actionTypes';
import {UserExchangeRoute} from "../../../../commons/routePaths";
import { setVoucherTypesAndLoadVouchers } from '../../../user/components/Exchange/action';

export function getRecord(recordId) {
    //const url = `exchange/record/${recordId}`;
    const url = `user/orders/item/${recordId}`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: exchangeType.GET_RECORD, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得兌換商品失敗，請洽管理人員'});
        });
    }
}

/**
 * @deprecated
 * 人工核銷
 * @param recordDetailId
 * 
 */
export function verifyForCode3(recordDetailId, history) {
    const url = `exchange/record/verify/${recordDetailId}`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({
               type: exchangeType.VERIFY_CODE_3
            });
            dispatch(() => history.push(`/user/zcoin/e/used`));
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '兌換券核銷發生錯誤，請洽管理人員'});
        });
    }
}

export function exchangeVerify(orderItemId, history) {
    const url = `exchange/verify/${orderItemId}`;
    const request = axios.get(url);

    return dispatch => {
        request.then((res) => {
            dispatch({
                type: exchangeType.VERIFY_CODE_3
            });
            return 'unused'
        }).then(type => {
            dispatch(setVoucherTypesAndLoadVouchers('used'));
            return 'redirectUserExchange';
        }).then(res=>{
            history.push(UserExchangeRoute());
        }).catch(error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '兌換券核銷發生錯誤，請洽管理人員'});
        })
    }
}