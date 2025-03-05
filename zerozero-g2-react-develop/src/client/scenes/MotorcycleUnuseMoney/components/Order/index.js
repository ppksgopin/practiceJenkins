import React, { Component } from 'react' ;
import { Route , Switch, withRouter , Link , Redirect} from 'react-router-dom' ;

import {awsUrl} from '../../../../utils/awsFile';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import { box } from '../../../../styles/mixins';

import { Appointment,Quotation,Reservation } from './routes';

import {MotorcycleUnuseMoneyOrderRoute, MotorcycleUnuseMoneyOrderAppointmentRoute, MotorcycleUnuseMoneyOrderReservationRoute, MotorcycleUnuseMoneyOrderQuotationRoute} from '../../../../commons/routePaths';

class Order extends Component {
    render() {
        return (
           <div>
               <Switch>
                   <Route exact path={MotorcycleUnuseMoneyOrderRoute()} component={Appointment} />
                   <Route path={MotorcycleUnuseMoneyOrderAppointmentRoute()} component={Appointment} />
                   <Route path={MotorcycleUnuseMoneyOrderQuotationRoute()} component={Quotation} />
                   <Route path={MotorcycleUnuseMoneyOrderReservationRoute()} component={Reservation} />
               </Switch>
           </div>
        )
    }
}

export default Order ;
