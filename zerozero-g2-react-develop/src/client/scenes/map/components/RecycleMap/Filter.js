import React, { Component } from 'react';
import {awsUrl} from '../../../../utils/awsFile';
import styled, {css} from 'styled-components';
import theme from '../../../../styles/theme';
import { transition, borderRadius, box, clearfix,opacity} from '../../../../styles/mixins';

const checkboxGroup = css`
    width:100%;
    position:relative;

    input[type="checkbox"]{
        position:absolute;
        top:0;
        left:0;
        display:none;
    }
    
    > div{
        height: 50px;
        width: 100%;
        line-height: 48px;
        font-size: 16px;
        color: #a7a7a7;
        padding: 0 0;
        border: 1px solid #ddd;
        background: #fff;
        outline: none;
        text-align:center;
        overflow:hidden;
        position:relative;
        cursor:pointer;
        letter-spacing:0;

        ${transition('padding', '.3s')};
        ${borderRadius('8px')};
        ${box};

        &::after{
            position:absolute;
            top:0;
            left:10px;
            content:"\f00c";
            font-family: FontAwesome;
            color:${theme.colors.green};
            z-index:0;
            display:none;
        }

        @media (max-width: ${theme.medias.phablet}) {
            font-size: 14px;
        }
    }

    input[type="checkbox"]:checked ~ div{
        background: ${theme.colors.map};
        color:#fff;
        padding-left:15px;
        &::after{
            display:block;
            animation-name: pop;
            animation-duration: .3s;
            animation-iteration-count: 1;
        }
        
               
        @keyframes pop {
            0% {
                top: 20px;
            }

            90% {
                top: -3px;
            }

            98% {
                top: 1px;
            }

            100% {
                top: 0px;
            }
        }
    }
`

