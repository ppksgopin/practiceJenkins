import axios from 'axios';
import {commonType} from "../constants/actionTypes";

export default {
    setupInterceptors: (apiPath, apiVersion, store, history) => {
        axios.interceptors.request.use(function (config) {
            store.dispatch({type: commonType.MESSAGE_FAIL, payload: ""});
            const regx = new RegExp('^v[2345]+\.[0-9]+\.[0-9]\/*');
            //console.log('match: ', config.url.match(regx), 'reg: ', regx);
            if(config.url.match(regx)) {
                config.url = apiPath+config.url;
            }else {
                config.url = apiPath+apiVersion+config.url;
            }

            //console.log('client interceptor: ', config.url, history);
            localStorage.setItem('prevTarget', config.url);
            if ((window.token === "undefined" || window.token === undefined) && (!window.noht || window.noht === false)) {
                if (localStorage.token) {
                    //config.headers['Authorization'] = `Bearer ${localStorage.token}`;
                    config.headers = {
                        "Authorization":`Bearer ${localStorage.token}`
                    }
                }
            } else if(window.noht === true) {
                //config.headers['Authorization'] = window.token;
                config.headers = {
                    "Authorization": window.token
                }
            }


            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response.status === 401) {
                //console.log("401 not login");
                history.push('/user/login');
            }

            return Promise.reject(error);
        });
    }
};
