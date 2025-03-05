import {dynamicEvent, commonType} from '../../../../commons/constants/actionTypes';
import axios from 'axios';

export function getEventContent(eventId) {
    return (dispatch) => {
        const url = `event/${eventId}`;
        const request = axios.get(url);

        return request.then(response => {
            // console.log('got payload');
            dispatch({
                type: dynamicEvent.GET_EVENT_CONTENT,
                payload: response.data
            });
        }, error => {
            if(error.response.status === 400) {
                dispatch({
                   type: dynamicEvent.INVALID_EVENT,
                   payload: {message:"活動尚未開始或已結束", redirectTo:"/"}
                });
            } else {
                dispatch({type: commonType.MESSAGE_FAIL, payload: '活動內容取得失敗，請洽管理人員'});
            }
        });
    }

}

