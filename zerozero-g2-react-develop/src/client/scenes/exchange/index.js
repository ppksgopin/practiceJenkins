import React, {Component} from 'react';
import {Route, Switch, withRouter, Link, Redirect} from 'react-router-dom';

import styled from 'styled-components';
import theme from '../../styles/theme';
import {box} from '../../styles/mixins';
import {awsUrl} from '../../utils/awsFile';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';

import {
    ExchangeRoute,
    ExchangeIndexRoute,
    ExchangeItemIntroRoute,
    ExchangeConfirmRoute,
    ExchangeFinishRoute,
    ExchangeSearchRoute,
    ExchangeRecordDetailRoute,
    ExchangeListRoute,
    ExchangeListFinishRoute,
    ExchangeQuickSearchRoute

} from '../../commons/routePaths';

import {Index, ItemIntro, Confirm, Finish, Search, Record, ExchangeList, ExchangeListFinish, QuickSearch} from './routes';

const ExchangeContainer = styled.div`
  padding: 130px 0 0;
  min-height: 95vh;
  ${box};
  @media (max-width: ${theme.medias.phablet}) {
      padding: 80px 0 0;
  }

  &.noht{
    padding:0 !important;
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

class Exchange extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            noht: true 
          }
        //this._scrollShadowControler = this._scrollShadowControler.bind(this);
    }

    componentDidMount() {
        this.setState({noht: window.noht});
        // if (document.getElementById('targetDiv')) {
        //     window.addEventListener("scroll", this._scrollShadowControler);
        // }
    }

    // _scrollShadowControler(event) {
    //     //let tar = this.refs.targetDiv;
    //     let w = window,
    //         d = document,
    //         e = d.documentElement,
    //         g = d.getElementsByTagName('body')[0],
    //         y = w.innerHeight || e.clientHeight || g.clientHeight;
    //     let tar = document.getElementById('targetDiv');
    //     if (!tar) {
    //         return;
    //     }
    //     //const currentHeight = tar.clientTop + tar.clientHeight;
    //     (tar.offsetHeight < w.pageYOffset + y)
    //         ? this.setState({buttonsFixed: false}) : this.setState({buttonsFixed: true});
    //
    //     //console.log(this.state.buttonsFixed);
    //
    // }

    render() {
        return (
            <ExchangeContainer className={this.state.noht ? "noht" : ""} id="targetDiv">
                <Header/>
                <Switch>
                    <Route path={ExchangeIndexRoute()} component={Index}/>
                    <Route exact path={ExchangeItemIntroRoute(':itemId')} component={ItemIntro}/>
                    <Route path={ExchangeConfirmRoute()} component={Confirm}/>
                    <Route path={ExchangeFinishRoute()} component={Finish}/>
                    <Route path={ExchangeSearchRoute()} component={Search}/>
                    <Route path={ExchangeRecordDetailRoute(':recordId')} component={Record}/>
                    <Route path={ExchangeListRoute()} component={ExchangeList} />
                    <Route path={ExchangeListFinishRoute()} component={ExchangeListFinish} />
                    <Route path={ExchangeQuickSearchRoute(':collectionId')} component={QuickSearch} />
                    <Redirect from={ExchangeRoute()} to={ExchangeIndexRoute()}/>
                </Switch>
                <Footer/>
            </ExchangeContainer>
        )
    }
}

export default Exchange;