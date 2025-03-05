import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {connect} from "react-redux";

import {uploadImages, deleteImage, updateImageBlocks} from '../../../data/common/action';

import {awsUrl} from '../../../utils/awsFile';
import theme from '../../../styles/theme';
import {opacity, borderRadius, transition, box, clearfix} from '../../../styles/mixins';
import {select} from '../../../styles/commons';

import CoverImage from './CoverImage';


const Container = styled.div`
    width:100%;
    margin-bottom:30px;

    >div{
        float:left;
        >div{
            display:inline-block;
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
            }

            &::after{
              content: '\f1f8';
              position:absolute;
              font-size:36px;
              width:100%;
              height:100%;
              line-height:100px;
              display:block;
              font-family: FontAwesome;
              z-index:2;
              text-align:center;
              color:${theme.colors.red};
              background:rgba(0,0,0,.6);
              ${opacity('0')};
              ${transition('all', '.3s')};

            }

            &:hover{
                &::after{
                    ${opacity('1')};
                }
            }

            margin-right:10px;
            margin-bottom:10px;
        }

        
    }

    .upload_foto {
        width:100px;
        height:100px;
        float:left;
        position:relative;
        margin-bottom:10px;
        border:1px dashed #ddd;
        font-size: 14px;
        color: ${theme.colors.gray};
        text-align: center;
        ${borderRadius('8px')};
        ${box};
        
        &::after{
            display:none;
        }

        &::before{
          content: '\f03e';
          font-size:30px;
          display:block;
          font-family: FontAwesome;
          margin:20px auto 10px;
          pointer-events:none;

        }

        input {
          position:absolute;
          display:block;
          top:0;
          left:0;
          width: 100% !important;
          height: 100% !important;
          ${opacity('0')};
          z-index: 100;
          cursor: pointer;
        }
    }

    &::after{
        ${clearfix};
    }
    
`

class ImageUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
            pics: []
        };
    }

    _onChange(e) {
        e.preventDefault();

        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
            if (files[0].type.split('/')[0] !== 'image') {
                alert('請確認上傳格式為 `jpge` 或是 `png` ');
            } else {
                let reader = new FileReader();
                reader.onload = () => {
                    let requestData = [];
                    requestData.push({
                        'fileName': files[0].name, 'image': reader.result.split(';base64,')[1]
                    });

                    this.props.uploadImages(requestData, (images) => {
                        let pics = [...this.props.pics, images[0]];
                        this.props.updateImageBlocks(pics);
                    });
                };

                reader.readAsDataURL(files[0]);
            }
        }
    }

    _coverImgaeRender(pics) {
        if (pics) {
            return pics.toJS().map(({id, url}, i) => <div key={i} onClick={(e) => this._onClick(id)}>
                <CoverImage src={url}/>
            </div>);
        }
    }

    _inputUploadRender() {
        const {pics, max} = this.props;
        const picsJS = pics.toJS();
        if (!!max) {
            if (max > picsJS.length) {
                return (<div className="upload_foto">
                    <input type="file" onChange={this._onChange.bind(this)} accept="image/x-png, image/jpeg"/>
                    圖片上傳
                </div>);
            }
        } else {
            return (
                <div className="upload_foto">
                    <input type="file" onChange={this._onChange.bind(this)} accept="image/x-png, image/jpeg"/>
                    圖片上傳
                </div>);
        }
    }

    _onClick(picId) {
        const {disableUpload} = this.props;
        if(disableUpload) return;

        this.props.deleteImage(picId, (image) => {
            let remainPics = this.props.pics.toJS().filter((img) => img.id != image);
            this.props.updateImageBlocks(remainPics);
        });
    }

    render() {
        const {pics, max, disableUpload} = this.props;

        return (
            <Container>
                <div>
                    {this._coverImgaeRender(pics)}
                    {disableUpload  == true? "" : this._inputUploadRender()}
                </div>

                
            </Container>
        )
    }
}

export default connect(null, {uploadImages, deleteImage, updateImageBlocks})(ImageUploader);