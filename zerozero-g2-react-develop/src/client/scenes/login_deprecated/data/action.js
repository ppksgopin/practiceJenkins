import axios from 'axios';

import { auth } from '../../../commons/constants/actionTypes';

const ROOT_URL = `https://localhost:8443/api/v1`;

export function login(loginReqDTO, callback) {
  // console.info(JSON.stringify(loginReqDTO));

  const url = `${ROOT_URL}/auth/login`;
  const request = axios.post(url, loginReqDTO);

  return dispatch => {
    request.then(response => {
      dispatch({
        type: auth.LOGIN,
        payload: response.data
      });
    }, error => {
      dispatch({
        type: auth.LOGIN_FAIL,
        payload: error.response.data
      });
    });
  };
}
