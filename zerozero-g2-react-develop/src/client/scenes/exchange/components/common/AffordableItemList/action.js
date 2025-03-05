import axios from 'axios';
import { commonType, exchangeType } from '../../../../../commons/constants/actionTypes';

export function searchItems() {
    const url = `exchange/search`;
    return (dispatch, getState) => {

        const criteria = getState().exchange.affordable.get('CRITERIA').toJS();

        const postData = {
            ...criteria,
            sidx: 'coins',
            sord: 'asc'
        }

        const request = axios.post(url, criteria);

        request.then(response => {
            dispatch({
                type: exchangeType.SEARCH_AFFORDABLE_ITEMS,
                payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '兌換商品查詢失敗，請洽管理人員'});
        });
    }
}

export function moreItems() {
    return (dispatch, getState) => {
        const criteria = getState().exchange.affordable.get('CRITERIA').toJS();
        dispatch({
            type: exchangeType.SET_AFFORDABLE_SEARCH_CRITERIA,
            payload: {page: criteria.page+1}
        });

        return dispatch(searchItems());
    }
}


export function totalCoinsOfUserChanged(coins) {
    return dispatch => {
        dispatch({
            type: exchangeType.SET_AFFORDABLE_SEARCH_CRITERIA,
            payload: {coins}
        });

        return dispatch(searchItems());
    }
}
