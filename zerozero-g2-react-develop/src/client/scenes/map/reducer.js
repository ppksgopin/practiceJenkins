/**
 * Created by ryan on 2018/3/19.
 */
import { recycleMap } from '../../commons/constants/actionTypes';
import createReducer from '../../utils/createReducer';
import {List, Map, fromJS } from 'immutable';

const types = recycleMap ;

const state = fromJS({
    bounds:{
      categories:[],
      recycleItems:[],
      swPoint:{ latitude : 25.969285066860515, longitude : 124.32019431943331 },
      nePoint:{ latitude : 21.566911798527517, longitude : 117.78332908505831},
    },
    defaultLatLngBounds:{sw:{lat:25.065540684660235 ,lng:121.45377975782776}, ne: {lat:25.079145737488794, lng:121.48268324217224}},
    categories: [],
    recycleItems: [],
    markers:[],
    recycleUnit:{
        id: '',
        name: '',
        icon: '',
        recycleItems: [],
        items: [],
        score: 0,
        address: '',
        phone: '',
        images: [],
        point: {},
        businessTimes: [],
    },
    recycleUnitComment: {
        score:0,
        score1:0,
        score2:0,
        score3:0,
        score4:0,
        score5:0,
        comments:[],
    },
    checkInRecord:{
        id:0,
        unitId:'',
        unitName:'',
        time:0,
        coins:0,
        images:[],
    },
    currentPage:1,
});


const GET_CATEGORIES = (state, {payload}) => {
    return state.update('categories', value => fromJS(payload)) ;
};

const GET_RECYCLE_ITEMS = (state, {payload}) => {
    return state.update('recycleItems', value => fromJS(payload)) ;
};

const GET_RECYCLE_UNITS = (state, {payload}) => {
    return state.update('markers', value => fromJS(payload)) ;
};

const GET_RECYCLE_UNIT_DETAIL = (state, {payload}) => {
    return state.update('recycleUnit', value => fromJS(payload));
};

const GET_RECYCLE_UNIT_COMMENT = (state, {payload, loadData}) => {
    if(loadData){
        return state.update('recycleUnitComment', value => {
            console.log('recycleUnitComment value :' , value) ;
            const newComments = value.toJS().comments.concat(payload.comments) ;
            return fromJS(payload).update('comments', v => newComments);
        }).update('currentPage', (value) => value +1);

    }else{
        return state.update('recycleUnitComment', value => fromJS(payload)).update('currentPage', (value) => 1);
    }
}

const GET_CHECK_IN_RECORDS = (state, {payload}) => {
    return state.update('checkInRecord', value => fromJS(payload)) ;
}

const FILTER_RECYCLE_ITEMS = (state, action)  => {
    return state.updateIn(['bounds', action.key], (value) => {
        if((value.find((v) => v === action.value))) {
           return fromJS(value.filter((v) => v !== action.value));
        }else{
           return fromJS(value.concat(action.value));
        }
    });
}

const GET_RECYCLE_CAR = (state, {payload}) => {
    return state.update('markers', value => fromJS(payload)) ;
}

const GET_RECYCLE_SENSOR = (state, {payload}) => {
    return state.update('markers', value => fromJS(payload)) ;
}
const handlers = {
    [types.GET_CATEGORIES] : GET_CATEGORIES,
    [types.GET_RECYCLE_ITEMS] : GET_RECYCLE_ITEMS,
    [types.GET_RECYCLE_UNITS] : GET_RECYCLE_UNITS,
    [types.GET_RECYCLE_UNIT_DETAIL] : GET_RECYCLE_UNIT_DETAIL,
    [types.GET_RECYCLE_UNIT_COMMENT]: GET_RECYCLE_UNIT_COMMENT,
    [types.GET_CHECK_IN_RECORDS] : GET_CHECK_IN_RECORDS,
    [types.FILTER_RECYCLE_ITEMS] : FILTER_RECYCLE_ITEMS,
    [types.GET_RECYCLE_CAR]: GET_RECYCLE_CAR,
    [types.GET_RECYCLE_SENSOR]:GET_RECYCLE_SENSOR,
};

export default createReducer(state, handlers) ;

