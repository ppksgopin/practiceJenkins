import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Iterable } from 'immutable';
import {Field, reduxForm, formValueSelector, SubmissionError} from "redux-form/immutable";
import * as actions from '../action';

import LabelTextInput from '../../common/components/LabelTextInput2';
import LabelSelectBox from '../../common/components/LabelSelectBox2';
import GreenButton from '../../common/components/GreenButton';

class SubscriptionForm extends Component {

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.loadSubscriptionSources();

    }

    onSubmit(values) {
        const { submitSubscriptionForm, statusCallback, source } = this.props;
        //console.log('statusCallback:', statusCallback);
        new Promise((resolve) => {
            //values = values.set('source', source);
            resolve(submitSubscriptionForm(values));
        })
            .then(() => {
                statusCallback(true);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {

        const { handleSubmit, status, subscriptionSources, sourceValue} = this.props;
        const sources = subscriptionSources.toJS();
        return (
            <div>

                {
                    status ?
                        <form>
                            <div className="check"/>
                            <p style={{"textAlign":"center"}}>填寫完成</p>
                        </form>
                        :
                        <form onSubmit={handleSubmit(this.onSubmit)}>
                            <Field
                                name="source"
                                label="服務項目"
                                component={LabelSelectBox}
                                options={sources}
                            />
                            {
                                sourceValue && sourceValue === '8' &&
                                <Field
                                    name="sourceOther"
                                    label="其它服務項目"
                                    placeholder={'請填寫服務項目'}
                                    component={LabelTextInput}
                                />
                            }
                            <Field
                                name="contactName"
                                label="您的大名"
                                component={LabelTextInput}
                            />
                            <Field
                                name="contactPhone"
                                label="您的電話"
                                component={LabelTextInput}
                            />
                            <Field
                                name="contactEmail"
                                label="您的Email"
                                component={LabelTextInput}
                            />
                            <GreenButton type="submit">確定</GreenButton>
                        </form>
                }


            </div>
        )
    }
}

function validate(values) {
    let v = {};
    if(Iterable.isIterable(values)) {
        v = values.toJS();
    }

    let errors = {};

    if(!v.contactName) {
        errors.contactName = '必填';
    }

    if((!v.contactPhone) && (!v.contactEmail)) {
        errors.contactPhone = '電話與Email擇一選擇';
        errors.contactEmail = '電話與Email擇一選擇';
    } else {
        if(v.contactPhone && !/^\d+$/i.test(v.contactPhone)) {
            errors.contactPhone = '電話格式不正確';
        }
        if(v.contactEmail) {
            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regex.test(v.contactEmail)) {
                errors.contactEmail = 'Email不正確';
            }
        }
    }

    return errors;
}

function mapStateToProps(state) {
    const selector = formValueSelector('subscriptionForm');
    return {
        subscriptionSources: state.enterprise.landing.get('SUBSCRIPTION_SOURCES'),
        sourceValue: selector(state, 'source')
    }
}

export default connect(mapStateToProps, actions )(reduxForm(
    {
        form: 'subscriptionForm',
        validate,
    })(SubscriptionForm));