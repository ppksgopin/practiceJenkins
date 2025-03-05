import axios from 'axios';
import { commonType, exchangeType } from '../../../../commons/constants/actionTypes';

export function searchCollectionItems() {
    const url = `exchange/item/collection/items`;

    return (dispatch, getState) => {

        const criteria = getState().exchange.quickSearch.get('CRITERIA').toJS();

        const request = axios.post(url, criteria);

        request.then(response => {
            dispatch({
                type: exchangeType.SEARCH_COLLECTION_ITEMS,
                payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '兌換商品查詢失敗，請洽管理人員'});
        });
    }
}

export function moreItems() {
    return (dispatch, getState) => {
        const criteria = getState().exchange.quickSearch.get('CRITERIA').toJS();
        dispatch({
            type: exchangeType.SEARCH_COLLECTION_ITEMS,
            payload: {key: 'page', value: criteria.page+1}
        });

        return dispatch(searchCollectionItems());
    }
}

export function initCollectionItems(collectionId) {
    return (dispatch, getState) => {
        dispatch({
            type: exchangeType.SET_COLLECTION_SEARCH_CRITERIA,
            payload: {key: 'collectionId', value:collectionId}
        });

        dispatch(getCollection(collectionId));
        return dispatch(searchCollectionItems())
    }
}

export function switchSearchOrder(sord) {
    return dispatch => {
        dispatch({
            type: exchangeType.SET_COLLECTION_SEARCH_CRITERIA,
            payload: {key: 'sidx', value: 'coins'}
        });
        dispatch({
            type: exchangeType.SET_COLLECTION_SEARCH_CRITERIA,
            payload: {key: 'sord', value: sord}
        });
        dispatch({
            type: exchangeType.SET_COLLECTION_SEARCH_CRITERIA,
            payload: {key: 'page', value: 1}
        });

        return dispatch(searchCollectionItems());
    }
}

export function getCollection(id) {
    return dispatch => {
        return axios.get(`exchange/item/collection/${id}`).then(res => {
            dispatch({
                type: exchangeType.GET_COLLECTION,
                payload: res.data
            })
        }, err => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得名稱失敗，請重新操作'});
        })
    }
}