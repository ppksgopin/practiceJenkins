/**
 * Created by ryan on 2017/12/14.
 */
import axios from 'axios';

import { commonType,summary } from '../../../../../commons/constants/actionTypes';

export const persistSummary = (key, value) => {
    return {
        type : 'PERSIST_SUMMARY',
        key,
        value
    }
};

export const fetchUserSummary = (moreData=false, type=null) => {
    //console.log('moreData :' , moreData);
    return (dispatch, getState) => {
        const url = `user/summaries` ;
        const { currentPage , numberOfPage } = getState().user.summary.userAppointment.toJS();
        let queryPage = moreData ? currentPage+1 : currentPage ;
        let appointmentType = type === 'ALL' ? null : type ;
        const request = axios.post(url , {page : queryPage , rows : numberOfPage , type : appointmentType}) ;
        //console.log('request ', request );
        return request.then((response) => {
            dispatch({
                type : 'FETCH_SUMMARY',
                payload : response.data,
                moreData : moreData,
            });
        }, error => {
            dispatch({type : commonType.MESSAGE_FAIL , payload : '取得資料失敗，請洽管理人員'}) ;
        })
    }
};

export const fetchElectronicById = (appointmentId) => {
    return(dispatch) =>{
        const url = `electronic/getElectronicAppointment/${appointmentId}` ;
       // console.log('url : ' , url);
        const request = axios.get(url) ;
        return request.then((response) => {
            dispatch({
                type : 'FETCH_ELECTRONIC_APPOINTMENT',
                payload : response.data
            })
        }, error => {
            dispatch({type : commonType.MESSAGE_FAIL , payload : '取得資料失敗，請洽管理人員'})
        })
    }
};

export const fetchEnterpriseAppointment = (appointmentId, appointmentType) => {
    return(dispatch) =>{
        const url = `enterprise/appointment/${appointmentType}/${appointmentId}` ;
        // console.log('url : ' , url);
        const request = axios.get(url) ;
        return request.then((response) => {
            dispatch({
                type : 'FETCH_ENTERPRISE_APPOINTMENT',
                payload : response.data
            })
        }, error => {
            dispatch({type : commonType.MESSAGE_FAIL , payload : '取得資料失敗，請洽管理人員'})
        })
    }
};
