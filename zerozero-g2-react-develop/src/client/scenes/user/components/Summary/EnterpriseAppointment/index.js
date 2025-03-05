import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";


import styled from 'styled-components';
import theme from '../../../../../styles/theme';
import {buttons, bound, reservationForm, tagMenu, sectionTitle} from '../../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../../styles/mixins';
import ReservationInfo from '../components/ReservationInfo';

import ImageList from '../../../../common/components/ImageList';

import PageTitle from '../../../../common/components/PageTitle';
import RedButton from '../../../../common/components/RedButton';

import {awsUrl} from '../../../../../utils/awsFile';
import * as actions from '../data/action';
import {UserSummaryAllRoute, UserSummaryRoute} from "../../../../../commons/routePaths";
import { fromJS } from 'immutable';


const Buttons = styled.div `
  ${buttons}

`;

const TagMenu = styled.div `
  ${tagMenu}
`;

const SectionTitle = styled.div `
  ${sectionTitle};
`;

const Container = styled.div `
  ${reservationForm};
`;

class EnterpriseAppointment extends Component {

    constructor(props) {
        super(props);
    }


    componentWillMount() {
        const {appointmentId, appointmentType} = this.props.match.params;
        if (!appointmentId || !appointmentType) {
            this.props.history.push(UserSummaryRoute('ALL'));
        } else {
            this.props.fetchEnterpriseAppointment(appointmentId, appointmentType);
        }
    }

