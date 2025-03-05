import React, {Component} from 'react' ;
import {Route, Switch} from 'react-router-dom' ;

import {Order, Finish} from './routes';

import {CarAppointmentRoute, CarAppointmentOrderRoute, CarAppointmentFinishRoute} from '../../../../commons/routePaths';

class Appointment extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={CarAppointmentRoute()} component={Order}/>
                    <Route path={CarAppointmentOrderRoute()} component={Order}/>
                    <Route exact path={CarAppointmentFinishRoute(':slug')} component={Finish}/>
                </Switch>
            </div>
        )
    }
}

export default Appointment;
