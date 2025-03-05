/**
 * Created by ryan on 2017/12/8.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../data/action' ;
import {　message　} from '../../../../data/common/action'
import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {bound, appointmentForm,appointmentInfo, sectionTitle, pageMenu,buttons} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import BlueButton from '../../../common/components/BlueButton';
import RedButton from '../../../common/components/RedButton';
import ErrorMsg from '../../../common/components/ErrorMsg';
import QNA from '../../../common/components/QNA';
import GreenButton from '../../../common/components/GreenButton';
import { profile } from '../../../../data/auth/action';
import queryString from 'query-string';



import { ElectronicAppointmentConfirmRoute } from '../../../../commons/routePaths';


const Buttons = styled.div `
  ${buttons}
`;
const SectionTitle = styled.div `
  ${sectionTitle};
`;
const AppointmentForm = styled.form `
  ${appointmentForm};
`;
const AppointmentInfo = styled.form `
  ${appointmentInfo};
`;
const Description = styled.div `
    font-size:14px;
    line-height:1.5;    
    margin-top:20px;
    margin-bottom:-20px;
    text-align: center;
    margin-left:21px;
`;



class Form extends Component {

    constructor(props) {
        super(props);
        this.state ={
            errorMsg : [],
            submitting:false,
        };

    }

    _renderPanel() {
        const { error, currentStep , previousFn, loginFn, registerFn, logIn} =this.props ;
        return (
            <div>
                <br/><br/>
                <ErrorMsg msg={error} classname=""/>
                {currentStep ===1 ?
                <Buttons>
                    <BlueButton>送出</BlueButton>
                </Buttons> : ""
                }

                {currentStep ===2 ?
                <Buttons>
                     <RedButton onClick={(e) => previousFn(e)}>返回修改</RedButton>
                    {this.state.submitting ?
                        <BlueButton disabled>確認送出</BlueButton> : <BlueButton>確認送出</BlueButton>
                    }

                </Buttons> :""
                }
                {currentStep ===3 && logIn ===false ?
                    <div className="block">
                        <div className="reminder middle">立即登入註冊會員並完成回收後，就送您200Z幣！</div>
                        <QNA q="Z幣可兌換甚麼？"/>

                        <br /><br />

                        <BlueButton onClick={ (e) => loginFn(e)}>登入</BlueButton>
                        <div style={{'textAlign':'center','fontSize':'14px'}}>or</div><br />
                        <GreenButton onClick={(e) => registerFn(e)}>註冊</GreenButton>
                    </div>:""

                }
            </div>

        )
    }

    validate(e) {

        e.preventDefault();
        const value= queryString.parse(this.props.location.search);
        let gtag = (value && value.gtag) || "" ;
        let sourceId = (value && value.sourceId) || "";

        const { message ,nextFn, error , persistElectronicForm} =this.props ;
        const {appointment} = this.props.electronic.toJS();
       // console.log("appointment : ", appointment) ;
        let err = false ;
        if(appointment.countyId ==='' || appointment.townshipId===''){
            message('MESSAGE_FAIL', '您尚未選取所在區域縣市或區域')
            err = true;
        }
        if(appointment.items.length ===0) {
            message('MESSAGE_FAIL', '您常未選取品項');
            err = true;
        }
        if(appointment.bookingTimeIds.length ===0) {
            message('MESSAGE_FAIL', '您尚未選取預約時間');
            err = true;
        }

        if(appointment.contactTime ==='') {
            message('MESSAGE_FAIL', '您尚未選取聯絡時間');
            err = true;
        }
        if(appointment.contactPhone ==='') {
            message('MESSAGE_FAIL', '請務必填寫手機號碼');
            err = true;
        }else {
            const phoneno = /^\d{10}$/;
            if(!(appointment.contactPhone.match(phoneno))){
                message('MESSAGE_FAIL', '請務必正確填寫手機號碼');
                err = true;
            }
        }

        if(gtag) {
            persistElectronicForm('gtag', gtag);
        }

        if(sourceId) {
            persistElectronicForm('sourceId', sourceId)
        }

        if(!err) {
            message('MESSAGE_SUCCESS', '');
            nextFn();
        }
    }

    onSubmit(e) {

        e.preventDefault();

        const { error, currentStep , saveAppointment, nextFn } =this.props ;

        if(currentStep ===1){
            this.validate(e);
        }else {
            this.setState({
                submitting:true
            });

            new Promise((resolve, reject) => {
               resolve(saveAppointment());
            }).then((v) => {
                nextFn();
            }).catch((e) => {
                // console.log('error : ' , e) ;
            })
        }
        //console.log("req : " + JSON.stringify(requestData));
    }

    render() {
        const { children , title , nextFn , previousFn , complete, currentStep} = this.props;
        //console.log('token :' , localStorage.getItem('token'));

        return (
            <div>
                <SectionTitle className="green">{title}</SectionTitle>
                <Description>
                    冷氣/冰箱/洗衣機免費到府回收!(需有電梯)<br/>
                    zero zero 提供廢家電、廢家具到府回收、專業搬運！
                </Description>
                {currentStep ===1 ?
                <AppointmentForm onSubmit={(e) => this.onSubmit(e)}>
                    {children}
                    {this._renderPanel()}
                </AppointmentForm>
                :""}
                {currentStep ===2 ?
                <AppointmentInfo onSubmit={(e) => this.onSubmit(e)}>
                    {children}
                    {this._renderPanel()}
                </AppointmentInfo>
                :""}
                {currentStep ===3 ?
                <AppointmentInfo onSubmit={(e) => this.onSubmit(e)}>
                    <div className="brief">
                        感謝您的諮詢 :)<br />
                        客服人員將在24小時內聯絡您！<br />
                        實際服務時間需等客服與您連繫後確認
                    </div>
                    <div className="blocks">
                    {children}
                    {this._renderPanel()}
                    </div>
                </AppointmentInfo>
                :""}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        logIn: state.data.auth.get('IS_LOGINED') || false,
        electronic: state.electronic,
        error : state.data.common.get('MESSAGE')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...actions,message,profile
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form) ;
