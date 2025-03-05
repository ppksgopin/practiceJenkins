/**
 * Created by ryan on 2017/12/14.
 * Modified by Dennis on 2017/12/15.
 */
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";

import {profile} from '../../../../data/auth/action';
import {toDate} from '../../../../utils/dateTimeConverter';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {buttons, bound, reservationForm, tagMenu, sectionTitle} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';

import PageTitle from '../../../common/components/PageTitle';
import ReservationInfo from './components/ReservationInfo';
import RedButton from '../../../common/components/RedButton';
import ImageUploader from '../../../common/components/ImageUploader';

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


class CarInquiry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
        };
    }

    componentWillMount() {
    }

    render() {
        const {slug} = this.props.match.params;
        console.info("orderId2 = " + slug);

        return (
            <div>
                <Helmet>
                    <title>我的預約</title>
                </Helmet>

                <PageTitle title="廢車回收單"/>

                <ReservationInfo
                    reservationID={slug}
                    status="詢價中"
                />

                <TagMenu>
                    <ul>
                        <li>
                            <a className="active" href="#">詢價單</a>
                        </li>
                        <li>
                            <a href="#">報價單</a>
                        </li>
                        <li>
                            <a href="#">預約單</a>
                        </li>
                    </ul>
                </TagMenu>

                <Container>
                    <div className={this.state.type == 1 ? "title inquiry car" : "title inquiry motorcycle"}>詢價項目</div>
                    <ul className="content">
                        <li>
                            <div className="item_title">所在地區</div>
                            <div className="item_content">台北市 大安區</div>
                        </li>
                        <li>
                            <div className="item_title">用戶登記</div>
                            <div className="item_content">自用</div>
                        </li>
                        {
                            this.state.type == 2 ?
                                <li>
                                    <div className="item_title">引擎</div>
                                    <div className="item_content">四行程</div>
                                </li>
                                : ""
                        }
                        <li>
                            <div className="item_title">廠牌</div>
                            <div className="item_content">本田</div>
                        </li>
                        <li>
                            <div className="item_title">車款</div>
                            <div className="item_content">Fits</div>
                        </li>
                        <li>
                            <div className="item_title">排氣量</div>
                            <div className="item_content">1600</div>
                        </li>
                        <li>
                            <div className="item_title">出廠年份</div>
                            <div className="item_content">2005</div>
                        </li>
                        <li>
                            <div className="item_title">車牌號碼</div>
                            <div className="item_content">AKK-0705</div>
                        </li>
                    </ul>
                    {
                        this.state.type == 1 ?
                            <ul className="content">
                                <li>
                                    <div className="item_title">是否有鋁圈</div>
                                    <div className="item_content">是</div>
                                </li>
                                <li>
                                    <div className="item_title">是否有觸媒</div>
                                    <div className="item_content">是</div>
                                </li>
                                <li>
                                    <div className="item_title">配備是否完全</div>
                                    <div className="item_content">是</div>
                                </li>
                                <li>
                                    <div className="item_title">特殊狀況</div>
                                    <div className="item_content">無</div>
                                </li>
                            </ul>
                            /*<ImageUploader pics={pics} max={0}/>*/
                            : ""
                    }

                    <ul className="content">
                        <li>
                            <div className="item_title">備註</div>
                            <div className="item_content">周六上午</div>
                        </li>
                        <li>
                            <div className="item_title">聯絡人</div>
                            <div className="item_content">古先生</div>
                        </li>
                        <li>
                            <div className="item_title">聯絡電話</div>
                            <div className="item_content">0911123456</div>
                        </li>
                    </ul>


                </Container>

                <Buttons className="bob">
                    <RedButton>返回</RedButton>
                </Buttons>

                <br/><br/><br/>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {userProfile: state.data.auth.get('PROFILE')}
}

export default connect(mapStateToProps, {profile})(CarInquiry);
