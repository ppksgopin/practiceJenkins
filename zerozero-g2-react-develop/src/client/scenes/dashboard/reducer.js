import {fromJS} from 'immutable';

import {dashBoardType} from '../../commons/constants/actionTypes';
import createReducer from '../../utils/createReducer';

const types = dashBoardType;

const state = fromJS({
    YOUTUBE_INFOS: {
        video: "https://www.youtube.com/embed/4jywXFeeDgY?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=4jywXFeeDgY",
        title: '',
        subtitle: ''
    },
    BANNERS: [],
    ACTIVITY_INFOS: [],
    TOTAL_COINS: 0,
});

const GET_YOUTUBE_SUCCESS = (state, {payload}) => {
    // console.info("GET_YOUTUBE_SUCCESS : ", JSON.stringify(payload));
    return state.update('YOUTUBE_INFOS', value => fromJS(payload));
};

const GET_BANNERS_SUCCESS = (state, {payload}) => {
    return state.update('BANNERS', value => fromJS(payload));
};

const GET_YOUTUBE_FAIL = (state) => {
    return state;
};

const GET_ACTIVITY_INFOS_SUCCESS = (state, {payload}) => {
    // console.info("GET_ACTIVITY_INFOS_SUCCESS : ", JSON.stringify(payload));
    return state.update('ACTIVITY_INFOS', value => fromJS(payload));
};

const GET_ACTIVITY_INFOS_FAIL = (state) => {
    return state;
};

const GET_USER_ZCOINS = (state, {payload}) => {
  return state.update('TOTAL_COINS', value => payload.total);
};

const handlers = {
    [types.GET_YOUTUBE_SUCCESS]: GET_YOUTUBE_SUCCESS,
    [types.GET_YOUTUBE_FAIL]: GET_YOUTUBE_FAIL,
    [types.GET_BANNERS_SUCCESS]: GET_BANNERS_SUCCESS,
    [types.GET_ACTIVITY_INFOS_SUCCESS]: GET_ACTIVITY_INFOS_SUCCESS,
    [types.GET_ACTIVITY_INFOS_FAIL]: GET_ACTIVITY_INFOS_FAIL,
    [types.GET_USER_ZCOINS]: GET_USER_ZCOINS
};

export default createReducer(state, handlers);
