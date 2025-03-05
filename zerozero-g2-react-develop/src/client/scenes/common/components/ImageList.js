import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {connect} from "react-redux";

import {uploadImages, deleteImage, updateImageBlocks} from '../../../data/common/action';

import {awsUrl} from '../../../utils/awsFile';
import theme from '../../../styles/theme';
import {opacity, borderRadius, transition, box, clearfix,translate} from '../../../styles/mixins';
import {select} from '../../../styles/commons';

import CoverImage from './CoverImage';


const Container = styled.div`
    width:100%;
    margin-bottom:30px;

    ul{
        float:left;

        li{
            display:inline-block !important;
            float:left;
            position:relative;
            width:100px;
            height:100px;
            overflow:hidden;
            border:1px solid #ddd;
            cursor:pointer;
            ${borderRadius('8px')};
            ${box};

            img{
                position:absolute;
                z-index:1;
                top:0;
                left:0;
            }

            margin-right:10px;
            margin-bottom:10px;
        }

        &.right{
            float:right;
            li{
                float:right;
            }
            margin-right:0px;
            margin-left:10px;
        }

        
    }

    &::after{
        ${clearfix};
    }
    
`

class ImageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pics: []
        };
    }

    _coverImageRender(pics) {
        if (pics) {
            return pics.toJS().map((url, i) => {
                return (
                    <li key={i}>
                        <CoverImage src={url}/>
                    </li>
                );
            });
        }
    }

    render() {
        const {pics,reverse} = this.props;

        return (
            <Container>
                <ul className={ reverse ? "right" : ""}>
                    {this._coverImageRender(pics)}
                </ul>
            </Container>
        )
    }
}

export default connect(null, {uploadImages, deleteImage, updateImageBlocks})(ImageList);