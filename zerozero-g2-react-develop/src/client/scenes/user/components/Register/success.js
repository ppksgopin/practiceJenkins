import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DashboardRoute, UserRoute } from "../../../../commons/routePaths";
import * as actions from './action';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { appointmentInfo } from '../../../../styles/commons';
import { box, transition } from '../../../../styles/mixins';
import theme from '../../../../styles/theme';
import BlueButton from '../../../common/components/BlueButton';

import PageTitle from '../../../common/components/PageTitle';

const Container = styled.div`
    ${appointmentInfo};
    max-width:none;
    width:100%;
    padding-bottom:0;
    background:#fff;
    padding:40px 20px 60px;
    text-align:center;
    ${box};

    .congrat{
        font-size:24px;
        line-height:2;
        color:#ccc;
        color:${theme.colors.gray};
    }
    p{
        font-size:16px;
        color:${theme.colors.gray};
        line-height:1.5;

        span{
            color:${theme.colors.green};
        }

    }

    .gohome{
        text-align:center;
        font-size:14px;

        width:auto;
        line-height:30px;
        margin:0 auto;
        cursor:pointer;
        color:${theme.colors.blue};
        ${transition("color", ".3s")};
        
        &:hover{
            color:${theme.colors.blue};
        }
      }

    @media (max-width: ${theme.medias.phablet}) {
      background:none;
      padding-top:0;
      margin-top:0;
  }
`

const Banner = styled.div`
    width:95%;
    margin:20px auto;
    min-height:100px;

    img{
    	width:100%;
    	height:auto;
    }
`
const Note = styled.div`
    width:95%;
    margin:20px auto;
    min-height:100px;
    border:1px solid #eee;
	font-size:15px;
	color:#000;
    line-height:1.5;
    padding:25px;
	${box};

`

class RegisterSuccess extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log('componentdidmount');
        this.props.getSuccessData();
    }

    render() {
        // console.log('render');
        //const bannerUrl = this.props.data.get('bannerUrl');
        //const text = this.props.data.get('text');

        return (
            <div>
                <Helmet>
                    <title>註冊完成</title>
                </Helmet>
                <PageTitle title="註冊完成" />
                <Container>

                    <div className="check" />
                    <div className="congrat">太棒了<br />歡迎您加入zero zero!</div>
                    <br />
                    <p>恭喜您完成註冊，已發送<span>50Z幣</span>給您。</p>
                    <p>可前往「會員中心」查看Z幣紀錄。</p>
                    <br /><br /><br />
                    <BlueButton onClick={() => this.props.history.push(UserRoute())}>去會員中心</BlueButton>
                    <div className="gohome" onClick={() => this.props.history.push(DashboardRoute())}>回首頁</div>
                </Container>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.user.register.get('SUCCESS')
    }
}

export default connect(mapStateToProps, { ...actions })(RegisterSuccess);
