import {Map, fromJS} from 'immutable';

import {carType} from '../../../../commons/constants/actionTypes';
import createReducer from '../../../../utils/createReducer';

const types = carType;

const state = fromJS({
    RESERVATION: {
        ownerName: '',
        ownerIdentityNumber: '',
        address: '',
        residenceAddress: '',
        plateNumber: '',
        contactName1: '',
        contactPhone1: '',
        contactName2: '',
        contactPhone2: '',
        scrapExecutorType: 1,
        addtionSupports: [],
        sameMemberInfo: false,
        sameAsAddress: false
    },
    SCRAPPED_IDENTITIES: [],
    DRAG_PAPER: [],
    SCRAP_PAPER: [],
    ADDITION_SUPPORTS: [],
});

const GET_SCRAPPED_IDENTITIES_SUCCESS = (state, {payload}) => {
    // console.info("GET_SCRAPPED_IDENTITIES_SUCCESS : ", JSON.stringify(payload));
    return state.update('SCRAPPED_IDENTITIES', value => fromJS(payload.scrappedIdneities));
};

const GET_SCRAPPED_IDENTITIES_FAIL = (state) => {
    return state;
};

const UPDATE_DRAG_PAPER_SUCCESS = (state, {payload}) => {
    // console.info("UPDATE_DRAG_PAPER_SUCCESS : ", JSON.stringify(payload));
    return state.update('DRAG_PAPER', value => fromJS(payload));
};

const UPDATE_DRAG_PAPER_FAIL = (state) => {
    return state;
};

const UPDATE_SCRAP_PAPER_SUCCESS = (state, {payload}) => {
    // console.info("UPDATE_SCRAP_PAPER_SUCCESS : ", JSON.stringify(payload));
    return state.update('SCRAP_PAPER', value => fromJS(payload));
};

const UPDATE_SCRAP_PAPER_FAIL = (state) => {
    return state;
};

const GET_ADDITION_SUPPORTS_SUCCESS = (state, {payload}) => {
    // console.info("GET_ADDITION_SUPPORTS_SUCCESS : ", JSON.stringify(payload));
    return state.update('ADDITION_SUPPORTS', value => fromJS(payload.additionSupports));
};

const GET_ADDITION_SUPPORTS_FAIL = (state) => {
    return state;
};

const UPDATE_SUPPORTS_SUCCESS = (state, {payload}) => {
    // console.info("UPDATE_SUPPORTS_SUCCESS : ", JSON.stringify(payload));
    return state.update('ADDITION_SUPPORTS', value => fromJS(payload));
};

const UPDATE_SUPPORTS_FAIL = (state) => {
    return state;
};

const CREATE_RESERVATION_SUCCESS = (state, {payload}) => {
    // console.info("CREATE_RESERVATION_SUCCESS : ", JSON.stringify(payload));
    return state.update('RESERVATION', value => fromJS(payload));
};

const CREATE_RESERVATION_FAIL = (state) => {
    return state;
};

const handlers = {
    [types.GET_SCRAPPED_IDENTITIES_SUCCESS]: GET_SCRAPPED_IDENTITIES_SUCCESS,
    [types.GET_SCRAPPED_IDENTITIES_FAIL]: GET_SCRAPPED_IDENTITIES_FAIL,
    [types.UPDATE_DRAG_PAPER_SUCCESS]: UPDATE_DRAG_PAPER_SUCCESS,
    [types.UPDATE_DRAG_PAPER_FAIL]: UPDATE_DRAG_PAPER_FAIL,
    [types.UPDATE_SCRAP_PAPER_SUCCESS]: UPDATE_SCRAP_PAPER_SUCCESS,
    [types.UPDATE_SCRAP_PAPER_FAIL]: UPDATE_SCRAP_PAPER_FAIL,
    [types.GET_ADDITION_SUPPORTS_SUCCESS]: GET_ADDITION_SUPPORTS_SUCCESS,
    [types.GET_ADDITION_SUPPORTS_FAIL]: GET_ADDITION_SUPPORTS_FAIL,
    [types.UPDATE_SUPPORTS_SUCCESS]: UPDATE_SUPPORTS_SUCCESS,
    [types.UPDATE_SUPPORTS_FAIL]: UPDATE_SUPPORTS_FAIL,
    [types.CREATE_RESERVATION_SUCCESS]: CREATE_RESERVATION_SUCCESS,
    [types.CREATE_RESERVATION_FAIL]: CREATE_RESERVATION_FAIL,
};

export default createReducer(state, handlers);
