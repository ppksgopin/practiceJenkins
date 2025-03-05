import React, { Component } from 'react';
import styled from 'styled-components';

import {awsUrl} from '../../../../utils/awsFile';
import theme from '../../../../styles/theme';
import {clearfix} from '../../../../styles/mixins';
import LabelTextInput from '../../../common/components/LabelTextInput';

const Container = styled.div `
    margin-bottom:20px;

    > div{
        width:calc(25% - 7px);
        float:left;
        margin-left:9px;
        margin-bottom:9px;

        &:nth-child(4n+1){
            margin-left:0;
        }
    }

    .category{
        width:100% !important;
        height:0 !important;
        padding:0 !important;
        padding-top:100% !important;
        position:relative;
        border: 1px dashed #ddd !important;
        overflow:visible !important;

        .icon{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
            font-size:16px;
            line-height:1.5;
            flex-direction:column;
            display: -webkit-flex;
            display: flex;
            -webkit-align-items: center;
            align-items: center;
            -webkit-justify-content: center;
            justify-content: center;

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
                display:block;
                width:50px;
                height:50px;
                margin:0 auto 10px;
            }
        }
        
        .price{
            display: block;
            width: 100%;
            color: #ff8188;
            line-height: 0.4;
            text-align: center;
            position: absolute;
            bottom: 15px;    
            font-size: small;
        }              
    }

    .checkbox_group{
        input[type="checkbox"]:checked ~ div{
            &::after{
                display:none;
            }
            .icon{
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
                    &::after{
                        content:"";
                        position:absolute;
                        bottom:-10px;
                        left:50%;
                        margin-left:-7.5px;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 10px 7.5px 0 7.5px;
                        border-color: ${theme.colors.green} transparent transparent transparent;

                    }
                }
            }
        }
    }

    &::after{
        ${clearfix};
    }

    .addon_input{
        border-color:${theme.colors.green} !important;
        //text-align:center !important;
    }

    @media (max-width: ${theme.medias.phablet}) {
        > div{
            width:calc(50% - 9px);
            &:nth-child(4n+1){
                margin-left:9px;
            }
            &:nth-child(2n+1){
                margin-left:0;
            }
        }
    }
`

export default class Category extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this._addInput = this._addInput.bind(this);
    }


    componentDidMount() {
        
    }

    componentWillMount() {
        
    }

    _addInput(e) {
        this.setState({
            "open":true,
        })
       
    }

    changeOther(value){
        const {persistElectronicForm} = this.props ;
        persistElectronicForm('other', value);
    }

    _renderRecycleItmes() {

        const {items , values , persistElectronicForm} = this.props ;
        //console.log('items:', items) ;
        //console.log('selectedItems:', values) ;
        const onChange = (e, value)=>{
            let newValues =[] ;
            if(e.target.checked){
                newValues = values.concat(value) ;
            }else{
                newValues = values.filter(v => v!==value) ;
            }
            persistElectronicForm('items', newValues);
        }

        return items.map((item, index) => {
            let icon = '', price = '贈0Z幣';
            if(item.materialErpCode==='1d0010010014') {
                icon = 'tv';
                price = '贈200Z幣';
            } else if(item.materialErpCode==='1d0010010013') {
                icon='fridge';
                price = '贈300Z幣';
            } else if(item.materialErpCode==='1d0010010007') {
                icon='washer';
                price = '贈300Z幣';
            } else if(item.materialErpCode==='1d0020010005') {
                icon='pc';
                price = '贈200Z幣';
            } else if(item.materialErpCode==='1e0110000001') {
                icon='other';
                price = '贈100 ~ 200Z幣';
            } else if(item.materialErpCode==='1d0010010006') {
                icon='ac';
                price = '贈500Z幣';
            }
            else icon='';


            const checked = values.length!==0 ? values.find( v => v === item.materialId):false;
            return (
                <div key={index}>
                    <label className="checkbox_group">
                        <input type="checkbox" name="recycelItem" id="recycelItem" value={item.materialId} onChange={(e) => onChange(e, e.currentTarget.value)} checked={checked}/>
                        <div className="category">
                            <div className={`icon ${icon}`}>
                                {item.commonName}
                            </div>
                            <div className="price">{price}</div>
                        </div>
                    </label>
                </div>
            )
        });
    }

    render() {
        const {items , values , persistElectronicForm} = this.props ;
        return (
            <Container>
                {this._renderRecycleItmes()}
                {/*<div>*/}
                    {/*<label className="checkbox_group">*/}
                        {/*<input type="checkbox" name="c1" value="電視"/>*/}
                        {/*<div className="category">*/}
                            {/*<div className="icon tv">*/}
                                {/*電視*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</label>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<label className="checkbox_group">*/}
                        {/*<input type="checkbox" name="c2" value="冰箱"/>*/}
                        {/*<div className="category">*/}
                            {/*<div className="icon fridge">*/}
                                {/*冰箱*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</label>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<label className="checkbox_group">*/}
                        {/*<input type="checkbox" name="c3" value="冷氣機"/>*/}
                        {/*<div className="category">*/}
                            {/*<div className="icon ac">*/}
                                {/*冷氣機*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</label>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<label className="checkbox_group">*/}
                        {/*<input type="checkbox" name="c4" value="洗衣機"/>*/}
                        {/*<div className="category">*/}
                            {/*<div className="icon washer">*/}
                                {/*洗衣機*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</label>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<label className="checkbox_group">*/}
                        {/*<input type="checkbox" name="c5" value="電腦主機"/>*/}
                        {/*<div className="category">*/}
                            {/*<div className="icon pc">*/}
                                {/*電腦主機*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</label>*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*<label className="checkbox_group" onClick={() => this._addInput()}>*/}
                        {/*<input type="checkbox" name="c6" value="其他"/>*/}
                        {/*<div className="category">*/}
                            {/*<div className="icon other">*/}
                                {/*其他*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</label>*/}
                {/*</div>*/}
                {
                    values.find( v => v === '2FED70DF-F04F-4353-93CC-B79B29E5532A')
                        ? <div style={{marginTop:10,marginLeft:0,clear:'both',width:'100%'}}>
                            <LabelTextInput
                                id="other"
                                name="other"
                                must
                                classname="addon_input"
                                label="請填入回收品項"
                                placeholder="ex.家電1,家電2"
                                onChange={this.changeOther.bind(this)}
                            />
                          </div> : ""
                }
            </Container>
        )
    }
}