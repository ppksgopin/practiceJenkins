import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled, {css} from 'styled-components';
import theme from '../../../../styles/theme';
import {translate,boxShadow, transition, borderRadius, box, clearfix,opacity} from '../../../../styles/mixins';
import ZeroMap from './ZeroMap';
import {awsUrl} from '../../../../utils/awsFile';
import CoverImage from '../../../common/components/CoverImage';
import Filter from './Filter';
import Infos from './Infos';
import Review from './Review';
import * as actions from '../../action';
import Loading from '../Loading_Component/Loading';


const Boundary = styled.div`
  height: calc(100% - 80px);
  overflow:hidden;
  top:80px;
  position:relative;
  @media (max-width: ${theme.medias.phablet}) {
        height: calc(100% - 50px);
        top:50px;
    }
`;


const Infoss = styled.div`
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
                .slider,.reviews,.detail,.plans{
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
        .slider,.basic,.detail,.links{
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

            &.slider{
                padding:56% 0 0 !important;
            }

            &.reviews{
                padding-left:0 !important;
                padding-right:0 !important;
            }
        }
    }

    .slider{
        overflow:hidden;
        height:0;
        padding-top:56%;
        background:#eee;
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
            width:calc(100% - 150px);

            
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
                >div{
                    height:12px;
                    width:0;
                    position:relative;

                    background:${theme.colors.blue};
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
                text-align:left;
                div{
                    display:inline-block;
                    cursor:pointer;
                    color:${theme.colors.gray};                
                    font-size:14px;
                    line-height:1.5;

                    &:hover{
                        text-decoration:underline;
                    }

                    &.write{
                        float:right;
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
        }
    }
  }
  
`;

const Tools = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:50;
  pointer-events:none;

  .myposition{
    pointer-events:auto;
    position:fixed;
    z-index:10;
    bottom:20px;
    right:20px;
    cursor:pointer;
    width:60px;
    height:60px;
    text-align:center;
    line-height:58px;
    color:#fff;
    background:${theme.colors.blue};
    border:1px solid #ddd;
    ${borderRadius("100%")};
    ${box};
    ${transition("all",".3s")};

    @media (max-width: ${theme.medias.phablet}) {
        bottom:5px;
        right:5px;

        &.active{
            bottom:145px;
        }
    }

    &::before{
        font-family: FontAwesome;
        content:"\f05b";
        letter-spacing:0;
        font-size:26px;   
    }

    &:hover{
        background:${theme.colors.blue2};
        &::before{
            font-size:26px;
        }
    }

  }


  .marker-btn{
    pointer-events:auto;
    position:absolute;
    top:20px;
    right:20px;
    z-index:30;

    &.temp{
        >div{
            &:last-child{
                display:none;
            }
        }
    }


    > div{
        display:inline-block;
        font-size:18px;
        line-height:20px;
        padding:15px 20px;
        border:1px solid #ddd;
        background:#fff;
        color:${theme.colors.map};
        cursor:pointer;
        ${borderRadius("8px")};
        ${box};

        &:first-child{
            margin-right:5px;

            &::before{
                font-family: FontAwesome;
                content:"\f1b8";
                padding-right:10px;
                border-right:1px solid rgba(0,0,0,.2);
                margin-right:10px;
            }
            &::after{
                font-family: FontAwesome;
                content:"\f0dd";
                margin-left:10px;
                font-size:12px;
                vertical-align:top;
            }
        }
        &:nth-child(2){
            margin-right:5px;
            
            &::before{
                font-family: FontAwesome;
                content:"\f0d1";
                padding-right:10px;
                border-right:1px solid rgba(0,0,0,.2);
                margin-right:10px;
            }
        }
        &:last-child{
            &::before{
                font-family: FontAwesome;
                content:"\f1f8";
                padding-right:10px;
                border-right:1px solid rgba(0,0,0,.2);
                margin-right:10px;
            }
        }

        &.active{
            color:#fff;
            background:${theme.colors.map};

            &::before{
                border-color:rgba(255,255,255,.5);
            }
        }
    }

    @media (max-width: ${theme.medias.phablet}) {
        width:calc(100% - 40px);
        >div{
            padding:15px 0px;
            text-align:center;
            width:calc(33.3% - 2.5px);
            margin:0 1px !important;
        
            &::before{   
                display:none;
            }
            //float:right;
        }
    }
  }
