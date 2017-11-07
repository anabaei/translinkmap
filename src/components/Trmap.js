

import React, {Component} from 'react';
import ReactMapboxGl, { Feature } from 'react-mapbox-gl';
import DrawControl from 'react-mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MapboxAccessToken
});
 class Trmap extends Component

{
  constructor (props) {
    super(props);

    this.state = {
      result: []
    };

  }

   handleSubmit(event) {

      event.preventDefault();

          //  Diagnose.postdiag(attr).then((res) => Object.assign(res, attr))
          //  .then((res) => this.props.history.push('/components/questions', res));

    }

 render(){

   return (
     <div>
       
       <Map
          style="mapbox://styles/mapbox/streets-v9"
          center={[-0.13235092163085938,51.518250335096376]}
          containerStyle={{
            height: '100vh',
            width: '100vw'
          }}>
            <DrawControl
            keybindings= 'true'
            touchEnabled = 'true'

            />
        </Map>
      <Feature coordinates={[51.531399, -0.153939]}/>

    </div>
   );
 }
}

export default Trmap;
