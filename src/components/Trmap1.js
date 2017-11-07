

import React, {Component} from 'react';

import MapGL, {Marker} from 'react-map-gl';
import CityPin from './CityPin';
import {Translink} from '../utilities/Translink'

const MAPBOX_TOKEN = process.env.REACT_APP_MapboxAccessToken
 var buses = [];
const TRANSLINK_LIVE_API_URL = 'http://api.translink.ca/rttiapi/v1/buses?apiKey=aqkEXwYsmjIr2Ioy0E6v';

const request = require('request');
 class Trmap1 extends Component
{
     constructor(props) {

       super(props);
       this.state = {
         viewport: {
           latitude: 49.255179,
           longitude: -123.117527,
           zoom: 13,
           bearing: 0,
           pitch: 0,
           width: window.innerWidth,
           height: window.innerHeight
         },
         city: "",
         popupInfo: ""
       };

     }

     componentDidMount () {
        Translink.getbuses().then(() => console.log("oka"));
      }

     _renderBusMarker = (city) => {
     return (
           <Marker
             longitude={city.longitude}
             latitude={city.latitude} >
             <CityPin size={20} onClick={() => this.setState({popupInfo: city})} />
           </Marker>
         );
       }





     render() {

       const {viewport} = this.state;

       return (

         <MapGL
           {...viewport}
           mapStyle="mapbox://styles/mapbox/light-v9"
           onViewportChange={v => this.setState({viewport: v})}
           preventStyleDiffing={false}
           mapboxApiAccessToken={MAPBOX_TOKEN} >

               <Marker latitude={49.255179} longitude={-123.117527} offsetLeft={-20} offsetTop={-10}>
                          <CityPin size={20} onClick={() => this.setState({city: "city"})} />
               </Marker>

          </MapGL>

       );
     }
}





export default Trmap1;
