import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import TawkWidget from './TawkWidget';


function IncidentForm(props) {
  const navigate = useNavigate()

  const userId = parseInt(sessionStorage.getItem('userId'));
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState('Nairobi');
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    status: "",
    location: "",
    latitude: " ",
    longitude: " ",
    user_id: userId,
   // Add the user ID to the formData object
  }); // set the default location here
  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    console.log(userId);
    //check if user is logged in
    fetch('https://ajalireports.onrender.com/check')
    .then(response=>response.json())
    .then (data=>{
      console.log(data);
      
        //user is logged in send a post request 
            //Add the latitude and longitude to the form data
      formData.latitude = latitude;
      formData.longitude = longitude;
      formData.location = location;

       // Add the user ID to the form data
    
      // Send a POST request to the create endpoint with the form data
      fetch("https://ajalireports.onrender.com/incidents/create", {
        method: "POST",
        headers:{
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      .then(response => response.json())
      .then(data => {
        if (data) {
          alert('Incident Reported Successfully!');
        }else{
          alert('Error in reporting Incident. Incident not reported');
        }
      }
        )
   
  
    })
    
  
  
   
  
  };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form data:", formData);
  //   console.log(userId);
  //   // check if user is logged in
  //   fetch("http://127.0.0.1:3000/check")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.isLoggedIn) {
  //         // user is logged in, send a post request
  //         // add the latitude and longitude to the form data
  //         setFormData({
  //           ...formData,
  //           latitude: latitude,
  //           longitude: longitude,
  //           location: location,
  //           user_id: userId,
  //         });
  //         // Add the user ID to the form data
  //         formData.user_id = userId;
  //         // Send a POST request to the create endpoint with the form data
  //         fetch("http://127.0.0.1:3000/incidents/create", {
  //           method: "POST",
  //           headers: {
  //             "Content-type": "application/json",
  //           },
  //           body: JSON.stringify(formData),
  //         })
  //           .then((response) => response.json())
  //           .then((data) => {
  //             if (data) {
  //               alert("Incident Reported Successfully!");
  //             } else {
  //               alert("Error in reporting Incident. Incident not reported");
  //             }
  //           });
  //       } else {
  //         // user is not logged in redirect to login page
  //         alert("Please login to report an incident");
  //         // navigate('/');
  //       }
  //     });
  // };
  
  useEffect(() => {
    axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${location},Kenya&key=d8e08d86813a4657bb5f4b35886dcea2`)
      .then(response => {
        const results = response.data.results;
        if (results.length > 0 && results[0].hasOwnProperty('geometry')) {
          setLatitude(results[0].geometry.lat);
          setLongitude(results[0].geometry.lng);
        } else {
          console.log('Invalid response data');
        }
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
      {/* <div className='report-heading'>INCIDENT  REPORT</div> */}
      <div className="map-container">
        <div className="report-content">
        <form className='report rounded-md shadow ' onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="title" className='mt-4'>Title:</label>
        <input
        className='input mt-4'
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <label htmlFor="accident-date">Incident Date:</label>
        <input
        className='input'
          type="date"
          id="accident-date"
          name="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
        className='input'
          id="description"
          name="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        ></textarea>
        <label htmlFor="status" className='mt-4'>Status:</label>
        <select
          id="status"
          name="status"
          className='mt-1'
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: parseInt(e.target.value) })}
          required
        >
          <option value="">--Select--</option>
          <option value={0}>under_investigation</option>
          <option value={1}>rejected</option>
          <option value={2}>resolved</option>
        </select>

        <label htmlFor="geolocation" className='mt-4'> Geolocation:</label>
        <input className='input' type='text' value={location} onChange={(e) => setLocation(e.target.value)} />
        <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
        <button className="submit-btn rounded-md"type="submit" value="Submit" > Submit </button>
      </form>
      </div>
      <div id="map" className="rounded-md"style={{ height: '785px', width: '50%', float: 'right', margin: '20px', position: 'fixed'}}></div>
      </div>
      <TawkWidget/>
    </div>
  );
}
export default IncidentForm;
