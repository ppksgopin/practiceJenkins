import React, {Component} from 'react';
import Loadable from 'loadable-components';
import {Helmet} from 'react-helmet';
import styled, {css} from 'styled-components';
import {connect} from "react-redux";
import {compose, lifecycle} from 'recompact';
import { Link } from 'react-router';

import PageTitle from '../../../common/components/PageTitle';
import ItemList from '../common/ItemList';
import theme from '../../../../styles/theme';
import {bound} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix,opacity} from '../../../../styles/mixins';

import * as actions from './action';
import {ExchangeRoute} from "../../../../commons/routePaths";


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
  margin:0 auto 20px;
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

const BackButton = styled.div `
  height:0px;
  ${bound};
  position:relative;
  z-index:2;

  a{
    color:${theme.colors.gray};
    display:inline-block;
    width: auto;
    margin: 0;
    height: 60px;
    font: inherit;
    font-size: 16px;
    line-height: 60px;
    text-align: left;
    cursor: pointer;
    outline:none;
    background: none;
    border: none;
    padding: 0;
    text-decoration: none;

        &::before{
          content:"\f060";
          font-family:"fontawesome";
          margin-right:5px;
        }

  }
  
  @media (max-width: ${theme.medias.phablet}) {
    display:none;
  }
`


class QuickSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    componentDidMount() {
        //const params = queryString.parse(this.props.match);
        // console.log('Quick Search Props: ', this.props);
        const { collectionId } = this.props.match.params;
        // console.log('collectionId: ',  collectionId);
        if(collectionId){
            this.props.initCollectionItems(collectionId);
        }else {
            this.props.history(ExchangeRoute());
        }
    }

    render() {

        const { items, sord , collectionEntity} = this.props;
        // console.log('collectionEntity: ', collectionEntity.toJS());
        const { id, name } = collectionEntity.toJS();

        return (
            <div>
                <Helmet>
                    <title>活動快搜</title>
                </Helmet>

                <BackButton><a href={ExchangeRoute()}>返回兌換中心</a></BackButton>
                <PageTitle title='活動快搜'></PageTitle>

                <CatalogHeader style={{"background":"#fff"}}>
                    <ul>
                        <li className='active'>{name}</li>
                    </ul>
                    <Filter>
                        <ul>
                            <li key="asc" className={sord === 'asc' ? 'active' : ''} onClick={() => this.props.switchSearchOrder('asc')}>點數低>高</li>
                            <li key="desc" className={sord === 'desc' ? 'active' : ''}  onClick={() => this.props.switchSearchOrder('desc')}>點數高>低</li>
                        </ul>
                    </Filter>
                </CatalogHeader>

                <ItemList
                    items={items ? items.toJS() : {}}
                    moreAction={() => this.props.moreItems()}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.exchange.quickSearch.get("ITEMS"),
        sord: state.exchange.quickSearch.get('CRITERIA').get('sord') || 'desc',
        collectionEntity: state.exchange.quickSearch.get('COLLECTION_ENTITY'),
    }
}

export default connect(mapStateToProps, {...actions})(QuickSearch);
