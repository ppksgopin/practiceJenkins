import axios from 'axios';

import {auth, dashBoardType, commonType} from '../../commons/constants/actionTypes';

export function getYoutubeInfos() {
    const url = `common/indexVideo`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: dashBoardType.GET_YOUTUBE_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得影片資訊失敗，請洽管理人員'});
        });
    };
}

export function getIndexBanners() {
    // console.log('get in getIndexBanners');
    const url = `common/indexBanner`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: dashBoardType.GET_BANNERS_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得首頁Banner失敗，請洽管理人員'});
        });
    };
}

export function getActivityInfos() {
    const url = `common/indexEvents`;
    const request = axios.get(url);

    return dispatch => {
        request.then(response => {
            dispatch({type: dashBoardType.GET_ACTIVITY_INFOS_SUCCESS, payload: response.data});
        }, error => {
            dispatch({type: commonType.MESSAGE_FAIL, payload: '取得活動訊息失敗，請洽管理人員'});
        });
    };
}

/**
 * @deprecated 統一記錄在reducer user.zCoin
 * @returns {function(*): Promise<{total: *}>}
 */
export function getUserZcoins() {
    const url = `user/zcoins/total`;
    const request = axios.get(url);

    return dispatch => {
        return request.then(response => {
            dispatch({type: dashBoardType.GET_USER_ZCOINS, payload: response.data});
            return {total: response.data.total};
        }, error => {
            if(error && error.response.status === 401) {
                dispatch({type: auth.LOGIN_FAIL});
            } else {
                dispatch({type: commonType.MESSAGE_FAIL, payload: '取得Z幣失敗，請洽管理人員'});
            }

        });
    };
}
