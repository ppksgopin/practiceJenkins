import React, { Component } from 'react';
import {awsUrl} from '../../../../utils/awsFile';
import styled, {css} from 'styled-components';
import theme from '../../../../styles/theme';
import { translate, transition, borderRadius, box, clearfix,opacity} from '../../../../styles/mixins';
import CoverImage from '../../../common/components/CoverImage';
import Slider from 'react-slick';
import moment from 'moment' ;
import load_locale from 'moment/locale/zh-tw' ;

const Container = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:400px;
  height:100%;
  z-index:40;
  background:#fff;
  padding:20px 10px 20px 20px;
  ${box};
  border-right:1px solid #ddd;
  ${translate("-100%","0")};
  ${transition("left",".5s")};

  >div{
    height:100%;
  }

  &.hide{
    left:-400px;
    @media (max-width: ${theme.medias.phablet}) {
        left:0;
    }

    .btns{
        .hide{
            &::before{
                content:"\f054";  
            }
        }
    }
  }

  
    animation-name: slideIn;
    animation-duration: .5s;
    animation-iteration-count: 1;
    -webkit-animation-fill-mode: forwards; /* Safari 4.0 - 8.0 */
    animation-fill-mode: forwards;

    @keyframes slideIn {
        0% {
            ${translate("-100%","0")};
        }

        100% {
            ${translate("0","0")};
        }
    }
    @keyframes slideIn2 {
        0% {
            ${translate("0","100%")};
        }

        100% {
            ${translate("0","0")};
        }
    }

  @media (max-width: ${theme.medias.phablet}) {
        ${translate("0","100%")};
        animation-name: slideIn2;
        width:100%;
        max-width:600px;
        //border:none;
        z-index:60;
        padding:0;

        &.simple{
            height:auto;
            top:auto;
            bottom:0;
            z-index:20;
            .btns{
                display:none;
            }
            .info{
                overflow:visible;
                .slider_container,.reviews,.detail,.plans{
                    display:none;
                }

                .basic .title .name,.basic .rcar{
                    &::after{
                        content:"\f0d8";
                    }
                }
            }
        }
    }

  .btns{
    position:absolute;
    width:30px;
    height:100px;
    background:#fff;
    top:20px;
    border:1px solid #ddd;
    border-left:none;
    right:-32px;
    ${borderRadius("0 8px 8px 0")};

    >div{
        width:70%;
        margin:0 auto;
        height:49px;
        line-height:49px;
        text-align:center;
        font-size:20px;
        color:${theme.colors.gray};
        cursor:pointer;

        &.close{
            &::before{
                font-family: FontAwesome;
                content:"\f00d";  
            }
            border-bottom:1px solid #ddd;
        }

        &.hide{
            &::before{
                font-family: FontAwesome;
                content:"\f053";  
            }
        }
    }

    @media (max-width: ${theme.medias.phablet}) {
        top:10px;
        right:10px;
        background:none;
        z-index:50;
        border:none;
        width:50px;
        >div{
            width:100%;
            font-size:30px;
            &.close{
                border:none;
                height:50px;
                background:rgba(255,255,255,.3);
                ${borderRadius('100%')};
            }
            &.hide{
                display:none;
            }
        }
    }
  }

  .gowrite{
    position:fixed;
    left:0;
    top:0px;
    width:399px;
    z-index:50;
    background:#fff;

    &.first{
        position:relative;
        top:15px;
        width:auto;
    }

    @media (max-width: ${theme.medias.phablet}) {
        position:relative;
        top:0;
        width:100%;
    }
    .top{
        font-size:18px;
        color:#000;
        padding:0 15px;
        line-height:70px;
        cursor:pointer;

        &::before{
            font-family: FontAwesome;
            content:"\f053"; 
            margin-right:10px;
            color:${theme.colors.gray};
        }
    }
    .btn{
        font-size:18px;
        color:#fff;
        text-align:center;
        line-height:50px;
        border-top:1px solid #ddd;
        border-bottom:1px solid #ddd;
        background:${theme.colors.gray};
        cursor:pointer;

        &::before{
            font-family: FontAwesome;
            content:"\f044"; 
            margin-right:10px;
        }
    }
  }

  .info{
    max-height:100%;
    overflow:auto;
    padding-right:10px;

    @media (max-width: ${theme.medias.phablet}) {
        padding:0 !important;
    }

    &.reviewing{
        padding-top:102px;
        .slider_container,.basic,.detail,.links{
            display:none;
        }

        max-height:calc(100% - 125px);
    }

    >div{
        position:relative;
        z-index:1;
        border-top:1px solid #ddd;

        @media (max-width: ${theme.medias.phablet}) {
            padding-left:15px !important;
            padding-right:15px !important;

            &.slider_container{
                padding:56% 0 0 !important;
            }

            &.reviews{
                padding-left:0 !important;
                padding-right:0 !important;
            }
        }
    }

    .slider_container{
        overflow:hidden;
        height:0;
        padding-top:56%;
        background:#eee;

        .sliderbtn{
          position:absolute;
          width:100%;
          left:0;
          bottom:5px;
          z-index:5;
          text-align:center;

          li{
            display:inline-block;
            margin:4px;
            width:8px;
            height:8px;
            ${borderRadius("100%")};
            border:1px solid #ddd;
            background:#fff;
            cursor:pointer;

            &.slick-active{
              background:${theme.colors.blue};
            }
            button{
              cursor:pointer;
              width:100%;
              height:100%;
              overflow:hidden;
              ${opacity(0)};
            }
          }

        }
        .slider{
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
          z-index:4;

          div{
            width:100%;
            height:100%;
            position:relative;
          }

          .img{
            width:100%;
            height:100%;
            position:relative;
          }
          
        }
    }

    .basic{
        padding:30px 0px;
        z-index:5;
        min-height:121px;

        ${box};
        .score{
            width:56px;
            height:56px;
            border:2px solid ${theme.colors.blue};
            font-size:24px;
            font-weight:500;
            color:${theme.colors.blue};
            line-height:56px;
            text-align:center;
            letter-spacing:0em;
            display:inline-block;
            margin-right:15px;
            ${borderRadius("10px")};
            ${box};

            &.empty{
                font-size:14px;
                letter-spacing:0.2em;
                line-height:20px;
                padding-top:5px;
                padding-left:3px;
            }
        }

        .rcar{
            font-size:18px;
            color:#000;
            line-height:25px;
            margin-bottom:10px;
            cursor:pointer;
            pointer-events:none;

            &::before{
                color:${theme.colors.map};
                font-family: FontAwesome;
                content:"\f0d1";
                margin-right:8px;
            }

            @media (max-width: ${theme.medias.phablet}) {
                pointer-events:auto;
                &::after{
                    font-family: FontAwesome;
                    content:"\f0d7";
                    margin-left:8px;
                    color:${theme.colors.map};
                }
            }
        }

        .title{
            display:inline-block;
            width:calc(100% - 85px);

            
            .name{
                font-size:18px;
                color:#000;
                line-height:25px;
                margin-bottom:10px;
                cursor:pointer;
                pointer-events:none;

                @media (max-width: ${theme.medias.phablet}) {
                    pointer-events:auto;
                    &::after{
                        font-family: FontAwesome;
                        content:"\f0d7";
                        margin-left:8px;
                        color:${theme.colors.map};
                    }
                }
            }

            .rate{
                >div{
                    display:inline-block;
                    font-size:14px;
                    color:${theme.colors.blue};
                    margin-right:3px;
                    &::before{
                        font-family: FontAwesome;
                        content:"\f006";  
                    }

                    &.active{
                        &::before{
                            content:"\f005";  
                        }
                    }
                }
            }
        }
        .path{
            position:absolute;
            right:5px;
            top:-30px;
            text-align:center;
            font-size:12px;
            color:${theme.colors.gray};
            cursor:pointer;
            display:none;
            &::before{
                font-size:24px;
                color:#fff;
                font-family: FontAwesome;
                content:"\f124"; 
                display:block;
                width:58px;
                height:58px;
                line-height:58px;
                border:1px solid #ddd;
                background:${theme.colors.map};
                ${borderRadius("100%")};
                margin-bottom:5px;
            }
        }
    }

    .reviews{
        padding:30px 0px 0;

        .chart{
            text-align:center;
            margin-bottom:30px;
            .bars{
                text-align:left;
                width:calc(100% - 150px);
                display:inline-block;

                &.empty{
                    >div{
                       width:100% !important;
                       background:#f8f8f8 !important;
                    }
                }
                >div{
                    height:12px;
                    width:0;
                    position:relative;

                    background:${theme.colors.blue};
                    margin-bottom:1px;
                    &::before{
                        position:absolute;
                        content:"5";
                        font-size:12px;
                        line-height:12px;
                        left:-15px;
                        top:0;
                        color:${theme.colors.blue};
                    }

                    &:nth-child(2){
                        background:${theme.colors.green};
                        &::before{
                            content:"4";
                            color:${theme.colors.green};
                        }
                    }

                    &:nth-child(3){
                        background:${theme.colors.yellow};
                        &::before{
                            content:"3";
                            color:${theme.colors.yellow};
                        }
                    }

                    &:nth-child(4){
                        background:${theme.colors.red};
                        &::before{
                            content:"2";
                            color:${theme.colors.red};
                        }
                    }

                    &:nth-child(5){
                        background:${theme.colors.danger};
                        &::before{
                            content:"1";
                            color:${theme.colors.danger};
                        }
                    }
                    
                }
            }

            .average{
                width:100px;
                display:inline-block;
                text-align:right;
                .score{
                    font-size:36px;
                    color:${theme.colors.blue};
                    font-weight:500;
                    letter-spacing:0;
                    line-height:1;
                    margin-bottom:10px;

                    &.empty{
                        margin-top:8px;
                        font-size:18px;
                        font-weight:normal;
                        letter-spacing:0.15em;
                    }
                }
                .rate{
                    >div{
                        display:inline-block;
                        font-size:14px;
                        color:${theme.colors.blue};
                        margin-left:3px;
                        &::before{
                            font-family: FontAwesome;
                            content:"\f006";  
                        }

                        &.active{
                            &::before{
                                content:"\f005";  
                            }
                        }
                    }
                }
            }

            .links{
                width:calc(100% - 50px);
                margin:20px auto 0;
                text-align:right;
                div{
                    display:inline-block;
                    cursor:pointer;
                    color:${theme.colors.gray};                
                    font-size:14px;
                    line-height:1.5;

                    &:hover{
                        text-decoration:underline;
                    }

                    &.see{
                        float:left;
                    }
                }
            }
        }

        ul{
            li{
                padding:20px 0;
                background:#f8f8f8;

                &:nth-child(even){
                    background:#fff;
                }
                .thumb{
                    width:45px;
                    height:45px;
                    background:#eee;
                    ${borderRadius("100%")};
                    margin:0 20px 0 10px;
                    float:left;
                    overflow:hidden;
                }

                .content{
                    overflow:auto;
                    h3{
                        font-size:15px;
                        color:#000;
                        line-height:1.5;
                    }
                    p{
                        font-size:13px;
                        color:#000;
                        line-height:1.5;
                    }

                    .rate{
                        margin:7px 0;
                        >div{
                            display:inline-block;
                            font-size:12px;
                            color:${theme.colors.blue};
                            margin-right:2px;
                            &::before{
                                font-family: FontAwesome;
                                content:"\f006";  
                            }

                            &.active{
                                &::before{
                                    content:"\f005";  
                                }
                            }
                        }
                    }
                }
            }
        }

        .more{
            width:100%;
            margin:15px auto;
            text-align:center;
            padding:15px 0;
            border-top:1px solid #eee;
            div{
                display:inline-block;
                cursor:pointer;
                color:${theme.colors.gray};                
                font-size:14px;
                line-height:1.5;

                &:hover{
                    text-decoration:underline;
                }
            }
        }
    }

    .plans{
        padding:30px 10px;
        background:#f8f8f8;

        >div{
            >div{
                font-size:16px;
                color:#000;
                line-height:1.5;
                float:left;
                margin-right:15px;
            }
            ul{
                overflow:auto;
                li{
                    font-size:16px;
                    line-height:1.5;
                    color:#000;
                    margin-bottom:10px;
                    position:relative;

                    &::before{
                        content:"";
                        position:absolute;
                        top:9px;
                        left:-22px;
                        width:5px;
                        height:5px;
                        border:1px solid ${theme.colors.map};
                        background:#fff;
                        ${borderRadius("100%")};
                    }

                    .period{
                        span{
                            font-size:14px;
                            float:right;
                            color:${theme.colors.map};
                        }
                    }
                }
            }
        }
    }

    .detail{
        padding:30px 0px;
        
        >div{
            font-size:16px;
            color:#000;
            line-height:1.3;
            margin-bottom:10px;
            padding-left:30px;
            position:relative;

            &::before{
                position:absolute;
                color:${theme.colors.map};
                left:0px; 
                top:0;
                font-family: FontAwesome;
                content:"";
                width:20px;
                text-align:center;
            }
        }

        .onschedule{
            &::before{
                content:"\f017";   
            }
        }

        .recycle{
            img{
                margin-top:-6px;
            }
            &::before{
                content:"\f1b8";   
            }
        }
        .address{
            &::before{
                content:"\f041";   
            }
        }
        .phone{
            &::before{
                content:"\f095";   
            }
        }

        .schedule{
            border-left:1px dotted ${theme.colors.map};
            margin-left:9px;
            padding:15px 0 15px 18px;
            li{
                font-size:16px;
                line-height:1.5;
                color:#999;
                margin-bottom:10px;
                position:relative;

                &::before{
                    content:"";
                    position:absolute;
                    top:9px;
                    left:-22px;
                    width:5px;
                    height:5px;
                    border:1px solid ${theme.colors.map};
                    background:#fff;
                    ${borderRadius("100%")};
                }

                .period{
                    span{
                        font-size:14px;
                        float:right;
                        color:${theme.colors.map};
                    }
                }
            }
        }
        .opening{

            &::before{
                content:"\f017";   
            }

            .today{
                position:relative;
                span{
                    margin-left:8px;
                    color:#000;
                }
                margin-bottom:10px;

                &::after{
                    position:absolute;
                    color:${theme.colors.map};
                    right:5px; 
                    top:0;
                    font-family: FontAwesome;
                    content:"\f0dd";   
                }

                &.close{
                    color:${theme.colors.red};
                }
            }

            > ul{
                max-height:0;
                overflow:hidden;
                ${transition("all",".3s")};
                li{
                    font-size:14px;
                    color:#333;
                    line-height:1.3;
                    margin-bottom:5px;
                    span{
                        margin-right:8px;
                    }
                }
            }



            &:hover,&:active{
                .today{
                    span{
                        //display:none;
                    }

                    &::after{
                        content:"\f0d8";  
                        
                    }
                }
                ul{
                    border-top:1px dashed rgba(0,0,0,.1);
                    padding-top:10px;
                    max-height:250px;
                }
            }

            &.disabled{
                .today{
                    &::after{
                        display:none !important;
                    }
                }
                &:hover,&:active{
                    ul{
                        border-top:0px dashed rgba(0,0,0,.1);
                        padding-top:0px;
                        max-height:0;
                    }
                }
            }
        }
    }
  }
  
