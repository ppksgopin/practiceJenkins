import React from 'react';
import {Route, Switch, withRouter, Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import {completeUrl} from '../utils/urlUtil';
import routes from './routes';

const App = ({location}) => {
    return (
        <div>
            <Helmet
                titleTemplate="zero zero - %s"
                defaultTitle="zero zero Web Site"
            >
                <html lang="tw"/>
                <meta charSet="utf-8"/>
                {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>

                <meta name="theme-color" content="#ffffff"/>
                <meta
                    name="description"
                    content="zero zero"
                />
                <meta
                    name="keywords"
                    content="zero zero"
                />
                <meta
                    name="author"
                    content="zero zero"
                />

                <meta property="og:url" content={completeUrl(location.pathname)}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="zero zero"/>
                <meta property="og:description" content="zero zero"/>
                <meta property="og:site_name" content="zero zero"/>

                <meta name="twitter:site" content="@Zerozero"/>
                <meta name="twitter:creator" content="@Zerozero"/>
                <meta name="twitter:card" content="summary"/>
                <meta property="twitter:url" content={completeUrl(location.pathname)}/>

                {/*<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6shKHTQYZRxLPSXs2lLVKcyvN3OrGHjg&v=3.exp&libraries=geometry,drawing,places" type="text/javascript" />*/}
                {/*<script dangerouslySetInnerHTML={{*/}
                    {/*__html:`const geolocation =(*/}
                            {/*navigator.geolocation ?*/}
                                {/*navigator.geolocation :*/}
                                {/*({getCurrentLocation(success,failure){failure("Your browser doesn't support geolocation.")}})*/}
                        {/*);*/}
                        {/*const google = window.google ;`*/}
                {/*}}>*/}
                {/*</script>*/}
                <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" />
                <script async src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"/>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-88199904-1" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=AW-851066983" />
            </Helmet>

            {
                routes()
            }
        </div>
    );
}

export default withRouter(App);
