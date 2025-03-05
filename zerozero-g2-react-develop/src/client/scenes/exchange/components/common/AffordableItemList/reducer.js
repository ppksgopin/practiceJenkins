/**
 * Created by Ken on 2017/12/11.
 */
import { Map, fromJS } from 'immutable';

import { exchangeType } from '../../../../../commons/constants/actionTypes';
import createReducer from '../../../../../utils/createReducer';

const types = exchangeType;

const state = fromJS({
    ITEMS: {
        total:0,
        page:1,
        records:6,
        rows:[],
    },
    CRITERIA : {
        page:1,
        coins:0,
        sidx: 'coins',
        sord: 'asc',
        rows: 6
    }
});

const SET_AFFORDABLE_SEARCH_CRITERIA = (state, {payload}) => {
    const criteria = state.get('CRITERIA').toJS();

    const newCriteria = {
        page: payload.page? payload.page : criteria.page,
        coins: payload.coins? payload.coins: criteria.coins,
        sidx: payload.sidx ? payload.sidx : criteria.sidx,
        sord: payload.sord ? payload.sord : criteria.sord,
        rows: 6
    };

    return state.update('CRITERIA', value => fromJS(newCriteria));
}

const SEARCH_AFFORDABLE_ITEMS = (state, {payload}) => {

    const items = state.get('ITEMS').toJS();

    const newItems = {
        total: payload.total,
        page: payload.page,
        records: payload.records,
        rows: payload.page === 1 ? payload.rows : items.rows.concat(payload.rows)
    }

    return state.update('ITEMS', value => fromJS(newItems));
};

const handlers = {
    [types.SEARCH_AFFORDABLE_ITEMS]:SEARCH_AFFORDABLE_ITEMS,
    [types.SET_AFFORDABLE_SEARCH_CRITERIA]: SET_AFFORDABLE_SEARCH_CRITERIA
};

export default createReducer(state, handlers);