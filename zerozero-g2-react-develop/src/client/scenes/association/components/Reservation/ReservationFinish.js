import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

import {awsUrl} from '../../../../utils/awsFile';
import {IndexRoute, UserSummaryRoute} from '../../../../commons/routePaths';

import styled, {css} from 'styled-components';
import {appointmentInfo, sectionTitle} from '../../../../styles/commons';
import PageTitle from '../../../common/components/PageTitle';
import BlueButton from '../../../common/components/BlueButton';
import GreenButton from '../../../common/components/GreenButton';

const SectionTitle = styled.div `
  ${sectionTitle};
`

const AppointmentInfo = styled.div `
  ${appointmentInfo};
`

const AnimationIcon = styled.div `
    width:30px;
    height:50px;
    margin:20px auto;
    background:url(${awsUrl("ani1.png")}) no-repeat top left;
    background-size:85px 50px;
    animation-name: pop;
    animation-duration: 4s;
    animation-iteration-count: infinite;

    @keyframes pop {


        15% {
            width:30px;

        }

        25% {
            width:90px;

        }
        28% {
            width:85px;

        }

        99.999999% {
            width:85px;

        }
        100% {
            width:30px;
        }
    }

`

class ReservationFinish extends Component {

    componentDidMount() {
        gtag('event','conversion',{'send_to':'AW-851066983/bOOwCL6I_nsQ54DplQM'});
    }

    render() {
        return (
            <div className="bg">
                <Helmet>
                    <title>廢車回收-完成</title>
                </Helmet>

                <PageTitle title="廢車回收"/>
                <SectionTitle className="green">
                    <div className="back"/>
                    預約拖吊中
                </SectionTitle>
                <AppointmentInfo>
                    <div className="brief">謝謝您 :)<br/>已送出您的車輛回收預約，我們將由專人與您接洽</div>
                    <div className="blocks">
                        <div className="block">
                            <AnimationIcon>

                            </AnimationIcon>
                            <div className="brief gray">您可以隨時查詢訂單進度，有任何疑問可撥打專線與專員聯繫</div>
                        </div>
                        <div className="block">
                            <Link to={{pathname: UserSummaryRoute('CAR')}} style={{textDecoration: 'none'}}>
                                <BlueButton>查詢進度</BlueButton>
                            </Link>
                            <div style={{'textAlign': 'center', 'fontSize': '14px'}}>or</div>
                            <br/>
                            <Link to={IndexRoute()} style={{textDecoration: 'none'}}>
                                <GreenButton>回到首頁</GreenButton>
                            </Link>
                        </div>
                    </div>

                </AppointmentInfo>
            </div>
        )
    }
}

export default ReservationFinish;
