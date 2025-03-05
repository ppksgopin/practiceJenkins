import axios from 'axios';

import {commonType} from '../../commons/constants/actionTypes';

export function message(messageType, message) {
    return dispatch => {
        dispatch({type: messageType, payload: message});
    }
}

export function resetMessage() {
    return dispatch => {
        dispatch({type: commonType.MESSAGE_SUCCESS, payload: ""});
        dispatch({type: commonType.MESSAGE_FAIL, payload: ""});
    }
}

export function getLocationInfo(callback) {
    const location = localStorage.getItem('location');

    if (location) {
        return dispatch => {
            dispatch({type: commonType.GET_LOCATION_INFO_SUCCESS, payload: JSON.parse(location)});
        };
    } else {
        const url = `common/counties`;
        const request = axios.get(url);

        return dispatch => {
            request.then(response => {
                localStorage.setItem('location', JSON.stringify(response.data));
                dispatch({type: commonType.GET_LOCATION_INFO_SUCCESS, payload: response.data});
            }, error => {
                dispatch({type: commonType.GET_LOCATION_INFO_FAIL, payload: error.response.data});
            });
        };
    }
}

export function getAreaInfo(city, cb) {
    const area = localStorage.getItem('area');
    let areaJS = {};
    if (area) {
        areaJS = JSON.parse(area);
        // console.info("areaJS : ", JSON.stringify(areaJS));
    }

    if(typeof cb === "function"){
        cb()
    }

    if (areaJS[city]) {
        // console.info("exit areaJS[city] : ", JSON.stringify(areaJS[city]));
        return dispatch => {
            dispatch({type: commonType.GET_AREA_INFO_SUCCESS, payload: areaJS[city]});
        };
    } else {
        const url = `common/counties/${city}/townships`;
        const request = axios.get(url);

        return dispatch => {
            request.then(response => {
                areaJS[city] = response.data;
                // console.info("areaJS[city] : ", JSON.stringify(areaJS[city]));

                localStorage.setItem('area', JSON.stringify(areaJS));
                dispatch({type: commonType.GET_AREA_INFO_SUCCESS, payload: areaJS[city]});

            }, error => {
                dispatch({type: commonType.GET_AREA_INFO_FAIL, payload: error.response.data});
            });
        };
    }
}

export function uploadImages(updateImageDTOs, callback) {
    const url = `common/uploadImage`;
    const request = axios.post(url, updateImageDTOs);

    return dispatch => {
        request.then(resp => {
            callback(resp.data);
            dispatch({type: commonType.UPLOAD_IMAGE_SUCCESS, payload: resp.data});
        }, error => {
            dispatch({type: commonType.UPLOAD_IMAGE_FAIL, payload: error.response.data});
        });
    };
}

export function deleteImage(imageId, callback) {
    const url = `common/deleteImage/${imageId}`;
    const request = axios.get(url);

    return dispatch => {
        request.then(resp => {
            callback(imageId);
            dispatch({type: commonType.DELETE_IMAGE_SUCCESS});
        }, error => {
            dispatch({type: commonType.DELETE_IMAGE_FAIL, payload: error.response.data});
        });
    };
}

export function updateImageBlocks(images) {
    return dispatch => {
        dispatch({type: commonType.UPLOAD_IMAGE_BLOCKS, payload: images});
    };
}

export function updateSubscription(subscription) {
    return dispatch => {
        dispatch({type: commonType.UPDATE_SUBSCRIPTION, payload: subscription});
    }
}

export function subscribeNewsLetter() {
    return (dispatch,getState) => {

        let subscription = getState().data.common.get('SUBSCRIPTION').toJS();
        subscription.source = 1;
        console.log('subscription:', subscription);
        let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(subscription.contactEmail.toLowerCase())) {
            //dispatch({type: commonType.MESSAGE_FAIL, payload: 'Email錯誤，請重新輸入'});
            dispatch({type: commonType.SET_SWEET_ALERT, payload: {message:'Email錯誤，請重新輸入', type:'alert', icon:'error'}});
        } else {
            const url = `/common/subscribe`;
            const request = axios.post(url, subscription);

            return request.then( resp => {
                dispatch({type: commonType.SUBMIT_SUBSCRIPTION});
            }, error => {
                dispatch({type: commonType.SET_SWEET_ALERT, payload: {message:'訂閱失敗，請洽管理人員', type:'alert', icon:'error'}});
            });
        }
    }
}

export function confirmClicked() {
    return dispatch => {
        dispatch({type: commonType.ON_ALERT_CONFIRM_CLICK});
    }
}

export function cancelClicked() {
    return dispatch => {
        dispatch({type: commonType.ON_ALERT_CANCEL_CLICK});
    }
}

export function resetSweetAlert() {
    return dispatch => {
        return dispatch({type: commonType.SET_SWEET_ALERT, payload: {confirmClicked:false, cancelClicked:false}});
    }
}

export function fetchCompanyProfile(unifiedNo) {

    return dispatch => {

        if(!unifiedNo || unifiedNo.length !== 8) {
            return dispatch({
                type: commonType.FETCH_COMPANY_PROFILE,
                payload: null
            });
        }

        const url = `/enterprise/profile/${unifiedNo}`;
        const request = axios.get(url);

        return request.then(response => {
            dispatch({
                type: commonType.FETCH_COMPANY_PROFILE,
                payload: response.data
            });
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '公司資料取得失敗，請洽管理人員'});
        });
    }
}

export function cleanLocalCompanyProfile() {
    return dispatch => dispatch({
        type: commonType.CLEAN_COMPANY_PROFILE
    })
}

export function loadingData(status) {

    return dispatch => dispatch({type: commonType.TOGGLE_IS_LOADING, payload: status}) ;
}