const Container = styled.div`
    pointer-events:auto;
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    z-index:20;
    background:rgba(0,0,0,.4);
    display:block;
    height:100%;

    &.active{
        display:block;

        >div{
            animation-name: showup;
            animation-duration: .3s;
            animation-iteration-count: 1;
        }
    }

    @keyframes showup {
        0% {
            top: 120px;
            ${opacity("0")};
        }

        100% {
            top: 100px;
            ${opacity("1")};
        }
    }

    >div{
        position:absolute;
        top:100px;
        right:20px;
        width:500px;
        background:#fff;
        padding:30px;
        ${box};
        ${borderRadius("8px")};
        //overflow:hidden;
        animation-name: showup;
        animation-duration: .3s;
        animation-iteration-count: 1;

        h2{
            font-size:16px;
            color:#666;
            line-height:1.5;
            margin-bottom:20px;
        }

        .board{
            border-bottom:1px solid #ddd;
            margin-bottom:20px;
            max-height:calc(100vh - 330px);
            overflow:auto;
            @media (max-width: ${theme.medias.phablet}) {
                max-height:calc(100vh - 270px);
            }
        }

        .multi-btns{
            text-align:right;
            >div{
                display:inline-block;
                height:40px;
                line-height:40px;
                text-align:center;
                ${borderRadius("8px")};
                color:${theme.colors.gray};
                font-size:16px;
                padding:0 10px;
                margin:0 3.5px;
                cursor:pointer;
                letter-spacing:0.125em;
            }

            .ok{
                background:${theme.colors.blue};
                color:#fff;
                padding:0 30px;

                &:hover{
                    background:${theme.colors.blue2};
                }
            }

            .close{
                float:left;
            }

        }

        &::after{
            content:"";
            position:absolute;
            top:-10px;
            left:50%;
            width:0;
            height:0;
            margin-left:-7.5px;
            border-style: solid;
            border-width: 0 7.5px 10px 7.5px;
            border-color: transparent transparent #fff transparent;

        }

        &.temp{
            &::after{
                left:auto;
                right:80px;
            }
        }

        @media (max-width: ${theme.medias.phablet}) {
            width:calc(100% - 40px);
            padding:15px;

            &::after{
                left:25%;
            }

            &.temp{
                &::after{
                    left:auto;
                    right:25%;
                }
            }
        }
    }

    .types{
        margin-bottom:20px;
        >div{
            width:calc(33.33% - 7px);
            float:left;
            margin-left:7px;
            margin-bottom:7px;

            &:nth-child(3n+1){
                margin-left:0;
            } 

            .checkbox_group{
                ${checkboxGroup};
            }

            @media (max-width: ${theme.medias.phablet}) {
                width:calc(50% - 7px);
                &:nth-child(3n+1){
                    margin-left:7px;
                } 
                &:nth-child(2n+1){
                    margin-left:0 !important;
                } 
            }
            @media (max-width: 340px) {
                width:100%;
                margin-left:0 !important;
            }
        }
        &::after{
            ${clearfix};
        }
    }
    
    .items{
        margin-bottom:20px;

        > div{
            width:calc(25% - 7px);
            float:left;
            margin-left:7px;
            margin-bottom:7px;

            &:nth-child(4n+1){
                margin-left:0;
            }

            @media (max-width: ${theme.medias.phablet}) {
                width:calc(33.333% - 7px);
                &:nth-child(4n+1){
                    margin-left:7px;
                } 
                &:nth-child(3n+1){
                    margin-left:0 !important;
                } 
            }

            @media (max-width: 450px) {
                width:calc(50% - 7px);
                &:nth-child(4n+1){
                    margin-left:7px;
                } 
                &:nth-child(3n+1){
                    margin-left:7px !important;
                } 
                &:nth-child(2n+1){
                    margin-left:0 !important;
                } 
            }
        }

        .category{
            width:100% ;
            height:0;
            padding:0;
            padding-top:100%;
            position:relative;
            border: 1px dashed #eee;
            overflow:visible;
            ${borderRadius("8px")};

            .icon{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                font-size:14px;
                line-height:1;
                flex-direction:column;
                display: -webkit-flex;
                display: flex;
                -webkit-align-items: center;
                align-items: center;
                -webkit-justify-content: center;
                justify-content: center;
                color: #a7a7a7;
                letter-spacing:0;

                .img{
                    display:block;
                    width:100%;
                    height:60px;
                    margin:0 auto 5px;
                    text-align:center;
                    overflow:hidden;

                    img{
                        height:100%;
                        width:auto;
                    }
                }

                &.tv{
                    &::before{
                        background:url(${awsUrl("cat_icons.png")}) no-repeat top left;
                        background-size:600% 200%;
                    }
                }
                &.fridge{
                    &::before{
                        background:url(${awsUrl("cat_icons.png")}) no-repeat top left 20%;
                        background-size:600% 200%;
                    }
                }
                &.ac{
                    &::before{
                        background:url(${awsUrl("cat_icons.png")}) no-repeat top left 60%;
                        background-size:600% 200%;
                    }
                }
                &.washer{
                    &::before{
                        background:url(${awsUrl("cat_icons.png")}) no-repeat top left 40%;
                        background-size:600% 200%;
                    }
                }
                &.pc{
                    &::before{
                        background:url(${awsUrl("cat_icons.png")}) no-repeat top left 100%;
                        background-size:600% 200%;
                    }
                }
                &.other{
                    &::before{
                        background:url(${awsUrl("cat_icons.png")}) no-repeat top left 80%;
                        background-size:600% 200%;
                    }
                }

                &::before{
                    content:"";
                    display:none;
                    width:40px;
                    height:40px;
                    margin:0 auto 5px;
                }
            }


        }

        .checkbox_group{
            cursor:pointer;
            input[type="checkbox"]{
                position:absolute;
                top:0;
                left:0;
                display:none;
            }
            input[type="checkbox"]:checked ~ div{
                background:${theme.colors.map};
                border:1px solid ${theme.colors.map};
                &::after{
                    display:none;
                }
                .icon{
                    color:#fff;
                    &.tv{
                        &::before{
                            background:url(${awsUrl("cat_icons.png")}) no-repeat bottom left;
                            background-size:600% 200%;
                        }
                    }
                    &.fridge{
                        &::before{
                            background:url(${awsUrl("cat_icons.png")}) no-repeat bottom left 20%;
                            background-size:600% 200%;
                        }
                    }
                    &.ac{
                        &::before{
                            background:url(${awsUrl("cat_icons.png")}) no-repeat bottom left 60%;
                            background-size:600% 200%;
                        }
                    }
                    &.washer{
                        &::before{
                            background:url(${awsUrl("cat_icons.png")}) no-repeat bottom left 40%;
                            background-size:600% 200%;
                        }
                    }
                    &.pc{
                        &::before{
                            background:url(${awsUrl("cat_icons.png")}) no-repeat bottom left 100%;
                            background-size:600% 200%;
                        }
                    }
               
                    &.other{
                        margin-bottom:10px;
                        &::before{
                            background:url(${awsUrl("cat_icons.png")}) no-repeat bottom left 80%;
                            background-size:600% 200%;
                        }
                    }
                }
            }
        }

        &::after{
            ${clearfix};
        }
    }
  
`


