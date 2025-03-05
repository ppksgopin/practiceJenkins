/**
 * Created by Ken on 2017/12/11.
 */
import { Map, fromJS } from 'immutable';

import { exchangeType } from '../../../../commons/constants/actionTypes';
import createReducer from '../../../../utils/createReducer';

const types = exchangeType;

const state = fromJS({
    ITEMS: {
        total:0,
        page:1,
        records:8,
        rows:[],
    },
    CRITERIA : {
        collectionId:'',
        page:1,
        sidx: 'coins',
        sord: 'asc'
    },
    COLLECTION_ENTITY: {
        id:'',
        imageUrl:'',
        name:'',
        sortOrder:0
    }
});

const SEARCH_COLLECTION_ITEMS = (state, {payload}) => {

    const items = state.get('ITEMS').toJS();

    const newItems = {
        total: payload.total,
        page: payload.page,
        records: payload.records,
        rows: payload.page === 1 ? payload.rows : items.rows.concat(payload.rows)
    }

    return state.update('ITEMS', value => fromJS(newItems));
};

const SET_COLLECTION_SEARCH_CRITERIA = (state, {payload}) => {
    return state.updateIn(['CRITERIA', payload.key], value => payload.value);
};

const GET_COLLECTION = (state, {payload}) => {
    return state.update('COLLECTION_ENTITY' , value => fromJS(payload))
}

const handlers = {
    [types.SEARCH_COLLECTION_ITEMS]: SEARCH_COLLECTION_ITEMS,
    [types.SET_COLLECTION_SEARCH_CRITERIA]: SET_COLLECTION_SEARCH_CRITERIA,
    [types.GET_COLLECTION]: GET_COLLECTION
};

export default createReducer(state, handlers);