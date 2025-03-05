import axios from 'axios';

export default {
    setupInterceptors: (apiPath) => {
        axios.interceptors.request.use(function (config) {
            // console.log('server interceptor');
            config.url = apiPath+config.url;
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            return Promise.reject(error);
        });
    }
};

export const getApiPath = () => {
    let apiUrl = null;
    // console.log('Server side - process.env.NODE_ENV:', process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') {
        apiUrl = require('../../client/commons/components/prod').ApiRoot
    } else if (process.env.NODE_ENV === 'staging') {
        apiUrl = require('../../client/commons/components/stage').ApiRoot
    } else {
        apiUrl = require('../../client/commons/components/dev').ApiRoot
    }

    // console.log('getApiPath:', apiUrl);
    return apiUrl;
}

export const getSocialCallback = () => {
    let socialCallback = null;
    // console.log('Server side - process.env.NODE_ENV:', process.env.NODE_ENV);
    if (process.env.NODE_ENV === 'production') {
        socialCallback = require('../../client/commons/components/prod').SocialCallback
    } else if (process.env.NODE_ENV === 'staging') {
        socialCallback = require('../../client/commons/components/stage').SocialCallback
    } else {
        socialCallback = require('../../client/commons/components/dev').SocialCallback
    }

    // console.log('getSocialCallback:', socialCallback);
    return socialCallback;
}

export const getApiVersion = () => {
    let defaultVersion = 'v2.10.0/'
}