export default class Filter extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            isModified: true,
        }

        this._renderCategories = this._renderCategories.bind(this);
        this._renderRecycleItems = this._renderRecycleItems.bind(this);
    }


    componentDidMount() {
        
    }

    componentWillMount() {
        
    }


    _renderCategories(){
        const { categories ,filterRecycleItems, bounds} = this.props ;

        return categories.toJS().map((v) => {
            const selectCategory = bounds.toJS().categories.find((c) => c == v.id) ;
            //console.log("selectCategory : ", selectCategory);
            const checked = selectCategory && selectCategory!==undefined ? "checked" : "";
            return (
                <div key={v.id}>
                    <label className="checkbox_group">
                        <input type="checkbox" name="t1" value="大豐回收站" checked={checked} />
                        {/*<div onClick={() => {filterRecycleItems('categories', v.id);}}>{v.name}</div>*/}
                        <div className="category" onClick={() => { filterRecycleItems('categories', v.id);}}>
                            <div className="icon">
                                <div className="img"><img src={v.icon}/></div>
                                {v.name}
                            </div>
                        </div>
                    </label>
                </div>
            )
        })
    }

    _renderRecycleItems(){
        const { recycleItems , filterRecycleItems, bounds} = this.props ;
        //console.log('recycleItems:', recycleItems.toJS());
        return recycleItems.toJS().map((v) => {
            const selectedItem = bounds.toJS().recycleItems.find((r) => r == v.id) ;
            const checked = selectedItem && selectedItem !==undefined ? "checked" : "";
            return(
                <div key={v.id}>
                    <label className="checkbox_group">
                        <input type="checkbox" name="c1" value="電視" checked={checked}/>
                        <div className="category" onClick={() => { filterRecycleItems('recycleItems', v.id);}}>
                            <div className="icon">
                                <div className="img"><img src={v.icon}/></div>
                                {v.name}
                            </div>
                        </div>
                    </label>
                </div>
            );
        })

    }

    render() {
        const { categories, recycleItems,toggleFilter, filterRecycleItems, filterMarkers } = this.props ;
        //console.log('recycleItems:', recycleItems.toJS());
        return (
            <Container>
              <div>
                  <div className="board">
                      <h2>站點回收品項</h2>
                      <div className="items">
                          {this._renderRecycleItems()}
                      </div>
                      <h2>站點類型</h2>
                      <div className="items">
                          {this._renderCategories()}
                      </div>
                  </div>
                  <div className="multi-btns">
                      <div className="close" onClick={toggleFilter}>關閉</div>
                      <div className="cancel">清除篩選</div>
                      {this.state.isModified?
                        <div className="ok" onClick={() => filterMarkers('unit')}>套用</div>
                      :""}
                  </div>
              </div>
          </Container>
        )
    }
}