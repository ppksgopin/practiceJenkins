import {Map, fromJS} from 'immutable';

import {carType} from '../../../../../../commons/constants/actionTypes';
import createReducer from '../../../../../../utils/createReducer';

const types = carType;

const state = fromJS({
    APPOINTMENT: {
        vehicleTypeId: 1,
        countyId: '',
        townshipId: '',
        vehicleRegisterTypeId: -1,
        motorcycleEngine: false,
        brandsId: -1,
        styleId: -1,
        engineDisplacementId: -1,
        plateNumber: '',
        aluminumRim: 3,
        catalyticConverter: 3,
        parts: 3,
        specialCases: [],
        pics: [],
        inquiryRemark: '',
        userName: '',
        userPhone: '',
        homePhone: ''
    },
    ORDER_ID: '',
    COUNTRIES: [],
    TOWNSHIPS: [],
    REGISTER_TYPES: [],
    VEHICLE_TYPES: [],
    BRANDS: [],
    STYLES: [],
    DISPLACEMENTS: [],
    MANUFACTURE_YEARS: [],
    SPECIAL_CASES: [],
});

const GET_RECYCLE_COUNTRIES_SUCCESS = (state, {payload}) => {
    // console.info("GET_RECYCLE_COUNTRIES_SUCCESS : ", JSON.stringify(payload));
    return state.update('COUNTRIES', value => fromJS(payload.countries));
};

const GET_RECYCLE_COUNTRIES_FAIL = (state) => {
    return state;
};

const GET_RECYCLE_TOWNSHIPS_SUCCESS = (state, {payload}) => {
    // console.info("GET_RECYCLE_TOWNSHIPS_SUCCESS : ", JSON.stringify(payload));
    return state.update('TOWNSHIPS', value => fromJS(payload.townShips));
};

const GET_RECYCLE_TOWNSHIPS_FAIL = (state) => {
    return state;
};

const GET_REGISTER_TYPES_SUCCESS = (state, {payload}) => {
    // console.info("GET_REGISTER_TYPES_SUCCESS : ", JSON.stringify(payload));
    return state.update('REGISTER_TYPES', value => fromJS(payload.registerTypes));
};

const GET_REGISTER_TYPES_FAIL = (state) => {
    return state;
};

const GET_VEHICLE_TYPES_SUCCESS = (state, {payload}) => {
    // console.info("GET_VEHICLE_TYPES_SUCCESS : ", JSON.stringify(payload));
    return state.update('VEHICLE_TYPES', value => fromJS(payload.vehicleTypes));
};

const GET_VEHICLE_TYPES_FAIL = (state) => {
    return state;
};

const GET_BRANDS_SUCCESS = (state, {payload}) => {
    // console.info("GET_BRANDS_SUCCESS : ", JSON.stringify(payload));
    return state.update('BRANDS', value => fromJS(payload.brands));
};

const GET_BRANDS_FAIL = (state) => {
    return state;
};

const GET_STYLES_SUCCESS = (state, {payload}) => {
    // console.info("GET_STYLES_SUCCESS : ", JSON.stringify(payload));
    return state.update('STYLES', value => fromJS(payload.styles));
};

const GET_STYLES_FAIL = (state) => {
    return state;
};

const GET_DISPLACEMENTS_SUCCESS = (state, {payload}) => {
    // console.info("GET_DISPLACEMENTS_SUCCESS : ", JSON.stringify(payload));
    return state.update('DISPLACEMENTS', value => fromJS(payload.displacements));
};

const GET_DISPLACEMENTS_FAIL = (state) => {
    return state;
};

const GET_MANUFACTURE_YEARS_SUCCESS = (state, {payload}) => {
    // console.info("GET_MANUFACTURE_YEARS_SUCCESS : ", JSON.stringify(payload));
    return state.update('MANUFACTURE_YEARS', value => fromJS(payload.manufactureYears));
};

const GET_MANUFACTURE_YEARS_FAIL = (state) => {
    return state;
};

const GET_SPECIAL_CASES_SUCCESS = (state, {payload}) => {
    // console.info("GET_SPECIAL_CASES_SUCCESS : ", JSON.stringify(payload));
    return state.update('SPECIAL_CASES', value => fromJS(payload.specialCases));
};

const GET_SPECIAL_CASES_FAIL = (state) => {
    return state;
};

