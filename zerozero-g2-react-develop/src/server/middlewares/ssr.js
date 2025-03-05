import path from 'path'
import fs from 'mz/fs'
import {ServerStyleSheet} from 'styled-components'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router'
import routes, {routesConfig} from '../../client/App/routes';
import {Helmet} from 'react-helmet'
import config from '../config'
import App from '../../client/App'
import Html from './Html'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {getLoadableState} from 'loadable-components/server';

// store
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from '../../client/reducers';
import ReduxPromise from 'redux-promise';

import axiosMiddleware, {getApiPath} from './axiosMiddleware';

import { matchRoutes } from 'react-router-config' ;

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(createStore);
const PUBLIC = path.join(__dirname, '../../../public');
const env = config.get('env');
//const production = config.get('env') === 'production';
//console.log('env: ', env);
let assets;
const getAssets = async () => {
    if (assets) return assets
    if (env === 'production' || env === 'staging') {
        const json = await fs.readFile(
            path.join(PUBLIC, 'webpack-assets.json'),
            'utf-8',
        );

        assets = JSON.parse(json)
    } else {
        assets = {main: {js: '/main.js'}}
    }

    return assets
};

const store = compose(applyMiddleware(thunk)(createStore)(reducers));

const apiPath = getApiPath();
axiosMiddleware.setupInterceptors(apiPath);

export default () => async ctx => {
    //console.log('SSR CTX: ', ctx.request);
    const context = {};
    const sheet = new ServerStyleSheet();

    // 以下程式碼為Fetch Data From Route。
    let promises = [];

    const recursiveSearch = (routes) => {
        //console.log('routes: ', routes);
        matchRoutes(routes, ctx.request.url).map((route) => {
            if(route.match.isExact && route.route.loadData) {
                // console.log('recursiveSearch route: ', route);
                promises.push(store.dispatch(route.route.loadData(route, route.match)));
            }
            if(route.route.routes && route.route.routes.length > 0) {
                recursiveSearch(route.route.routes);
            }
        })
    };

    recursiveSearch(routesConfig);

    await Promise.all(promises).then(() =>
        console.log('')
    );

    const app = sheet.collectStyles(
        <Provider store={store}>
            <StaticRouter location={ctx.request.url} context={context}>
                <App/>
            </StaticRouter>
        </Provider>,
    );

    const loadableState = await getLoadableState(app);

    const html = renderToString(app);
    const state = store.getState();
    const helmet = Helmet.renderStatic();

    // inApp token
    let zToken = ctx.request.headers.ztoken;

    // check if need header/footer
    let HT = ctx.request.headers.noht;
    if (HT !== undefined && HT) {
        HT = true;
    } else {
        HT = false;
    }

    if (context.status) {
        ctx.status = context.status
    }

    if (context.url) {
        ctx.status = 301;
        ctx.redirect(context.url)
    } else {
        const assets = await getAssets();

        ctx.body = `<!DOCTYPE html>${renderToString(
            <Html
                assets={assets}
                content={html}
                helmet={helmet}
                loadableState={loadableState}
                sheet={sheet}
                state={state}
                noht={HT}
                token={zToken}
            />,
        )}`
    }
}
