import {omit} from 'lodash';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import queryString from 'query-string';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";
import DatePicker from 'react-datepicker';
import moment from "moment";
import load_locale from 'moment/locale/zh-tw' ;

import {Field, formValueSelector, reduxForm, SubmissionError} from "redux-form/immutable";


import styled from 'styled-components';
import {UserRoute, UserEditRoute, UserDeleteWarnRoute} from "../../../../commons/routePaths";
import {updateProfile, unbind3rdPartyId, profile } from '../../../../data/auth/action';

import {
    cleanLocalCompanyProfile,
    fetchCompanyProfile,
    getAreaInfo,
    getLocationInfo,
    message
} from '../../../../data/common/action';
import {userForm} from '../../../../styles/commons';
import {borderRadius, box, transition} from '../../../../styles/mixins';
import theme from '../../../../styles/theme';
import {awsUrl} from '../../../../utils/awsFile';
import Avatar from '../../../common/components/Avatar';
import BlueButton from '../../../common/components/BlueButton';
import Button from '../../../common/components/Button';
import ErrorMsg from '../../../common/components/ErrorMsg';

import PageTitle from '../../../common/components/PageTitle';
import SocialConnectButton from '../../../common/components/SocialConnectButton';
import UnbindConfirmModal from "./UnbindConfirmModal";
import withProfileEdit from "./withProfileEdit";

const UserForm = styled.form`
  ${userForm};
  .back{
    text-align:center;
    font-size:14px;
    color:#a7a7a7;
    width:auto;
    line-height:30px;
    margin:0 auto;
    cursor:pointer;
    ${transition("color", ".3s")};
    
    &:hover{
        color:${theme.colors.blue};
    }
  }
  .delete-btn{
    background-color: transparent;
    color: ${theme.colors.gray};

    font-size:18px;
    line-height:30px;
    margin: 0 auto;
    cursor: pointer;

    text-decoration: underline;
    text-shadow: 0 0 1px transparent;

    border-color: transparent;
	border-style: none;

  }
`

const SocialManage = styled.form`
h3{
    font-size:24px;
    color:${theme.colors.gray};    
}

>div{
    font-size:18px;
    line-height:30px;
    color:#000;
    padding:10px 0;
    position:relative;
    padding-right:90px;
    margin-bottom:20px;
    text-align:left;
    ${box};

    &.fb{
        &::before{
            content:"\f09a";
            font-family: FontAwesome;
            font-size:26px;
            line-height:41px;
            width:30px;
            height:30px;
            background:#1877f2;
            color:#fff;
            text-align:center;
            display:inline-block;
            ${borderRadius('100%')};
            margin-right:5px;
            vertical-align:middle;
          }
    }

    &.line{
        &::before{
            background: #1BB71F url(${awsUrl("icon_line.png")}) no-repeat center center;
            background-size:20px 20px;
            content:"";
            display:inline-block;
            width:30px;
            height:30px;
            margin-right:5px;
            vertical-align:middle;
            ${borderRadius('5px')};
          }
    }

    >button{
        position:absolute;
        right:0;
        top:0;
        width:80px;
    }
}
  
`

const BackButton = styled.div`
  height:0px;
  
  margin: 0 auto;
  width: 95%;
  max-width: ${theme.medias.maxW};

  position:relative;
  z-index:2;

  button{
    color:${theme.colors.gray};
    width: auto;
    margin: 0;
    height: 60px;
    font: inherit;
    font-size: 16px;
    line-height: 60px;
    text-align: left;
    cursor: pointer;
    outline:none;
    background: none;
    border: none;
    line-height: normal;
    padding: 0;
    text-decoration: none;
    -webkit-appearance: none;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;

        &::before{
          content:"\f060";
          font-family:"fontawesome";
          margin-right:5px;
        }

  }
  
  @media (max-width: ${theme.medias.phablet}) {
    display:none;
  }
`

const Container = styled.div`
  width: 100%;
  background: #fff;
  text-align: center;
  margin-top: 100px;
  position: relative;
  border-top: 1px solid #ddd;
  padding-top:40px;

  .userid {
      font-size: 24px;
      color: ${theme.colors.gray};
      line-height: 1.8;
      padding: 50px 0 20px;
      //font-weight: 300;

      span {
          color: ${theme.colors.green};
          margin-left: 10px;
          //font-weight: 400;
      }

      @media (max-width: ${theme.medias.phablet}) {
          font-size: 18px;
      }
  }

  .attraction {
      font-size: 18px;
      color: ${theme.colors.blue};
      line-height: 1.8;
     

      @media (max-width: ${theme.medias.phablet}) {
          font-size: 15px;
      }
  }
`

class ProfileEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            unbindFacebookId: false,
            unbindLineId: false ,
        }
        this.onUnifiedNoChange = this.onUnifiedNoChange.bind(this);
        this.toggleFBAction = this.toggleFBAction.bind(this);
        this.toggleLineAction = this.toggleLineAction.bind(this);
        this.closeConfirm = this.closeConfirm.bind(this);
        this.unbind = this.unbind.bind(this);
        /* 舊會員取得FB UserName 需求，尚末確認是否需要
        this.fbcb = this.fbcb.bind(this);
        this.fbHandleLogin = this.fbHandleLogin.bind(this);
        */
    }

    componentWillMount() {
        //v2.10.0 移至componentDidMount
        /*this.props.getLocationInfo();
        this.props.cleanLocalCompanyProfile();*/
    }

    /* 舊會員取得FB UserName 需求，尚末確認是否需要
    fbcb(response) {
        console.log('Good to see you, ' + response.name + '.');
        this.props.change('facebookName', response && response.name || '')
    }

   fbHandleLogin(response) {
       if (response.status==='connected' && response.authResponse) {
           console.log('Welcome!  Fetching your information.... ');
           window.FB.api('/me', {fields: 'name'}, this.fbcb);
       } else {
           console.log('User cancelled login or did not fully authorize.');
       }
   }*/

    componentDidMount() {
        const queryData = queryString.parse(this.props.location.search);
        const {logon} = this.props ;
        this.props.getLocationInfo();
        this.props.cleanLocalCompanyProfile();
        if(logon && queryData.source !== "2"){
            this.props.profile();

            /* 舊會員取得FB UserName 需求，尚末確認是否需要
              this.props.profile().then( (fb) => {
                console.log('facebookId:', fb);
                if(!isEmpty(fb.facebookId) && isEmpty(fb.facebookName)) {
                    if (typeof window !== "undefined") {
                        window.FB.login(this.fbHandleLogin)
                    }
                }
              });
            */
        }

        //Set Email from oAuth Data
        if(queryData.source === "2" ) {
            const oAuth = typeof localStorage.getItem('oAuth') === 'string' ? JSON.parse(localStorage.getItem('oAuth')) : null
            if(oAuth !== null && oAuth.email !== '') {
                this.props.change('email', oAuth.email)
            }
            if(oAuth !==null && oAuth.provider ==='facebook'){
                this.props.change('facebookName', oAuth.displayName);
            }
            if(oAuth !==null && oAuth.provider ==='line'){
                this.props.change('lineName', oAuth.displayName);
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.initialValues && nextProps.initialValues.get('addressCounty') && nextProps.initialValues.get('addressCounty') !== this.props.initialValues.addressCounty && this.props.areas.size == 0) {
            this.props.getAreaInfo(nextProps.initialValues.get('addressCounty'));
        }

        if (nextProps.company && nextProps.company.get('companyName')) {
            this.props.change('companyName', nextProps.company.get('companyName'));
        }
    }

    onUnifiedNoChange(e) {
        const unifiedNo = e.target.value;
        if (!unifiedNo || unifiedNo.length !== 8) {
            this.props.change('companyName','');
        }
        this.props.fetchCompanyProfile(unifiedNo);
    }

    onSubmit(values) {
        const queryData = queryString.parse(this.props.location.search);
        let requestData = omit(values.toJS(), [
            'photo',
            'accessToken',
            'phoneNumber',
            'userLevel',
            'laode',
            'job',
            'companyName'
        ]);
        // console.log('requestData: ', requestData);

        if (!requestData.userName || 0 === requestData.userName.length) {
            throw new SubmissionError({_error: '姓名未輸入'});
        }

        if (!requestData.gender || 0 === requestData.userName.gender) {
            throw new SubmissionError({_error: '性別未輸入'});
        }

        if (!requestData.birthday || 0 === requestData.userName.birthday) {
            throw new SubmissionError({_error: '請選擇生日'});
        }

        /*if (!requestData.email) {
            throw new SubmissionError({_error: 'email未輸入'});
        }*/

        if ( isEmpty(requestData.addressCounty) || requestData.addressCounty ==='' || requestData.addressCounty === '-1') {
            throw new SubmissionError({_error: '縣市未輸入'});
        }

        if ( isEmpty(requestData.addressTownship) || requestData.addressTownship === '' || requestData.addressTownship === '-1') {
            throw new SubmissionError({_error: '地區未輸入'});
        }

       /* if (!requestData.address || 0 === requestData.userName.address) {
            throw new SubmissionError({_error: '地址未輸入'});
        }*/

        this.props.updateProfile(requestData, queryData.source, this.props.history);
    }

    _citiesRender(cities) {
        let citiesData = cities.toJS();

        return (citiesData.map(({
                                    id,
                                    name
                                }, i) => <option value={id} key={id}>
            {name}
        </option>));
    }

    _areasRender(areas) {
        let areasData = areas.toJS();

        return (areasData.map(({id, name, zip}, i) => <option value={id} key={id}>
            {zip} {name}
        </option>));
    }

    changeCity(city) {
        if (city) {
            this.props.getAreaInfo(city, () => { this.props.change('addressTownship', '-1')});
        }
    }

    toggleFBAction(action){
        // console.log('action: ', action);
        if(action === 'bind'){
            if(typeof window !== 'undefined'){
                localStorage.setItem('targetPath', UserEditRoute());
                localStorage.setItem('bind', JSON.stringify({provider: 'facebook'}));
                window.location.href = '/auth/login/facebook';
            }
        }else{
            this.setState(preState => { return { ...preState, unbindFacebookId: true }})
        }
    }

    toggleLineAction(action){
        if(action === 'bind'){
            if(typeof window !== 'undefined'){
                localStorage.setItem('targetPath', UserEditRoute());
                localStorage.setItem('bind', JSON.stringify({provider: 'line'}));
                window.location.href = '/auth/login/line';
            }
        }else{
            this.setState(preState => { return {...preState, unbindLineId: true}})
        }
    }

    unbind(action){
        if(action === 'FB') {
            this.props.unbind3rdPartyId('fb').then(() => this.setState(preState => {return {...preState, unbindFacebookId: false}}))
        }else{
            this.props.unbind3rdPartyId('line').then(() => this.setState(preState => {return {...preState, unbindLineId: false}}))
        }
    }

    closeConfirm(provider) {
        if(provider==='FB'){
            this.setState(preState => { return {...preState, unbindFacebookId: false}})
        }else{
            this.setState(preState => { return {...preState, unbindLineId: false}})
        }
    }

    _onChangeDate(date){
        const { change } = this.props ;
        change('birthday', moment(date).format('YYYY/MM/dd'))
    }

    render() {
        const {
            error,
            handleSubmit,
            phoneNumber,
            cities,
            areas,
            initialValues,
            pristine,
            submitting,
            submitSucceeded,
            messageFail,
            lineId,
            facebookId,
            facebookName,
            lineName
        } = this.props;
        const queryData = queryString.parse(this.props.location.search);
        // const {photo} = initialValues.toJS();
        //console.log('messageFail:', messageFail);
        const {birthday} = initialValues.toJS();
        return (
            <div>
                <Helmet>
                    <title>個人資料</title>
                    <script dangerouslySetInnerHTML={{
                        __html:` window.fbAsyncInit = function () {
                            window.FB.init({
                                appId: '733342930208506',
                                xfbml: true,
                                version: 'v8.0'
                            });
                        }.bind(this);
                        
                        (function (d, s, id) {
                            var js, fjs = d.getElementsByTagName(s)[0];
                            if (d.getElementById(id)) {
                                return;
                            }
                            js = d.createElement(s);
                            js.id = id;
                            js.src = "https://connect.facebook.net/en_US/sdk.js";
                            fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));`
                    }}>


                    </script>
                </Helmet>

                <BackButton>
                    <button onClick={() => this.props.history.push(UserRoute())}>返回會員中心</button>
                </BackButton>
                <PageTitle title="個人資料"/>
                
                <Container>
                    <Field classname="large" name="photoURL" component={Avatar} change={this.props.change}/>
                    <div className="userid">會員帳號<span>{phoneNumber}</span>

                    </div>

                    { queryData.source === "2" ? <div className="attraction">填齊資料立即贈50Ｚ幣！</div> : undefined}

                    <UserForm onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <div className="multi_col">
                            <div className="row_name">會員姓名*</div>
                            <Field className="" type="text" name="userName" component="input" placeholder="請輸入姓名"/>
                        </div>
                        <div className="multi_col">
                            <div className="row_name">性別*</div>
                            <label className="gender"><Field name="gender" component="input" type="radio" value="M"/>
                                男</label>
                            <label className="gender"><Field name="gender" component="input" type="radio" value="F"/>
                                女</label>
                        </div>
                        <div className="multi_col">
                            <div className="row_name">生日*</div>
                            {/*<Field className="" type="text" name="birthday"
                                   placeholder="ex:1981.07.05" component={renderDatePicker} readOnly={!isEmpty(birthday)} />*/}
                            { isEmpty(birthday)
                                ? <Field className="" type="text" name="birthday"
                                         placeholder="ex:1981.07.05" component={renderDatePicker}
                                         readOnly={!isEmpty(birthday)}
                                />

                                : <Field className="" type="text" name="birthday" component="input"
                                        placeholder="ex:1981.07.05" readOnly={!isEmpty(birthday)}/>
                            }


                            {/*<Field className="" type="text" name="birthday" component="input"
                                   placeholder="ex:1981.07.05" readOnly={!isEmpty(birthday)}/>*/}
                        </div>
                        <div className="multi_col">
                            <div className="row_name">Email</div>
                            <Field className="" type="email" name="email" component="input" placeholder="輸入電子信箱"/>
                        </div>
                        <div className="multi_col">
                            <div className="row_name">通訊地址*</div>
                            <Field name="addressCounty" component="select"
                                   onChange={e => this.changeCity(e.target.value)}>
                                <option value="-1">縣市</option>
                                {this._citiesRender(cities)}
                            </Field>

                            <Field name="addressTownship" component="select" className="" style={{
                                'marginLeft': '5px'
                            }}>
                                <option value="-1">區域</option>
                                {this._areasRender(areas)}
                            </Field>
                        </div>
                        <Field type="text" name="address" component="input" placeholder="輸入通訊地址(選填)"/>
                        <br/><br/>

                        {queryData.source !== "2" ?
                            <SocialManage>
                                <h3>社群帳號連結管理</h3>
                                <br/><br/>
                                <div className="fb">
                                    {facebookId ? facebookName ? facebookName : '已連結' : '未連結'}
                                    <SocialConnectButton type="button" className={facebookId ? 'active' : ''}
                                                         onClick={() => this.toggleFBAction(facebookId ? 'remove' : 'bind')}>
                                        {facebookId ? '解除' : '建立'}
                                    </SocialConnectButton>
                                </div>
                                <div className="line">
                                    {lineId ? lineName ? lineName: '已連結' : '未連接'}
                                    <SocialConnectButton
                                        type="button"
                                        className={lineId ? 'active' : ''}
                                        onClick={() => this.toggleLineAction(lineId ? 'remove' : 'bind')}>
                                        {lineId ? '解除' : '建立'}
                                    </SocialConnectButton>
                                </div>

                            </SocialManage> : undefined
                        }
                        <br/><br/>
                        { (!submitSucceeded && <ErrorMsg msg={error} classname=""/>) }
                        { ( messageFail && <ErrorMsg msg={messageFail} classname=""/>)}
                        <BlueButton disabled={submitting}>儲存</BlueButton>
                        <Button className="delete-btn" type='button' formAction='#'
                            onClick={() => { this.props.history.push(UserDeleteWarnRoute()) }}>刪除帳號</Button>

                    </UserForm>
                </Container>
                { this.state.unbindFacebookId ? <UnbindConfirmModal cb={() => this.unbind('FB')} provider="Facebook" close={() => this.closeConfirm('FB')}/> : undefined }
                { this.state.unbindLineId ? <UnbindConfirmModal cb={() => this.unbind('Line')} provider="Line" close={() => this.closeConfirm('Line')} /> : undefined }


            </div>

        );
    }
}

