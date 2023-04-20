import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function IncidentForm(props) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState('Nairobi');
  const [formData, setFormData] = useState({
    title: "",
    accidentDate: "",
    description: "",
    status: "",
    imageUpload: "",
    videoUpload: null,
    geolocation: "",
  }); // set the default location here
  const [submittedData, setSubmittedData] = useState(null);
  const [imageURL, setImageURL] = useState(null); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData({ ...formData, [name]: files[0] });
  
    // Check if the selected file is an image
    if (event.target.accept === "image/*") {
      // Read image file and set image URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageURL(e.target.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
    setSubmittedData(formData);
    setFormData({
      title: "",
      accidentDate: "",
      description: "",
      status: "",
      imageUpload: "",
      videoUpload: null,
      geolocation: "",
    });
    setImageURL(null);
  };
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
      <div className='report-heading'>INCIDENT  REPORT</div>
      <div className="map-container">
        <div className="report-content">
          
        <form className='report' onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
        className='input'
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="accident-date">Accident Date:</label>
        <input
        className='input'
          type="date"
          id="accident-date"
          name="accidentDate"
          value={formData.accidentDate}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
        className='input'
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        ></textarea>

        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          required
        >
          <option value="">--Select--</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>

        <label htmlFor="image-upload">Image Upload:</label>
      
        <input
          type="file"
          id="image-upload"
          name="imageUpload"
          accept="image/*"
          onChange={handleFileChange}
          
        />
   {imageURL && ( // Display image if imageURL is present
              <img src={imageURL} alt="Uploaded" />
            )}
        <label htmlFor="video-upload">Video Upload:</label>
        <input
        
          type="file"
          id="video-upload"
          name="videoUpload"
          accept="video/*"
          onChange={handleFileChange}
        />

        <label htmlFor="geolocation">Geolocation:</label>
        <input className='input' type='text' value={location} onChange={(e) => setLocation(e.target.value)} />
        <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p> 
   

        <button className="submit-btn"type="submit" value="Submit" > Submit </button>
      </form>
      
      </div>
      <div id="map" style={{ height: '800px', width: '50%', float: 'right', margin: '20px', position: 'fixed'}}></div>
      </div>
      {submittedData && (
  <div className="card">
    <h2>Submitted Form Data:</h2>
    <p>Title: {submittedData.title}</p>
    <p>Accident Date: {submittedData.accidentDate}</p>
    <p>Accident Description: {submittedData.description}</p>
    <img src={imageURL} alt="Uploaded" />
    <p>Latitude: {location}</p> 
    <p>Latitude: {latitude}</p> 
    <p>Longitude: {longitude}</p> 

  </div>
)}
    </div>
  );
}

export default IncidentForm;