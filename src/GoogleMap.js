// GoogleMap.js
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// class GoogleMap extends Component {
//   render() {
//     const mapStyles = {
//       width: '100%',
//       height: '100%',
//     };

//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={{
//             lat: 37.7749, // Sample latitude for initial center
//             lng: -122.4194, // Sample longitude for initial center
//         }}
//       >
//         <Marker position={{ lat: YOUR_MARKER_LATITUDE, lng: YOUR_MARKER_LONGITUDE }} />
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
// })(GoogleMap);
