import React, {Component} from 'react';
import Loadable from 'loadable-components';
import {Helmet} from 'react-helmet';
import styled, {css} from 'styled-components';
import {connect} from "react-redux";
import {compose, lifecycle} from 'recompact';
import { Link } from 'react-router-dom';

import PageTitle from '../../../common/components/PageTitle';
import ItemList from '../common/ItemList';
import AffordableItemList from '../common/AffordableItemList';
import SearchBox from '../common/SearchBox';
import theme from '../../../../styles/theme';
import {boxShadow, transition, borderRadius, box, clearfix,opacity} from '../../../../styles/mixins';
import Slider from 'react-slick';
import {setKeyword} from "../Search/action";

import * as actions from './action';
import { getUserZcoins } from '../../../dashboard/action';
import {ExchangeItemIntroRoute} from "../../../../commons/routePaths";
const SlickSilde = Loadable(() => import('./SlickSlide'));
//import SlickSlide from "./SlickSlide";




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

const CatalogHeader = styled.div `
  width:100%;
  max-width: ${theme.medias.maxW};
  margin:0 auto 5px;
  position:relative;
  border-bottom:1px solid #ddd;
  z-index:50;
  ${borderRadius("5px")};


  > ul{
    width:calc(100% - 140px);
    display:inline-block;
    height:50px;
    white-space:nowrap;
    overflow:auto;
    padding:0 15px;
    ${box};
    ::-webkit-scrollbar { 
        display: none; 
    }
    li{
        display:inline-block;
        line-height:50px;
        font-size:16px;
        color:${theme.colors.gray};
        padding:0 15px;
        position:relative;
        cursor:pointer;
        margin:0 1px;
        ${transition('all','.3s')};

        &::after{
            content:"";
            position:absolute;
            z-index:1;
            height:3px;
            width:0;
            left:0;
            bottom:0;
            background:${theme.colors.blue};
            ${transition('width','.3s')};
        }

        &.active,&:hover{
            color:${theme.colors.blue};

            &::after{
                width:100%;
            }
        }
    }
    @media (max-width: ${theme.medias.phablet}) {
        width:calc(100% - 130px);
        padding:0 5px;

    }

    @media (max-width: 325px) {

        li{
            padding:0 5px;
        }
    }
  }
  
`
const Filter = styled.div `
    width:135px;
    height:50px;
    position:relative;
    float:right;
    ${box};

    &::before{
        content:"\f160";
        font-family: FontAwesome;
        width:35px;
        height:50px;
        line-height:50px;
        font-size:16px;
        position:absolute;
        top:0;
        left:0;
        color:#999;
    }
    @media (max-width: ${theme.medias.phablet}) {
        
        width:120px;
        &::before{
            display:none;
        }
        >ul{
            li.active{
                color:#999 !important;

            }
        }
        &:hover{
            li.active{
                color:#999 !important;
            }
        }
    }

    > ul{
        top:9px;
        right: 7px;
        position:absolute;
        width:100px;
        padding-top:30px;
        border:1px solid #ccc;
        ${borderRadius('5px')};

        li{
            line-height:30px;
            text-indent:10px;
            color:#aaa;
            font-size:14px;
            display:none;
            cursor:pointer;
            white-space:nowrap;
            overflow:hidden;
            ${transition("color",".3s")};

            &:hover{
                color:#999;
            }

            &.active{
                position:absolute;
                top:0;
                left:0;
                z-index:1;
                display:block;
                color:#999;
            }
        }

        &:hover,&:active{
            background:#fff;
            li{
                display:block;
            }
        }
    }
`


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bannerID: 0
        };
        this._swipeBanner = this._swipeBanner.bind(this);
    }


    componentDidMount() {

        this.props.getEvents();
        if(this.props.page === 1){
            this.props.initIndexItems();
        }

        if(typeof localStorage.getItem("token") === 'string') {
            //this.props.profile();
            this.props.getUserZcoins();
        }
        //返回清除Search bar 裡的值
        this.props.setKeyword('')
    }

    _swipeBanner(num) {
        this.setState({
            "bannerID":num,
        })

    }

    render() {

        const { items, featured, sord, logon, itemCollections, sidx } = this.props;
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
        return (
            <div>
                <Helmet>
                    <title>兌換中心首頁</title>
                </Helmet>

                <SlickSilde/>

                <SearchBox/>

                <CatalogHeader style={{"background":"#fff"}}>
                    <ul>
                        <li className={featured === true ? 'active': ''} onClick={() => this.props.toggleFeatured(true)}>精選商品</li>
                        <li className={featured === false ? 'active': ''} onClick={() => this.props.toggleFeatured(false)}>所有商品</li>
                    </ul>
                    <Filter>
                        <ul>
                            <li className={sidx === 'order' && sord === 'desc' ? 'active' : ''} onClick={() => this.props.switchSearchOrder('default')}>預設排序</li>
                            <li className={sidx === 'coins' && sord === 'asc' ? 'active' : ''} onClick={() => this.props.switchSearchOrder('asc')}>點數低>高</li>
                            <li className={sidx === 'coins' && sord === 'desc' ? 'active' : ''}  onClick={() => this.props.switchSearchOrder('desc')}>點數高>低</li>
                        </ul>
                    </Filter>
                </CatalogHeader>

                <ItemList
                    items={items ? items.toJS() : {}}
                    moreAction={() => this.props.moreItems()}
                />

                { logon ? <AffordableItemList/> : undefined }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.exchange.index.get("ITEMS"),
        /*isHot: state.exchange.index.get("CRITERIA").get('isHot') || false,
        isNew: state.exchange.index.get("CRITERIA").get('isNew') || false,*/
        sidx: state.exchange.index.get('CRITERIA').get('sidx') || 'order',
        sord: state.exchange.index.get('CRITERIA').get('sord') || 'desc',
        page: state.exchange.index.get('CRITERIA').get('page'),
        events: state.exchange.index.get('EVENTS'),
        logon: state.data.auth.get('IS_LOGINED'),
        featured: state.exchange.index.get("CRITERIA").get('featured'),
    }
}

export default connect(mapStateToProps, {getUserZcoins, ...actions, setKeyword})(Index);