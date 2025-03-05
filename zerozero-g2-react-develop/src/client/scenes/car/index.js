/**
 * Created by ryan on 2017/11/1.
 */
import React, {Component} from 'react' ;
import {Route, Switch, withRouter, Link, Redirect} from 'react-router-dom' ;

import {awsUrl} from '../../utils/awsFile';

import styled from 'styled-components';
import theme from '../../styles/theme';
import {box} from '../../styles/mixins';
import Header from '../common/components/Header';
import Footer from '../common/components/Footer';

import {CarLanding, Appointment, Reservation, ReservationFinish, Order, Choice} from './routes' ;

import {
    CarRoute,
    CarAppointmentRoute,
    CarReservationRoute,
    CarReservationFinishRoute,
    CarOrderRoute,
    CarChoiceRoute
} from '../../commons/routePaths' ;

const CarContainer = styled.div`
  padding: 130px 0 0;
  min-height: 95vh;
  ${box};
  @media (max-width: ${theme.medias.phablet}) {
      padding: 80px 0 0;
  }

  &.noht{
    padding: 0 !important;
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

class Car extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            buttonsFixed: true,
            noht: true 
          }
        //this._scrollShadowControler = this._scrollShadowControler.bind(this);
    }

    componentDidMount() {
        this.setState({noht: window.noht});
        /*if (document.getElementById('targetDiv')) {
            window.addEventListener("scroll", this._scrollShadowControler);
        }*/
    }

    /*_scrollShadowControler(event) {
        //let tar = this.refs.targetDiv;
        let w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            y = w.innerHeight || e.clientHeight || g.clientHeight;
        let tar = document.getElementById('targetDiv');
        if (!tar) {
            return;
        }
        //const currentHeight = tar.clientTop + tar.clientHeight;
        (tar.offsetHeight < w.pageYOffset + y)
            ? this.setState({buttonsFixed: false}) : this.setState({buttonsFixed: true});
    }*/

    render() {
        return (
            <CarContainer className={this.state.noht ? "noht" : ""} id="targetDiv">
                <Header/>
                <Switch>
                    <Route exact path={CarRoute()} component={CarLanding}/>
                    <Route path={CarAppointmentRoute()} component={Appointment}/>
                    <Route exact path={CarReservationRoute(':slug')} component={Reservation}/>
                    <Route exact path={CarReservationFinishRoute()} component={ReservationFinish}/>
                    <Route path={CarChoiceRoute()} component={Choice}/>
                    <Route path={CarOrderRoute()} component={Order}/>
                </Switch>
                <Footer/>
            </CarContainer>
        )
    }
}

export default Car;
