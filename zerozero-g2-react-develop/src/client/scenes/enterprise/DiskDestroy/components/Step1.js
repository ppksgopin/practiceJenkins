import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector, SubmissionError} from "redux-form/immutable";
import * as actions from '../action';
import validate from './validate';

import LabelTextInput from '../../../common/components/LabelTextInput2';
import LabelSelectBox from '../../../common/components/LabelSelectBox2';
import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import DivButton from '../../../common/components/DivButton';
import ImageUploader from '../../../common/components/ImageUploader';
import { change } from 'redux-form';


const GreenButton = styled(DivButton)`
  background: ${theme.colors.green};
  color: #fff;

  &:hover {
      background: ${theme.colors.green2};
  }

  -webkit-flex: none;
  flex: none;
  width: auto !important;
  padding:0 20px;
  margin-left: 9px;
  line-height:40px;
  height:40px;
`
const Buttons = styled.div`
	margin-top:20px;
	text-align:right;
	a{
		display:inline-block;
		font-size:15px;
		color:#fff;
		font-size:16px;
		font-weight:500;
		background:${theme.colors.blue};
		${borderRadius("8px")};
		padding:0px 25px;
		line-height:40px;
		height:40px;
		text-decoration:none;
		margin:5px;
		cursor:pointer;

		&.red{
			background:${theme.colors.red};
		}
		&.white{
			background:#fff;
			color:${theme.colors.gray};
		}
		&.green{
			background:${theme.colors.green};
		}
	}

	@media (max-width: ${theme.medias.phablet}) {
		text-align:center;
	}
`

class ReservationStep1 extends Component {

    constructor(props) {
        super(props);
        this.renderField = this.renderField.bind(this);
    }

    _labelSelectBoxRender(data) {

        let optionData = [{value: -1, label: "選擇"}];
        if (!data) {
            return optionData;
        }

        let jsData = data.toJS();
        for (let i = 0; i < jsData.length; i++) {
            let county = {};
            county.value = jsData[i].id;
            county.label = jsData[i].name;

            optionData.push(county);
        }

        return optionData;
    }

    componentWillReceiveProps(nextProps) {
        const pics = nextProps.pics;

        let images = [];
        pics && pics.map(p => images.push(p.get('id')));

        // console.log("images:", images);

        this.props.change('images', images);

    }

    renderField(field) {
        return (
            <input {...field.input} type="hidden"/>
        );
    }

    render() {

        const { handleSubmit, counties, townships, pics } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <div id="rf" className="step step1">
                    <div>
                        <div className="block_title">線上諮詢(1/3)</div>
                        <Field
                            name="category"
                            classname = "disabled"
                            label=" 項目類別"
                            component={LabelSelectBox}
                            options={[{value: 1, label: "硬碟銷毀"}]}
                        />
                        <div className="multi_col">
                            <Field name="countyId"
                                   component={LabelSelectBox}
                                   onChange={(e) => this.props.selectCounty(e.target.value)}
                                   label="* 清運縣市"
                                   options={this._labelSelectBoxRender(counties)}
                            />
                            <Field name="townshipId"
                                   component={LabelSelectBox}
                                   label="* 鄉鎮區"
                                   options={this._labelSelectBoxRender(townships)}
                            />
                        </div>
                        <Field name="address"
                               label="詳細地址"
                               component={LabelTextInput}
                        />
                        <div className="multi_col">
                            <Field
                                name="quantity"
                                label="* 銷毀數量"
                                placeholder="顆/片"
                                component={LabelTextInput}
                            />
                            <Field
                                name="floor"
                                label="* 樓層"
                                placeholder="樓"
                                component={LabelTextInput}
                            />
                        </div>
                        <div className="multi_col">
                            <Field
                                name="hasElavator"
                                label="是否有電梯"
                                options={[{value: false, label: "無電梯"},{value: true, label: "有電梯"}]}
                                component={LabelSelectBox}
                            />
                            <Field
                                name="needCarry"
                                label="搬運需求"
                                options={[{value: false, label: "不須搬運"},{value: true, label: "需搬運"}]}
                                component={LabelSelectBox}
                            />
                        </div>
                        <Field
                            name="comment"
                            label="備註"
                            component={LabelTextInput}
                        />
                        <Field
                            name="images"
                            component={this.renderField}
                        />
                        <br />
                        <div className="block_title secondary">上傳廢棄物照片，提升服務品質</div>
                        <ImageUploader max={5} pics={pics}/>

                        <Buttons>
                            <a onClick={handleSubmit}>下一步</a>
                        </Buttons>

                    </div>
                    <div className="pageImage">
                        <h3>
                            zero zero<br />
                            重視您的需求
                        </h3>
                    </div>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        counties: state.enterprise.diskDestroy.get("COUNTIES"),
        townships: state.enterprise.diskDestroy.get("TOWNSHIPS"),
        pics: state.data.common.get('IMAGE_BLOCKS'),
    }
}

export default connect(mapStateToProps, {...actions, change} )(reduxForm(
    {
        form: 'diskDestroyForm',
        destroyOnUnmount: false,
        initialValues: {
            category: '1',
            hasElavator: false,
            needCarry: false,
        },
        validate
    })(ReservationStep1));
