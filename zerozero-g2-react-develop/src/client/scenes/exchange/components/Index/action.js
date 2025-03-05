import axios from 'axios';
import { commonType, exchangeType } from '../../../../commons/constants/actionTypes';
import {omit} from 'lodash'

export function searchIndexItems() {
    const url = `exchange/search`;
    return (dispatch, getState) => {

        const criteria = getState().exchange.index.get('CRITERIA').toJS();

        const postData = {
            ...criteria,
            featured: criteria.featured === false ? null : criteria.featured
        }

        const request = axios.post(url, postData);

        request.then(response => {
            dispatch({
                type: exchangeType.SEARCH_INDEX_ITEMS,
                payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '兌換商品查詢失敗，請洽管理人員'});
        });
    }
}

export function moreItems() {
    return (dispatch, getState) => {
        const criteria = getState().exchange.index.get('CRITERIA').toJS();
        dispatch({
            type: exchangeType.SET_INDEX_SEARCH_CRITERIA,
            payload: {key: 'page', value: criteria.page+1}
        });

        return dispatch(searchIndexItems());
    }
}

export function initIndexItems() {
    return (dispatch, getState) => {
        const criteria = getState().exchange.index.get('CRITERIA').toJS();
        return dispatch(searchIndexItems());
        /*if((!criteria.isHot) && (!criteria.isNew)) {
            return dispatch(searchHotOrNew("isNew"));
        }*/
    }
}

export function toggleFeatured(featured) {
    return (dispatch) => {
        dispatch({type: exchangeType.SET_TOGGLE_FEATURED_CRITERIA, payload: {key: 'featured', value: featured}});
        return dispatch(searchIndexItems());
    }
}

export function searchHotOrNew(hotOrNew) {

    return (dispatch, getState) => {
        dispatch({
            type: exchangeType.SET_INDEX_SEARCH_CRITERIA,
            payload: {key: hotOrNew, value: ''}
        });
        dispatch({
            type: exchangeType.SET_INDEX_SEARCH_CRITERIA,
            payload: {key: 'page', value: 1}
        });
        return dispatch(searchIndexItems());
    }
}

export function switchSearchOrder(sord) {
    if(sord === 'default') {
        return dispatch => {
            dispatch({
                type: exchangeType.SET_INDEX_SEARCH_CRITERIA,
                payload: {key: 'sidx', value: 'order'}
            });
            dispatch({
                type: exchangeType.SET_INDEX_SEARCH_CRITERIA,
                payload: {key: 'sord', value: 'desc'}
            });
            dispatch({
                type: exchangeType.SET_INDEX_SEARCH_CRITERIA,
                payload: {key: 'page', value: 1}
            });

            return dispatch(searchIndexItems());
        }
    }else {
        return dispatch => {
            dispatch({
                type: exchangeType.SET_INDEX_SEARCH_CRITERIA,
                payload: {key: 'sidx', value: 'coins'}
            });
            dispatch({
                type: exchangeType.SET_INDEX_SEARCH_CRITERIA,
                payload: {key: 'sord', value: sord}
            });
            dispatch({
                type: exchangeType.SET_INDEX_SEARCH_CRITERIA,
                payload: {key: 'page', value: 1}
            });

            return dispatch(searchIndexItems());
        }
    }
}

//兌換中心首頁廣告
export function getEvents() {
    return dispatch => {
        const url = `exchange/indexEvents`;
        const request = axios.get(url);

        return request.then(response => {
            dispatch({
                type: exchangeType.LOAD_INDEX_EVENTS,
                payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得兌換中心活動訊息失敗，請洽管理人員'});
        });
    }
}

//兌換中心首頁取得活動快搜列表
export function getItemCollections() {
    return dispatch => {
        return axios.get('exchange/item/collections').then(res => {
            dispatch({
                type: exchangeType.GET_ITEM_COLLECTIONS,
                payload: res.data
            })
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得活動快搜列表失敗，請重新操作'})
        })
    }
}

