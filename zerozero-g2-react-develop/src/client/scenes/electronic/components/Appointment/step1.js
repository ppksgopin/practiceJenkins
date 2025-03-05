/**
 * Created by ryan on 2017/12/8.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Helmet} from 'react-helmet';
import * as actions from '../../data/action' ;
import {　message　} from '../../../../data/common/action'
import {Field, reduxForm, formValueSelector, SubmissionError} from "redux-form/immutable";

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {bound, appointmentForm, sectionTitle, pageMenu,buttons} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import PageTitle from '../../../common/components/PageTitle';
import LabelSelectBox from '../../../common/components/LabelSelectBox';
import LabelTextInput from '../../../common/components/LabelTextInput';
import BlueButton from '../../../common/components/BlueButton';
import ErrorMsg from '../../../common/components/ErrorMsg';
import Category from './category';
import ElectronicSteps from './electronicSteps';
import { animateScroll } from 'react-scroll';
import { checkLoginStatus } from '../../../../data/auth/action';

class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state ={
            errorMsg : []
        }

        this._labelSelectBoxRender = this._labelSelectBoxRender.bind(this);
        this._renderBookingTimes = this._renderBookingTimes.bind(this);
        this._renderContactTimes = this._renderContactTimes.bind(this);
        this._preLoadProfile = this._preLoadProfile.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        //console.log("nextProps :" , nextProps);
        const { persistElectronicForm , logIn , userProfile} = nextProps ;
        const {phoneNumber} = userProfile.toJS();
        //console.log('logIn :' , logIn);
        //console.log('userProfile :' , userProfile.toJS());
        if(logIn && phoneNumber!== null){
            persistElectronicForm('contactPhone', phoneNumber) ;
        }
    }

    componentDidMount() {
        this.props.fetchRecycleItems();
        this.props.fetchElecCounties();
        this.props.fetchBookingTime();
        this.props.fetchContactTime();

        animateScroll.scrollToTop();
    }

    _labelSelectBoxRender(data) {

       // console.log('data :' , data);
        if (!data) {
            return;
        }

        let jsData = data ;
        let optionData = [{value: -1, label: "選擇"}];
        for (let i = 0; i < jsData.length; i++) {
            let city = {};
            city.value = jsData[i].id;
            city.label = jsData[i].name;

            optionData.push(city);
        }

        return optionData;
    }

    changeCity(city) {
        if (city) {
            const {persistElectronicForm} = this.props ;
            persistElectronicForm('countyId', city);
            let {counties} = this.props.electronic.toJS();
            counties.map(cityData => {
                if (cityData.id === city) {
                    this.setState({
                        "city": cityData,
                    });
                }
            });

            new Promise((resolve, rejcet) => {
                resolve(this.props.fetchElecTownship(city))
            }).then((v) => {
                persistElectronicForm('townshipId', '');
            }).catch((e) =>{
                // console.log(e);
            });

            //this.props.fetchElecTownship(city);
        }
    }

    changeArea(areaId) {
        if (areaId) {
            const {persistElectronicForm} = this.props ;
            persistElectronicForm('townshipId', areaId)
            let { townships } = this.props.electronic.toJS();
           //console.log('townships :' , townships);
            townships.map(areaData => {
                if (areaData.id === areaId) {
                    this.setState({
                        "area": areaData,
                    })
                }
            });
        }
    }

    changePhone(value){
        //console.log('phone : ', value);
        const {persistElectronicForm} = this.props ;
        persistElectronicForm('contactPhone', value);
    }




    _renderBookingTimes() {
        const { persistElectronicForm } = this.props ;
        const { bookingTimes , appointment } = this.props.electronic.toJS();
       // console.log('bookingTimes :' , bookingTimes);
        const onChange = (e, value)=>{
            let newValues =[] ;
            if(e.target.checked){
                newValues = appointment.bookingTimeIds.concat(value) ;
            }else{
                newValues = appointment.bookingTimeIds.filter(v => v!==value) ;
            }
            persistElectronicForm('bookingTimeIds', newValues);
        }

        return bookingTimes.map((bookingTime, index) => {
            const checked = appointment.bookingTimeIds.length!==0 ? appointment.bookingTimeIds.find( v => v === bookingTime.code):false;
            return (
                <div key={index}>
                    <label className="checkbox_group">
                        <input type="checkbox" name="t1" value={bookingTime.code} onChange={(e) => onChange(e, e.currentTarget.value)} checked={checked}/>
                        <div>{bookingTime.name}</div>
                    </label>
                </div>
            )
        })
    }

    _renderContactTimes() {
        const {persistElectronicForm} = this.props ;
        const {contactTimes, appointment} = this.props.electronic.toJS() ;

        //console.log('contactTimes :' ,contactTimes);
        return contactTimes.map((time, index) => {
            const checked = appointment.contactTime === time.code ? true :false;
            return (
                <div key={index}>
                    <label className="checkbox_group small">
                        <input type="checkbox" name="t1" id="contactTime" value={time.code} onChange={(e) => persistElectronicForm('contactTime', e.currentTarget.value)} checked={checked}/>
                        <div>{time.name}</div>
                    </label>
                </div>
            )
        })
    }

    _preLoadProfile() {
        const { persistElectronicForm , logIn , userProfile} = this.props ;
        const {phoneNumber} = userProfile.toJS();
       // console.log('logIn :' , logIn);
       // console.log('userProfile :' , userProfile.toJS());
        if(logIn){
            persistElectronicForm('contactPhone', phoneNumber) ;
        }
    }

    render() {

        const { electronic , handleSubmit , error , persistElectronicForm, userProfile, logIn } = this.props ;
        const { recycleItems, bookingTimes, contactTimes, counties, townships=[] , appointment} = electronic.toJS() ;
        const { phoneNumber } = userProfile.toJS()
       // console.log('logIn :' , logIn);
       // console.log('phoneNumber :' , phoneNumber);

        return (
            <div>

                <div className="block">
                    <div className="block_title">所在區域</div>
                    <div className="multi_col">
                        <LabelSelectBox
                            id="countyId"
                            name="countyId"
                            must
                            label="縣市"
                            options={this._labelSelectBoxRender(counties)}
                            onChangeAction={this.changeCity.bind(this)}
                            defaultvalue={appointment.countyId}
                        />
                        <LabelSelectBox
                            id="townshipId"
                            name="townshipId"
                            must
                            label="區域"
                            options={this._labelSelectBoxRender(townships)}
                            onChangeAction={this.changeArea.bind(this)}
                            defaultvalue={appointment.townshipId}
                        />
                    </div>
                    <div className="reminder">服務地區：基隆、台北、新北、桃園、新竹、苗栗、台中、彰化、南投、雲林、嘉義、台南、高雄。</div>
                </div>
                <div className="block">
                    <div className="block_title">品項資訊</div>

                    <Category items={recycleItems} persistElectronicForm={persistElectronicForm} values={appointment.items}/>
                    <div className="reminder">
                        冷氣、冰箱、洗衣機為免費到府回收(部分區域需酌收費用)，其餘家電品項酌收出車服務費。<br/>
                        上述免費回收品項須為家用型家電，不包含營業用冷氣及冰箱、7公斤以下洗衣機。<br/>
                        家具品項為不可回收之廢棄物，因此會依據您的品項收取處理費用。
                    </div>

                </div>
                <div className="block">
                    <div className="block_title">希望服務時間</div>
                    <div className="grid3D2M">
                        {this._renderBookingTimes()}
                    </div>
                    <div className="reminder">
                        若無電梯則酌收搬運費用，冷氣若需拆卸費用另計。<br/>
                        <span>客服人員會依照您希望的預約時間做安排，實際服務時間以客服與您聯繫後所預約的時間為主。</span>
                    </div>
                </div>
                <div className="block">
                    <div className="block_title">聯繫時間</div>
                    <div className="multi_col">
                        {this._renderContactTimes()}
                    </div>

                    <LabelTextInput
                        id="phone"
                        name="phone"
                        label="請輸入手機號碼"
                        placeholder="09XXXXXXXX"
                        onChange={this.changePhone.bind(this)}
                        defaultvalue={appointment.contactPhone}
                    />

                </div>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        logIn: state.data.auth.get('IS_LOGINED') || false,
        userProfile : state.data.auth.get('PROFILE'),
        electronic: state.electronic,
        error : state.data.common.get('MESSAGE')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...actions, checkLoginStatus
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1) ;
