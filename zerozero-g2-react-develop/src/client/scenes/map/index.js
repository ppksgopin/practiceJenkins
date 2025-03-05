/**
 * Created by ryan on 2018/3/19.
 */
import React, { Component } from 'react' ;
import styled from 'styled-components' ;
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet' ;

import { awsUrl } from '../../utils/awsFile';
import theme from '../../styles/theme';
import { box } from '../../styles/mixins';
import Header from '../common/components/Header' ;
import Footer from '../common/components/Footer' ;
import { RecycleMap } from './routes' ;
import { MapRoute } from '../../commons/routePaths' ;


const RecycleMapContainer = styled.div`
  height: 100vh;
`;

class Map extends Component {

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
    }

    render() {
        return(
            <RecycleMapContainer className={this.state.noht ? "noht" : ""} id="targetDiv">
                <Header/>
                    <Switch>
                        <Route path={MapRoute()} component={RecycleMap} exact={true}/>
                    </Switch>
            </RecycleMapContainer>
        )
    }
}


export default Map ;