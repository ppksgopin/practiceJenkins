import React, { Component } from 'react' ;
import { Route , Switch, withRouter , Link , Redirect} from 'react-router-dom' ;
import styled from 'styled-components';

import { WebviewBridge } from './routes';

import { WebViewBridgeRoute } from '../../../../commons/routePaths';

class WebViewJavascriptBridgeTest extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path={WebViewBridgeRoute()} component={WebviewBridge}/>
                </Switch>
            </div>
        )
    }
}

export default WebViewJavascriptBridgeTest ;
