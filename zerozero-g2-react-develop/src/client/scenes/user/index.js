import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {awsUrl} from '../../utils/awsFile';

import styled from 'styled-components';
import theme from '../../styles/theme';
import {box} from '../../styles/mixins';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';

import {
    Profile,
    ProfileEdit,
    ProfileDeleteWarn,
    ProfileDeleteVerify,
    ProfileDeleteForm,
    ProfileDeleteSuccess,
    ForgetPassword,
    ZCoin,
    Exchange,
    Register,
    SetupPassword,
    Login,
    Summary,
    CarOrder,
    ElecReservation,
    Finish,
    PhoneBinding,
    EnterpriseAppointment,
    RegisterSuccess,
    LineProfile,
    ResetPassword
} from './routes';

import {
    UserRoute,
    UserRegisterRoute,
    UserForgetRoute,
    UserEditRoute,
    UserDeleteWarnRoute,
    UserDeleteVerifyRoute,
    UserDeleteFormRoute,
    UserDeleteSuccessRoute,
    UserZCoinRoute,
    UserExchangeRoute,
    UserVoucherRoute,
    UserPasswordRoute,
    UserLoginRoute,
    UserSummaryAllRoute,
    UserSummaryRoute,
    UserCarOrderRoute,
    UserElecReservationRoute,
    UserFinishRoute,
    PhoneBindingRoute,
    RegSuccessRoute,
    EnterpriseAppointmentRoute, UserResetPassword
} from '../../commons/routePaths';


import {verifyCode} from "./components/Register/action";


const UserContainer = styled.div`
  padding: 130px 0 0;
  min-height: 95vh;
  
  ${box};
  @media (max-width: ${theme.medias.phablet}) {
      padding: 80px 0 0;
  }

  .bg{
    padding-bottom:200px;
    background: url(${awsUrl("login_bg.png")}) no-repeat center bottom;
    background-size: 945px auto;
    @media (max-width: ${theme.medias.phablet}) {
      background:none;
      padding-bottom:0;
    }
  }
`

class User extends Component {
    render() {
        return (

            <UserContainer>
                <Header/>
                <Switch>
                    <Route exact path={UserRoute()} component={Profile}/>
                    <Route path={RegSuccessRoute()} component={RegisterSuccess}/>

                    <Route path={PhoneBindingRoute()} component={PhoneBinding}/>

                    <Route path={UserEditRoute()} component={ProfileEdit}/>
                    <Route path={UserDeleteWarnRoute()} component={ProfileDeleteWarn} />
                    <Route path={UserDeleteVerifyRoute()} component={ProfileDeleteVerify} />
                    <Route path={UserDeleteFormRoute()} component={ProfileDeleteForm} />
                    <Route path={UserDeleteSuccessRoute()} component={ProfileDeleteSuccess} />
                    <Route path={UserVoucherRoute(':recordType', ':recordStatus')} component={ZCoin}/>
                    <Route path={UserZCoinRoute()} component={ZCoin}/>
                    <Route path={UserExchangeRoute()} component={Exchange}/>

                    <Route path={UserLoginRoute()} component={Login}/>
                    <Route path={EnterpriseAppointmentRoute(':appointmentId', ':appointmentType')} component={EnterpriseAppointment}/>
                    <Route exact path={UserSummaryRoute(':type')} component={Summary}/>
                    <Route exact path={UserCarOrderRoute(':orderId', ':type')} component={CarOrder}/>
                    <Route path={UserElecReservationRoute(':appointmentId')} component={ElecReservation}/>
                    <Route path={UserFinishRoute()} component={Finish}/>

                    <Route path={UserForgetRoute()} component={ForgetPassword}/>
                    <Route path={UserResetPassword()} component={ResetPassword}/>
                    <Route path={UserRegisterRoute()} component={Register}/>
                    <Route path={UserPasswordRoute()} component={SetupPassword}/>

                    <Redirect from={UserSummaryAllRoute()} to={UserSummaryRoute('ALL')}/>
                </Switch>
                <Footer/>
            </UserContainer>
        );
    }
}

export default User;
