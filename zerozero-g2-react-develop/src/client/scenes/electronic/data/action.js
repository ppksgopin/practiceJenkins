/**
 * Created by ryan on 2017/11/1.
 */
import axios from 'axios';
import {electronic , commonType} from '../../../commons/constants/actionTypes' ;

export const persistElectronicForm = (key, value) => {
    return {
        type : 'PERSIST_ELECTRONIC_FORM',
        key,
        value
    }
}

/**
 * 取得家電六大類
 * @returns {function(*)}
 */
export const fetchRecycleItems = () =>{

    const url = `electronic/getElectronicMaterial`;
    const request = axios.get(url) ;

    return (dispatch) =>{
        return  request.then((response) => {
                dispatch({
                    type : 'FETCH_RECYCLE_ITEMS',
                    payload : response.data
                });
            });
    }
}

/**
 * 取得家電開放回收縣市
 * @returns {function(*)}
 */
export const fetchElecCounties = () => {
    const url = `electronic/getCounties` ;
    const request = axios.get(url) ;

    return (dispatch) => {
        return request.then((response) => {
            dispatch({
                type: 'FETCH_ELEC_COUNTY',
                payload: response.data
            });
        });
    }
}

/**
 * 取得家電開放回收鄉鎮
 * @param countyId
 * @returns {function(*)}
 */
export const fetchElecTownship = (countyId) => {
    const url = `electronic/getTownships/${countyId}`;
    const request = axios.get(url) ;

    return (dispatch) => {
        return request.then((response) => {
            dispatch({
                type: 'FETCH_ELEC_TOWNSHIP',
                payload: response.data
            });
        });
    }
}


/**
 * 取得預約時間
 * @returns {function(*)}
 */
export const fetchBookingTime = () =>{
    const url = `electronic/getBookingTime` ;
    const request = axios.get(url) ;

    return (dispatch) => {
        return request.then((response) => {
            dispatch({
                type : 'FETCH_BOOKING_TIME',
                payload: response.data
            });
        });
    }
}

/**
 * 取得聯絡時間
 * @returns {function(*)}
 */
export const fetchContactTime = () => {
    const url = `electronic/getContactTime` ;
    const request = axios.get(url) ;

    return (dispatch) => {
        return request.then((response) => {
            dispatch({
                type: 'FETCH_CONTACT_TIME',
                payload: response.data
            });
        });
    }
}

export const saveAppointment = () => {
    return (dispatch, getState) => {
        const url = `electronic/createElectronicAppointment` ;
        const { appointment } = getState().electronic.toJS() ;
        //console.log('appointment :' , appointment);
        const request = axios.post(url , appointment) ;
        return request.then((response) => {
            dispatch({
                type: 'SAVE_APPOINTMENT',
                payload: response.data
            }, error => {
                // console.log('action error :');
                dispatch({
                    type:'MESSAGE_FAIL',
                    payload: error.response.data
                })
            })
        })
    }
}

export const saveEvaluaton = (electronicEvaluation) => {
    return (dispatch) => {
            const url = `electronic/evaluation` ;
            const request = axios.post(url , electronicEvaluation) ;
            request.then((response) => {
                dispatch({
                    type: 'SAVE_EVALUATION',
                    payload: true
                }, error => {

                })
            }).catch((error) => {
               // console.log('error : ', error.response.status);
                if (error.response.status == 404) {
                    dispatch({type: commonType.MESSAGE_FAIL , payload: '此預約單不存在'});
                } else {
                    dispatch({type: commonType.MESSAGE_FAIL , payload: '評價失敗，請洽管理人員'});
                }
            });
        }
}
