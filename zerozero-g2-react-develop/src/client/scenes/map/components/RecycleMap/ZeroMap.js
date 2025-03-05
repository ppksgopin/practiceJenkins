import React from 'react';
import { compose, withProps,lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker , InfoWindow} from "react-google-maps";
import { MarkerClusterer} from "react-google-maps/lib/components/addons/MarkerClusterer";
import FaAnchor from 'react-icons/lib/fa/anchor';
import zerozeroStyles from './mapStyle/zerozero-style.json' ;
import {awsUrl} from '../../../../utils/awsFile';

const ZeroMap =  withGoogleMap(props =>
    <GoogleMap
        defaultZoom={props.zoom}
        ref={props.onMapMounted}
        defaultCenter={{lat : 24.162829,lng : 120.649512}}
        defaultOptions={{styles: zerozeroStyles,streetViewControl:false,zoomControl:false,mapTypeControl: false ,fullscreenControl:false, gestureHandling: 'greedy',minZoom:8}}
        onBuoundsChanged={props.onBuoundsChanged}
        onCenterChanged={props.onCenterChanged}
        onZoomChanged={props.onZoomChanged}
        center={props.center}
        zoom={props.zoom}
        minZomm={8}
    >

        {props.isMarkerShown && <Marker
                                    position={props.center}
                                    icon={{
                                            url :  awsUrl("map-center.png") ,
                                            scaledSize: new google.maps.Size(8, 8),}}>
                {/*{ props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen} options={{content: props.infoContent}} defaultOptions={{content: props.infoContent}}>
                <FaAnchor />
            </InfoWindow>}*/}
        </Marker>}


        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={120}
            minimumClusterSize={3}
            defaultMinimumClusterSize={3}
        >
            {props.markers.map((marker) =>{
               // console.log('marker :' , marker);
                const onClick = () => { props.onMarkerClick(marker)}
                const onCloseClick = () => { props.onCloseClick(marker)}
                return (
                    <Marker
                        key={marker.id ? marker.id : marker.location_id}
                        { ...marker }
                        onClick={onClick}
                    >
                        { marker.showInfo && (
                            <InfoWindow onCloseClick={onCloseClick}>
                                <div>
                                    { props.activeIcon === 'sensor' ?
                                        <strong>
                                            <p>{ marker.location_name }</p>
                                            { marker.sensor_list && marker.sensor_list.map((s, i) => {
                                                return <p key={s.IMEI}>{i+1}號桶 : {`剩${s.bucket_high}公分高空間`}</p>
                                            })}
                                        </strong>

                                        : <strong>{ marker.name }</strong>
                                    }
                                </div>
                            </InfoWindow>
                        )}

                    </Marker>
                )
            })}
        </MarkerClusterer>

    </GoogleMap>
);

export default ZeroMap;