    render() {
        const appointment = this.props.appointment && this.props.appointment.toJS();
        const {appointmentType} = this.props.match.params;

        if(!appointment) {
            return null;
        }

        let title = '';
        switch (appointmentType) {
            case 'DOC_DESTROY':
                title = '文件銷毀諮詢單';
                break;
            case 'DISK_DESTROY':
                title = '磁碟銷毀諮詢單';
                break;
            case 'WOOD_CLEARANCE':
                title = '廢木材清運諮詢單';
                break;
            case 'FOOD_CLEARANCE':
                title = '食品報廢諮詢單';
                break;
        }

        let images = [];
        if(appointment.appointmentInfo.images && appointment.appointmentInfo.images.length > 0) {
            appointment.appointmentInfo.images.map(image => {
               images.push(image.url);
            });
            images = fromJS(images);
        }

        return (
            <div>
                <Helmet>
                    <title>我的預約</title>
                </Helmet>

                <PageTitle title={title}/>

                {/*classname固定為enterprise*/}
                <ReservationInfo
                    reservationID={appointment.appointmentId}
                    status={appointment.statusName}
                    classname="enterprise"
                    date={appointment.createTime}
                />

                <TagMenu>
                    <ul>
                        <li>
                            <a className="active" href="#">訂單明細</a>
                        </li>
                        {/*<li>*/}
                            {/*<a className="active" href="#">報價紀錄</a>*/}
                        {/*</li>*/}
                    </ul>
                </TagMenu>

                <Container>

                    <div className="title">聯絡資訊</div>
                    <ul className="content">
                        <li>
                            <div className="item_title">姓名</div>
                            <div className="item_content">{appointment.contactInfo.name}</div>
                        </li>
                        <li>
                            <div className="item_title">行動電話</div>
                            <div className="item_content">{appointment.contactInfo.mobile}</div>
                        </li>
                        {
                            appointment.contactInfo.companyName ?
                                (
                                    <li>
                                        <div className="item_title">公司名稱</div>
                                        <div className="item_content">{appointment.contactInfo.companyName}</div>
                                    </li>
                                ) : null
                        }
                        {
                            appointment.contactInfo.unifiedNo ?
                                (
                                    <li>
                                        <div className="item_title">統一編號</div>
                                        <div className="item_content">{appointment.contactInfo.unifiedNo}</div>
                                    </li>
                                ) : null
                        }
                        {
                            appointment.contactInfo.companyPhone ?
                                (
                                    <li>
                                        <div className="item_title">電話/分機</div>
                                        <div className="item_content">{appointment.contactInfo.companyPhone}</div>
                                    </li>
                                ) : null
                        }
                    </ul>

                    <div className="title">清運資訊</div>
                    <ul className="content">
                        {
                            (appointment.appointmentInfo.items && appointment.appointmentInfo.items.length > 0)?
                            (
                                <li>
                                    <div className="item_title">項目類別</div>
                                    <div className="item_content cat">
                                        {
                                            appointment.appointmentInfo.items.map((item, index) => {
                                               return (
                                                   <span key={index}>{item}</span>
                                               )
                                            })
                                        }
                                        {/*類別1<br/>*/}
                                        {/*類別2<br/>*/}
                                        {/*類別3<br/>*/}
                                    </div>
                                </li>
                            ) : null
                        }

                        {
                            appointment.appointmentInfo.unit?
                                (
                                    <li>
                                        <div className="item_title">報廢模式</div>
                                        <div className="item_content">{appointment.appointmentInfo.unit}</div>
                                    </li>
                                ) : null
                        }

                        {
                            appointment.appointmentInfo.quantity?
                                (
                                    <li>
                                        <div className="item_title">數量(箱/袋/公斤)</div>
                                        <div className="item_content">{appointment.appointmentInfo.quantity}</div>
                                    </li>
                                ) : null
                        }

                        {
                            appointment.appointmentInfo.address && (
                                <li>
                                    <div className="item_title">地址</div>
                                    <div className="item_content">{appointment.appointmentInfo.address}</div>
                                </li>
                            )
                        }

                        {
                            appointment.appointmentInfo.floor && (
                                <li>
                                    <div className="item_title">樓層</div>
                                    <div className="item_content">{`${appointment.appointmentInfo.floor}F`}</div>
                                </li>
                            )
                        }

                        {
                            appointment.appointmentInfo.hasElevator !== undefined && appointment.appointmentInfo.hasElevator !== null && (
                                <li>
                                    <div className="item_title">是否有電梯</div>
                                    <div className="item_content">{appointment.appointmentInfo.hasElevator === true ? '是' : '否'}</div>
                                </li>
                            )
                        }

                        {
                            appointment.appointmentInfo.needCarry !== undefined && appointment.appointmentInfo.needCarry !== null && (
                                <li>
                                    <div className="item_title">搬運需求</div>
                                    <div className="item_content">{appointment.appointmentInfo.needCarry === true ? '是' : '否'}</div>
                                </li>
                            )
                        }

                        {
                            images && images.size > 0 &&
                            (
                                <li>
                                    <div className="item_title fullsize">圖片</div>
                                    <div className="item_content fullsize">
                                    <br />
                                        <ImageList
                                            reverse
                                            pics={images}/>
                                    </div>
                                </li>
                            )
                        }

                        {
                            appointment.appointmentInfo.comment && (
                                <li>
                                    <div className="item_title">備註</div>
                                    <div className="item_content">{appointment.appointmentInfo.comment}</div>
                                </li>
                            )
                        }
                    </ul>

                    <div className="title">報價單資訊</div>
                    <ul className="content">
                        {
                            appointment.quotation? (
                                <li key={appointment.quotation.downloadLink}>
                                    <div className="item_title">
                                        報價單
                                    </div>
                                    <div className="item_content bottons">
                                        <span onClick={() => window.location.href=appointment.quotation.downloadLink}>{appointment.quotation.quotationFileName}</span>
                                    </div>
                                </li>
                            ) : (
                                <li><div className="item_title">尚無報價</div></li>
                            )
                        }
                    </ul>
                </Container>

                <Container>
                    {/*<div className="penging download">沒有下載紀錄</div>*/}

                    <div className="title download">報價紀錄</div>
                    {
                        appointment.quotationHistory && appointment.quotationHistory.length > 0 ?
                            (
                                <ul className="content">
                                    {
                                        appointment.quotationHistory.map(h => {

                                            return (
                                                <li key={h.uploadDate}>
                                                    <div className="item_title">{h.quotationFileName}</div>
                                                    <div className="item_content time">{h.uploadDate}</div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            ) : (
                                <div className="penging reservation">沒有報價紀錄</div>
                            )
                    }
                </Container>


                <Buttons className="bob" onClick={() => this.props.history.push(UserSummaryRoute('ALL'))}>
                    <RedButton>返回</RedButton>
                </Buttons>

                <br/><br/><br/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        appointment: state.user.summary.userAppointment.get('enterpriseAppointment')
    }
}

export default connect(mapStateToProps, actions)(EnterpriseAppointment);