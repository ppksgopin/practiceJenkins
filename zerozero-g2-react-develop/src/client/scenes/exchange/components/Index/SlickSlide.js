/**
 * Created by ryan on 2018/10/1.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";
import * as actions from './action';
import styled, {css} from 'styled-components';
import SearchBox from '../common/SearchBox';
import theme from '../../../../styles/theme';
import {boxShadow, transition, borderRadius, box, clearfix,opacity} from '../../../../styles/mixins';
import Slider from 'react-slick';


const PromoteSlider = styled.div `
    width:100%;
    height: 400px;
    max-width: ${theme.medias.maxW};
    margin:0 auto 20px;
    position:relative;
    overflow:hidden;

    .slider{
        width:100%;
        background:#ddd;

        img{
            width:100%;
            height:auto;
        }

        .slick-arrow{
            width:30px;
            height:30px;
            &::before{
                font-size:30px;
            }
            &.slick-prev{
                left:5px;
                z-index:10;
            }
            &.slick-next{
                right:5px;
                z-index:10;
            }
        }
    }

    .sliderbtn{
        width:100%;
        position:absolute;
        left:0;
        bottom:10px;
        z-index:5;
        text-align:center;
        li{
            display:inline-block;
            margin:4px;
            width:10px;
            height:10px;
            ${borderRadius("100%")};
            background:#fff;
            ${transition('background','.1s')};
            cursor:pointer;
            border:2px solid #fff;
            
            button{
                ${opacity(0)};
                cursor:pointer;
            }
            &.slick-active{
                background:${theme.colors.green};
            }
        }
    }
   
    @media (max-width: ${theme.medias.phablet}) {
        height:auto;
    }
`

const PromoteBtns = styled.div `
    width:100%;
    position:absolute;
    left:0;
    bottom:15px;
    z-index:5;
    > ul{
        width:100%;
        text-align:center;

        li{
            display:inline-block;
            margin:5px;
            width:10px;
            height:10px;
            ${borderRadius("100%")};
            background:#fff;
            ${transition('background','.1s')};
            cursor:pointer;

            &.active{
                background:${theme.colors.green};
            }
        }
        
      }
`


class SlickSlide extends Component {

    render() {
        const events = this.props.events.toJS();
        const settings = {
            className: 'slider',
            dots: true,
            dotsClass: 'sliderbtn',
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            lazyLoad: false,
        };
        return(
            <PromoteSlider>
                <Slider {...settings} >
                    {
                        events.map((e) => {
                            return (
                                <div key={e.id}>
                                    <a href={e.link}><img src={e.url}/></a>
                                </div>
                            )
                        })
                    }
                </Slider>
            </PromoteSlider>
        )
    }

}


function mapStateToProps(state) {
    return {
        items: state.exchange.index.get("ITEMS"),
        isHot: state.exchange.index.get("CRITERIA").get('isHot') || false,
        isNew: state.exchange.index.get("CRITERIA").get('isNew') || false,
        sord: state.exchange.index.get('CRITERIA').get('sord') || 'desc',
        events: state.exchange.index.get('EVENTS')
    }
}

export default connect(mapStateToProps, {...actions})(SlickSlide);