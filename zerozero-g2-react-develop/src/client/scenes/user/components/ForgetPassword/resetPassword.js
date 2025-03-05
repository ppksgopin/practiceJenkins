import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form/immutable";

import styled from 'styled-components';
import {commonType} from "../../../../commons/constants/actionTypes";
import {UserForgetRoute, UserResetPassword} from '../../../../commons/routePaths';
import {message} from "../../../../data/common/action";
import {userForm} from '../../../../styles/commons';
import BlueButton from '../../../common/components/BlueButton';
import ErrorMsg from '../../../common/components/ErrorMsg';

import PageTitle from '../../../common/components/PageTitle';

import {resetPassword} from './action';

const UserForm = styled.form`
  ${userForm};
`

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        gtag('event', 'conversion', {'send_to': 'AW-851066983/jtP2COvD03sQ54DplQM'});
    }

    componentDidUpdate(prevProps, prevState) {
        const {reset, submitSucceeded, IS_REGISTER_SUCCEED} = this.props;

        if (IS_REGISTER_SUCCEED) {
            //this.props.history.push(RegSuccessRoute());
           // console.log('register success: ', IS_REGISTER_SUCCEED);
        } else if (submitSucceeded) {
            //console.log('reset setupPasswordForm');
            reset();
        }

    }

    toggleCheckboxChange() {
        const {isChecked} = this.state;
        this.setState(
            {isChecked: !isChecked}
        );
    }

    onSubmit(values) {
        let valid = false ;
        const {password, pw_confirm, mobile} = values.toJS();
        if (mobile === '') {
            this.props.message(commonType.MESSAGE_FAIL, '操作錯誤，請重新驗證手機號碼!');
            this.props.history.push(UserForgetRoute());
        }else if (!password || !pw_confirm) {
            // console.info("密碼未輸入");
            this.props.message(commonType.MESSAGE_FAIL, '密碼未輸入');
            //throw new SubmissionError({_error: '密碼未輸入'});
        }else if (password.length < 8 || password.length > 16) {
            // console.info("密碼長度必須介於 8 ~ 16");
            this.props.message(commonType.MESSAGE_FAIL, '密碼長度必須介於 8 ~ 16');
            //throw new SubmissionError({_error: '密碼長度必須介於 8 ~ 16'});
        }else if (password !== pw_confirm) {
            // console.info("密碼不一致，請重新輸入");
            this.props.message(commonType.MESSAGE_FAIL, '密碼不一致，請重新輸入');
            //throw new SubmissionError({_error: '密碼不一致，請重新輸入'});
        }else {
            valid = true
        }

        //this.props.register(values.toJS())
        if(valid){
            this.props.resetPassword(values.toJS(), this.props.history)
        }else{
            return false
        }
    }

    render() {
        const {error, messageFail, handleSubmit, pristine, submitting, submitSucceeded} = this.props;

        return (
            <div>
                <Helmet>
                    <title>設定密碼</title>
                </Helmet>
                <PageTitle title="設定密碼"/>

                <UserForm onSubmit={ handleSubmit(this.onSubmit) }>
                    <Field type="password" name="password" component="input" placeholder="設定8到16位數密碼"/>
                    <Field type="password" name="pw_confirm" component="input" placeholder="請再次輸入密碼"/>
                    <br/><br/>
                    <ErrorMsg msg={ messageFail || error } classname=""/>
                    <BlueButton disabled={ pristine || submitting || submitSucceeded }>確認</BlueButton>
                    <div className="wording">下次可使用手機號碼與新密碼登入</div>
                </UserForm>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        initialValues: state.user.forgetPassword.get('RESET_PASSWORD'),
        IS_REGISTER_SUCCEED: state.user.register.get('IS_REGISTER_SUCCEED'),
        messageFail: state.data.common.get('MESSAGE'),
    };
}

export default connect(mapStateToProps, {
    resetPassword,
    message
})(reduxForm({form: 'SetupPasswordForm'})(ResetPassword));