ProfileEdit = reduxForm({form: 'ProfileEditForm', enableReinitialize: true})(ProfileEdit);

const selector = formValueSelector('ProfileEditForm');

function mapStateToProps(state) {
    return {
        initialValues: state.data.auth.get('PROFILE'),
        cities: state.data.common.get('LOCATION'),
        areas: state.data.common.get('AREA'),
        phoneNumber: selector(state, 'mobile'),
        lineId: selector(state, 'lineId'),
        lineName: selector(state,'lineName'),
        facebookId: selector(state, 'facebookId'),
        facebookName: selector(state, 'facebookName'),
        company: state.data.common.get('COMPANY'),
        messageFail: state.data.common.get('MESSAGE'),
        logon: state.data.auth.get('IS_LOGINED'),
        register: state.user.register.get('REGISTER'),
        bind3rdPartyId: state.data.auth.get('Bind3rdPartyId'),
    }
}

//export default connect(mapStateToProps, {getLocationInfo, getAreaInfo, updateProfile, fetchCompanyProfile, cleanLocalCompanyProfile})(ProfileEdit);

export default connect(mapStateToProps, {
    getLocationInfo,
    getAreaInfo,
    updateProfile,
    fetchCompanyProfile,
    cleanLocalCompanyProfile,
    message,
    unbind3rdPartyId,
    profile
})(withProfileEdit(ProfileEdit));


const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error}, readOnly }) => {
    // console.log('datePicker readonly: ', readOnly, input.value)
    return (
        <div>
            <DatePicker
                {...input}
                dateFormat="YYYY/MM/DD"
                selected={input.value ? moment(input.value) : null}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                readOnly
                 />
            {touched && error && <span>{error}</span>}
        </div>
    );
}

DatePicker.propTypes = {
    values: PropTypes.object
}
