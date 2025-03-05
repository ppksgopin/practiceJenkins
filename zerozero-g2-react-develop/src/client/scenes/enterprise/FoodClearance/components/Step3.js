import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../action';
import { UserRegisterRoute } from '../../../../commons/routePaths';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import DivButton from '../../../common/components/DivButton';

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

class ReservationStep3 extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        gtag('event','conversion',{'send_to':'AW-851066983/kdcSCK2dzIcBEOeA6ZUD'});
    }

    render() {
        const { toSignUp, signUpNextTime, logon } = this.props;
        return (
            <div className="step step3">
                <div>
                    <div className="block_title">完成預約</div>
                    <div className="complete">
                        <div className="check"/>
                        <div className="receipt">謝謝您，已完成本次單據<br/>
                            單據編號：{this.props.appointmentId}
                        </div>
                        {
                            logon ?
                                (
                                    <p>謝謝您，已完成本次單據！<br />
                                        <br/>
                                        表單填寫完後若有問題，可撥打<br />
                                        0800-009-717，將有專人為您服務。
                                    </p>
                                ) :
                                (
                                    <p>謝謝您，已完成本次單據！<br />
                                        zero zero邀請您加入會員<br />
                                        加入會員將可享有更多功能<br/>
                                        <br/>
                                        表單填寫完後若有問題，可撥打<br />
                                        0800-009-717，將有專人為您服務。
                                    </p>
                                )
                        }

                    </div>
                    <br />
                    {
                        logon ?
                            (
                                <Buttons style={{"textAlign":"center"}}>
                                    <a className="green" onClick={() => signUpNextTime()}>加入LINE@</a>
                                </Buttons>
                            ) :
                            (
                                <Buttons style={{"textAlign":"center"}}>
                                    <a className="white" onClick={() => signUpNextTime()}>下次加入</a>
                                    <a className="green" href={UserRegisterRoute()} onClick={() => toSignUp()}>加入會員</a>
                                </Buttons>
                            )
                    }

                </div>
                <div className="pageImage">
                    <h3>
                        zero zero<br />
                        邀請您加入企業零廢
                    </h3>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        appointmentId: state.enterprise.foodClearance.get("APPOINTMENT_ID"),
        logon: state.data.auth.get('IS_LOGINED')
    }
}

export default connect(mapStateToProps, actions)(ReservationStep3);