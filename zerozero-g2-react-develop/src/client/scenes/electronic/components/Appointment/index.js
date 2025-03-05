/**
 * Created by ryan on 2017/11/1.
 */
import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import PageTitle from '../../../common/components/PageTitle';
import ElectronicSteps from './electronicSteps';
import Form from './Form' ;
import Step_1 from './step1';
import Step_2 from './confirm';
import Step_3 from './complete' ;
import {UserLoginRoute,UserRegisterRoute} from '../../../../commons/routePaths' ;
//import { withRouter } from 'react-router';
import queryString from 'query-string';

class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state ={
            finalStep : 3
        }

    }

    _insertStepPage() {
        const stepPage = [
            {
                sectionTitle: '諮詢回收',
                component: <Step_1/>
            },
            {
                sectionTitle: '確認填寫',
                component: <Step_2/>
            },
            {
                sectionTitle: '完成表單',
                component: <Step_3/>
            },
        ]
        return stepPage[this.getCurrentStep() - 1];

    }

    _nextTriggerFn() {
        const {finalStep} = this.state;
        const currentStep = this.getCurrentStep();
        //console.log('currentStep :' , this.context.router);
        if (currentStep !== finalStep) {
            //this.context.router.push({'pathname': '/electronic/appointment/step_' + (currentStep + 1)})
            this.props.history.push('/electronic/appointment/step_' + (currentStep + 1));
        }
    }

    _previousTriggerFn(e) {
        e.preventDefault();
        // const {gotoProgress} = this.context.baseTemplateControllFn;
        const currentStep = this.getCurrentStep();
       // console.log('currentStep : ' , currentStep);
        if(currentStep !== 1) {
            this.props.history.goBack();
        }
    }

    getCurrentStep(props = this.props) {
        const s = this.props.match.params['step_id'] ;
        // console.log('s', this.props.match.path.split('_')[1]);
        // return ~~props.match.path.split('_')[1];
        return ~~props.match.params['step_id'].split('_')[1];
    }

    _loginFn(e) {
        e.preventDefault();
        this.props.history.push(UserLoginRoute()) ;
    }

    _registerFn(e) {
        e.preventDefault();
        this.props.history.push(UserRegisterRoute()) ;
    }


    render() {
        const { sectionTitle, component } = this._insertStepPage();
        const {finalStep} = this.state;
        const currentStep = this.getCurrentStep();
        // console.log('currentStep :' , this.props.match.params['step_id'].split('_')[1]);
        return (
            <div className="bg">
                <Helmet>
                    <title>家電回收</title>
                </Helmet>

                <PageTitle title="家電回收/家具處理"/>

                <Form
                    title={sectionTitle}
                    nextFn={this._nextTriggerFn.bind(this)}
                    previousFn={this._previousTriggerFn.bind(this)}
                    complete={ currentStep === finalStep ? true : false}
                    currentStep={currentStep}
                    loginFn={ this._loginFn.bind(this)}
                    registerFn={ this._registerFn.bind(this)}
                    {...this.props}
                >
                    {component}
                </Form>

                <ElectronicSteps/>
            </div>
        )
    }
}

export default Appointment
