import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import TawkTo from './TawkTo';
function IncidentForm(props) {
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
  }); // set the default location here
  const [submittedData, setSubmittedData] = useState(null);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form data:", formData);
    try {
      //Add the latitude and longitude to the form data
      formData.latitude = latitude;
      formData.longitude = longitude;
      formData.location = location;
      // Send a POST request to the create endpoint with the form data
      const response = await axios.post("https://ajalireports.onrender.com/incidents/create", formData);
      // If the request is successful, you can access the created incident data
      const incidentData = response.data;
      // Handle success or update the UI as needed
      console.log("Incident created:", incidentData);
    } catch (error) {
      console.error("Failed to create incident:", error);
    }
  };
  // useEffect(() => {
  //   axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${location},Kenya&key=d8e08d86813a4657bb5f4b35886dcea2`)
  //     .then(response => {
  //       setLatitude(response.data.results[0].geometry.lat);
  //       setLongitude(response.data.results[0].geometry.lng);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, [location]);
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
// const [latitude, setLatitude] = useState(null);
// const [longitude, setLongitude] = useState(null);
// const [location, setLocation] = useState('');
// const [formData, setFormData] = useState({
//   title: '',
//   date: '',
//   description: '',
//   status: '',
//   location: '',
//   latitude: '',
//   longitude: '',
// });
// const [submittedData, setSubmittedData] = useState(null);

// const handleInputChange = (event) => {
//   const { name, value } = event.target;
//   setFormData({ ...formData, [name]: value });
// };


// const handleSubmit = async (event) => {
//   event.preventDefault();
//   console.log('Form data:', formData);
//   try {
//     formData.latitude = latitude;
//     formData.longitude = longitude;
//     formData.location = location;
//     const response = await axios.post('https://ajalireports.onrender.com/incidents/create', formData);
//     const incidentData = response.data;
//     console.log('Incident created:', incidentData);
//   } catch (error) {
//     console.error('Failed to create incident:', error);
//   }
// };

// useEffect(() => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   } else {
//     console.log('Geolocation is not supported by this browser.');
//   }
// }, []);
// useEffect(() => {
//   if (latitude && longitude) {
//     axios
//       .get(
//         `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=d8e08d86813a4657bb5f4b35886dcea2`
//       )
//       .then((response) => {
//         setLocation(response.data.results[0].formatted);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// }, [latitude, longitude]);
// useEffect(() => {
//   if (latitude && longitude) {
//     const mapOptions = {
//       center: { lat: latitude, lng: longitude },
//       zoom: 10,
//     };
//     const mapElement = document.getElementById('map');
//     const newMap = new window.google.maps.Map(mapElement, mapOptions);

//     new window.google.maps.Marker({
//       position: { lat: latitude, lng: longitude },
//       map: newMap,
//       title: 'Current location',
//     });
//     newMap.addListener('click', (event) => {
//       const clickedLatitude = event.latLng.lat();
//       const clickedLongitude = event.latLng.lng();
//       setLatitude(clickedLatitude);
//       setLongitude(clickedLongitude);
//       axios
//         .get(
//           `https://api.opencagedata.com/geocode/v1/json?q=${clickedLatitude},${clickedLongitude}&key=d8e08d86813a4657bb5f4b35886dcea2`
//         )
//         .then((response) => {
//           setLocation(response.data.results[0].formatted);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     });
//   }
// }, [latitude, longitude]);


  return (
    <div>
       <Navbar/>
      {/* <div className='report-heading'>INCIDENT  REPORT</div> */}
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
        <label htmlFor="accident-date">Incident Date:</label>
        <input
        className='input'
          type="date"
          id="accident-date"
          name="date"
          value={formData.date}
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
          <option value="under_investigation">under_investigation</option>
          <option value="rejected">rejected</option>
          <option value="resolved">resolved</option>
        </select>

        <label htmlFor="geolocation">Geolocation:</label>
        <input className='input' type='text' value={location} onChange={(e) => setLocation(e.target.value)} />
        <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
        <button className="submit-btn"type="submit" value="Submit" > Submit </button>
      </form>
      </div>
      <div id="map" style={{ height: '785px', width: '50%', float: 'right', margin: '20px', position: 'fixed'}}></div>
      </div>
      <TawkTo/>
    </div>
  );
}
export default IncidentForm;