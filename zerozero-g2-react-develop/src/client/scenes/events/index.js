import React, {Component} from 'react' ;
import {Helmet} from 'react-helmet';
import {Route, Switch} from 'react-router-dom' ;
import styled from 'styled-components';

import {EventsRoute,Event1Route,Event2Route,Event3Route, DynamicEventRoute} from '../../commons/routePaths' ;
import {Event1,Event2,Event3, Dynamic} from './routes';
import { withRouter } from "react-router-dom";

const EventsContainer = styled.div`
    background:#fff;
`;

class Events extends Component {

    render() {
        return (
            <EventsContainer>
                <Helmet>
                    <title>Events</title>
                </Helmet>
                <Switch>
                    <Route exact path={EventsRoute()} component={Event1}/>
                    <Route exact path={Event1Route()} component={Event1}/>
                    <Route exact path={Event2Route()} component={Event2}/>
                    <Route exact path={Event3Route()} component={Event3}/>
                    <Route exact path={DynamicEventRoute(':eventId')} component={Dynamic}/>
                </Switch>
            </EventsContainer>
        )
    }
}

export default withRouter(Events);
