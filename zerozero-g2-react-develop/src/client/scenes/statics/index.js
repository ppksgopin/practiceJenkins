import React, {Component} from 'react' ;
import {Helmet} from 'react-helmet';
import {Route, Switch} from 'react-router-dom' ;
import styled from 'styled-components';

import {StaticRoute, ApartmentcomplexRoute, RecycleShopRoute, CarmaintenanceRoute, RecyclingbusinessRoute, AboutRoute, CooperationRoute, PolicyRoute, PrivacyRoute, RecycledplasticRoute, GreenproductRoute, BeginnerRoute, SatisfactionRoute, FaqRoute,WaytozcoinRoute,FreezcoinRoute, WebViewJavascriptBridgeTestRoute} from '../../commons/routePaths' ;
import {Apartmentcomplex, Recycleshop, Carmaintenance, Recyclingbusiness, About, Cooperation, Policy, Privacy, Recycledplastic, Greenproduct, Beginner, Satisfaction, Faq,Waytozcoin,Freezcoin, WebViewJavascriptBridgeTest} from './routes';

const StaticsContainer = styled.div`
    background:#fff;
`
class Statics extends Component {
    render() {
        return (
            <StaticsContainer>
                <Helmet>
                    <title>Statics</title>
                </Helmet>
                <Switch>
                    <Route exact path={StaticRoute()} component={About}/>
                    <Route exact path={ApartmentcomplexRoute()} component={Apartmentcomplex}/>
                    <Route exact path={RecycleShopRoute()} component={Recycleshop}/>
                    <Route exact path={CarmaintenanceRoute()} component={Carmaintenance}/>
                    <Route exact path={RecyclingbusinessRoute()} component={Recyclingbusiness}/>
                    <Route exact path={AboutRoute()} component={About}/>
                    <Route exact path={CooperationRoute()} component={Cooperation}/>
                    <Route exact path={PolicyRoute()} component={Policy}/>
                    <Route exact path={PrivacyRoute()} component={Privacy}/>
                    <Route exact path={RecycledplasticRoute()} component={Recycledplastic}/>
                    <Route exact path={GreenproductRoute()} component={Greenproduct}/>
                    <Route exact path={BeginnerRoute()} component={Beginner}/>
                    <Route exact path={SatisfactionRoute()} component={Satisfaction}/>
                    <Route exact path={FaqRoute()} component={Faq}/>
                    <Route exact path={WaytozcoinRoute()} component={Waytozcoin}/>
                    <Route exact path={FreezcoinRoute()} component={Freezcoin}/>
                    <Route path={WebViewJavascriptBridgeTestRoute()} component={WebViewJavascriptBridgeTest}/>
                </Switch>
            </StaticsContainer>
        )
    }
}

export default Statics;
