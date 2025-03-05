import { Map, fromJS, Seq} from "immutable";
import { exchangeType } from "../../../../commons/constants/actionTypes";
import createReducer from "../../../../utils/createReducer";
import {exchangeListData} from "./fakeData";

const types = exchangeType;

const state = fromJS({
    ExchangeList: [],
    EXCHANGE_LIST_STATUS_DATA: []
})

const GET_USER_EXCHANGE_LIST = (state, { payload }) => {
    return state.update('ExchangeList', value => fromJS(payload)) ;
}

const EXCHANGE_ORDER_SUCCESS = (state, { payload }) => {
    return state.update('EXCHANGE_ORDER_SUCCESS,', value => fromJS(payload));
}

const EXCHANGE_LIST_STATUS = (state, { payload }) => {
    return state.update('EXCHANGE_LIST_STATUS_DATA', value => fromJS(payload));
}

const handlers = {
    [types.GET_USER_EXCHANGE_LIST]:GET_USER_EXCHANGE_LIST,
    [types.EXCHANGE_ORDER_SUCCESS]:EXCHANGE_ORDER_SUCCESS,
    [types.EXCHANGE_LIST_STATUS]:EXCHANGE_LIST_STATUS

}

export default createReducer(state, handlers);