import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Helmet} from 'react-helmet';
import {Field, reduxForm, formValueSelector, SubmissionError} from "redux-form/immutable";
import {Link} from 'react-router-dom';
import {omit} from 'lodash';

import {
    getScrappedIdentities,
    createReservation,
    updateDragPaper,
    updateScrapPaper,
    getAddtionSupports,
    updateSupports
} from './action';
import {CarAppointmentFinishRoute, CarReservationFinishRoute} from '../../../../commons/routePaths';

import {profile} from '../../../../data/auth/action';


import styled, {css} from 'styled-components';
import theme from '../../../../styles/theme';
import {appointmentForm, sectionTitle, pageMenu, buttons} from '../../../../styles/commons';
import {borderRadius, box, clearfix} from '../../../../styles/mixins';
import PageTitle from '../../../common/components/PageTitle';
import LabelSelectBox from '../../../common/components/LabelSelectBox';
import LabelTextInput2 from '../../../common/components/LabelTextInput2';
import LabelTextInput from '../../../common/components/LabelTextInput';
import BlueButton from '../../../common/components/BlueButton';
import WhiteButton from '../../../common/components/WhiteButton';
import DivButton from '../../../common/components/DivButton';
import ErrorMsg from '../../../common/components/ErrorMsg';


const CopyButton = styled(DivButton)`
  background: ${theme.colors.gray};
  color: #fff;

  -webkit-flex: none;
  flex: none;
  width: auto !important;
  margin-left: !important;
  padding:0 20px;
`

const AutoWidth = styled.div `
  -webkit-flex: none;
  flex: none;
  width: auto !important;
`

const RemoveButton = styled.div `
  color: ${theme.colors.gray};
  line-height:50px;
  height:50px;
  float:right;
  background:#fff;
  padding:0 10px;
  cursor:pointer;
  margin-left:0 !important;
  font-size:18px;

  -webkit-flex: none;
  flex: none;
  width: auto !important;

  &::before{
    content:"\f1f8";
    font-family: FontAwesome;
  }

  &:hover{
    color:${theme.colors.red};
  }
`

const SimpleQNA = styled.div `
  position:relative;
  z-index:20;

  &:hover,&:active{
    p{
      max-height:none;
      padding:10px 20px;
      border-top:1px solid #ddd;
    }
  }

  p{
    font-size:14px;
    color:#333;
    line-height:1.5;
    padding:0 20px;
    max-height:0px;
    overflow:hidden;
  }

  &::before{
      content:"\f059";
      font-size:24px;
      line-height:50px;
      font-family: FontAwesome;
      position:absolute;
      top:-50px;
      right:0;
      color: ${theme.colors.gray}; 
      cursor:pointer;
    }
`

const Contactor = styled.div `
  position:relative;
  font-size:15px;
  line-height:50px;
  height:50px;
  color:${theme.colors.gray};
  overflow:hidden;

  &::before{
      content:"\f007";
      font-family: FontAwesome;
      margin-right:5px;
  }

  &::after{
      content:'';
      vertical-align:top;
      display:inline-block;
      width:100%; 
      height:50%;
      margin-right:-100%;
      margin-left:10px;
      border-bottom:1px dashed ${theme.colors.gray};
  }
`

const Documents = styled.div `
background:#f8f8f8;
  margin-bottom:20px;
  > div{
    width:50%;
    float:left;
    padding:20px 40px 20px 40px;
    border-left:1px solid #fff;

    &:first-child{
      border:none;
    }

    h3{
      font-size:16px;
      color:${theme.colors.blue};
      line-height:1.5;
      margin-bottom:10px;
    }

    p{
      font-size:14px;
      color:#333;
      line-height:1.5;
      padding-left:10px;
      position:relative;
      text-indent:-20px;
      margin-left:15px;
      margin-bottom:5px;

      &::before{
          content:"\f00c";
          font-family: FontAwesome;
          margin-right:5px;
          color:${theme.colors.blue};
      }
    }
    ${box};

    @media (max-width: ${theme.medias.phablet}) {
        width:100%;
        float:none;
        border-top:1px solid #fff;
    }
  }
  ${borderRadius('8px')};

  &::after{
    ${clearfix};
  }
`

