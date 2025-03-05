import React, {Component} from 'react';
import Loadable from 'loadable-components';
import {connect} from "react-redux";
import styled, {css} from 'styled-components';
import {withRouter, Router} from 'react-router';

import theme from '../../../../../styles/theme';
import {bound,select, input} from '../../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix,opacity} from '../../../../../styles/mixins';
import LabelSelectBox from '../../../../common/components/LabelSelectBox';
import LabelTextInput from '../../../../common/components/LabelTextInput2';
import NormalLabelTextInput from '../../../../common/components/NormalLabelTextInput';
import NormalLabelSelectBox from '../../../../common/components/NormalLabelSelectBox';
import {awsUrl} from '../../../../../utils/awsFile';
import BrandSilde from './BrandSlider';

import { searchItems, setKeyword } from '../../Search/action';
import { getItemCollections } from '../../Index/action';


const Container = styled.div `
    padding:0;
    background:#fff;
    ${bound};
    ${borderRadius('5px')};
    margin-bottom:20px;
    position:relative;

    @media (max-width: ${theme.medias.phablet}) {
        width:100%;
    }

    select, option {
        ${select};
        ${borderRadius("0")};
        margin-bottom:0;
        @media (max-width: ${theme.medias.phablet}) {
            font-size: 15px !important;
        }
    }

    input[type=text]{
        ${input};
        ${borderRadius("0")};
        border:none;
        height:30px !important;
        line-height:30px !important;
        border-bottom:1px solid ${theme.colors.gray} !important;
        margin-bottom:0;
        @media (max-width: ${theme.medias.phablet}) {
            font-size: 15px !important;
        }
    }

    .searchDiv{
        position:absolute;
        z-index:3;
        height:58px;
        padding:15px 30px;
        top:0;
        right:0;
        background:#fff;

        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
        width:auto;
        ${box};
        white-space:nowrap;

        &.active{
            width:400px;
            input[type=text]{
                display:block;
            }
            .search_btn{
                display:block;
            }

            .expander{
                display:none;
            }

        }

        span{
            font-size:16px;
            line-height:30px;
            color:${theme.colors.gray};
            
            white-space:nowrap;
        }

        input[type=text]{
            display:none;
        }

        .search_btn,.expander{
            width:auto;
            min-width:30px;
            height:30px;
            line-height:30px;
            text-align:center;
            color:${theme.colors.gray};
            font-size:18px;
            -webkit-flex: none;
            flex: none;
            cursor:pointer;

            ${box};

            &::before{
              content:"\f002";
              font-family: FontAwesome;
            }

            &:hover{
                
            }
            
        }
        .search_btn{
            display:none;
            color:${theme.colors.blue};
        }

        @media (max-width: ${theme.medias.phablet}) {
            padding:15px 10px;
            width:auto;
            span{
                display:none;
            }
            &:hover{
                width:100%;
            }
        }
     
    }

    .zcoinBar{
        height:60px;
        padding:15px 30px;
        
        text-align:center;
        
        ${box};
        border-bottom:2px solid #f3f3f3;

        p{
            font-size:14px;
            line-height:30px;
            color:${theme.colors.gray};

            span{
                margin-left:5px;
                color:${theme.colors.red};
                &::before{
                  content:"";
                  width:14px;
                  height:14px;
                  margin-right:5px;
                  display:inline-block;
                  vertical-align:middle;
                  background: url(${awsUrl("zcoin_pink.png")}) no-repeat center left;
                  background-size:14px 14px;
                }
            }
        }

        @media (max-width: ${theme.medias.phablet}) {
            padding:15px 10px;
            padding-right:40px;
        }
    }

`

class SearchBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expand:false,
            selectedCategory: '',
            keyword: ''
        }
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    toggleExpand(){
        this.setState({
            expand: !this.state.expand
        });
    }

    componentDidMount() {
        //this.props.getItemCategories();
        this.props.getItemCollections();
    }

    render() {
        const { categoryId, keyword, coins, logon, itemCollections } = this.props;

        const SearchButton = withRouter(({history}) => {

            if(history.location.pathname === '/exchange/search') {
                return (
                    <div className="search_btn" onClick={() => this.props.searchItems()}/>
                )
            } else {
                return (
                    <div className="search_btn" onClick={() => history.push('/exchange/search')}/>
                )
            }
        });

        return (
            <Container>
                <div className={this.state.expand?"searchDiv active":"searchDiv"}>
                    
                    <NormalLabelTextInput
                        id="exchangeItemSearchKeyword"
                        name="exchangeItemSearchKeyword"
                        value={keyword}
                        placeholder='請輸入商品關鍵字'
                        onChange={(value) => this.props.setKeyword(value)}
                    />
                    
                    <SearchButton/>
                    <div className="expander" onClick={this.toggleExpand}>
                    <span>搜尋商品</span>
                    </div>
                </div>
                <div className="zcoinBar">
                    { logon ? <p>嗨!您目前的Ｚ幣<span>{coins}</span></p> : <p>嗨!請立即登入， 眾多商品等你兌換!</p>}
                </div>

                <BrandSilde items={itemCollections ? itemCollections.toJS() : [] }/>

            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.exchange.search.get("CATEGORIES"),
        categoryId: state.exchange.search.get('CRITERIA').get('categoryId'),
        keyword: state.exchange.search.get('CRITERIA').get('keyword'),
        coins: state.dashboard.get('TOTAL_COINS') || 0,
        logon: state.data.auth.get('IS_LOGINED'),
        itemCollections : state.exchange.index.get('ITEM_COLLECTIONS'),
    }
}

export default connect(mapStateToProps, { searchItems, setKeyword, getItemCollections })(SearchBox);