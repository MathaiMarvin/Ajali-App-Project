import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import axios from 'axios';


const LandingPageClient = () => {
    const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
    const [location, setLocation] = useState('Nairobi');
    useEffect(() => {
        axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${location},Kenya&key=d8e08d86813a4657bb5f4b35886dcea2`)
          .then(response => {
            setLatitude(response.data.results[0].geometry.lat);
            setLongitude(response.data.results[0].geometry.lng);
          })
          .catch(error => {
            console.log(error);
          });
      }, [location]);

      useEffect(() => {
        if (latitude && longitude) {
          const mapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 10
          };
          const mapElement = document.getElementById('map');
          const newMap = new window.google.maps.Map(mapElement, mapOptions);
    
          new window.google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: newMap,
            title: 'Current location'
          });
          newMap.addListener('click', (event) => {
            const clickedLatitude = event.latLng.lat();
            const clickedLongitude = event.latLng.lng();
            setLatitude(clickedLatitude);
            setLongitude(clickedLongitude);
            // Fetch location using reverse geocoding API
            axios
              .get(`https://api.opencagedata.com/geocode/v1/json?q=${clickedLatitude},${clickedLongitude}&key=d8e08d86813a4657bb5f4b35886dcea2`)
              .then((response) => {
                setLocation(response.data.results[0].formatted);
              })
              .catch((error) => {
                console.log(error);
              });
          });
        }
        
      }, [latitude, longitude]);
    return ( 
        <div>
            <Navbar/>
            <div className="map-container">
            <div className="report-content">
            {/* <form>
            <label htmlFor="geolocation">Geolocation: </label>
        <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} />
        <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p> 
      </form> */}
      </div>
      <div id="map" style={{ height: '1100px', width: '50%', float: 'right', margin: '20px', position: 'fixed',}}></div>
      </div>
        </div>
     );
}
 
export default LandingPageClient;