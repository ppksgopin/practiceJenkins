import React, { Component } from 'react' ;
import { Route , Switch, withRouter , Link , Redirect} from 'react-router-dom' ;

import {awsUrl} from '../../../../utils/awsFile';

import styled from 'styled-components';
import theme from '../../../../styles/theme';
import { box } from '../../../../styles/mixins';

import { Appointment,Quotation,Reservation } from './routes';

import {CarOrderRoute, CarOrderAppointmentRoute, CarOrderReservationRoute, CarOrderQuotationRoute} from '../../../../commons/routePaths';

class Order extends Component {
    render() {
        return (
           <div>
               <Switch>
                   <Route exact path={CarOrderRoute()} component={Appointment} />
                   <Route path={CarOrderAppointmentRoute()} component={Appointment} />
                   <Route path={CarOrderQuotationRoute()} component={Quotation} />
                   <Route path={CarOrderReservationRoute()} component={Reservation} />
               </Switch>
           </div>
        )
    }
}

export default Order ;
