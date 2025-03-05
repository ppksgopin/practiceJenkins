/**
 * Created by ryan on 2017/12/14.
 */
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";

import {profile} from '../../../../data/auth/action';
import {toDate} from '../../../../utils/dateTimeConverter';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {buttons,bound, reservationForm, tagMenu,sectionTitle} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';

import PageTitle from '../../../common/components/PageTitle';
import ReservationInfo from './components/ReservationInfo';
import RedButton from '../../../common/components/RedButton';
import BlueButton from '../../../common/components/BlueButton';

const Buttons = styled.div `
  ${buttons}

`


const TagMenu = styled.div `
  ${tagMenu}
`

const SectionTitle = styled.div `
  ${sectionTitle};
`

const Container = styled.div `
  ${reservationForm};
`

class CarQuotation extends Component {
    componentWillMount() {
        this.props.profile();
    }

    render() {

        return (
            <div className="bg">
                <Helmet>
                    <title>我的預約</title>
                </Helmet>

                <PageTitle title="廢車回收單"/>

                {/*尚未報價就改成詢價中*/}
                <ReservationInfo
                    reservationID = "201707062"
                    status="已報價"
                />

                <TagMenu>
                    <ul>
                        <li>
                            <a href="#">詢價單</a>
                        </li>
                        <li>
                            <a className="active" href="#">報價單</a>
                        </li>
                        <li>
                            <a href="#">預約單</a>
                        </li>
                    </ul>
                </TagMenu>

                <Container>
                    {/*尚未報價就只留以下這段
                    <div className="penging quotation">尚未報價</div>
                    */}


                    <div className="title quotation">報價項目</div>
                    <ul className="content">
                      <li>
                        <div className="item_title">車體回收</div>
                        <div className="item_content">5000</div>
                      </li>
                      <li>
                        <div className="item_title">鋁圈四個</div>
                        <div className="item_content">500</div>
                      </li>
                      <li>
                        <div className="item_title">觸媒轉換器</div>
                        <div className="item_content">1000</div>
                      </li>
                      <li className="sumup">
                        <div className="item_title">總計</div>
                        <div className="item_content">6500</div>
                      </li>
                    </ul>
                    <ul className="content">
                      <li>
                        <div className="item_title">環保獎金</div>
                        <div className="item_content">5000</div>
                      </li>
                      <li>
                        <div className="item_title">貨物稅減免</div>
                        <div className="item_content">6000</div>
                      </li>
                      <li className="sumup">
                        <div className="item_title">總計</div>
                        <div className="item_content">11000</div>
                      </li>
                      
                    </ul>
                    <ul className="content">
                      <li className="total">
                        <div className="item_title">最高合計</div>
                        <div className="item_content">17500</div>
                      </li>
                    </ul>
                    <div className="expire">有效報價時間:2017/12/14 10:00</div>
                </Container>
                
                <Buttons className="bob">
                    <RedButton>返回</RedButton>
                    <BlueButton>前往預約</BlueButton>
                </Buttons>

                <br /><br /><br />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { userProfile: state.data.auth.get('PROFILE')}
}

export default connect(mapStateToProps, { profile })(CarQuotation);
