import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from './action';
import styled from 'styled-components';
import theme from '../../../../styles/theme';
import {box} from '../../../../styles/mixins';
import Header from '../../../common/components/Header';
import Footer from '../../../common/components/Footer';
import {Helmet} from 'react-helmet';
import { htmlEncode, htmlDecode } from 'js-htmlencode';
import swal from 'sweetalert';

const DynaContainer = styled.div`
  padding: 80px 0 0;
  ${box};


  @media (max-width: ${theme.medias.phablet}) {
      padding: 50px 0 0;

      
  }
`;
class DynamicEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appendUrlParams: false //是否已將導入此頁的get parameter加到本頁所有的連結以助行銷追蹤
        }
    }

    componentWillMount() {
        const eventId = this.props.match.params['eventId'];
        this.props.getEventContent(eventId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const search = this.props.location.search && this.props.location.search.substring(1);
        // console.log('search:', search);
        document.querySelectorAll('#dynamicContentDiv a[href]').forEach(node => {
            // node.href = node.href + search;
            if(node.href.indexOf('?') > -1) {
                node.href = node.href + '&' + search;
            } else {
                node.href = node.href + '?' + search;
            }

            // console.log('anchor node:', node.href);
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.invalidEvent) {
            const invalidEvent = nextProps.invalidEvent.toJS();
            if(invalidEvent && invalidEvent.message && invalidEvent.redirectTo) {
                swal({
                    text: invalidEvent.message,
                    icon: 'warning'
                })
                    .then(() => {
                        // console.log('message:', invalidEvent.message);
                        this.props.history.push(invalidEvent.redirectTo);
                    });


            }
        }
    }

    render() {

        let dynamicEventContent = '';
        let isZopim = false;
        let style = '';
        let metaTags = [];
        if(this.props.dynamicEvent) {
            dynamicEventContent = this.props.dynamicEvent.get('content');
            isZopim = this.props.dynamicEvent.get('zopim');
            style = this.props.dynamicEvent.get('style') ? htmlDecode(this.props.dynamicEvent.get('style')) : '';
            metaTags = this.props.dynamicEvent.get('metaTags') ? this.props.dynamicEvent.get('metaTags').toJS() : [];
        } else {
            dynamicEventContent = '<div></div>';
        }

        const html = {__html: dynamicEventContent};
        const helmet = generateHelmet(metaTags, isZopim, style)
        return (
            <DynaContainer>
                {helmet}
                {style ? <style>{style}</style> : ''}
                <Header/>
                <div id="dynamicContentDiv" dangerouslySetInnerHTML={html}/>
                <Footer/>
            </DynaContainer>

        )
    }
}

function mapStateToProps(state) {
    return {
        dynamicEvent: state.event.get("DYNAMIC_EVENT"),
        invalidEvent: state.event.get("INVALID_EVENT")
    }
}
function generateHelmet(metaTags, isZopim, style) {
    return (
        <Helmet>
            {metaTags.map((m, index) => {
                if (m.key === 'title') {
                    return <title key={'title'}>{m.value}</title>;
                } else if (m.key === 'description' || m.key === 'keywords') {
                    return <meta key={index} name={m.key} content={m.value} />;
                } else {
                    return <meta key={index} property={m.key} content={m.value} />;
                }
            })}
            {isZopim ? (
                <script type="text/javascript">
                    {`
            window.$zopim|| (function(d,s){ var z=$zopim=function(c){z._.push(c)},$=z.s=
            d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
            _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
            $.src="https://v2.zopim.com/?21JYcXgusmyGlaoUuKBm7BIYeQrEc6lg";z.t=+new Date;$.
            type="text/javascript";e.parentNode.insertBefore($,e)}
            )(document,"script");
            `}
                </script>
            ) : null}
            {style ? <style>{style}</style> : ''}
        </Helmet>
    );
}



export default connect(mapStateToProps, {...actions})(DynamicEvent);
