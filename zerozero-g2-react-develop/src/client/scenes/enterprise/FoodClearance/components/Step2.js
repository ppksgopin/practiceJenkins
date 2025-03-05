import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm, formValueSelector, SubmissionError} from "redux-form/immutable";
import * as actions from '../action';
import * as enterpriseActions from '../../action';
import * as commonActions from '../../../../data/common/action';
import validate from './validate';

import LabelTextInput from '../../../common/components/LabelTextInput2';
import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import DivButton from '../../../common/components/DivButton';
import LabelRadioBtn from "../../../common/components/LabelRadioBtn";
import CompanyInfo from "../../components/CompanyInfo";

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
`;
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
`;

const LabelTitle = styled.div`
    font-size:13px;
    color:#aaa;
    line-height:20px;
    padding:0 10px;
`;

class ReservationStep2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userType: '',
            submitted: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.company && nextProps.company.get('companyName')) {
            this.props.change('companyName', nextProps.company.get('companyName'));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.submitted && (!prevState.submitted)) {
            const { handleSubmit } = this.props;
            const result = handleSubmit();
            if(result) {
                this.setState({submitted: false});
            }
        }
    }

    render() {
        const { handleSubmit, previousPage, fetchCompanyProfile } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="step step2">
                    <div>
                        <div className="block_title">聯絡資訊(2/3)</div>
                        <LabelTitle>* 用戶類別</LabelTitle>
                        <Field
                            name="userType"
                            component={LabelRadioBtn}
                            options={[{name:'userType', value: 'P', label: '個人戶'}, {name: 'userType', value: 'C', label: '公司戶'}]}
                            onChange={(e) => this.setState({userType: e.target.value})}
                        />
                        <br />

                        <Field
                            name="contactName"
                            label="* 姓名"
                            component={LabelTextInput}
                        />
                        <Field
                            name="contactMobile"
                            label="* 行動電話"
                            component={LabelTextInput}
                            placeholder="09xxxxxxxx"
                        />
                        {
                            (this.state.userType && this.state.userType === "C") &&
                            <CompanyInfo
                                fetchCompanyProfile={fetchCompanyProfile}
                            />
                        }
                        <Buttons>
                            <a onClick={previousPage} className="red">上一步</a>
                            {
                                (!this.state.submitted) && <a onClick={e => this.setState({submitted: true})}>完成</a>
                            }
                        </Buttons>
                    </div>
                    <div className="pageImage">
                        <h3>
                            zero zero<br />
                            立即與您聯繫
                        </h3>
                    </div>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {
        counties: state.enterprise.foodClearance.get("COUNTIES"),
        townships: state.enterprise.foodClearance.get("TOWNSHIPS"),
        company: state.enterprise.landing.get('COMPANY')
    }
}

export default connect(mapStateToProps, {...actions, ...enterpriseActions, ...commonActions})(reduxForm(
    {
        form: 'foodClearanceForm',
        destroyOnUnmount: false,
        onSubmitSuccess: (result, dispatch, props) => {
            props.reset();
        },
        validate
    })(ReservationStep2));