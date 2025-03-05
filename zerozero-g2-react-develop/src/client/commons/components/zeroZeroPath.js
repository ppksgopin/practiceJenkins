import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from "react-redux";
import {includes} from 'lodash';

import {resetMessage} from '../../data/common/action';
import {DashboardRoute} from '../routePaths';
import axiosMiddleware from '../../commons/middleWare/axiosMiddleware';

class ZeroZeroPath extends Component {
    constructor(props) {
        super(props);
        // console.log('Get in Client Side Render Env');
        const {store, history} = this.props;

        const apiPath = this.getApiPath();
        const apiVersion = this.getApiVersion();
        axiosMiddleware.setupInterceptors(apiPath,apiVersion, store, history);


        this.state = {
            needNotRecord: ['/user/login', '/user/password', '/user/forget', '/user/register', '/user/password', '/user/register/success', '/user', '/user/resetPassword'],
        };
    }
    componentDidUpdate(prevProps) {
        //clean up message
        //v2.10.0 將這裡的resetMessage拿掉是因為會影響action dispatch error 回傳的message
        //this.props.resetMessage();

        const {location} = this.props
        const {needNotRecord} = this.state;

        if (location !== prevProps.location) {

            const forcePath = localStorage.getItem('forcePath');

            if (includes(needNotRecord, location.pathname)) {
                //v2.10.0 這裡不知有什麼用意先改成以下的判斷
                /*
                    localStorage.setItem('targetPath', forcePath || DashboardRoute());
                    localStorage.removeItem('forcePath');
                */
                if(typeof forcePath ==='string'){
                    localStorage.setItem('targetPath', forcePath);
                    localStorage.removeItem('forcePath');
                }
            } else {
                localStorage.setItem('targetPath', `${location.pathname}${location.search}`);
            }

            this.props.onUpdate(location);
        }
    }

    getApiPath() {
        let apiUrl = null;
        // console.log('Client side - process.env.NODE_ENV:', process.env.NODE_ENV);
        if (process.env.NODE_ENV === 'production') {
            apiUrl = require('./prod').ApiRoot
        } else if (process.env.NODE_ENV === 'staging') {
            apiUrl = require('./stage').ApiRoot
        } else {
            apiUrl = require('./dev').ApiRoot
        }

        return apiUrl;
    }

    getApiVersion() {
        let defaultVersion = "v2.10.0/";
        return defaultVersion;
    }

    render() {
        return this.props.children
    }
}

export default withRouter(connect(null, {resetMessage})(ZeroZeroPath));
