import React, {Component} from 'react';
import {connect} from "react-redux";
import styled, {css} from 'styled-components';
import shortid from 'shortid';

import {awsUrl} from '../../../../../utils/awsFile';
import ItemSimple from '../ItemSimple';
import PageTitle from '../../../../common/components/PageTitle';
import Button from '../../../../common/components/Button';
import theme from '../../../../../styles/theme';
import {bound,select, input} from '../../../../../styles/commons';
import {boxShadow, transition, borderRadius, box, clearfix,opacity} from '../../../../../styles/mixins';

const List = styled.div `
  width:100%;
  max-width: ${theme.medias.maxW};
  margin:0 auto;
  position:relative;
  z-index:1;
  margin-bottom:50px;

  ul{
    width:100%;
    &::after{
        ${clearfix};
    }

  }

  
  li{
    display:inline-block;
    float:left;
    width:25%;
    padding:10px 5px;
    ${box};

    @media (max-width: ${theme.medias.phablet}) {
        width:50%;
        padding:5px;
    }

    &:hover {
        .thumb img {
            -ms-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
    }
    

    a{
        width:100%;
        display:block;
        text-decoration:none;
        overflow:hidden;
        ${borderRadius("8px")};
        background:#fff;
        ${boxShadow("1px 1px 4px rgba(0,0,0,.3)")};
    }
    .thumb{
        width:100%;
        height:0;
        padding-top:100%;
        position:relative;
        background:#ddd;

        >div{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            overflow:hidden;
        }

        img{
            ${transition("all",".3s")};
        }
    }

    .info{
        position:relative;
        padding:15px;
        height:150px;
        ${box};
        h3{
            color:#333;
            font-size:16px;
            line-height:1.5;
            margin-bottom:10px;
            font-weight:400;
        }
        p{
            color:#a7a7a7;
            font-size:14px;
            line-height:1.5;
            max-height:42px;
            text-overflow: ellipsis;
            overflow:hidden;
            display: block;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-weight:300;
        }
        .price{
            width:100%;
            z-index:1;
            font-size:18px;
            color:${theme.colors.red};
            line-height:1.5;
            position:absolute;
            bottom:15px;
            left:15px;
            font-weight:500;

            &::before{
                content:"";
                display:inline-block;
                width:16px;
                height:16px;
                vertical-align:middle;
                background: url(${awsUrl("zcoin_pink.png")}) no-repeat center left;
                background-size:16px 16px;
                margin-right:5px;
            }
        }
        @media (max-width: ${theme.medias.phablet}) {
            height:115px;
            padding:10px;
            h3{
                height:48px;
                text-overflow: ellipsis;
                overflow:hidden;
                display: block;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
            p{
                display:none;
            }
            .price{
                position:static;
                text-align:left;
            }
        }
    }
  }

  .more{
    text-align:center;
    font-size:14px;
    color:#a7a7a7;
    width:auto;
    line-height:50px;
    margin:0 auto;
    cursor:pointer;
    ${transition("color",".3s")};

    &::before{
      content:"\f067";
      font-family: FontAwesome;
      margin-right:5px;
    }
    
    &:hover{
        color:${theme.colors.blue};
    }
  }

  
`


export default class ItemList extends Component {

    render() {
        const { items, moreAction } = this.props;
        return (
            <List>
                <ul>
                    {
                        items.rows.map((item) => {
                            return (
                                <ItemSimple
                                    key={shortid.generate()}
                                    itemId={item.itemId}
                                    imageURL={item.imageURL}
                                    coverImageClassName="thumb"
                                    name={item.name}
                                    subtitle={item.subtitle}
                                    coins={item.coins}
                                />
                            )
                        })
                    }
                </ul>
                <div className="more" onClick={moreAction}>更多商品</div>
            </List>
        )
    }
}