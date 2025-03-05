import React, { Component } from 'react';
import {connect} from 'react-redux';
import {awsUrl} from '../../../../utils/awsFile';
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

class ReservationStep4 extends Component {


    render() {
        const { joinLineButton } = this.props ;

        return (
            <div className="step step5">
                <div>
                    <div className="complete">
                        <img src={awsUrl("epFormQR.png")} width="200"/>
                        <p>有更多環保問題嗎？<br />
                            想獲取更多環保資訊嗎？<br /><br />
                            成為我們的Line@好友吧！<br />
                            環保資訊不漏接，環保顧問全在線</p>
                    </div>
                    <br />
                    <Buttons style={{"textAlign":"center"}}>
                        <a className="green" href="https://line.me/R/ti/p/%40yde3116a" target="_blank" onClick={() => joinLineButton()}>一鍵加入</a>
                    </Buttons>
                </div>
                <div className="pageImage">
                    <h3>
                        zero zero<br />
                        貼心無所不在
                    </h3>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        appointmentId: state.enterprise.docDestroy.get("APPOINTMENT_ID"),
    }
}

export default connect(mapStateToProps)(ReservationStep4);