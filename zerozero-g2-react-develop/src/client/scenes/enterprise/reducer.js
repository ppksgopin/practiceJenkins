import createReducer from '../../utils/createReducer';
import {combineReducers} from 'redux';
import {enterpriseType, commonType} from '../../commons/constants/actionTypes';
import docDestroy from './DocDestroy/reducer';
import diskDestroy from './DiskDestroy/reducer';
import woodClearance from './WoodClearance/reducer';
import foodClearance from './FoodClearance/reducer';
import sludgeTreatment from './SludgeTreatment/reducer';
import {fromJS} from "immutable";

const types = {...enterpriseType, ...commonType};

const state = fromJS({
    SLIDES: [],
    COMPANY: null,
    SUBSCRIPTION_SOURCES: [],
});

const LOAD_SLIDES = (state, {payload}) => {
  return state.update('SLIDES', value => fromJS(payload));
};

const SUBSCRIPTION_APPLY = (state) => {
    return state;
};

const FETCH_COMPANY_PROFILE = (state, {payload}) => {
    return state.update('COMPANY', value => fromJS(payload));
};

const LOAD_SUBSCRIPTION_SOURCES = (state, {payload}) => {

    const sources = [];
    payload.forEach(p => {
        sources.push({value: p.id, label: p.name});
    });
    return state.update('SUBSCRIPTION_SOURCES', value => fromJS(sources));
}

const handlers = {
    [types.LOAD_SLIDES]: LOAD_SLIDES,
    [types.SUBSCRIPTION_APPLY]: SUBSCRIPTION_APPLY,
    [types.FETCH_COMPANY_PROFILE]: FETCH_COMPANY_PROFILE,
    [types.LOAD_SUBSCRIPTION_SOURCES]: LOAD_SUBSCRIPTION_SOURCES
};

const landing = createReducer(state, handlers);

export default combineReducers({landing, docDestroy, diskDestroy, woodClearance, foodClearance, sludgeTreatment});