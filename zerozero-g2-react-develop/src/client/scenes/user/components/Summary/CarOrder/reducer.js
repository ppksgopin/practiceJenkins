import {Map, fromJS} from 'immutable';

import {carType} from '../../../../../commons/constants/actionTypes';
import createReducer from '../../../../../utils/createReducer';

const types = carType;

const state = fromJS({
    APPOINTMENT: {
        vehicleTypeId: 1,
        vehicleType: '',
        county: '',
        township: '',
        vehicleRegisterType: '',
        motorcycleEngine: '',
        brandsName: '',
        styleName: '',
        engineDisplacement: '',
        manufactureYear: '',
        plateNumber: '',
        aluminumRim: '',
        catalyticConverter: '',
        parts: '',
        specialCaseIds: [],
        specialCases: [],
        pics: [],
        inquiryRemark: '',
        userName: '',
        userPhone: '',
        homePhone: ''
    },
    RESERVATION: {
        ownerName: '',
        ownerIdentityNumber: '',
        address: '',
        residenceAddress: '',
        contactName1: '',
        contactName2: '',
        contactPhone1: '',
        contactPhone2: '',
        scrapExecutorType: '',
        agencyScrap: false,
        removeParts: false,
        appointmentStart: null,
        appointmentEnd: null,
        dragMethod: '',
        dragPaper: [],
        scrapPaper: []
    },
    QUOTATION: {
        id: '',
        accept: false,
        basePrice: null,
        bonus: null,
        fee: null,
        aluminumRim: null,
        catalyticConverter: null,
        subsidyMotorcycle: null,
        taxReduce: null,
        deadline: null,
        quotationRemark: '',
        creator: '',
        createTime: null,
        updater: null,
        updateTime: null,
        equippedTotal: 0,
        subsidyTotal: 0,
        total: 0
    },
    ORDER_ID: '',
    ORDER_STATUS: '',
    ORDER_STATUS_NAME: '',
    ORDER_TYPE: 'appointment',
});

const GET_CAR_ORDER_DETAIL_SUCCESS = (state, {payload}) => {
    // console.info("GET_CAR_ORDER_DETAIL_SUCCESS : ", JSON.stringify(payload));
    return state.update('APPOINTMENT', value => fromJS(payload.appointment)).update('RESERVATION', value => fromJS(payload.reservation)).update('QUOTATION', value => fromJS(payload.quotation)).update('ORDER_STATUS', value => payload.statusId).update('ORDER_STATUS_NAME', value => payload.statusName);
};

const GET_CAR_ORDER_DETAIL_FAIL = (state) => {
    return state;
};

const UPDATE_CAR_ORDER_DETAIL_ORDERTYPE = (state, {payload}) => {
    // console.log("UPDATE_CAR_ORDER_DETAIL_ORDERTYPE : ", payload);
    return state.update('ORDER_TYPE', value => payload);
};

const ACCEPT_QUOTATION_SUCCESS = (state, {payload}) => {
    // console.info("ACCEPT_QUOTATION_SUCCESS : ", JSON.stringify(payload));
    return state;
};

const ACCEPT_QUOTATION_FAIL = (state) => {
    return state;
};

const REQOUTE_QUOTATION_SUCCESS = (state, {payload}) => {
    // console.info("REQOUTE_QUOTATION_SUCCESS : ", JSON.stringify(payload));
    return state;
};

const REQOUTE_QUOTATION_FAIL = (state) => {
    return state;
};

const handlers = {
    [types.GET_CAR_ORDER_DETAIL_SUCCESS]: GET_CAR_ORDER_DETAIL_SUCCESS,
    [types.GET_CAR_ORDER_DETAIL_FAIL]: GET_CAR_ORDER_DETAIL_FAIL,
    [types.UPDATE_CAR_ORDER_DETAIL_ORDERTYPE]: UPDATE_CAR_ORDER_DETAIL_ORDERTYPE,
    [types.ACCEPT_QUOTATION_SUCCESS]: ACCEPT_QUOTATION_SUCCESS,
    [types.ACCEPT_QUOTATION_FAIL]: ACCEPT_QUOTATION_FAIL,
    [types.REQOUTE_QUOTATION_SUCCESS]: REQOUTE_QUOTATION_SUCCESS,
    [types.REQOUTE_QUOTATION_FAIL]: REQOUTE_QUOTATION_FAIL,

};

export default createReducer(state, handlers);
