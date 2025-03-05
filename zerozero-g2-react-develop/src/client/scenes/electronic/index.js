/**
 * Created by ryan on 2017/11/1.
 */
import React, { Component } from 'react' ;
import { Route , Switch, withRouter , Link , Redirect} from 'react-router-dom' ;

import {awsUrl} from '../../utils/awsFile';

import Header from '../common/components/Header';
import Footer from '../common/components/Footer';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { box } from '../../styles/mixins';

import { Appointment,AppointmentConfirm,AppointmentFinish,AppointmentReview } from './routes' ;

import {ElectronicRoute, ElectronicAppointmentRoute,ElectronicAppointmentConfirmRoute,ElectronicAppointmentFinishRoute,ElectronicAppointmentReviewRoute} from '../../commons/routePaths' ;

const ElectronicContainer = styled.div`
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
  
  .bg2{
    padding-bottom:200px;
    background: url(${awsUrl("bench_bg.png")}) no-repeat center bottom;
    background-size: 1262px auto;
    @media (max-width: ${theme.medias.phablet}) {
      background:none;
      padding-bottom:0;
    }
`

class Electronic extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        buttonsFixed: true,
        noht: true 
      }
     // this._scrollShadowControler = this._scrollShadowControler.bind(this);
    }

    componentDidMount() {
      this.setState({noht: window.noht});
     /* if (document.getElementById('targetDiv')) {
        window.addEventListener("scroll", this._scrollShadowControler);
      }*/
    }

   /* _scrollShadowControler(event){
      //let tar = this.refs.targetDiv;
      let w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;
      let tar = document.getElementById('targetDiv');
      if (!tar) {
        return;
      }
      //const currentHeight = tar.clientTop + tar.clientHeight;
      (tar.offsetHeight < w.pageYOffset + y)
      ? this.setState({buttonsFixed: false}) : this.setState({buttonsFixed: true});

      console.log(this.state.buttonsFixed);

    }*/

    render() {
        return (
           <ElectronicContainer className={this.state.noht ? "noht" : ""} id="targetDiv">
               <Header/>
               <Switch>
                   <Route path={ElectronicAppointmentRoute()} component={Appointment} />
                   <Route path={ElectronicAppointmentConfirmRoute()} component={AppointmentConfirm} />
                   <Route path={ElectronicAppointmentFinishRoute()} component={AppointmentFinish} />
                   <Route path={ElectronicAppointmentReviewRoute(':appointmentId')} component={AppointmentReview} />

                   <Redirect from={ElectronicRoute()} to={"/electronic/appointment/step_1"} />
               </Switch>
               <Footer/>
           </ElectronicContainer>
        )
    }
}

export default Electronic ;
