import axios from 'axios';
import { commonType, exchangeType } from '../../../../commons/constants/actionTypes';

export function getItemCategories() {
    const url = `exchange/categories`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
           dispatch({type: exchangeType.GET_ITEM_CATEGORIES, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得兌換商品類別失敗，請洽管理人員'});
        });
    }
}

export function searchItems() {
    return (dispatch) => {
        dispatch(resetPage());
        dispatch({type: exchangeType.SET_SEARCH_CRITERIA, payload: {key: 'sord', value: 'asc'}})
        dispatch(search());
    }
}

function search() {
    const url = `exchange/search`;
    return (dispatch, getState) => {
        let criteria = getState().exchange.search.get('CRITERIA').toJS();

        const request = axios.post(url, criteria);

        request.then(response => {
            dispatch({
                type: exchangeType.SEARCH_ITEMS,
                payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '兌換商品查詢失敗，請洽管理人員'});
        });
    }
}

export function resetPage() {
    return dispatch => {
        dispatch({
            type: exchangeType.RESET_PAGE_TO_ONE,
        })
    }
}

export function moreItems() {
    return (dispatch, getState) => {
        const criteria = getState().exchange.search.get('CRITERIA').toJS();
        dispatch({
            type: exchangeType.SET_SEARCH_CRITERIA,
            payload: {key: 'page', value: criteria.page+1}
        });

        return dispatch(search());
    }
}

export function setCategory(categoryId) {
    return {
        type: exchangeType.SET_SEARCH_CRITERIA,
        payload: {key:'categoryId', value:categoryId}
    };
}

export function setKeyword(keyword) {
    return {
        type: exchangeType.SET_SEARCH_CRITERIA,
        payload: {key:'keyword', value:keyword}
    };
}

export function switchSearchOrder(sord) {
    return dispatch => {
        dispatch({
            type: exchangeType.SET_SEARCH_CRITERIA,
            payload: {key: 'sidx', value: 'coins'}
        });
        dispatch({
            type: exchangeType.SET_SEARCH_CRITERIA,
            payload: {key: 'sord', value: sord}
        });
        dispatch(resetPage());

        return dispatch(search());
    }
}
