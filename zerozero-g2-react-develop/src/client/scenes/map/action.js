/**
 * Created by ryan on 2018/3/28.
 */

import axios from 'axios';
import { recycleMap } from '../../commons/constants/actionTypes' ;


/**
 * 取得所有點位類別
 * @returns {function(*)}
 */
export const getMapCategories = () => {
    const url = 'map/categories' ;
    const request = axios.get(url) ;

    return (dispatch) => {
        return request.then((response) => {
            dispatch({
                type: 'GET_CATEGORIES',
                payload: response.data
            });
        });
    }
}


/**
 * 取得所有回收品項
 * @returns {function(*)}
 */
export const getMapRecycleItems = () => {
    const url = 'map/recycleItems';
    const request = axios.get(url) ;

    return (dispatch) => {
        return request.then((response) => {
            dispatch({
                type: 'GET_RECYCLE_ITEMS',
                payload: response.data
            });
        });
    }
}

/**
 * 取得畫面上Bounds 內所有點位資料
 * @param mapBounds
 * @returns {function(*)}
 */
export const getMapRecycleUnits = (mapBounds) => {
    const url = 'map/recycleUnits' ;
    const request = axios.post(url, mapBounds) ;

    return (dispatch) => {
        return request.then((response) => {
            dispatch({
                type: 'GET_RECYCLE_UNITS',
                payload: response.data
            });
        });
    }
}

export const getMapRecycleCar = (center) => {
    const url = 'map/recycleCars';
    const request = axios.post(url, center) ;

    return (dispatch) => {
         return request.then((response) => {
            console.log('response :' ,response);
             dispatch({
                type: 'GET_RECYCLE_CAR',
                payload: response.data
            });
        });
    }
}

export const getMapSensor = () => {
    const instance = axios.create({
        baseURL: 'https://platform-api.zerozero.com.tw'
    });
    const request = instance.post('/Map/Search', '') ;
    return (dispatch) => {
        return request.then((response) => {
           // console.log('sensor response :', response) ;
            dispatch({
                type:'GET_RECYCLE_SENSOR',
                payload: response.data
            })
        })
    }
}

/**
 * 取得點位詳細資料
 * @param unitId
 * @returns {function(*)}
 */
export const getMapRecycleUnitDetail = (unitId) => {
    const url = `map/recycleUnits/${unitId}` ;
    const request = axios.get(url) ;

    return (dispatch) => {
        return request.then((response) => {
           // return response.data
            dispatch({
                type: 'GET_RECYCLE_UNIT_DETAIL',
                payload: response.data
            });
        });
    }
}

/**
 * 取得評論資料
 * @param unitId
 * @returns {function(*)}
 */
export const getMapRecycleUnitComment = (unitId, loadData=false ) => {

    return (dispatch, getState) => {
        //console.log('currentPage :' , getState().recycleMap);

        const { currentPage } = getState().recycleMap.toJS() ;

        const page = loadData ? currentPage+1 : 1 ;

        const url = `map/recycleUnits/${unitId}/comments/${page}` ;
        const request = axios.get(url) ;

        return request.then((response) => {

            dispatch({
                type: 'GET_RECYCLE_UNIT_COMMENT',
                payload: response.data,
                loadData,
            });
        });
    }
}

/**
 * 下評論
 * @param unitId
 * @param score
 * @param content
 * @param authorId
 * @returns {function(*)}
 */
export const addRecycleUnitComment = (unitId, score, content, authorId) =>{
    const url = `map/recycleUnits/${unitId}/comment` ;
    const request = axios.post(url , {authorId, score, content}) ;

    return (dispatch) => {
        return request.then((response) => {
            dispatch(getMapRecycleUnitComment(unitId, false));
            dispatch(getMapRecycleUnitDetail(unitId));
        })
    }
}



/**
 * 取得打卡記錄
 * @returns {function(*)}
 */
export const getMapCheckInRecords = () => {
    const url = 'map/checkInRecords' ;
    const request = axios.get(url) ;

    return (dispatch) => {
        return request.then((response) => {
            dispatch({
                type: 'GET_CHECK_IN_RECORDS',
                payload: response.data
            });
        });
    }
}

export const filterRecycleItems = (key , value) => {
    //console.log('key : value ', key, value)
    return (dispatch) => {
        return dispatch({
            type:'FILTER_RECYCLE_ITEMS',
            key,
            value
        })
    }
}