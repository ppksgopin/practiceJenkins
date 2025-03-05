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
import {bound, appointmentForm, sectionTitle, pageMenu,buttons,appointmentInfo} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';
import PageTitle from '../../../common/components/PageTitle';

import ErrorMsg from '../../../common/components/ErrorMsg';
import ElectronicSteps from './electronicSteps';

import {　message　} from '../../../../data/common/action'
import { ElectronicAppointmentFinishRoute } from '../../../../commons/routePaths';

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
const AppointmentInfo = styled.form `
  ${appointmentInfo};
`

class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state ={

        }
    }

    render() {
       // console.log('props :' , this.props) ;
        const { electronic ,error} = this.props ;
        const { appointment ,recycleItems, bookingTimes, contactTimes, counties, townships=[]} = electronic.toJS();
        //console.log('step 2: ' , appointment , counties, bookingTimes);
        //console.log('appointment bookingTimes : ', appointment.bookingTimeIds);
        const county = counties.find((v) => v.id == appointment.countyId);
        const township = townships.find((t) => t.id==appointment.townshipId);
        const iText = appointment.items && appointment.items.map((v, i) =>{
            const itext = recycleItems.find((r) => r.materialId === v);
            return (i+1)===appointment.items.length ? itext.commonName : itext.commonName+"、";
        });
        const bText = appointment.bookingTimeIds && appointment.bookingTimeIds.map((v, i) => {
            const btext = bookingTimes.find((b) => b.code === v);
            return (i+1)===appointment.bookingTimeIds.length ? btext.name : btext.name + "、";
        });
        //console.log('bText :' , bText);
        const cText = contactTimes.find((c) => c.code == appointment.contactTime);


        return (
            <div>
                <div className="brief">請再次確認您的諮詢單</div>
                <div className="blocks">
                    <div className="block">
                        <div className="item">
                            <div className="block_title">所在區域</div>
                            <div className="block_answer">{county.name}{township.name}</div>
                        </div>

                        <div className="item">
                            <div className="block_title">回收品項</div>
                            <div className="block_answer">{iText} {appointment.other !=='' ? "("+appointment.other+")" : ""}</div>
                        </div>

                        <div className="item">
                            <div className="block_title">希望時間</div>
                            <div className="block_answer">{bText}</div>
                        </div>

                        <div className="item">
                            <div className="block_title">聯繫時間</div>
                            <div className="block_answer">{cText.name}</div>
                        </div>

                        <div className="item">
                            <div className="block_title">手機號碼</div>
                            <div className="block_answer">{appointment.contactPhone}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        electronic: state.electronic,
    }
}

export default connect(mapStateToProps, null)(Confirm) ;