`


export default class Infos extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            isInfoHide:false,
            isReviewing:false,
            simpleInfo:true,
        }

        this.slideInfo = this.slideInfo.bind(this);
        this.toggleReviews = this.toggleReviews.bind(this);
        this.toggleSimpleInfo = this.toggleSimpleInfo.bind(this);
        this.drawPath = this.drawPath.bind(this);
        this.renderWorkTime = this.renderWorkTime.bind(this);
        this.renderInfoImages = this.renderInfoImages.bind(this);
    }


    componentDidMount() {
        
    }

    componentWillMount() {
        
    }

    drawPath(){
        this.setState({ simpleInfo:true });
    }

    toggleReviews(){
        this.setState({ isReviewing:!this.state.isReviewing });
    }
    slideInfo(){
        this.setState({ isInfoHide:!this.state.isInfoHide });
    }
    toggleSimpleInfo(){
        this.setState({ simpleInfo:!this.state.simpleInfo });
    }

    renderWorkTime(){
        const { recycleUnit } = this.props ;
        const date = moment();
       // console.log('recycleUnit : ', recycleUnit);
        if(recycleUnit.businessTimes.length ===0 ){
            return "尚未提供";
        }
        const work = recycleUnit.businessTimes.filter( v => (v.dayOfWeek === date.day())) ;
       // console.log('work :' , work);

        const times = work && work[0].description.split(' ~ ');
        if(times && (date.get("hour") >= times[0].substring(0,2) && date.get("hour") < times[1].substring(0,2))) {
            return `營業中 ${work[0].description}`;
        }else{
            return '休息中';
        }
    }

    renderStarScore(score){
        const star = [];
        for (let i=1 ; i < 6 ; i++){
            if(i <= score){
                star.push(<div key={i} className="active"></div>);
            }else {
                star.push(<div key={i} className=""></div>);
            }
        }
        return star ;
    }

    loadData(unitId) {
        const {getMapRecycleUnitComment} = this.props ;
        getMapRecycleUnitComment(unitId, true);
    }


    renderComments(comments){
       return comments.map((v,i) => {
            return (
                <li key={v.id}>
                    <div className="thumb"><CoverImage src={v.photo}/></div>
                    <div className="content">
                        <h3>{v.author}</h3>
                        <div className="rate">
                            {this.renderStarScore(v.score)}
                        </div>
                        <p>{v.content}</p>
                    </div>
                </li>
            )
        });
    }

    renderInfoImages(images) {
        return images.map((v, i) => {
            return (
                <div className="img" key={i}><CoverImage src={v}/></div>
            )
        })
    }

    render() {
        const {activeIcon,closeInfo,reviewModal, recycleUnit, recycleUnitComment, currentPage} = this.props;
        const unitScore = recycleUnit.score !== 0 ? new Number(recycleUnit.score).toFixed(1) : "尚無評論" ;
        const unitCommentScore = recycleUnitComment.score !==0 && recycleUnitComment.score !="NaN" ? new Number(recycleUnitComment.score).toFixed(1): "尚無評論";
        const totalScore = recycleUnitComment.score1 +recycleUnitComment.score2+recycleUnitComment.score3+recycleUnitComment.score4+recycleUnitComment.score5 ;

        //console.log('recycleUnit:', recycleUnit);
        //console.log('recycleUnitComment', recycleUnitComment);
        const settings = {
          className: 'slider',
          dots: true,
          dotsClass: 'sliderbtn',
          infinite: false,
          autoplay: false,
          autoplaySpeed: 3000,
        };
        return (
            <Container className={this.state.isInfoHide?(this.state.simpleInfo?"hide simple":"hide"):(this.state.simpleInfo?"simple":"")}>
                <div className="btns">
                    <div className="close" onClick={closeInfo}></div>
                    <div className="hide" onClick={this.slideInfo.bind(this)}></div>
                </div>

            {/*回收站欄位*/}
            {activeIcon === 'unit'?
              <div>

                {this.state.isReviewing?
                    <div className="gowrite">
                        <div className="top" onClick={this.toggleReviews.bind(this)}>所有評論</div>
                        <div className="btn" onClick={() => reviewModal(recycleUnit)}>撰寫評論</div>
                    </div>
                :""}

                <div className={this.state.isReviewing?"info reviewing":"info"}>
                    <div className="slider_container">
                      <Slider {...settings}>
                          {this.renderInfoImages(recycleUnit.images)}
                      </Slider>
                    </div>
                    <div className="basic">
                        <div className={recycleUnit.score !== 0?"score":"score empty"}>{unitScore}</div>
                        <div className="title">
                            <div className="name" onClick={this.toggleSimpleInfo.bind(this)}>{recycleUnit.name}</div>
                            <div className="rate">
                                {this.renderStarScore(recycleUnit.score)}
                            </div>
                        </div>
                        <div className="path" onClick={this.drawPath.bind(this)}>路徑規劃</div>
                    </div>
                    <div className="detail">
                        <div className="recycle">{ recycleUnit.recycleItems.length !== 0 ? recycleUnit.recycleItems.map((v, i) => {return (<img key={v.id} src={v.icon} width={30} height={30} alt={v.name} title={v.name} />)}) : "尚未提供"}</div>
                        <div className="address">{recycleUnit.address}</div>
                        <div className="phone">{recycleUnit.phone}</div>
                        <div className={recycleUnit.businessTimes.length !==0 ?"opening":"opening disabled"}>
                            <div className="today close">{this.renderWorkTime()}</div>
                            <ul>
                                {
                                    recycleUnit.businessTimes.length !==0 ? recycleUnit.businessTimes.map((v, i ) =>{
                                        //const dayStr = covertToWeek(v.dayOfWeek);
                                        return (
                                            <li key={i}><span>{covertToWeek(v.dayOfWeek)}</span>{v.description}</li>
                                        )
                                    }):"尚未提供"
                                }

                            </ul>
                        </div>
                    </div>

                    {/*評論*/}
                    <div className="reviews">
                        <div className="chart">
                            <div className={totalScore!==0?"bars":"bars empty"}>
                                <div title={`${recycleUnitComment.score5}票`} style={{"width":`${(recycleUnitComment.score5/totalScore)*100}%`}}></div>
                                <div title={`${recycleUnitComment.score4}票`} style={{"width":`${(recycleUnitComment.score4/totalScore)*100}%`}}></div>
                                <div title={`${recycleUnitComment.score3}票`} style={{"width":`${(recycleUnitComment.score3/totalScore)*100}%`}}></div>
                                <div title={`${recycleUnitComment.score2}票`} style={{"width":`${(recycleUnitComment.score2/totalScore)*100}%`}}></div>
                                <div title={`${recycleUnitComment.score1}票`} style={{"width":`${(recycleUnitComment.score1/totalScore)*100}%`}}></div>
                            </div>
                            <div className="average">
                                <div className={recycleUnit.score !== 0?"score":"score empty"}>{unitCommentScore}</div>
                                <div className="rate">
                                    {this.renderStarScore(recycleUnitComment.score)}
                                </div>
                            </div>
                            
                            {recycleUnit.score == 0?
                                <div className="gowrite first">
                                    <div className="btn" onClick={() => reviewModal(recycleUnit)}>撰寫評論</div>
                                </div>
                            :
                                <div className="links">
                                    <div className="see"  onClick={this.toggleReviews.bind(this)}>查看全部評論</div>
                                    <div className="write" onClick={() => reviewModal(recycleUnit)}>撰寫評論</div>
                                </div>
                            }
                        </div>


                        <ul>
                            {this.renderComments(recycleUnitComment.comments)}
                        </ul>
                        {this.state.isReviewing && recycleUnitComment.totalPage > currentPage ?
                        <div className="more"><div onClick={() => this.loadData(recycleUnit.id)}>載入更多評論</div></div>
                        :""}
                    </div>
                  </div>
                </div>
                :""}

                {/*資收車欄位*/}
                {activeIcon === 'car' ?
                  <div>
                    <div className="info">
                        <div className="slider_container">
                          <Slider {...settings}>
                            <div className="img"><CoverImage src="https://unsplash.it/400/400/?random&v=1"/></div>
                            <div className="img"><CoverImage src="https://unsplash.it/400/400/?random&v=1"/></div>
                            <div className="img"><CoverImage src="https://unsplash.it/400/400/?random&v=1"/></div>
                          </Slider>
                        </div>
                        <div className="basic">
                            <div className="rcar" onClick={this.toggleSimpleInfo.bind(this)}>DF-123</div>
                            <div className="path" onClick={this.drawPath.bind(this)}>路徑規劃</div>
                        </div>
                        <div className="detail">
                            <div className="address">40600台中市北屯區崇德九路287號</div>
                            <div className="onschedule">沿街清運中 15:00-15:30</div>
                            <ul className="schedule">
                                <li>
                                    <div className="period">
                                        18:30-18:40<span>定點清運</span>
                                    </div>
                                    <div className="route">
                                        這時段清運點或路線
                                    </div>
                                </li>
                                <li>
                                    <div className="period">
                                        19:00-19:30<span>沿街清運</span>
                                    </div>
                                    <div className="route">
                                        這時段清運點或路線
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="plans">
                            <div>
                                <div>星期一</div>
                                <ul>
                                    <li>
                                        <div className="period">
                                            18:30-18:40<span>定點清運</span>
                                        </div>
                                        <div className="route">
                                            這時段清運點或路線
                                        </div>
                                    </li>
                                    <li>
                                        <div className="period">
                                            19:00-19:30<span>沿街清運</span>
                                        </div>
                                        <div className="route">
                                            這時段清運點或路線
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div>星期二</div>
                                <ul>
                                    <li>
                                        <div className="period">
                                            --
                                        </div>  
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div>星期三</div>
                                <ul>
                                    <li>
                                        <div className="period">
                                            18:30-18:40<span>定點清運</span>
                                        </div>
                                        <div className="route">
                                            這時段清運點或路線
                                        </div>
                                    </li>
                                    <li>
                                        <div className="period">
                                            19:00-19:30<span>沿街清運</span>
                                        </div>
                                        <div className="route">
                                            這時段清運點或路線
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </div>
                :""}
               
            </Container>
            
        )
    }
}

const covertToWeek = (dayOfWeek) => {
    switch (dayOfWeek){
        case 1:
            return "星期一";
            break;
        case 2:
            return "星期二";
            break;
        case 3:
            return "星期三";
            break;
        case 4:
            return "星期四";
            break;
        case 5:
            return "星期五";
            break;
        case 6:
            return "星期六";
            break;
        case 7:
            return "星期日";
            break;
    }
}