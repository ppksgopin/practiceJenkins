import React, {Component} from 'react';
import {Helmet} from 'react-helmet';

import styled from 'styled-components';
import theme from '../../../../../../styles/theme';
import {
    bound,
    appointmentForm,
    appointmentInfo,
    sectionTitle,
    pageMenu,
    buttons
} from '../../../../../../styles/commons';
import PageTitle from '../../../../../common/components/PageTitle';
import BlueButton from '../../../../../common/components/BlueButton';
import Header from '../../../../../common/components/Header';

const Buttons = styled.div `
  ${buttons}
`
const SectionTitle = styled.div `
  ${sectionTitle};
`
const AppointmentForm = styled.form `
  ${appointmentForm};
`
const AppointmentInfo = styled.form `
  ${appointmentInfo};
`


const setupWebViewJavascriptBridge = (callback) => {

    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () {
        document.documentElement.removeChild(WVJBIframe)
    }, 0)
}

class WebviewBridge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ''
        };

        this.clickBridge = this.clickBridge.bind(this);
    }

    /**
     * 測試
     * 1. action login :
     * 2. targetPath :
     * 3. token :
     * @returns {XML}
     * @private
     */
    clickBridge(e) {
        e.preventDefault();
        alert("click");
        const targetPath = localStorage.getItem('targetPath');
        const userToken = localStorage.getItem('token');

        const data = {targetPath, userToken: userToken == null ? "" : userToken};

        // console.log('data :', data);

        if (isAndroid() || isIOS()) {
            let cmd;
            setupWebViewJavascriptBridge((bridge) => {
                cmd = {
                    "action": "login",
                    "targetPath": data.targetPath,
                    "token": data.userToken
                };
                bridge.callHandler(
                    'phoneCallback',
                    cmd,
                    (response) => {
                        // console.log('response : ', response);
                        alert('response : ' + response);
                    },
                );
                //register callback
                /**
                 * data : app call web action , 傳進來的data
                 * responseCallback , web接收完app回傳的data後，若還需執行action 且需再次回傳app執行結果，請定義responseCallback
                 */
                bridge.registerHandler('webCallback', (data, responseCallback) => {
                    // console.log('receiver data : ' + data);
                    alert('receiver data : ' + data);
                    this.setState({
                        "token": data
                    });
                    //const jsonObj = JSON.parse(data);
                    //alert('receiver data :' + jsonObj.selected+jsonObj.devIdno+jsonObj.driverId ) ;

                    /**
                     *
                     * 需回傳Web執行後結果在此定義responseCallback
                     * 若不需即responseCallback 無需定義
                     */
                    // onSomethingAction(jsonObj).then((val)=>{
                    //     //alert('report response :'+ val.code +' : ' + val.error );
                    //     responseCallback(val);
                    // });
                });
            });
        } else {
            e.preventDefault();
            alert("請在zero zero APP 下測試");
            return false;
        }
    }

    _renderPanel() {

        return (
            <div>
                <br/><br/>
                <div style={{textAlign: 'center'}}>
                    <button
                        style={{width: '200px', height: '50px', background: '#22d3c5', color: '#fff', fontSize: '20px'}}
                        onClick={this.clickBridge}>測試Bridge
                    </button>
                    {/*<Buttons>
                    <BlueButton onClick={ (e) => _onClick(e, data)}>測試Bridge</BlueButton>
                </Buttons>*/}
                </div>
                <br/><br/>
                <br/><br/>
                Token : <br/><br/>
                {this.state.token}
            </div>
        )
    }

    render() {
        return (

            <div className="bg">
                <Header/>

                <Helmet>
                    <title>測試</title>
                </Helmet>

                <PageTitle title="測試"/>

                <SectionTitle className="green">測試</SectionTitle>

                <AppointmentInfo>
                    {this._renderPanel()}
                </AppointmentInfo>

            </div>
        )
    }
}


export default WebviewBridge

function isAndroid() {
    const userAgent = window.navigator.userAgent;
    // console.log('userAgent : ', userAgent);
    const is_android = ((userAgent.indexOf('Mozilla') > -1 && userAgent.indexOf('Android') > -1 && userAgent.indexOf('AppleWebKit') > -1) && (userAgent.indexOf('Chrome') > -1));
    return is_android;
}

function isIOS() {
    const standalone = window.navigator.standalone,
        userAgent = window.navigator.userAgent.toLowerCase(),
        safari = /safari/.test(userAgent),
        ios = /iphone|ipod|ipad/.test(userAgent);

    if (ios) {
        if (!standalone && safari) {
            return false; //browser
        } else if (standalone && !safari) {
            return false; //standalone
        } else if (!standalone && !safari) {
            return true;//uiwebview
        }
        ;
    } else {
        return false;
    }
    ;
}
