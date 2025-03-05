/**
 * 處理頁面的資料
 */
import React from 'react';
import {Route, Switch, withRouter, Link} from 'react-router-dom';
import shortid from 'shortid';
import {
    CarRoute, DashboardRoute, ElectronicRoute,NEproductsRoute,MotorcycleUnuseMoneyRoute,ScavengerRoute,
    EnterpriseRoute, EventsRoute,AssociationsRoute,
    ExchangeRoute, IndexRoute,
    LoginRoute,
    MapRoute,
    StaticRoute,
    UserRoute
} from "../commons/routePaths";
import {Car,Association, Dashboard, Electronic, Enterprise, Events, Exchange, Login, Map, Statics, User, PageNotFound,NEproducts,MotorcycleUnuseMoney,Scavenger} from "../routes";
import eventRoutes from '../scenes/events/routes';
import {LineProfile} from "../scenes/user/routes";

const Status = ({code, children}) => (
    <Route
        render={({staticContext}) => {
            if (staticContext) staticContext.status = code;
            return children
        }}
    />
);

export const routesConfig = [
    /*{
        path: IndexRoute(),
        exact: true,
        component: Dashboard
    },{
        path: DashboardRoute(),
        component: Dashboard
    },{
        path: UserRoute(),
        component: User,
    },{
        path: LoginRoute(),
        component: Login
    },{
        path: ElectronicRoute(),
        component: Electronic
    },{
        path: CarRoute(),
        component: Car
    },{
        path: ExchangeRoute(),
        component: Exchange
    },{
        path: StaticRoute(),
        component: Statics
    },*/{
        path: EventsRoute(),
        component: Events,
        routes: eventRoutes()
    }/*,{
        path: EnterpriseRoute(),
        component: Enterprise
    }, {
        path: MapRoute(),
        component: Map
    }*/
];

export default () => {
    return (
        <Switch>
            {
                routesConfig.map(route => <Route key={shortid.generate()} {...route}/>)
            }
            <Route exact path={IndexRoute()} component={Dashboard}/>
            <Route path={DashboardRoute()} component={Dashboard}/>
            <Route path={UserRoute()} component={User}/>
            <Route path={LoginRoute()} component={Login}/>
            <Route path={ElectronicRoute()} component={Electronic}/>
            <Route path={NEproductsRoute()} component={NEproducts}/>
            <Route path={ScavengerRoute()} component={Scavenger}/>
            <Route path={AssociationsRoute()} component={Association}/>
            <Route path={MotorcycleUnuseMoneyRoute()} component={MotorcycleUnuseMoney}/>
            <Route path={CarRoute()} component={Car}/>
            <Route path={ExchangeRoute()} component={Exchange}/>
            <Route path={StaticRoute()} component={Statics}/>
            {/*<Route path={EventsRoute()} component={Events}/>*/}
            <Route path={EnterpriseRoute()} component={Enterprise}/>
            <Route path={MapRoute()} component={Map}/>
            <Status code={404}>
                <PageNotFound/>
            </Status>
        </Switch>
    )
}