const UPDATE_SPECIAL_CASES_SUCCESS = (state, {payload}) => {
    // console.info("UPDATE_SPECIAL_CASES_SUCCESS : ", JSON.stringify(payload));
    return state.update('SPECIAL_CASES', value => fromJS(payload));
};

const UPDATE_SPECIAL_CASES_FAIL = (state) => {
    return state;
};

const CREATE_APPOINTMENT_ORDER_SUCCESS = (state, {payload}) => {
    console.info("CREATE_APPOINTMENT_ORDER_SUCCESS : ", JSON.stringify(payload));
    return state.update('ORDER_ID', value => payload);
};

const CREATE_APPOINTMENT_ORDER_FAIL = (state) => {
    return state;
};

const INIT_APPOINTMENT_ORDER = () => {
    return fromJS({
        APPOINTMENT: {
            vehicleTypeId: 1,
            countyId: '',
            townshipId: '',
            vehicleRegisterTypeId: 1,
            motorcycleEngine: false,
            brandsId: 1,
            styleId: 1,
            engineDisplacementId: null,
            plateNumber: '',
            aluminumRim: 0,
            catalyticConverter: 0,
            parts: 0,
            specialCases: [],
            pics: [],
            inquiryRemark: '',
            userName: '',
            userPhone: ''
        },
        ORDER_ID: '',
        COUNTRIES: [],
        TOWNSHIPS: [],
        REGISTER_TYPES: [],
        VEHICLE_TYPES: [],
        BRANDS: [],
        STYLES: [],
        DISPLACEMENTS: [],
        MANUFACTURE_YEARS: [],
        SPECIAL_CASES: [],
    });
};

const handlers = {
    [types.GET_RECYCLE_COUNTRIES_SUCCESS]: GET_RECYCLE_COUNTRIES_SUCCESS,
    [types.GET_RECYCLE_COUNTRIES_FAIL]: GET_RECYCLE_COUNTRIES_FAIL,
    [types.GET_RECYCLE_TOWNSHIPS_SUCCESS]: GET_RECYCLE_TOWNSHIPS_SUCCESS,
    [types.GET_RECYCLE_TOWNSHIPS_FAIL]: GET_RECYCLE_TOWNSHIPS_FAIL,
    [types.GET_REGISTER_TYPES_SUCCESS]: GET_REGISTER_TYPES_SUCCESS,
    [types.GET_REGISTER_TYPES_FAIL]: GET_REGISTER_TYPES_FAIL,
    [types.GET_VEHICLE_TYPES_SUCCESS]: GET_VEHICLE_TYPES_SUCCESS,
    [types.GET_VEHICLE_TYPES_FAIL]: GET_VEHICLE_TYPES_FAIL,
    [types.GET_BRANDS_SUCCESS]: GET_BRANDS_SUCCESS,
    [types.GET_BRANDS_FAIL]: GET_BRANDS_FAIL,
    [types.GET_STYLES_SUCCESS]: GET_STYLES_SUCCESS,
    [types.GET_STYLES_FAIL]: GET_STYLES_FAIL,
    [types.GET_DISPLACEMENTS_SUCCESS]: GET_DISPLACEMENTS_SUCCESS,
    [types.GET_DISPLACEMENTS_FAIL]: GET_DISPLACEMENTS_FAIL,
    [types.GET_MANUFACTURE_YEARS_SUCCESS]: GET_MANUFACTURE_YEARS_SUCCESS,
    [types.GET_MANUFACTURE_YEARS_FAIL]: GET_MANUFACTURE_YEARS_FAIL,
    [types.GET_SPECIAL_CASES_SUCCESS]: GET_SPECIAL_CASES_SUCCESS,
    [types.GET_SPECIAL_CASES_FAIL]: GET_SPECIAL_CASES_FAIL,
    [types.UPDATE_SPECIAL_CASES_SUCCESS]: UPDATE_SPECIAL_CASES_SUCCESS,
    [types.UPDATE_SPECIAL_CASES_FAIL]: UPDATE_SPECIAL_CASES_FAIL,
    [types.CREATE_APPOINTMENT_ORDER_SUCCESS]: CREATE_APPOINTMENT_ORDER_SUCCESS,
    [types.CREATE_APPOINTMENT_ORDER_FAIL]: CREATE_APPOINTMENT_ORDER_FAIL,
    [types.INIT_APPOINTMENT_ORDER]: INIT_APPOINTMENT_ORDER,
};

export default createReducer(state, handlers);
