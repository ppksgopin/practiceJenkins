/**
 * Created by ryan on 2017/12/14.
 */
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import {profile} from '../../../../data/auth/action';
import { fetchUserSummary, persistSummary } from './data/action';
import {toDate} from '../../../../utils/dateTimeConverter';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {bound, userForm, pageMenu,sectionTitle} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix} from '../../../../styles/mixins';

import {awsUrl} from '../../../../utils/awsFile';
import PageTitle from '../../../common/components/PageTitle';
import Avatar from '../../../common/components/Avatar';
import Button from '../../../common/components/Button';

import {
    EnterpriseAppointmentRoute,
    UserCarOrderRoute,
    UserElecReservationRoute,
    UserRoute,
    UserSummaryAllRoute
} from '../../../../commons/routePaths';

const PageMenu = styled.div `
  ${pageMenu}
`;

const MoreButton = styled.button`
    display:block !important;
    width: 100%;
    max-width:100px;
    -webkit-appearance: none;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
        outline:none;
    background: none;
    text-align:center;
    font-size:14px;
    color:#a7a7a7;
    border:none;
    line-height:50px;
    margin:0 auto;
    cursor:pointer;
    ${transition("color",".3s")};

    &::before{
      content:"\f067";
      font-family: FontAwesome;
      margin-right:5px;
    }
    
    &:hover{
        color:${theme.colors.blue};
    }
`;

const SectionTitle = styled.div `
  ${sectionTitle};
`;

const Container = styled.ul `

  display: block;
  width: 100%;
  padding:50px 0;
  max-width:800px;
  margin:0 auto;

  li {
      width: 100%;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      padding: 10px 20px;
      padding-left:135px;
      background: #fff;
      position:relative;
      height:120px;
      overflow:hidden;
      cursor:pointer;
      ${box};
      ${borderRadius("8px")};
      font-weight:100;

      &::after{
        content:"";
        position:absolute;
        z-index:0;
        top:0;
        left:0;
        width:120px;
        height:100%;
        background:#ddd;
        pointer-events:none;
      }

      .date{
        font-size:14px;
        color:${theme.colors.gray};
        line-height:30px;
        border-bottom:1px solid #eee;
        padding-bottom:5px;
        margin-bottom:5px;
      }

      .title{
        font-size:24px;
        color:#333;
        line-height:1.5;
      }
      .id{
        font-size:14px;
        color:${theme.colors.gray};
        line-height:1.5;
        span{
          color:${theme.colors.green};
        }
      }

      .status{
        position:absolute;
        top:10px;
        right:20px;
        font-size:14px;
        color:#fff;
        background:${theme.colors.red};
        line-height:30px;
        padding:0 15px;
        ${borderRadius("8px")};
      }

      &.elec{
        &::after{
          background:#14d095 url(${awsUrl("list_icon_elec.png")}) no-repeat center center;
          background-size:42px 70px;
        }
      }

      &.car{
        &::after{
          background:#1aa397 url(${awsUrl("list_icon_car.png")}) no-repeat center center;
          background-size:79px 51px;
        }
      }

      &.wood{
        &::after{
          background:#96CAA9 url(${awsUrl("list_icon_wood.png")}) no-repeat center center;
          background-size:55px 67px;
        }
      }

      &.food{
        &::after{
          background:#DFB4A3 url(${awsUrl("list_icon_food.png")}) no-repeat center center;
          background-size:80px 35px;
        }
      }
      &.hd{
        &::after{
          background:#3C808E url(${awsUrl("list_icon_hd.png")}) no-repeat center center;
          background-size:50px 71px;
        }
      }

      &.doc{
        &::after{
          background:#C1BA95 url(${awsUrl("list_icon_doc.png")}) no-repeat center center;
          background-size:54px 70px;
        }
      }

  }

  @media (max-width: ${theme.medias.phablet}) {
    padding:5px 0;
    min-height:60vh;
    li {
      height:auto;
      ${borderRadius("0")};
      margin-bottom:5px;
      padding: 10px;
      padding-left:115px;

      &::after{
        width:100px;
      }

      .title{
        font-size:18px;
      }
      .status{
        right:10px;
        padding:0 8px;
      }
    }
  }
}
`


class Summary extends Component {

    constructor(props) {
        super(props);
        this.renderResults = this.renderResults.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount(){
        const { type } = this.props.match.params;
        // console.log(type);
        this.props.profile();
        new Promise((resolve, reject) => {
            resolve(this.props.persistSummary('currentPage', 1));
        }).then((v) => {
            this.props.fetchUserSummary(false, type);
        });
    }

    renderResults() {
        const { userAppointment } = this.props ;
        const { result, currentPage } = userAppointment.toJS();
       // console.log('result :' ,  result.rows, currentPage);
        const list = result.rows && result.rows.map((r , index) => {
            let className = '';
            switch(r.type.code) {
                case 'ELECTRONIC':
                    className = 'elec';
                    break;
                case 'CAR':
                    className = 'car';
                    break;
                case 'DOC_DESTROY':
                    className = 'doc';
                    break;
                case 'DISK_DESTROY':
                    className = 'hd';
                    break;
                case 'WOOD_CLEARANCE':
                    className = 'wood';
                    break;
                case 'FOOD_CLEARANCE':
                    className = 'food';
                    break;
            }
            const onClick = () => {
                if(r.type.code === 'ELECTRONIC') {
                    this.props.history.push(UserElecReservationRoute(r.appointmentId));
                } else if(r.type.code === 'CAR') {
                    this.props.history.push(UserCarOrderRoute(r.appointmentId, 'appointment'));
                } else {
                    this.props.history.push(EnterpriseAppointmentRoute(r.appointmentId, r.type.code));
                }
            };

            return (
                <li key={index} className={className} onClick={onClick}>
                    <div className="status">{r.status}</div>
                    <div className="date">{toDate(r.createTime)}</div>
                    <div className="title">{r.type.name}</div>
                    <div className="id">預約單號 <span>{r.appointmentId}</span></div>
                </li>
            )
        });

        return list ;
    }

    render() {
        const { type } = this.props.match.params;
        const { userAppointment,fetchUserSummary } = this.props ;
        const { result, currentPage } = userAppointment.toJS();
        const mortButton = ()=> {
            if (result.total-1 > currentPage) {
                return (
                    <MoreButton onClick={(e) => fetchUserSummary(true, type)}>更多</MoreButton>
                )
            }
        }
        //console.log('currentPage :' , currentPage) ;
        return (
            <div className="bg">
                <Helmet>
                    <title>我的預約</title>
                </Helmet>

                <PageTitle title="會員中心"/>

                <PageMenu>
                    <ul>
                        <li>
                            <Link to={{pathname: UserRoute()}}>帳戶管理</Link>
                        </li>
                        <li>
                            <Link to={{pathname: UserSummaryAllRoute()}}>我的預約</Link>
                            {/*<a className="active" href="/user/summary">我的預約</a>*/}
                        </li>
                    </ul>
                </PageMenu>

                <SectionTitle className="green">預約總表</SectionTitle>
                <Container>
                    {this.renderResults()}
                </Container>

                {mortButton()}

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userProfile: state.data.auth.get('PROFILE'),
        userAppointment: state.user.summary.userAppointment
    }
}

export default connect(mapStateToProps, { profile , fetchUserSummary ,persistSummary})(Summary);
