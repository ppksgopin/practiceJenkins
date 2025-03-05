import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";

import {uploadImages} from '../../../data/common/action';
import {updateUserPhoto, profile} from '../../../data/auth/action';
import {awsUrl} from '../../../utils/awsFile';

import theme from '../../../styles/theme';
import {borderRadius, transition, boxShadow, opacity} from '../../../styles/mixins';

import CoverImage from './CoverImage';

/** Avatar 的圖片大小，單位為 px */
const AvatarImageSize = 150
/** Avatar 的圖片 margin-bottom ，單位為 px */
const AvatarMarginBottom = 20

const Container = styled.div `

    width:${AvatarImageSize}px;
    height:${AvatarImageSize}px;
    border:6px solid #fff;
    margin: 0px auto ${AvatarMarginBottom}px;
    background: ${theme.colors.gray};
    overflow: hidden;

    ${borderRadius('100%')};
    ${boxShadow("0 1px 3px rgba(0, 0, 0, 0.2)")};

    position: relative;

    &.small{
        width:75px;
        height:75px;
        border:3px solid #fff;
        position:absolute;
        top: -37.5px;
        left: 50%;
        margin-left: -37.5px;

    }

    &.large{
        position:absolute;
        top: -81px;
        left: 50%;
        margin-left: -81px;
        .upload_foto {
            display:block;
        }
    }

    &:hover {
        .foto {
            -ms-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
        }
    }

    .foto {
        width: 100%;
        height: 100%;

        ${transition("all", ".3s")};

        background: url(${awsUrl("user_thumb.png")}) no-repeat center center;
        background-size: cover;

        img{
           //display:none;
        }

    }

    .upload_foto {
        display:none;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        cursor: pointer;
        background: rgba(0, 0, 0, 0.3);
        position: absolute;
        z-index: 10;
        bottom: 0;
        left: 0;
        width: 100%;

        &:hover {
            background: rgba(0, 0, 0, 0.6);
        }

        &::before{
          content: '\f030';
          font-family: FontAwesome;
          margin-right:5px;
          letter-spacing:0;
        }

        input {
          position:absolute;
          top:0;
          left:0;
          width: 100%;
          height: 100%;
          ${opacity('0')};
          opacity: 0;
          z-index: 100;
          cursor: pointer;
        }
    }

`

class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUploading: false,
        };
    }

    onChange(e) {
        e.preventDefault();
        this.setState({"isUploading": true});
        //console.log('this.props: ', this.props)
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
                        this.props.change('photoURL', images[0].url)
                        //this.props.updateUserPhoto(images[0]);
                        this.setState({"isUploading": false});
                    });
                };

                reader.readAsDataURL(files[0]);
            }
        }
    }

    render() {
        const {src, classname} = this.props;
        const {isUploading} = this.state;
        let photo = null;
        if (this.props.input) {
            photo = this.props.input.value;
        }

        return (
            <Container className={classname}>
                <div className="foto">
                    <CoverImage src={photo != null ? photo : src}/>
                </div>
                {
                    isUploading
                        ?
                        ""
                        :
                        <div className="upload_foto">
                            <input type="file" onChange={this.onChange.bind(this)}
                                   accept="image/x-png, image/jpeg"/>變更
                        </div>
                }

            </Container>
        )
    }
}
export {AvatarImageSize, AvatarMarginBottom}
export default connect(null, {uploadImages, updateUserPhoto, profile})(Avatar);