const Buttons = styled.div `
  ${buttons}
`
const PageMenu = styled.div `
  ${pageMenu}
`
const SectionTitle = styled.div `
  ${sectionTitle};
`
const AppointmentForm = styled.form `
  ${appointmentForm};
`

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'hideContact2': true
        }
    }

    componentDidMount() {
        const {slug} = this.props.match.params;

        if (slug) {
            this.props.getAddtionSupports(slug);
        }

        this.props.getScrappedIdentities();

        gtag('event','conversion',{'send_to':'AW-851066983/TTJ3CI6uvHsQ54DplQM'});
    }

    _labelSelectBoxRender(data) {
        if (!data) {
            return;
        }

        let jsData = data.toJS();
        let optionData = [{value: -1, label: "選擇"}];
        for (let i = 0; i < jsData.length; i++) {
            let option = {};
            option.value = jsData[i].id;
            option.label = jsData[i].name;

            optionData.push(option);
        }

        return optionData;
    }

    _contact1Render() {
        const {sameMemberInfo} = this.props;

        if (!sameMemberInfo) {
            return (

                <div><Field name="contactName1" component={LabelTextInput} id="contactName1"
                            label="聯絡人稱呼"
                            placeholder="王小明"></Field>

                    <Field
                        name="contactPhone1"
                        component={LabelTextInput}
                        id="contactPhone1"
                        label="聯絡人電話"
                        placeholder="0912345678"></Field></div>
            )
        }
    }

    _contactRender() {
        const {sameMemberInfo} = this.props;
        const {hideContact2} = this.state;

        if (sameMemberInfo == undefined || sameMemberInfo == false) {
            if (!hideContact2) {
                return (<div>
                    <div className="multi_col">
                        <Contactor>聯絡人2</Contactor>
                        <RemoveButton onClick={this.deleteContact2.bind(this)}/>
                    </div>
                    <Field name="contactName2" component={LabelTextInput} id="contactName2"
                           label="聯絡人稱呼"
                           placeholder="王小明"/>

                    <Field name="contactPhone2" component={LabelTextInput} id="contactPhone2"
                           label="聯絡人電話"
                           placeholder="0912345678"/>
                </div>);
            }
        }
    }

    _renderPaper(data) {
        if (!data) {
            return;
        }

        return data.toJS().map((o, i) => <p key={i}>{o}</p>);
    }

    _additionSupportsRender(additionSupports) {
        if (!additionSupports) {
            return;
        }

        return additionSupports.toJS().map((support, i) =>
            <div key={i}>
                <div style={{"width":"calc(100% - 30px)"}}>
                    <label className="checkbox_group ordinary">
                        <input type="checkbox" name="additionSupport"
                               onChange={(e) => this.props.updateSupports(this.props.additionSupports.toJS(), support.key)}/>
                        <div>{support.name}</div>
                    </label>
                </div>
                <SimpleQNA>
                    <p>{support.desc}</p>
                </SimpleQNA>
            </div>);
    }

    toggleContact2() {
        const {hideContact2} = this.state;
        if (hideContact2) {
            this.setState({"hideContact2": false});
        }
    }

    deleteContact2() {
        const {hideContact2} = this.state;
        this.setState({"hideContact2": true});
    }

    changeScrappedIdentity(scrappedIdentityId) {
        if (scrappedIdentityId) {
            const {scrappedIdentities} = this.props;

            scrappedIdentities.toJS().map(identity => {
                if (identity.id == scrappedIdentityId) {
                    this.props.updateDragPaper(identity.dragPaper);
                    this.props.updateScrapPaper(identity.scrapPaper);
                }
            });
        }
    }

    _formValidation(requestData) {
        if (!requestData.ownerName || 0 === requestData.ownerName.length) {
            throw new SubmissionError({_error: '車主姓名/公司名稱未輸入'});
        }

        if (!requestData.ownerIdentityNumber || 0 === requestData.ownerIdentityNumber.length) {
            throw new SubmissionError({_error: '身份證字號/統一編號未輸入'});
        }

        if (!requestData.address || 0 === requestData.address.length) {
            throw new SubmissionError({_error: '詳細拖吊位置未輸入'});
        }

        if (!requestData.residenceAddress || 0 === requestData.residenceAddress.length) {
            throw new SubmissionError({_error: '通訊/戶籍地址未輸入'});
        }

	if (!!requestData.plateNumber && requestData.plateNumber.length != 0) {
            if (!requestData.plateNumber.includes('-')) {
                throw new SubmissionError({_error: '填寫的車牌格式不正確'});
            }
        }

        if (!requestData.contactName1 || 0 === requestData.contactName1.length) {
            throw new SubmissionError({_error: '聯絡人姓名未輸入'});
        }

        if (!requestData.contactPhone1 || 0 === requestData.contactPhone1.length) {
            throw new SubmissionError({_error: '聯絡人電話未輸入'});
        }

        if (!requestData.scrapExecutorType || requestData.scrapExecutorType === -1) {
            throw new SubmissionError({_error: '辦理報廢身份未選擇'});
        }
    }

    onSubmit(values) {
        let valuesJson = values.toJS();
        let requestData = omit(valuesJson, [
            'sameAsAddress',
            'sameMemberInfo'
        ]);

        // supports
        let supports = this.props.additionSupports.toJS();
        let reqSupports = [];
        supports.map(({key, support}) => {
            if (support) reqSupports.push(key);
        });

        // sameAsAddress
        if (valuesJson.sameAsAddress) {
            requestData.residenceAddress = valuesJson.address;
        }

        // sameMemberInfo
        const {userProfile} = this.props;
        if (valuesJson.sameMemberInfo) {
            requestData.contactName1 = userProfile.get('realName');
            requestData.contactPhone1 = userProfile.get('phoneNumber');
        }

        requestData.addtionSupports = reqSupports;

        this._formValidation(requestData);

        const {slug} = this.props.match.params;
        this.props.createReservation(slug, requestData, () => {
            this.props.history.push(CarReservationFinishRoute());
        });
    }

    sameMemberInfo(e) {
        if (e.target.value) {
            this.props.profile();
        }
    }

    render() {
        const {
            error,
            handleSubmit,
            scrappedIdentities,
            dragPaper,
            scrapPaper,
            sameMemberInfo,
            sameAsAddress,
            additionSupports,
            isLogined
        } = this.props;

        const {hideContact2} = this.state;
        const {slug} = this.props.match.params;

        return (
            <div className="bg">
                <Helmet>
                    <title>廢車回收</title>
                </Helmet>

                <PageTitle title="廢車回收"/>
                <SectionTitle className="green">
                    預約回收單
                </SectionTitle>
                <AppointmentForm onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="brief">請提供政府回收管制聯單及預約回收相關資訊，加快服務安排及回收證明單的即時性</div>
                    <div className="block">
                        <div className="block_title">車主相關資料</div>
                        <Field name="ownerName" component={LabelTextInput} id="ownerName"
                               label="車主姓名/公司名稱"
                               placeholder="王小明"/>

                        <Field name="ownerIdentityNumber" component={LabelTextInput} id="ownerIdentityNumber"
                               label="身分證字號/統一編號"
                               placeholder="A123456789"/>

                        <Field name="address" component={LabelTextInput} id="address"
                               label="詳細拖吊地址"
                               placeholder="請告訴我們愛車的所在地"/>

                        <div className="multi_col">
                            {sameAsAddress == undefined || sameAsAddress == false ?
                                <Field name="residenceAddress" component={LabelTextInput} id="residenceAddress"
                                       label="通訊/戶籍地址"
                                       placeholder="請輸入詳細地址哦"/> : ''}


                            <AutoWidth>
                                <label className="checkbox_group ordinary">
                                    <Field name="sameAsAddress" id="sameAsAddress" component="input" type="checkbox"/>
                                    <div>同上</div>
                                </label>
                            </AutoWidth>
                        </div>

                        <Field name="plateNumber"
                               label="車牌號碼"
                               placeholder="請輸入車牌號碼，車號需輸入「-」"
                               component={LabelTextInput2}
                        />
                    </div>


                    <div className="block">
                        <div className="block_title">現場聯絡人</div>
                        {this._contact1Render()}

                        <div className="grid3D2M">
                            {
                                isLogined
                                    ? <div>
                                        <label className="checkbox_group ordinary">
                                            <Field name="sameMemberInfo" id="sameMemberInfo"
                                                   onChange={this.sameMemberInfo.bind(this)} component="input"
                                                   type="checkbox"/>
                                            <div>同會員資料</div>
                                        </label>
                                    </div>
                                    : ''

                            }

                            {(sameMemberInfo == undefined || sameMemberInfo == false) && hideContact2 ?
                                <CopyButton style={{"float": "right"}}
                                            onClick={this.toggleContact2.bind(this)}>新增</CopyButton> : ''}
                        </div>

                        {this._contactRender()}
                    </div>

                    <div className="block">
                        <div className="block_title">身分/攜帶文件</div>
                        <Field name="scrapExecutorType" component={LabelSelectBox}
                               onChangeAction={this.changeScrappedIdentity.bind(this)}
                               id="scrapExecutorType"
                               label="辦理報廢身分"
                               options={this._labelSelectBoxRender(scrappedIdentities)}/>

                        {dragPaper.toJS().length > 0 ? <Documents>
                            <div>
                                <h3>拖車時準備文件</h3>
                                {this._renderPaper(dragPaper)}
                            </div>
                            <div>
                                <h3>車籍報廢準備文件</h3>
                                {this._renderPaper(scrapPaper)}
                            </div>
                        </Documents> : ""}

                        <div className="dashed-split"/>
                        <div className="reminder">拖吊需要安排車輛，服務時段為周一至周六 0900-1700，服務人員會與您確認雙方皆方便的時間。</div>
                        <div className="block_title secondary">其他服務</div>
                        {this._additionSupportsRender(additionSupports)}
                    </div>

                    <br/><br/>
                    <ErrorMsg msg={error} classname=""/>
                    <Buttons className="bob">
                        <Link to={CarAppointmentFinishRoute(slug)}
                              style={{textDecoration: 'none', width: '100%', 'max-width': '350px'}}>
                            <WhiteButton style={{'margin-bottom': '0px'}}>上一步</WhiteButton>
                        </Link>
                        <BlueButton>完成</BlueButton>
                    </Buttons>

                </AppointmentForm>
            </div>
        )
    }
}

Reservation = reduxForm({form: 'carReservationForm'})(Reservation);
const selector = formValueSelector('carReservationForm');

function mapStateToProps(state) {
    return {
        initialValues: state.car.reservation.get("RESERVATION"),
        sameMemberInfo: selector(state, 'sameMemberInfo'),
        sameAsAddress: selector(state, 'sameAsAddress'),
        scrappedIdentities: state.car.reservation.get("SCRAPPED_IDENTITIES"),
        dragPaper: state.car.reservation.get("DRAG_PAPER"),
        scrapPaper: state.car.reservation.get("SCRAP_PAPER"),
        additionSupports: state.car.reservation.get("ADDITION_SUPPORTS"),
        userProfile: state.data.auth.get('PROFILE'),
        isLogined: state.data.auth.get('IS_LOGINED'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getScrappedIdentities,
        createReservation,
        updateDragPaper,
        updateScrapPaper,
        getAddtionSupports,
        updateSupports,
        profile
    }, dispatch);
};

Reservation = connect(mapStateToProps, mapDispatchToProps)(Reservation);

export default Reservation;
