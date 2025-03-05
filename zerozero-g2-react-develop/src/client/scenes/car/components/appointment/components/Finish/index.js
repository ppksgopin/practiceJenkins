import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

import {awsUrl} from '../../../../../../utils/awsFile';
import {CarReservationRoute, CarRoute} from '../../../../../../commons/routePaths';

import styled, {css} from 'styled-components';
import {appointmentInfo, sectionTitle} from '../../../../../../styles/commons';
import PageTitle from '../../../../../common/components/PageTitle';
import BlueButton from '../../../../../common/components/BlueButton';
import GreenButton from '../../../../../common/components/GreenButton';

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

class Finish extends Component {

    componentDidMount() {
        gtag('event','conversion',{'send_to':'AW-851066983/_RJACLmmz3sQ54DplQM'});
    }

    render() {
        const {slug} = this.props.match.params;

        return (
            <div className="bg">
                <Helmet>
                    <title>廢車回收</title>
                </Helmet>

                <PageTitle title="廢車回收"/>
                <SectionTitle className="green">
                    <div className="back"/>
                    詢價成功
                </SectionTitle>
                <AppointmentInfo>
                    <div className="brief">謝謝您 :)<br/>已完成回收詢價，我們將由專人與您接洽</div>
                    <div className="blocks">
                        <div className="block">
                            <AnimationIcon>

                            </AnimationIcon>
                            <div className="brief gray">您是否要將此詢價直接預約回收？</div>
                        </div>
                        <div className="block">
                            <Link to={CarReservationRoute(slug)} style={{textDecoration: 'none'}}>
                                <BlueButton>直接預約回收</BlueButton>
                            </Link>
                            <div style={{'textAlign': 'center', 'fontSize': '14px'}}>or</div>
                            <br/>
                            <Link to={CarRoute()} style={{textDecoration: 'none'}}>
                                <GreenButton>不用，謝謝</GreenButton>
                            </Link>
                        </div>
                    </div>

                </AppointmentInfo>
            </div>
        )
    }
}

export default Finish;
