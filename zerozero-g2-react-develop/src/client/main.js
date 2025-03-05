import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppContainer} from 'react-hot-loader';
import {loadComponents} from 'loadable-components';
import {IntlProvider} from 'react-intl';
import ReactGA from 'react-ga';
//import {hotjar} from 'react-hotjar';
import "babel-polyfill";
import "intl";

import ZeroZeroPath from './commons/components/zeroZeroPath';
import store from './store';
import 'react-datepicker/dist/react-datepicker.css';
import './scenes/map/components/Loading_Component/index.css';
import './styles/reset.css';
import './styles/style.scss';
import 'font-awesome/css/font-awesome.min.css';

// ga
ReactGA.initialize('UA-88199904-1');
ReactGA.pageview(`${window.location.pathname}${window.location.search}`);
ReactGA.ga('create', 'UA-88199904-1', 'auto', {autoLinker:true});
ReactGA.ga('require','linker');
ReactGA.ga('linker:autoLink', ['zerozero-tw.com','car717.com.tw']);
ReactGA.ga('send', 'pageview');

// hotjar, remark by ZZG2-1824
//hotjar.initialize(723838, 6);

function onUpdate(location) {
    window.scrollTo(0, 0);
    const page = `${location.pathname}${location.search}`;
    ReactGA.set({page});
    ReactGA.pageview(page);
}

const App = require('./App').default;
//axiosMiddleware.setupInterceptors(store);

const render = (Component, store) => {
    ReactDOM.render(
        <IntlProvider locale="tw">
            <Provider store={store}>
                <BrowserRouter>
                    <ZeroZeroPath onUpdate={onUpdate} store={store}>
                        <AppContainer>
                            <Component/>
                        </AppContainer>
                    </ZeroZeroPath>
                </BrowserRouter>
            </Provider>
        </IntlProvider>, document.getElementById('root'),)
};

//loadComponents().then(() => render(App, store));
render(App, store);

if (module.hot) {
    module.hot.accept('./App', () => {
        render(require('./App').default);
    });

    module.hot.accept('./App', () => {
        const nextRootReducer = require('./reducers');
        store.replaceReducer(nextRootReducer);
    });
}
