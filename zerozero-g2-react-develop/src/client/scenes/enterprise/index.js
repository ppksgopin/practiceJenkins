import React, {Component} from 'react';
import {Route, Switch, withRouter, Link, Redirect} from 'react-router-dom';

import styled from 'styled-components';
import theme from '../../styles/theme';
import {box} from '../../styles/mixins';
import {awsUrl} from '../../utils/awsFile';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';

import {
    EnterpriseRoute,
    EnterpriseDocDestroyRoute,
    EnterpriseDiskDestroyRoute,
    EnterpriseWoodClearanceRoute,
    EnterpriseFoodClearanceRoute,
    EnterpriseSludgeTreatmentRoute,
    EnterpriseDemoBS,
    EnterpriseDemoET,
    EnterpriseDemoFM,
    EnterpriseDemoFN,
    EnterpriseDemoGov,
    EnterpriseDemoMD,
    EnterpriseDemoTL
} from '../../commons/routePaths';

import {
    DocDestroy,
    DiskDestroy,
    WoodClearance,
    FoodClearance,
    EnterpriseLanding,
    SludgeTreatment,
    DemoBS,
    DemoET,
    DemoFM,
    DemoFN,
    DemoGov,
    DemoMD,
    DemoTL
} from './routes';

const EnterprisseContainer = styled.div`
  padding: 0px 0 0;
  min-height: 95vh;
  ${box};

  &.noht{
    padding:0;
  }

  @media (max-width: ${theme.medias.phablet}) {
      padding: 50px 0 0;

      
  }

  &.bnf{
    .bob{
      @media (max-width: ${theme.medias.phablet}) {
        position:absolute !important;
        bottom:auto;
      }
    }
  }

  .bg{
    padding-bottom:223px;
    background: url(${awsUrl("car_bg.png")}) repeat-x center bottom;
    background-size: 1440px auto;
    @media (max-width: ${theme.medias.phablet}) {
      background:none;
      padding-bottom:0;
    }
  }
`

class Enterprise extends Component {
    constructor(props) {
        super(props);
        this.state = {
          buttonsFixed: true,
          noht: true
        }
    }

    componentDidMount() {
        this.setState({noht: window.noht})
    }
    render() {
        return (
            <EnterprisseContainer className={this.state.noht ? "noht" : ""}>
                <Header atIndex={true}/>
                <Switch>
                    <Route path={EnterpriseDocDestroyRoute()} component={DocDestroy}/>
                    <Route path={EnterpriseDiskDestroyRoute()} component={DiskDestroy}/>
                    <Route path={EnterpriseWoodClearanceRoute()} component={WoodClearance}/>
                    <Route path={EnterpriseFoodClearanceRoute()} component={FoodClearance}/>
                    <Route path={EnterpriseSludgeTreatmentRoute()} component={SludgeTreatment}/>
                    <Route path={EnterpriseDemoTL()} component = {DemoTL}/>
                    <Route path={EnterpriseDemoMD()} component = {DemoMD}/>
                    <Route path={EnterpriseDemoGov()} component={DemoGov}/>
                    <Route path={EnterpriseDemoFN()} component={DemoFN}/>
                    <Route path={EnterpriseDemoFM()} component={DemoFM}/>
                    <Route path={EnterpriseDemoET()} component={DemoET}/>
                    <Route path={EnterpriseDemoBS()} component={DemoBS}/>
                    <Route path={EnterpriseRoute()} component={EnterpriseLanding}/>
                    {/*<Redirect from={EnterpriseRoute()} to={EnterpriseDocDestroyRoute()}/>*/}
                </Switch>
                <Footer/>
            </EnterprisseContainer>
        )
    }
}

export default Enterprise;