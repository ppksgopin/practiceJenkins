import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from "react-redux";
import {compose, lifecycle} from 'recompact';

import PageTitle from '../../../common/components/PageTitle';
import RedButton from '../../../common/components/RedButton';
import ItemList from '../common/ItemList';
import SearchBox from '../common/SearchBox';
import theme from '../../../../styles/theme';
import {bound,select, input,buttons} from '../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix,opacity} from '../../../../styles/mixins';
import * as actions from './action';

const Buttons = styled.div `
  ${buttons}
`

const CatalogHeader = styled.div `
  width:100%;
  max-width: ${theme.medias.maxW};
  margin:0 auto;
  position:relative;
  border-bottom:1px solid #ddd;
  z-index:50;

  .result{
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
    
    text-indent:10px;
    line-height:50px;
    font-size:16px;
    color:#333;

    span{
        color:${theme.colors.gray};
        &::before{
          content:"\f002";
          font-family: FontAwesome;
          margin-right:2px;
        }
        &::after{
          content:"\f054";
          font-family: FontAwesome;
          margin-left:5px;
          margin-right:5px;

        }
    }
  }


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
        color:#333;
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
        color:${theme.colors.green};
    }
    @media (max-width: ${theme.medias.phablet}) {
        
        width:120px;
        &::before{
            display:none;
        }
        >ul{
            background: ${theme.colors.green};
            li.active{
                color:#fff !important;

            }
        }
        &:hover{
            li.active{
                color:${theme.colors.green} !important;
            }
        }
    }

    > ul{
        top:9px;
        right: 7px;
        position:absolute;
        width:100px;
        padding-top:30px;
        ${borderRadius("15px")};
        border:1px solid ${theme.colors.green};
        ${transition("all",".3s")};

        li{
            line-height:30px;
            text-indent:10px;
            color:#a7a7a7;
            font-size:14px;
            display:none;
            cursor:pointer;
            white-space:nowrap;
            overflow:hidden;
            ${transition("color",".3s")};

            &:hover{
                color:${theme.colors.green};
            }

            &.active{
                position:absolute;
                top:0;
                left:0;
                z-index:1;
                display:block;
                color:${theme.colors.green};
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

class Search extends Component {

    componentDidMount() {
        this.props.searchItems();
    }

    render() {

        const items = this.props.items.toJS() || {};
        const { keyword, sord } = this.props;
        return (
            <div>
                <Helmet>
                    <title>兌換中心-搜尋結果</title>
                </Helmet>

                <PageTitle title="兌換中心"/>

                <SearchBox/>
                <CatalogHeader>
                    <div className="result">
                        <span>搜尋結果</span>
                        {/*{keyword}*/}
                    </div>
                    <Filter>
                        <ul>
                            <li className={sord === 'asc' ? 'active' : ''} onClick={() => this.props.switchSearchOrder('asc')}>點數低>高</li>
                            <li className={sord === 'desc' ? 'active' : ''}  onClick={() => this.props.switchSearchOrder('desc')}>點數高>低</li>
                        </ul>
                    </Filter>
                </CatalogHeader>
                <ItemList
                    items={items ? items : {}}
                    moreAction={() => this.props.moreItems()}
                />
               
                <RedButton onClick={() => this.props.history.goBack()}>返回</RedButton>
                <br /><br />
               
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.exchange.search.get("ITEMS"),
        keyword: state.exchange.search.get('CRITERIA').get('keyword'),
        sidx: state.exchange.search.get('CRITERIA').get('sidx'),
        sord: state.exchange.search.get('CRITERIA').get('sord'),
    }
}

export default connect(mapStateToProps, actions)(Search);