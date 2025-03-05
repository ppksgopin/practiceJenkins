/**
 * Created by ryan on 2017/11/1.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {Helmet} from 'react-helmet';
import * as actions from '../../data/action' ;

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {bound, appointmentForm, appointmentInfo,sectionTitle, pageMenu,buttons} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import PageTitle from '../../../common/components/PageTitle';
import QNA from '../../../common/components/QNA';
import BlueButton from '../../../common/components/BlueButton';
import GreenButton from '../../../common/components/GreenButton';
import ErrorMsg from '../../../common/components/ErrorMsg';
import ElectronicSteps from './electronicSteps';


const Buttons = styled.div `
  ${buttons}
`

const SectionTitle = styled.div `
  ${sectionTitle};
`

const AppointmentInfo = styled.div `
  ${appointmentInfo};
`

class Appointment extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }

    componentDidMount() {
        gtag('event','conversion',{'send_to':'AW-851066983/wzmmCKW5vHsQ54DplQM'});
    }

    render() {
        // console.log('props :' , this.props) ;
        const { appointment, } = this.props.electronic.toJS();
        return (
            <div>
                    <div className="block done">
                        <div className="item">
                            <div className="block_title">諮詢單號</div>
                            <div className="block_answer">{appointment.appointmentId}</div>
                        </div>

                        <div className="item">
                            <div className="block_title">手機號碼</div>
                            <div className="block_answer">{appointment.contactPhone}</div>
                        </div>
                    </div>



            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        electronic: state.electronic
    }
}

export default connect(mapStateToProps, null)(Appointment) ;
