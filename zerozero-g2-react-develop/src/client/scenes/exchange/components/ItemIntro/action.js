import axios from 'axios';
import { commonType, exchangeType } from '../../../../commons/constants/actionTypes';

export function getItem(itemId) {
    return (dispatch) => {
        axios.get(`exchange/item/${itemId}`).then(res => {
            return res.data ;
        }, error => {
            if(error.response.status === 400 && error.response.data.itemId) {
                dispatch({
                    type: exchangeType.ITEM_DISCONTINUED,
                    payload: {
                        itemId: error.response.data.itemId,
                        name: error.response.data.itemName,
                        enabled: false
                    }
                });
            } else if(error.response.status === 401){
                //因為有的情況要秀401的訊息，所以在axios interceptor reject 之後，這裡不處理MessageFail 的狀況
                //  console.log('取得商品失敗，請重新登入')
            } else {
                dispatch({type: commonType.MESSAGE_FAIL, payload: '取得兌換商品失敗，請洽管理人員'});
            }
        }).then(data => {
            dispatch({type:exchangeType.GET_ITEM_INFO, payload: initItem(data)})
        })
    }
}

function initItem(item) {
    return {
        ...item,
        itemVal:1,
        isSelected: true,
        enabled: true,
        /*exchangeLimit:false,
        exchangeLimitMax:3,
        quantity:10,*/

    }
}

export function incItem() {
    return (dispatch) => {
        dispatch({ type: exchangeType.INCREASE_ITEM_VALUE})
    }
}

export function decItem() {
    return (dispatch) => {
        dispatch({ type: exchangeType.DECREASE_ITEM_VALUE})
    }
}

export function setItemFieldValue(payload) {
    return (dispatch) => {
        dispatch({ type: exchangeType.SET_ITEM_FIELD_VALUE, payload: payload})
    }
}

/*
export function getItem(itemId) {

    const url = `exchange/item/${itemId}`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            let payload = response.data;
            payload.enabled = true;
            dispatch({
                type: exchangeType.GET_ITEM_INFO,
                payload: response.data
            });
        }, error => {
            // console.log('error:', error);
            // console.log('error.response:', error.response);
            // console.log('error.responseType:', error.responseType);
            if(error.response.status === 400 && error.response.data.itemId) {
                dispatch({
                    type: exchangeType.ITEM_DISCONTINUED,
                    payload: {
                        itemId: error.response.data.itemId,
                        name: error.response.data.itemName,
                        enabled: false
                    }
                });
            } else {
                dispatch({type: commonType.MESSAGE_FAIL, payload: '取得兌換商品失敗，請洽管理人員'});
            }

        });
    }
}*/

export function setField(field) {
    return dispatch => {
        dispatch({
            type: exchangeType.SET_FORM_FIELD,
            payload: field
        })
    }
}

export function exchange() {

    return (dispatch, getState) => {
        new Promise((resolve, reject) => {
            const error = validate(getState());
            if(error) {
                reject(error);
            } else {
                resolve();
            }
        }).then(() => {
            // console.log('submit form');
            dispatch(formSubmit());
        }, (error) => dispatch({
            type: exchangeType.VALIDATION_FAILED,
            payload: error
        }));
    }

}

export function formSubmit() {

    return (dispatch, getState) => {
        const url = `exchange/exchange`;
        const form = getState().exchange.item.get('FORM').toJS();
        const request = axios.post(url, form);

        return request.then(response => {
            dispatch({
                type: exchangeType.EXCHANGE_ITEM,
                payload: response.data

            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '兌換商品失敗，請洽管理人員'});
            dispatch({type: exchangeType.EXCHANGE_FAILED});
            throw error;
        });

    }
}

export function validate(state) {
    const form = state.exchange.item.get('FORM').toJS();
    return null;
    // if(!form.name) {
    //     return {msg:'請輸入聯絡人姓名', field:'contactName'};
    // }
    // if(form.name.length < 2 || form.name.length > 4) {
    //     return {msg:'請輸入正確聯絡人姓名', field:'contactName'};
    // }
    //
    // if(!form.mobile) {
    //     return {msg:'請輸入正確手機號碼', field:'mobile'};
    // } else {
    //     let re = /^09\d{8}$/i;
    //     if(!re.test(form.mobile)) {
    //         return  {msg:'請輸入正確手機號碼', field:'mobile'};
    //     }
    // }
    //
    // if(form.email) {
    //     let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //     if(!re.test(form.email.toLowerCase())) {
    //         return  {msg:'請輸入正確Email', field:'email'}
    //     }
    // }
}

