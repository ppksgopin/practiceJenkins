import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form/immutable";

import { setPassword } from './action';
import { PolicyRoute, PrivacyRoute } from '../../../../commons/routePaths';

import styled from 'styled-components';
import { userForm } from '../../../../styles/commons';

import PageTitle from '../../../common/components/PageTitle';
import BlueButton from '../../../common/components/BlueButton';
import ErrorMsg from '../../../common/components/ErrorMsg';
import { Link } from "react-router-dom";

const UserForm = styled.form`
  ${userForm};
`

class SetupPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        // gtag('event', 'conversion', { 'send_to': 'AW-851066983/jtP2COvD03sQ54DplQM' });
    }

    componentDidUpdate(prevProps, prevState) {
        const { reset, submitSucceeded, IS_REGISTER_SUCCEED } = this.props;

        if (IS_REGISTER_SUCCEED) {
            // console.log('register success: ', IS_REGISTER_SUCCEED);
        } else if (submitSucceeded) {
            // console.log('reset setupPasswordForm');
            reset();
        }

    }

    toggleCheckboxChange() {
        const { isChecked } = this.state;
        this.setState(
            { isChecked: !isChecked }
        );
    }

    onSubmit(values) {

        const { password, pw_confirm } = values.toJS();
        if (!password || !pw_confirm) {
            // console.info("密碼未輸入");
            throw new SubmissionError({ _error: '密碼未輸入' });
        }

        if (password.length < 8 || password.length > 16) {
            // console.info("密碼長度必須介於 8 ~ 16");
            throw new SubmissionError({ _error: '密碼長度必須介於 8 ~ 16' });
        }

        if (password !== pw_confirm) {
            // console.info("密碼不一致，請重新輸入");
            throw new SubmissionError({ _error: '密碼不一致，請重新輸入' });
        }

        //條款是否已閱讀
        const { isChecked } = this.state;
        if (!isChecked) {
            throw new SubmissionError({ _error: '尚未閱讀並接受會員服務條款與隱私權政策' });
        }

        this.props.setPassword(values.toJS(), this.props.history)
    }

    render() {
        const { error, messageFail, handleSubmit, pristine, submitting, submitSucceeded } = this.props;
        // console.log('pristine:', pristine);
        // console.log('submitting:', submitting);
        // console.log('submitSucceeded:', submitSucceeded);
        const { isChecked } = this.state;

        return (
            <div>
                <Helmet>
                    <title>設定密碼</title>
                </Helmet>
                <PageTitle title="設定密碼" />

                <UserForm onSubmit={handleSubmit(this.onSubmit)}>
                    <Field type="password" name="password" component="input" placeholder="設定8到16位數密碼" />
                    <Field type="password" name="pw_confirm" component="input" placeholder="請再次輸入密碼" />
                    <br /><br />
                    <ErrorMsg msg={messageFail || error} classname="" />
                    <BlueButton disabled={pristine || submitting || submitSucceeded}>註冊</BlueButton>
                    <div className="wording">
                        <input type="checkbox" checked={isChecked} onChange={this.toggleCheckboxChange.bind(this)}
                            style={{
                                'marginRight': '5px'
                            }} />
                        我已經詳細閱讀,了解與接受
                        <span style={{
                            'whiteSpace': 'nowrap'
                        }}>zero zero</span><br />
                        <Link to={{ pathname: PolicyRoute() }} target='_blank'>會員規章</Link>與<Link to={{ pathname: PrivacyRoute() }} target='_blank'>隱私政策</Link>
                    </div>
                </UserForm>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        initialValues: state.user.register.get('REGISTER'),
        IS_REGISTER_SUCCEED: state.user.register.get('IS_REGISTER_SUCCEED'),
        messageFail: state.data.common.get('MESSAGE')
    };
}

export default connect(mapStateToProps, { setPassword })(reduxForm({ form: 'SetupPasswordForm' })(SetupPassword));
