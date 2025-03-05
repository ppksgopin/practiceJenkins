import React, { Component } from 'react' ;
import { Route , Switch, withRouter , Link , Redirect} from 'react-router-dom' ;

import {awsUrl} from '../../../../utils/awsFile';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import { box } from '../../../../styles/mixins';

import { Appointment,Quotation,Reservation } from './routes';

import {NEproductsOrderRoute, NEproductsOrderAppointmentRoute, NEproductsOrderReservationRoute, NEproductsOrderQuotationRoute} from '../../../../commons/routePaths';

class Order extends Component {
    render() {
        return (
           <div>
               <Switch>
                   <Route exact path={NEproductsOrderRoute()} component={Appointment} />
                   <Route path={NEproductsOrderAppointmentRoute()} component={Appointment} />
                   <Route path={NEproductsOrderQuotationRoute()} component={Quotation} />
                   <Route path={NEproductsOrderReservationRoute()} component={Reservation} />
               </Switch>
           </div>
        )
    }
}

export default Order ;
