/**
 * Created by Ken on 2017/12/11.
 */
import { Map, fromJS } from 'immutable';

import { exchangeType } from '../../../../commons/constants/actionTypes';
import createReducer from '../../../../utils/createReducer';

const types = exchangeType;

const state = fromJS({
    CATEGORIES: [],
    ITEMS: {
        total:0,
        page:1,
        records:8,
        rows:[],
    },
    CRITERIA : {
        keyword:'',
        categoryId: undefined,
        page:1,
        isNew: undefined,
        isHot: undefined,
        sidx: 'coins',
        sord: 'asc'
    }
});

const GET_ITEM_CATEGORIES = (state, {payload}) => {

    let values = [];
    values.push({value: '', label: '全部'});
    payload.forEach((d) => {
        values.push({value:d.cid, label: d.name});
    })

    return state.update('CATEGORIES', value => fromJS(values));
};

const SET_SEARCH_CRITERIA = (state, {payload}) => {
    //const criteria = state.get('CRITERIA').toJS();

    // const newCriteria = {
    //     keyword: payload.keyword? payload.keyword : criteria.keyword? criteria.keyword : undefined,
    //     categoryId: payload.categoryId? (payload.categoryId === '-1'? undefined : payload.categoryId) : criteria.categoryId ? criteria.categoryId : undefined,
    //     page: payload.page? payload.page : criteria.page,
    //     isNew: !payload.hotOrNew? criteria.isNew : (payload.hotOrNew && payload.hotOrNew === 'new' && !criteria.isNew) ? true : undefined,
    //     isHot: !payload.hotOrNew? criteria.isHot : (payload.hotOrNew && payload.hotOrNew === 'hot' && !criteria.isHot) ? true : undefined,
    //     sidx: payload.sidx ? payload.sidx : criteria.sidx,
    //     sord: payload.sord ? payload.sord : criteria.sord
    // };
    //
    // return state.update('CRITERIA', value => fromJS(newCriteria));

    return state.updateIn(['CRITERIA', payload.key], value => payload.value);
}

const SEARCH_ITEMS = (state, {payload}) => {

    const items = state.get('ITEMS').toJS();

    const newItems = {
        total: payload.total,
        page: payload.page,
        records: payload.records,
        rows: payload.page === 1 ? payload.rows : items.rows.concat(payload.rows)
    }

    return state.update('ITEMS', value => fromJS(newItems));
};

const RESET_PAGE_TO_ONE = (state) => {
    return state.updateIn(['CRITERIA', 'page'], value => 1);
}

const handlers = {
    [types.GET_ITEM_CATEGORIES]: GET_ITEM_CATEGORIES,
    [types.SEARCH_ITEMS]: SEARCH_ITEMS,
    [types.SET_SEARCH_CRITERIA]: SET_SEARCH_CRITERIA,
    [types.RESET_PAGE_TO_ONE]: RESET_PAGE_TO_ONE
};

export default createReducer(state, handlers);