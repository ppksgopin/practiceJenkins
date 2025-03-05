import axios from 'axios';

import {carType, commonType} from '../../../../../../commons/constants/actionTypes';

export function getRecycleCountries(vehicleType) {
    let type="car";
    if(vehicleType != 1) {
        type="motor";
    }

    const url = `car/recycleCountries/${type}`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: carType.GET_RECYCLE_COUNTRIES_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得服務區域失敗，請洽管理人員'});
        });
    };
}

export function getRecycleTownShips(vehicleType, countyId) {
    let type="car";
    if(vehicleType != 1) {
        type="motor";
    }

    const url = `car/${countyId}/recycleTownShips/${type}`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: carType.GET_RECYCLE_TOWNSHIPS_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得服務地區失敗，請洽管理人員'});
        });
    };
}

export function getRegisterTypes() {
    const url = `car/registerTypes`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: carType.GET_REGISTER_TYPES_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得登記身份類型失敗，請洽管理人員'});
        });
    };
}

export function getVehicleTypes() {
    const url = `car/vehicleTypes`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: carType.GET_VEHICLE_TYPES_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得回收車種類型失敗，請洽管理人員'});
        });
    };
}

export function getBrandsByType(vehicleType) {
    const url = `car/${vehicleType}/brands`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: carType.GET_BRANDS_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得廠牌失敗，請洽管理人員'});
        });
    };
}

export function getStylesByBrand(brandId) {
    const url = `car/${brandId}/styles`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: carType.GET_STYLES_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得車款失敗，請洽管理人員'});
        });
    };
}

function transferEngineDisplacement(response) {
    let newReplacements = [];

    response.data.displacements.map(displacement => {
            let newData = {};
            newData.id = displacement.id;
            newData.name = displacement.engineDisplacement;

            newReplacements.push(newData);
        }
    );


    response.data.displacements = newReplacements;
}

export function getDisplacementsByStyle(styleId) {
    const url = `car/${styleId}/displacements`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            transferEngineDisplacement(response);

            dispatch({type: carType.GET_DISPLACEMENTS_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得引擎排氣量失敗，請洽管理人員'});
        });
    };
}

function transferManufactureYears(response) {
    let newYears = [];

    response.data.manufactureYears.map(year => {
            let newData = {};
            newData.id = year;
            newData.name = year;

            newYears.push(newData);
        }
    );


    response.data.manufactureYears = newYears;
}

export function getManufactureYears() {
    const url = `car/manufactureYeas`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            transferManufactureYears(response);

            dispatch({type: carType.GET_MANUFACTURE_YEARS_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得製造年份失敗，請洽管理人員'});
        });
    };
}

function transferSpecialCases(response) {
    let newSpecials = [];

    response.data.specialCases.map(special => {
            let newData = {};
            newData.id = special.id;
            newData.name = special.name;
            newData.selected = false;

            newSpecials.push(newData);
        }
    );

    response.data.specialCases = newSpecials;
}

export function getSpecialCases() {
    const url = `car/specialCases`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            transferSpecialCases(response);
            dispatch({type: carType.GET_SPECIAL_CASES_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得車子狀況清單失敗，請洽管理人員'});
        });
    };
}

export function updateSpecialCases(specialCases, specialId) {
    return dispatch => {
        if (specialCases) {
            let newSpecials = [];

            specialCases.map(special => {
                if (special.id == specialId) {
                    special.selected = !special.selected;
                }

                newSpecials.push(special);
            });

            dispatch({type: carType.UPDATE_SPECIAL_CASES_SUCCESS, payload: newSpecials});
        }
    };
}

export function createOrder(createOrderDTO, callback) {
    const url = `car/order/createOrder`;
    const request = axios.post(url, createOrderDTO);

    return dispatch => {
        request.then(resp => {
            callback(resp.data.orderId);
            dispatch({type: carType.CREATE_APPOINTMENT_ORDER_SUCCESS, payload: resp.data});
            dispatch({type: carType.CREATE_RESERVATION_SUCCESS, payload: {"ownerName": '',
                "ownerIdentityNumber": '',
                "address": '',
                "residenceAddress": '',
                "plateNumber" : createOrderDTO.plateNumber,
                "contactName1": '',
                "contactPhone1": '',
                "contactName2": '',
                "contactPhone2": '',
                "scrapExecutorType": 1,
                "addtionSupports": [],
                "sameMemberInfo": false,
                "sameAsAddress": false}});
        }, error => {
            dispatch({type: carType.CREATE_APPOINTMENT_ORDER_FAIL, payload: error.response.data});
        });
    };
}

export function initOrder() {
    return dispatch => {
        dispatch({type: carType.INIT_APPOINTMENT_ORDER});
        dispatch({type: commonType.UPLOAD_IMAGE_BLOCKS, payload: []});
    };
}
