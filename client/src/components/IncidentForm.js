import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import TawkWidget from './TawkWidget';
function IncidentForm(props) {
  const navigate = useNavigate()
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
  const handleSubmit =  (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  
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
        body: JSON.stringify(formData),
      }).then((response)=>{
        if (response.status === 200) {
          console.log("Incident created successfully");
          navigate("/landingpageclient");
        }else{
          console.log("Failed to create incident");
        }
      })
   
  
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

  return (
    <div>
       <Navbar/>
      {/* <div className='report-heading'>INCIDENT  REPORT</div> */}
      <div className="map-container">
        <div className="report-content">
        <form className='report' onSubmit={(e)=>handleSubmit(e)}>
        <label htmlFor="title">Title:</label>
        <input
        className='input'
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
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: parseInt(e.target.value) })}
          required
        >
          <option value="">--Select--</option>
          <option value={0}>under_investigation</option>
          <option value={1}>rejected</option>
          <option value={2}>resolved</option>
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
      <TawkWidget/>
    </div>
  );
}
export default IncidentForm;
// import Navbar from './Navbar';
// const IncidentForm = () => {
//   return ( 
//     <div>
//       <Navbar/>
//       <div
//       class="block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
//       <form>
//         {/* Name input */}
//         <div class="relative mb-6" data-te-input-wrapper-init>
//           <input
//             type="text"
//             class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//             id="exampleInput7"
//             placeholder="Name" />
//           <label
//             for="exampleInput7"
//             class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//             >Name
//           </label>
//         </div>

//         {/* Email input */}
//         <div class="relative mb-6" data-te-input-wrapper-init>
//           <input
//             type="email"
//             class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//             id="exampleInput8"
//             placeholder="Email address" />
//           <label
//             for="exampleInput8"
//             class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//             >Email address
//           </label>
//         </div>

//         {/* Message textarea */}
//         <div class="relative mb-6" data-te-input-wrapper-init>
//           <textarea
//             class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//             id="exampleFormControlTextarea13"
//             rows="3"
//             placeholder="Message"></textarea>
//           <label
//             for="exampleFormControlTextarea13"
//             class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
//             >Message
//           </label>
//         </div>

//     {/* 
//         Submit button */}
//         <button
//           type="submit"
//           class="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//           data-te-ripple-init
//           data-te-ripple-color="light">
//           Send
//         </button>
//       </form>
//     </div>
//     </div>
//    );
// }
 
// export default IncidentForm;