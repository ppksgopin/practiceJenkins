/* eslint-disable react/no-danger, jsx-a11y/html-has-lang */
import React from 'react'

const Html = ({assets, content, helmet, sheet, loadableState, state, noht, token }) => {
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
        <html {...htmlAttrs}>
        <head>

            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6shKHTQYZRxLPSXs2lLVKcyvN3OrGHjg&v=3.exp&libraries=geometry,drawing,places" type="text/javascript" />
            <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js" type="text/javascript" />
            <script dangerouslySetInnerHTML={{
                __html:`const geolocation =(
                        navigator.geolocation ?
                            navigator.geolocation :
                            ({getCurrentLocation(success,failure){failure("Your browser doesn't support geolocation.")}})
                    );
                    const google = window.google ;`
            }}>
            </script>

            {helmet.title.toComponent()}
            {helmet.meta.toComponent()}
            {helmet.link.toComponent()}
            {sheet.getStyleElement()}
            <link rel="stylesheet" href={assets.main.css}/>
            <script
                dangerouslySetInnerHTML={{
                    __html: `(function zopimHelper() {
                if (window.location.pathname.search('/car') === -1) { return false; }
                window.$zopim || (function (d, s) {
                var z = $zopim = function (c) { z._.push(c) }, $ = z.s =
                d.createElement(s), e = d.getElementsByTagName(s)[0]; z.set = function (o) {
                z.set.
                _.push(o)
            }; z._ = []; z.set._ = []; $.async = !0; $.setAttribute("charset", "utf-8");
                $.src = "https://v2.zopim.com/?21JYcXgusmyGlaoUuKBm7BIYeQrEc6lg"; z.t = +new Date; $.
                type = "text/javascript"; e.parentNode.insertBefore($, e)
            })(document, "script");
            })();`,
                }}
            />

        </head>
        <body {...bodyAttrs}>

        <div id="root" dangerouslySetInnerHTML={{__html: content}}/>
        {loadableState.getScriptElement()}
        <script
            dangerouslySetInnerHTML={{
                __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(
                    state,
                ).replace(/</g, '\\u003c')};`,
            }}
        />

        <script
            dangerouslySetInnerHTML={{
                __html: `window.noht=${noht};`,
            }}
        />
        <script
            dangerouslySetInnerHTML={{
                __html: `window.token="${token}";`,
            }}
        />

        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}

        <script
            dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer || [];
                         function gtag(){dataLayer.push(arguments);}`,
            }}
        />
        <script
            dangerouslySetInnerHTML={{
                __html: `gtag('js', new Date());
                         gtag('config', 'UA-88199904-1', {'linker': {'domains': ['car717.com.tw', 'zerozero-tw.com']}});`,
            }}
        />
        <script
            dangerouslySetInnerHTML={{
                __html: `gtag('js', new Date());
                         gtag('config', 'AW-851066983', {'linker': {'domains': ['car717.com.tw', 'zerozero-tw.com']}});`,
            }}
        />
        <script src={assets.main.js}/>
        </body>
        </html>
    )
}

export default Html
