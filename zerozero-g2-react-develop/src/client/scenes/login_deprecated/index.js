import React, {Component} from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import {Helmet} from 'react-helmet'

import {login} from './data/action';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';

class Login extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.IS_LOGINED !== this.props.auth.IS_LOGINED) {
            const {IS_LOGINED} = nextProps.auth;

            if (IS_LOGINED) {
                this.props.history.push("/users");
            }
        }
    }

    renderField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? "has-danger" : ""}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.login(values, () => {
            this.props.history.push("/weather");
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <div>
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <Header/>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="帳號"
                        name="loginId"
                        component={this.renderField}
                    />

                    <Field
                        label="密碼"
                        name="password"
                        component={this.renderField}
                    />

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <Footer/>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.loginId) {
        errors.loginId = "Enter Login Id";
    }

    if (!values.passowrd) {
        errors.passowrd = "Enter Password";
    }

    return errors;
}

function mapStateToProps(state) {
    return {auth: state.user.auth.toObject()};
}

export default reduxForm({
    validate,
    form: "LoginForm"
})(connect(mapStateToProps, {login})(Login));
