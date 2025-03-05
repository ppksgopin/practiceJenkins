import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import {Field, reduxForm, formValueSelector, SubmissionError} from "redux-form/immutable";
import {each} from 'lodash';
import queryString from 'query-string';

import {CarAppointmentFinishRoute} from '../../../../../../commons/routePaths';
import {
    getRecycleCountries,
    getRecycleTownShips,
    getRegisterTypes,
    getVehicleTypes,
    getBrandsByType,
    getStylesByBrand,
    getDisplacementsByStyle,
    getManufactureYears,
    getSpecialCases,
    updateSpecialCases,
    createOrder,
    initOrder
} from './action';

import {appointmentForm, sectionTitle, pageMenu, buttons} from '../../../../../../styles/commons';
import PageTitle from '../../../../../common/components/PageTitle';
import LabelSelectBox from '../../../../../common/components/LabelSelectBox';
import LabelTextInput from '../../../../../common/components/LabelTextInput';
import ImageUploader from '../../../../../common/components/ImageUploader';
import BlueButton from '../../../../../common/components/BlueButton';
import ErrorMsg from '../../../../../common/components/ErrorMsg';

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

class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            specialCase: {},
            city: {},
            area: {},
            showPartsWarrings: false
        };

        this._setType = this._setType.bind(this);
        this.init = this.init.bind(this);
    }

    componentWillReceiveProps(nextProps) {
    }

    componentDidMount() {
        this.init(this.state.type);
    }

    init(vehicleType) {
        this.props.getRecycleCountries(vehicleType);
        this.props.getRegisterTypes();
        this.props.getVehicleTypes();
        this.props.getBrandsByType(vehicleType);
        this.props.getManufactureYears();
        this.props.getSpecialCases();
    }

    _setType(type) {
        this.setState({
            "type": type,
        });

        this.props.initOrder();
        this.init(type);
    }

    _vehicleTypesRender(vehicleTypes) {
        let vehicleTypesData = vehicleTypes.toJS();

        return (vehicleTypesData.map(({
                                          id,
                                          name,
                                          key
                                      }, i) => <li key={i}>
            <a className={id == this.state.type ? `${key} active` : `${key}`}
               onClick={(e) => this._setType(id)}>{name}回收</a>
        </li>));
    }

    _labelSelectBoxRender(data) {
        if (!data) {
            return;
        }

        let jsData = data.toJS();
        let optionData = [{value: -1, label: "選擇"}];
        for (let i = 0; i < jsData.length; i++) {
            let city = {};
            city.value = jsData[i].id;
            city.label = jsData[i].name;

            optionData.push(city);
        }

        return optionData;
    }

    _specialCasesRender(data) {
        if (!data) {
            return;
        }

        let jsData = data.toJS();

        return (jsData.map(({
                                id,
                                name
                            }, i) => <div key={i}>
            <label className="checkbox_group">
                <input type="checkbox" name="special"
                       onChange={(e) => this.props.updateSpecialCases(this.props.specialCases.toJS(), id)}/>
                <div>{name}</div>
            </label>
        </div>));
    }

    isNeedFileUpload() {
        let specialCases = this.props.specialCases.toJS();

        let result = false;
        each(specialCases, function (special) {
            if (special.id == 2 && special.selected == true) {
                result = true;
            }
        });

        return result;
    }

    _specialCaseWarring() {
        if (this.isNeedFileUpload()) {
            return <div className="reminder">特殊狀況請務必上傳相關照片</div>;
        }
    }

    changeCity(city) {
        if (city) {
            let {cities} = this.props;
            cities.toJS().map(cityData => {
                if (cityData.id == city) {
                    this.setState({
                        "city": cityData,
                    })
                }
            });

            this.props.getRecycleTownShips(this.state.type, city);
        }
    }

    changeArea(areaId) {
        if (areaId) {
            let {areas} = this.props;
            areas.toJS().map(areaData => {
                if (areaData.id == areaId) {
                    this.setState({
                        "area": areaData,
                    })
                }
            });
        }
    }

    changeBrand(brandId) {
        if (brandId) {
            this.props.getStylesByBrand(brandId);
        }
    }

    changeStyle(styleId) {
        if (styleId) {
            this.props.getDisplacementsByStyle(styleId);
        }
    }

    changeParts(parts) {
        if (parts == 2) {
            this.setState({"showPartsWarrings": true});
        }
    }


    _formValidation(requestData) {
        if (!requestData.vehicleTypeId || requestData.vehicleTypeId === undefined) {
            throw new SubmissionError({_error: '車種未選擇'});
        }

        if (!requestData.countyId || 0 === requestData.countyId.length) {
            throw new SubmissionError({_error: '縣市未選擇'});
        }

        if (!requestData.townshipId || 0 === requestData.townshipId.length) {
            throw new SubmissionError({_error: '區域未選擇'});
        }

        if (!requestData.vehicleRegisterTypeId || -1 === requestData.vehicleRegisterTypeId) {
            throw new SubmissionError({_error: '登記身份未選擇'});
        }

        // if (requestData.vehicleTypeId == 2 && !requestData.motorcycleEngine) {
        //     throw new SubmissionError({_error: '機車引擎未選擇'});
        // }
        //
        // if (!requestData.brandsId || requestData.brandsId === -1) {
        //     throw new SubmissionError({_error: '廠牌未選擇'});
        // }
        //
        // if (!requestData.styleId || requestData.styleId === -1) {
        //     throw new SubmissionError({_error: '車款未選擇'});
        // }
        //
        // if (!requestData.engineDisplacementId || requestData.engineDisplacementId === -1) {
        //     throw new SubmissionError({_error: '排氣量未選擇'});
        // }
        //
	if (!!requestData.plateNumber && requestData.plateNumber.length != 0) {
            if (!requestData.plateNumber.includes('-')) {
                throw new SubmissionError({_error: '填寫的車牌格式不正確'});
            }
        }

        if (!requestData.userName || requestData.userName.length === 0) {
            throw new SubmissionError({_error: '姓名未填寫'});
        }

        if (!requestData.userPhone || requestData.userPhone.length === 0) {
            throw new SubmissionError({_error: '行動電話未填寫'});
        }

        if (requestData.userPhone.length != 10) {
            throw new SubmissionError({_error: '行動電話長度輸入錯誤'});
        }
    }

    onSubmit(values) {
        const value= queryString.parse(this.props.location.search);

        // special cases
        let specialCases = this.props.specialCases.toJS();
        let reqSpecialCases = [];
        specialCases.map(({id, selected}) => {
            if (selected) reqSpecialCases.push(id)
        });

        let requestData = values.toJS();

        requestData['gtag'] = (value && value.gtag) || ""
        requestData['sourceId'] = (value && value.sourceId) || ""

        requestData.vehicleTypeId = this.state.type;
        requestData.specialCases = reqSpecialCases;


        // city
        if (this.state.city && this.state.city.cid) {
            requestData.countyId = this.state.city.cid;
        }

        // area
        if (this.state.area && this.state.area.tid) {
            requestData.townshipId = this.state.area.tid;
        }

        //pics
        if (this.props.pics) {
            let pics = [];
            this.props.pics.toJS().map((img) => {
                pics.push(img.id);
            });

            requestData.pics = pics;
        }

        console.log("req : " + JSON.stringify(requestData));


        // 直接檢查是否是『事故車』但是沒有上傳照片
        if (this.props.pics.size == 0 && this.isNeedFileUpload()) {
            throw new SubmissionError({_error: '特殊狀況請務必上傳相關照片'});
        }

        this._formValidation(requestData);
        this.props.createOrder(requestData, (orderId) => {
            this.props.history.push(CarAppointmentFinishRoute(orderId));
        });
    }

    render() {
        const {
            error,
            handleSubmit,
            cities,
            areas,
            registerTypes,
            vehicleTypes,
            brands,
            styles,
            displacements,
            years,
            specialCases,
            pics,
        } = this.props;

        const {showPartsWarrings} = this.state;

        return (
            <div className="bg">
                <Helmet>
                    <title>廢車回收</title>
                </Helmet>

                <PageTitle title="廢車回收"/>
                <PageMenu>
                    <ul>
                        {this._vehicleTypesRender(vehicleTypes)}
                    </ul>
                </PageMenu>
                <SectionTitle className="green">
                    {this.state.type == 1 ? "詢價/汽車" : "詢價/機車"}
                </SectionTitle>
                <AppointmentForm onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className="block">
                        <div className="block_title">車輛資料</div>
                        <div className="multi_col">
                            <Field name="countyId" component={LabelSelectBox}
                                   onChangeAction={this.changeCity.bind(this)} id="countyId"
                                   label="*車輛所在縣市"
                                   options={this._labelSelectBoxRender(cities)}/>
                            <Field name="townshipId" component={LabelSelectBox}
                                   onChangeAction={this.changeArea.bind(this)} id="townshipId"
                                   label="*車輛所在區域"
                                   options={this._labelSelectBoxRender(areas)}/>
                        </div>

                        <Field name="vehicleRegisterTypeId" component={LabelSelectBox} id="vehicleRegisterTypeId"
                               label="*用戶登記"
                               options={this._labelSelectBoxRender(registerTypes)}/>

                        {
                            this.state.type == 2 ?
                                <Field name="motorcycleEngine" component={LabelSelectBox} id="motorcycleEngine"
                                       must
                                       label="引擎"
                                       options={[
                                           {value: 1, label: '二行程'},
                                           {value: 2, label: '四行程'},
                                           {value: 3, label: '不知道'},
                                       ]}/>
                                : ""
                        }

                        <div className="multi_col">
                            <Field name="brandsId" component={LabelSelectBox}
                                   onChangeAction={this.changeBrand.bind(this)} id="brandsId"
                                   label="廠牌"
                                   options={this._labelSelectBoxRender(brands)}/>

                            <Field name="styleId" component={LabelSelectBox}
                                   onChangeAction={this.changeStyle.bind(this)} id="styleId"
                                   label="車款"
                                   options={this._labelSelectBoxRender(styles)}/>
                        </div>

                        <div className="multi_col">
                            <Field name="engineDisplacementId" component={LabelSelectBox}
                                   id="engineDisplacementId"
                                   label="排氣量"
                                   options={this._labelSelectBoxRender(displacements)}/>
                            <Field name="manufactureYear" component={LabelSelectBox} id="manufactureYear"
                                   label="年分"
                                   options={this._labelSelectBoxRender(years)}/>
                        </div>

                        <Field name="plateNumber" component={LabelTextInput} id="plateNumber"
                               label="車牌號碼"
                               placeholder="請輸入車牌號碼，車號需輸入「-」"/>
                    </div>

                    {this.state.type == 1 ?

                        <div className="block">
                            <div className="block_title">外觀配備</div>

                            <div className="multi_col">
                                <Field name="aluminumRim" component={LabelSelectBox} id="aluminumRim"
                                       label="是否有鋁圈"
                                       options={[
                                           {value: 1, label: '具備'},
                                           {value: 2, label: '不完整'},
                                           {value: 3, label: '不清楚'},
                                       ]}/>
                                <Field name="catalyticConverter" component={LabelSelectBox}
                                       id="catalyticConverter"
                                       label="是否有觸媒"
                                       options={[
                                           {value: 1, label: '具備'},
                                           {value: 2, label: '不完整'},
                                           {value: 3, label: '不清楚'},
                                       ]}/>
                            </div>

                            <Field name="parts" onChangeAction={this.changeParts.bind(this)}
                                   component={LabelSelectBox}
                                   id="parts"
                                   label="配備是否完全"
                                   options={[
                                       {value: 1, label: '具備'},
                                       {value: 2, label: '不完整'},
                                       {value: 3, label: '不清楚'},
                                   ]}/>

                            {showPartsWarrings ? <div className="reminder">請在備註填寫拆除零件，如拆除電瓶、輪胎皮</div> : ''}

                            <div className="block_title secondary">特殊狀況</div>

                            <div className="grid3D2M">
                                {this._specialCasesRender(specialCases)}
                            </div>

                            {this._specialCaseWarring()}

                            <div className="block_title secondary">照片上傳</div>
                            <ImageUploader pics={pics} max={6}/>
                            <div className="reminder" style={{"margin-top":"-30px"}}>僅能上傳1MB以下檔案</div>

                            <div className="dashed-split"/>

                            <div className="block_title secondary">備註說明</div>

                            <Field name="inquiryRemark" component="textarea" placeholder="備註"/>
                            <div className="reminder">我們提供平面一樓免費拖吊</div>

                        </div>

                        :

                        <div className="block">
                            <div className="block_title secondary">特殊狀況</div>

                            <div className="grid3D2M">
                                {this._specialCasesRender(specialCases)}
                            </div>

                            {this._specialCaseWarring()}

                            <div className="block_title secondary">照片上傳</div>
                            <ImageUploader pics={pics} max={6}/>
                            <div className="reminder" style={{"margin-top":"-30px"}}>僅能上傳1MB以下檔案</div>

                            <div className="dashed-split"/>
                            
                            <div className="block_title">備註說明</div>

                            <Field name="inquiryRemark" component="textarea" placeholder="備註"/>
                            <div className="reminder">我們提供平面一樓免費拖吊</div>
                        </div>
                    }

                    <div className="block">
                        <div className="block_title">聯繫資料</div>
                        <Field name="userName" component={LabelTextInput} id="userName"
                               label="*姓名/稱呼"
                               placeholder=""/>

                        <Field name="userPhone" component={LabelTextInput} id="userPhone"
                               label="*請輸入行動電話"
                               placeholder="09XXXXXXXX"/>

                        <Field name="homePhone" component={LabelTextInput} id="homePhone"
                               label="請輸入住家電話"
                               placeholder="02xxxxxxxx"/>
                    </div>

                    <br/><br/>
                    <ErrorMsg msg={error} classname=""/>
                    <Buttons>
                        <BlueButton>確認送出</BlueButton>
                    </Buttons>
                </AppointmentForm>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    return errors;
}

function mapStateToProps(state) {
    return {
        initialValues: state.car.appointment.order.get("APPOINTMENT"),
        cities: state.car.appointment.order.get("COUNTRIES"),
        areas: state.car.appointment.order.get("TOWNSHIPS"),
        registerTypes: state.car.appointment.order.get("REGISTER_TYPES"),
        vehicleTypes: state.car.appointment.order.get("VEHICLE_TYPES"),
        brands: state.car.appointment.order.get("BRANDS"),
        styles: state.car.appointment.order.get("STYLES"),
        displacements: state.car.appointment.order.get("DISPLACEMENTS"),
        years: state.car.appointment.order.get("MANUFACTURE_YEARS"),
        specialCases: state.car.appointment.order.get("SPECIAL_CASES"),
        pics: state.data.common.get('IMAGE_BLOCKS'),
    }
}

export default reduxForm({
    validate,
    form: "carAppointementForm"
})(connect(mapStateToProps, {
    getRecycleCountries,
    getRecycleTownShips,
    getRegisterTypes,
    getVehicleTypes,
    getBrandsByType,
    getStylesByBrand,
    getDisplacementsByStyle,
    getManufactureYears,
    getSpecialCases,
    updateSpecialCases,
    createOrder,
    initOrder
})(Step1));