`

const TILE_SIZE = 256 ;

// const geolocation =(
//     navigator.geolocation ?
//         navigator.geolocation :
//         ({getCurrentLocation(success,failure){failure(`Your browser doesn't support geolocation.`)}})
// );

class RecycleMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoom:8,
            activeIcon:"unit",
            isMarkerShown: true,
            isFilterOpen:false,
            //isRecycleCar: false,
            isInfo:false,
            isReviewModal:false,
            isInfoWindowOpen:false,
            infoContent: [],
            //center:{lat : 24.162829,lng : 120.649512},
            center:{},
            markers: [],
            recycleUnit:{
                id: '',
                name: '',
                icon: '',
                recycleItems: [],
                items: [],
                score: 0,
                address: '',
                phone: '',
                images: [],
                point: {},
                businessTimes: [],
            },
            defaultLoading:false,
            loadingMessage:"座標定位中",
        }
        this.closeInfo = this.closeInfo.bind(this);
        this.toogleReviewModal = this.toogleReviewModal.bind(this);
        this.handleMapMounted = this.handleMapMounted.bind(this);
        this.handleCenterChanged = this.handleCenterChanged.bind(this) ;
        this._getLocationTimeout = this._getLocationTimeout.bind(this);
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
        this._onZoomChange = this._onZoomChange.bind(this);
        this._onToggleOpen = this._onToggleOpen.bind(this);
        this.generateInitialMarkers = this.generateInitialMarkers.bind(this);
        this.onMarkerClustererClick = this.onMarkerClustererClick.bind(this);
        this.filterMarkers = this.filterMarkers.bind(this);
        this.toggleActiveIcon = this.toggleActiveIcon.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this);
        /*this.showRecycleCar = this.showRecycleCar.bind(this);
        this.showRecycleSensor = this.showRecycleSensor.bind(this);*/
  
    }

    onMarkerClustererClick(markerClusterer){
        //console.log('markerClusterer : ', markerClusterer) ;
        const clickedMarkers = markerClusterer.getMarkers()
    }

    componentWillReceiveProps(nextProps){
       // console.log('props : ' , this.props.markers.size , nextProps.markers.size);
        //console.log('componentWillReceiveProps : ', new Date().getTime());

        const activeIcon = localStorage.getItem('activeIcon');
        let lastCenter = localStorage.getItem("currentLocation");
        //console.log('activeIcon :', activeIcon);

        if(activeIcon ==='sensor' && (nextProps.markers.toJS().list && nextProps.markers.toJS().list.size !== 0)) {
            this.setState({
                markers: this.initialSensorMarkers(nextProps.markers.toJS()),
                defaultLoading:false,
                center:{lat : 24.162829,lng : 120.649512}
            });
        }else if( activeIcon ==='car'){
            this.setState({
                markers: this.generateInitialMarkers(nextProps.markers.toJS()),
                defaultLoading:false,

            });
        }else if(activeIcon ==='unit' && (this.props.markers.size !== nextProps.markers.size)) {
            this.setState({
                markers: this.generateInitialMarkers(nextProps.markers.toJS()),
                defaultLoading:false,

            });
        }else {
            this.setState({
                defaultLoading:false,

            })
        }
    }

    componentWillUnmount() {
        //console.log('call clear Interval');
        clearInterval(this.state.load);
    }

    componentDidMount() {
        //console.log('componentDidMount : ', new Date().getTime());

        const activeIcon = localStorage.getItem('activeIcon');
        const fetchGeoLocation = new Promise((resolve, reject) => {
           // console.log('fetchGeoLocation : ', new Date().getTime());
            resolve(
                geolocation.getCurrentPosition((position) => {
                        //console.log('position:', position);
                        this.setState({
                            center : {lat: position.coords.latitude, lng: position.coords.longitude},
                            zoom:17,
                            loadingMessage:"資料讀取中..",
                            //isRecycleCar: localStorage.getItem('isRecycleCar') || false,
                            }, () => {
                                localStorage.setItem("currentLocation", JSON.stringify({
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude
                                }))
                            }
                        );
                    }, () => this._getLocationTimeout() ,
                    { timeout : 5000 }
                 )
            );
        });

        fetchGeoLocation.then(() => {
            //console.log('componentDidMount activeIcon : ', activeIcon);
            if(activeIcon && activeIcon === 'sensor'){
               // console.log('did mount call sensor : ', new Date().getTime());
                this.filterMarkers('sensor');
            }else if(activeIcon && activeIcon==='car'){
                //console.log('did mount call cars : ', new Date().getTime());
                this.filterMarkers('cars');
                const load = setInterval(function (){ this.filterMarkers('cars') }.bind(this), 30000);
                this.setState({load});
            }else {
                //console.log('did mount call unit : ', new Date().getTime());
                localStorage.setItem("activeIcon", "unit");
                const bounds = this.props.bounds.toJS() ;
                this.props.getMapRecycleUnits(bounds);
            }
        }).then(() => {
            this.props.getMapCategories();
            this.props.getMapRecycleItems();
        });
    }

    //
    initialSensorMarkers(markers){
        //console.log('markers : ' , markers);
        const googleMarkers = [] ;
        //修改只取回點位資訊，click marker 時才取回詳細資料。
        markers.list && markers.list.map( (m) => {
            let icon , position ;
            //API 回傳規格不同
            icon = {
                size: new google.maps.Size(72,72),
                url : _.find(m.sensor_list, (s) => s.bucket_high < 20 ) ? awsUrl('recycle_map_marker_sensor_red.png') : awsUrl('recycle_map_marker_sensor_green.png') ,
                scaledSize: new google.maps.Size(38, 38),
                anchor: new google.maps.Point(10, 29)
            }
            //API 回傳規格不同
            position = { lat : m.location_coordinates.X, lng: m.location_coordinates.Y }
            let marker = {
                icon,
                position,
                showInfo:false,
                activeIcon:false,
                animation: google.maps.Animation.DROP,
                ...m
            }
            //console.log('marker :' , marker);
            googleMarkers.push(marker) ;
        });

        return googleMarkers ;
    }

    generateInitialMarkers(markers){
        const googleMarkers = [] ;
        //修改只取回點位資訊，click marker 時才取回詳細資料。
        markers.map( (m) => {
            let marker = this.initMarker(m) ;
            googleMarkers.push(marker) ;
        });
        return googleMarkers ;
    }

    initMarker(m){
        let icon , position ;
        //API 回傳規格不同
        icon = {
            size: new google.maps.Size(60,66),
            url : m.categoryIcon && m.categoryIcon || awsUrl('marker_truck_brown.png') ,
            scaledSize: new google.maps.Size(39, 44),
            anchor: new google.maps.Point(10, 29)
        }
        //API 回傳規格不同
        position = {
            lat : m.point && m.point ? m.point.latitude : m.location.latitude ,
            lng: m.point && m.point ? m.point.longitude : m.location.longitude
        }
        return {
            icon,
            position,
            showInfo:false,
            activeIcon:false,
            animation: google.maps.Animation.DROP,
            ...m
        }
    }

    /*componentDidUpdate(prevProps, prevState, snapshot){
        //console.log('prevProps :', prevProps);
        //console.log('prevState :', prevState);
        // console.log('componentDidUpdate:', this._map.getBounds());
        // const latlanBounds = this._map && this._map.getBounds() ;
        // console.log("latlanbounds:" , latlanBounds && latlanBounds.toString());
        // console.log('getCenter', latlanBounds && latlanBounds.getCenter().toString());
        // console.log('getNorthEast :', latlanBounds && latlanBounds.getNorthEast().toString());
        // console.log('getSouthWest :', latlanBounds && latlanBounds.getSouthWest().toString());
        //
        // const geoCenter = new google.maps.LatLng(latlanBounds.getCenter().toString());
        return true;
    }*/

    _onZoomChange(){
       // console.log('zoom change', this._map.getZoom());
       // console.log('bounds ', this._map.getBounds().toString());
    }

    _onToggleOpen(){
        this.setState({
            isInfoWindowOpen: !this.state.isInfoWindowOpen,
        });
    }

    _getLocationTimeout(){
        //console.log('timeout');
        let lastCenter = localStorage.getItem("currentLocation");
       // console.log('lastCenter', lastCenter);
        if(!_.isEmpty(lastCenter)) {
            alert("系統無法取得您目前位置，將以您前一次的位置進行定位");
            this.setState({
                center : {lat: lastCenter.lat , lng: lastCenter.lng},
                defaultLoading:false,
                zoom:17,
                //isRecycleCar: localStorage.getItem('isRecycleCar'),
                activeIcon : localStorage.getItem('activeIcon'),
            });
        }else {
            alert("系統無法取得您目前位置，請您自行移動地圖查看各回收據點");
            this.setState({
                center:{lat : 24.162829,lng : 120.649512},
                defaultLoading:false,
                zoom:8,
                //isRecycleCar: localStorage.getItem('isRecycleCar'),
                activeIcon : localStorage.getItem('activeIcon'),
            });
        }
    }

    delayedShowMarker(){
        setTimeout(() => {
            this.setState({ isMarkerShown: true })
        }, 6000)
    }

    handleCloseClick(targetMarker){
        this.setState({
            markers: this.state.markers.map(marker => {
                if (marker === targetMarker) {
                    return {
                        ...marker,
                        showInfo: true,
                    };
                }
                return marker;
            }),
        });
    }

    /**
     * 返回目前定位的所在位置。
     * */
    _gotoCenter() {
        const { defaultLatLngBounds } = this.props ;

        this.setState({
            defaultLoading:true,
        });

        const sw = new google.maps.LatLng({lat : defaultLatLngBounds.toJS().sw.lat, lng: defaultLatLngBounds.toJS().sw.lng}) ;
        const ne = new google.maps.LatLng({lat : defaultLatLngBounds.toJS().ne.lat, lng :defaultLatLngBounds.toJS().ne.lng}) ;
        this._map.fitBounds(new google.maps.LatLngBounds(sw,ne));


        geolocation.getCurrentPosition((position) => {
                this._map.panTo(new google.maps.LatLng({lat: position.coords.latitude, lng: position.coords.longitude}));
                this.setState({
                    center : {lat: position.coords.latitude, lng: position.coords.longitude},
                    defaultLoading:false,
                    zoom:17,
                }, localStorage.setItem("currentLocation", JSON.stringify(this.state.center)));
            },this._getLocationTimeout , { timeout : 5000 }
        );
    }

    handleMarkerClick(targetMarker){
        const { getMapRecycleUnitDetail ,getMapRecycleUnitComment} = this.props ;
        let stationName = '' ;
        //清除規化路徑，並將marker 復原為初始值。
        if(targetMarker.markerSelected){
            this.setState({
                markers: this.state.markers.map((marker, index) => {
                    return {
                        ...marker,
                        opacity: 1,
                        icon: {
                            size: new google.maps.Size(60,66),
                            url: marker.icon.url,
                            scaledSize: new google.maps.Size(39, 44),
                        },
                        markerSelected: false,
                        markerSelectedId: index,
                        showInfo: false,
                    }
                }),
                isInfo:false
            });
            return false;
        }else {
            this.setState({
                loadingMessage: "讀取中",
                defaultLoading: true
            });
            //將被點選的Marker 規化路徑，並改變被選取的Marker Icon 及改變未被選取的Marker Icon的透明度
            //Z06U3OL7
           // console.log('targetMarker :' , targetMarker);
            if(this.state.activeIcon ==='unit'){
                getMapRecycleUnitDetail(targetMarker.id);
                getMapRecycleUnitComment(targetMarker.id);
            }
            this.setState({
                markers: this.state.markers.map((marker, index) => {
                    if (marker === targetMarker) {
                        marker['name'] = targetMarker.name;
                        return {
                            ...marker,
                            icon: { //ICON 樣式
                                size: new google.maps.Size(60, 66),
                                url: marker.icon.url,
                                scaledSize: new google.maps.Size(60, 66),
                            },
                            showInfo: true, //是否顯示InfoWindow
                            opacity: 1,  //Marker Icon 透明度
                            markerSelected: true,　//確定選取Marker
                        };
                    } else {
                        return {
                            ...marker,
                            opacity: 0.5,
                            icon: {
                                size: new google.maps.Size(60, 66),
                                url: marker.icon.url,
                                scaledSize: new google.maps.Size(39, 44),
                                anchor: new google.maps.Point(10, 29)
                            },
                            showInfo: false,
                            markerSelected: false,
                            visible:true,
                        }
                    }
                }),
                isInfo: this.state.activeIcon==='unit',
                defaultLoading: false,
            });
        }
    }

    initRecycleBusinessTime(value){
        value.businessTimes && value.businessTimes.map((v, i )=>{
            switch (v.dayOfWeek){
                case 1:
                    value.businessTimes[0].dayOfWeekStr = "星期一";
                    break;
                case 2:
                    value.businessTimes[1].dayOfWeekStr = "星期二";
                    break;
                case 3:
                    value.businessTimes[2].dayOfWeekStr = "星期三";
                    break;
                case 4:
                    value.businessTimes[3].dayOfWeekStr = "星期四";
                    break;
                case 5:
                    value.businessTimes[4].dayOfWeekStr = "星期五";
                    break;
                case 6:
                    value.businessTimes[5].dayOfWeekStr = "星期六";
                    break;
                case 7:
                    value.businessTimes[6].dayOfWeekStr = "星期日";
                    break;
            }

        });
        return value;
    }


    toogleReviewModal(targetUnit){
        //console.log('review unit :' , targetUnit);
        this.setState({
            isReviewModal:!this.state.isReviewModal,
            recycleUnit: targetUnit
        });
    }

    toggleActiveIcon(type) {
        localStorage.setItem('activeIcon', type);
        clearInterval(this.state.load);
        //console.log('isFilterOpen :' , this.state.isFilterOpen, 'activeIcon :' , type , this.state.activeIcon) ;
        this.setState({
            isFilterOpen: type==='unit',
            activeIcon : type,
            isInfo:false,
        },()=> {
            if(type==='unit') {
               // console.log('get map unit')
                this.filterMarkers('unit');
            }else if(type==='car'){
               // console.log('get map car then : ', new Date().getTime());
                this.filterMarkers('cars');
                const load = setInterval(function (){ this.filterMarkers('cars') }.bind(this), 30000);
                this.setState({load});
            }else{
                clearInterval(this.state.load);
               // console.log('get map sensor ');
                this.filterMarkers('sensors') ;
            }
        });
    }

    toggleFilter(){

        if(this.state.activeIcon==='unit') {
            this.setState({
                isFilterOpen: !this.state.isFilterOpen,
                isInfo:false
            });
        }else{
            this.toggleActiveIcon('unit');
        }

    }

    /*
    showRecycleCar(){
        localStorage.setItem('isRecycleCar', true);
        new Promise((resolve, reject) => {
           // console.log('showRecycleCar resolve : ', new Date().getTime());
            resolve(clearInterval(this.state.load)) ;
        }).then(()=> {
          //  console.log('showRecycleCar then : ', new Date().getTime());
            this.filterMarkers('cars');
            const load = setInterval(function (){ this.filterMarkers('cars') }.bind(this), 30000);
            this.setState({load});
        }).catch((error) => {
            console.log('error :' , error);
        })
    }

    //智慧回收桶
    showRecycleSensor(){
        console.log('get map sensor ');
        this.filterMarkers('sensors') ;
    }*/



    closeInfo(){
        this.setState({ isInfo:false });
    }
    openInfo(){
        this.setState({ isInfo:true });
    }

    handleMapMounted(map) {
        this._map = map;
    }

    handleCenterChanged(){
        //console.log('handleMapMound:', this._map.getBounds());

        // this.setState({
        //     infoContent : this.createInfoWindowContent(this._map.getCenter(), this._map.getZoom()),
        //     isInfoWindowOpen : true,
        // });
    }

    submitRecycleUnitComment(unitId, score, content) {
        const {addRecycleUnitComment, userProfile} = this.props ;
        new Promise((resolve, reject) => {
            resolve(addRecycleUnitComment(unitId, score, content, userProfile.toJS().id))
        }).then((value) => {
           // console.log('add recycle unit commemnt response :' , value) ;
            this.setState({
                isReviewModal:false
            })
        }).catch((e) => {
            console.log('error :' ,e) ;
        });
    }

    filterMarkers(recycleType) {

        const sw = new google.maps.LatLng({lat : 25.068094988352623, lng: 121.46175404743803}) ;
        const ne = new google.maps.LatLng({lat : 25.07660786371182 , lng : 121.47470375256194}) ;
        const initMap = new Promise((resolve, reject) => {
            resolve(
                this._map.fitBounds(new google.maps.LatLngBounds(sw,ne)),
                this._map.panTo(new google.maps.LatLng({lat: this.state.center.lat, lng: this.state.center.lng})),
            )
        });

        if(recycleType==='unit') {
           // console.log('filterMarkers unit : ' , new Date().getTime());
            const bounds = this.props.bounds.toJS() ;
            const { recycleItems , categories } = bounds;
            const { defaultLatLngBounds } = this.props ;
            initMap.then((v) => {
                this.setState({
                    isFilterOpen:false,
                    //isRecycleCar: false,
                    activeIcon:'unit',
                    zoom:17,
                    defaultLoading:true
                },() => this.props.getMapRecycleUnits(bounds));
            });

        }else if(recycleType==='cars'){
          //  console.log('filterMarkers cars : ' , new Date().getTime());
            const reqData = {
                centerPoint: {
                    latitude:this.state.center.lat,
                    longitude:this.state.center.lng
                }
            }

            const load = (s) => new Promise((resolve, reject) => {
                setTimeout(resolve, s);
            });

            load(2000).then(() => {
                this.setState({
                    defaultLoading:false,
                })
            });

            initMap.then((v) => {
                this.setState({
                    //isRecycleCar: true,
                    activeIcon:'car',
                    isFilterOpen: false,
                    isInfo:false,
                    zoom:17,
                    defaultLoading:true,
                }, () => this.props.getMapRecycleCar(reqData));
            }).catch((error) => {
                this.setState({
                    //isRecycleCar: true,
                    activeIcon:'car',
                    isFilterOpen: false,
                    isInfo:false,
                    zoom:17,
                    defaultLoading:true,
                }, () => this.props.getMapRecycleCar(reqData));
            });
        }else{
            initMap.then((v) => {
                this.setState({
                    //isRecycleCar: true,
                    activeIcon:'sensor',
                    isFilterOpen: false,
                    isInfo:false,
                    zoom:17,
                    defaultLoading:true,
                }, () => this.props.getMapSensor());
            });
        }
    }

    render() {
        const {categories, recycleItems , markers , recycleUnit, recycleUnitComment, addRecycleUnitComment , filterRecycleItems, bounds , getMapRecycleUnitComment, currentPage} = this.props ;
       // console.log('render :', new Date().getTime()) ;

        return(
            <Boundary>

                {/*評論視窗*/}
                {this.state.isReviewModal?
                    <Review submitRecycleUnitComment={this.submitRecycleUnitComment.bind(this)} recycleUnit={this.state.recycleUnit} closeReviewModal={()=> this.setState({isReviewModal:false})}/>
                :""}

                {/*回收站或是資收車篩選*/}
                {
                    _.isEmpty(this.state.center) ? ""
                    : <Tools>
                            <div className="marker-btn">
                                <div className={this.state.activeIcon==='unit' ? "active" : ""}
                                     onClick={() => this.toggleFilter('unit')}>回收站
                                </div>
                                <div className={this.state.activeIcon==='car' ? "active" : ""}
                                     onClick={() => this.toggleActiveIcon('car')}>資收車
                                </div>
                                <div className={this.state.activeIcon==="sensor" ? "active" : ""}
                                     onClick={() => this.toggleActiveIcon('sensor')}>智慧桶
                                </div>
                            </div>
                            <div title="我的位置" className={this.state.isInfo? "myposition active" : "myposition"}
                                 onClick={this._gotoCenter.bind(this)}/>

                            {this.state.isFilterOpen ?
                                <Filter
                                    categories={categories}
                                    recycleItems={recycleItems}
                                    toggleFilter={this.toggleFilter.bind(this)}
                                    filterRecycleItems={filterRecycleItems}
                                    filterMarkers={this.filterMarkers.bind(this)}
                                    bounds={bounds}
                                />
                                : ""}
                    </Tools>
                }

                {/*回收站資訊欄位*/}

                {this.state.isInfo?
                    <Infos
                        activeIcon={this.state.activeIcon}
                        reviewModal={this.toogleReviewModal}
                        closeInfo={this.closeInfo.bind(this)}
                        //recycleUnit={this.initRecycleBusinessTime(recycleUnit.toJS())}
                        recycleUnit={recycleUnit.toJS()}
                        recycleUnitComment={recycleUnitComment.toJS()}
                        getMapRecycleUnitComment={getMapRecycleUnitComment}
                        currentPage={currentPage}
                        /*recycleUnit={this.state.recycleUnit}
                        recycleUnitComment={this.state.recycleUnitComment}*//>
                :""}
                <Loading isLoading={this.state.defaultLoading} loadingClassName="mapLoading" message={this.state.loadingMessage} />
                {
                    _.isEmpty(this.state.center) ? ""
                    : <ZeroMap
                        isMarkerShown={this.state.isMarkerShown}
                        onMarkerClick={this.handleMarkerClick}
                        onMapMounted={this.handleMapMounted}
                        onCenterChanged={this.handleCenterChanged}
                        onZoomChanged={this._onZoomChange}
                        containerElement={<div style={{height: `100%`}} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        zoom={this.state.zoom}
                        center={this.state.center}
                       // onToggleOpen={this._onToggleOpen}
                       // isOpen={this.state.isInfoWindowOpen}
                        infoContent={this.state.infoContent}
                        markers={ this.state.markers }
                        onMarkerClustererClick={this.onMarkerClustererClick}
                        onCloseClick={this.handleCloseClick}
                        activeIcon={this.state.activeIcon}
                        //isInfo={this.state.isInfo}
                    />
                }
            </Boundary>
        )
    }
}


function mapStateToProps(state) {
    return {
        bounds: state.recycleMap.get('bounds'),
        categories: state.recycleMap.get('categories'),
        recycleItems: state.recycleMap.get('recycleItems'),
        recycleUnit: state.recycleMap.get('recycleUnit'),
        recycleUnitComment: state.recycleMap.get('recycleUnitComment'),
        markers:state.recycleMap.get('markers'),
        logIn: state.data.auth.get('IS_LOGINED') || false,
        userProfile : state.data.auth.get('PROFILE'),
        defaultLatLngBounds:state.recycleMap.get('defaultLatLngBounds'),
        currentPage : state.recycleMap.get('currentPage')
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...actions
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecycleMap);