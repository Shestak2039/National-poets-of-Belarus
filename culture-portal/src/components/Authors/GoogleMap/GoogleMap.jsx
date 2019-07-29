import React from "react";

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './google-map.css';

const mapStyles = {
  width: '100%',
  height: '500px',
};

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        props.stores,
      ],
      id: props.id,
    }
  }

  displayMarkers = () => {
    const { stores, id } = this.state;
    return stores.map((store) => {
      return <Marker id={id} position={{
       lat: store.lat,
       lng: store.lng
     }}
     />
    });
  }

  render() {
    const { google, stores } = this.props;
    return (
        <Map
          google={google}
          zoom={18}
          style={mapStyles}
          initialCenter={stores}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDCDbTSuFn8cHP_FYVYMnutruFDWzGUWU8'
})(MapContainer);

// ------- call -------
// <GoogleMap
// stores={{lat: 47.6307081, lng: -122.1434325}}
// id={1}
// />
