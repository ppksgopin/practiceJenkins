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
        keyword:'',
        page:1,
        row:8,
        isNew: undefined,
        isHot: undefined,
        featured: true,
        sidx: 'order',
        sord: 'desc'
    },
    EVENTS: [],
    ITEM_COLLECTIONS:[],
});

const SEARCH_INDEX_ITEMS = (state, {payload}) => {

    const items = state.get('ITEMS').toJS();

    const newItems = {
        total: payload.total,
        page: payload.page,
        records: payload.records,
        rows: payload.page === 1 ? payload.rows : items.rows.concat(payload.rows)
    }

    return state.update('ITEMS', value => fromJS(newItems));
};

const SET_INDEX_SEARCH_CRITERIA = (state, {payload}) => {

    if(payload.key === 'isHot' || payload.key === 'isNew') {
        if(payload.key === 'isHot') {
            return state
                .updateIn(['CRITERIA', 'isHot'], value => value === true ? undefined: true)
                .updateIn(['CRITERIA', 'isNew'], value => undefined)
        }
        if(payload.key === 'isNew') {
            return state
                .updateIn(['CRITERIA', 'isNew'], value => value === true ? undefined: true)
                .updateIn(['CRITERIA', 'isHot'], value => undefined)
        }
    } else {
        return state.updateIn(['CRITERIA', payload.key], value => payload.value);
    }
};

const SET_TOGGLE_FEATURED_CRITERIA = (state, {payload}) => {
    return state.updateIn(['CRITERIA', payload.key], value => payload.value)
        .updateIn(['CRITERIA', 'page'], value => 1);
}

const LOAD_INDEX_EVENTS = (state, {payload}) => {
  return state.update('EVENTS', value => fromJS(payload));
};

const GET_ITEM_COLLECTIONS = (state, {payload}) => {
    return state.update('ITEM_COLLECTIONS', value => fromJS(payload));
}

const handlers = {
    [types.SEARCH_INDEX_ITEMS]: SEARCH_INDEX_ITEMS,
    [types.SET_INDEX_SEARCH_CRITERIA]: SET_INDEX_SEARCH_CRITERIA,
    [types.LOAD_INDEX_EVENTS]: LOAD_INDEX_EVENTS,
    [types.GET_ITEM_COLLECTIONS]: GET_ITEM_COLLECTIONS,
    [types.SET_TOGGLE_FEATURED_CRITERIA]:SET_TOGGLE_FEATURED_CRITERIA
};

export default createReducer(state, handlers);