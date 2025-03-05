import queryString from 'query-string';
import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from "react-redux";
import {commonType} from "../../../../commons/constants/actionTypes";
import {UserLoginRoute} from "../../../../commons/routePaths";

import {message} from '../../../../data/common/action';

export default (ChildComponent) => {

    class CheckProfileEdit extends Component {
        constructor(props){
            super(props)
            this.state = {
                valid:false
            }
        }

        componentDidMount() {
            //console.log('CheckProfileEdit mounted:', this.props);
            const {logon, register} = this.props;
            const queryData = queryString.parse(this.props.location.search);
            //console.log('queryData: ', queryData, 'register:', register.toJS());
            const {phoneNumber, password} = register.toJS();
            //1.避免程序因refresh 中斷，先寫入localstorage,
            //2.若因中途判斷回到login 及會remove oAuth及register 資料。
            if( phoneNumber !=='' && register !=='' ){
                //console.log('set register: ', register.toJS());
                localStorage.setItem('register', JSON.stringify(register.toJS()));
            }

            if(_.isEmpty(queryData) && !logon){
                this.props.message(commonType.MESSAGE_FAIL, '您尚未登入')
                this.props.history.push(UserLoginRoute())
            }

            if ((queryData.source === "1" && !logon)) {
                this.props.message(commonType.MESSAGE_FAIL, '您尚未登入！')
                this.props.history.push(UserLoginRoute())
            }

            const registerData = localStorage.getItem('register');
            //console.log('register data:', registerData);
            if ((queryData.source === "2"
                && (registerData === null))) {
                this.props.message(commonType.MESSAGE_FAIL, '操作錯誤，請重新進行程序!')
                this.props.history.push(UserLoginRoute())
            }

            this.setState({valid:true});
        }

        render() {
            return (<ChildComponent {...this.props}/>)
        }
    }

    return CheckProfileEdit;
};