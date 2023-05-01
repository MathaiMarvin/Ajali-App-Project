import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import TawkWidget from "./TawkWidget";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import IncidentDetails from "./IncidentDetails";

const LandingPageClient = () => {
const [items, setItems] = useState([]);
const [latitude, setLatitude] = useState(null);
const [longitude, setLongitude] = useState(null);
const [location, setLocation] = useState('');
const [selectedIncident, setSelectedIncident] = useState(null);
const [selectedFilters, setSelectedFilters] = useState([]);
const navigate = useNavigate();

useEffect(() => {
  async function fetchItems() {
    const response = await fetch('https://ajalireports.onrender.com/incidents');
    const json = await response.json();
    setItems(json);
  }
  fetchItems();
}, []);

useEffect(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}, []);

useEffect(() => {
  if (latitude && longitude) {
    axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=d8e08d86813a4657bb5f4b35886dcea2`
      )
      .then((response) => {
        setLocation(response.data.results[0].formatted);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}, [latitude, longitude]);
useEffect(() => {
  if (latitude && longitude) {
    const mapOptions = {
      center: { lat: latitude, lng: longitude },
      zoom: 10,
    };
    const mapElement = document.getElementById('map');
    const newMap = new window.google.maps.Map(mapElement, mapOptions);

    // Add marker for current location
    new window.google.maps.Marker({
      position: { lat: latitude, lng: longitude },
      map: newMap,
      title: 'Current location',
    });

if (filteredItems) {
  filteredItems.forEach((item) => {
    new window.google.maps.Marker({
      position: { lat: item.latitude, lng: item.longitude },
      map: newMap,
      title: item.title,
    });
  });
}
if (filteredItems) {
  filteredItems.forEach((item) => {
    const marker = new window.google.maps.Marker({
      position: { lat: item.latitude, lng: item.longitude },
      map: newMap,
      title: item.title,
    });
    marker.addListener('click', () => {
      setSelectedIncident(item);
    });
  });
}
    
      

    newMap.addListener('click', (event) => {
      const clickedLatitude = event.latLng.lat();
      const clickedLongitude = event.latLng.lng();
      setLatitude(clickedLatitude);
      setLongitude(clickedLongitude);
      axios
        .get(
          `https://api.opencagedata.com/geocode/v1/json?q=${clickedLatitude},${clickedLongitude}&key=d8e08d86813a4657bb5f4b35886dcea2`
        )
        .then((response) => {
          setLocation(response.data.results[0].formatted);
        })
        .catch((error) => {
          console.log(error);
        });
    });

  }
  
}, [latitude, longitude, items]);

const handleFilterChange = (event) => {
  const value = event.target.value;
  if (event.target.checked) {
    setSelectedFilters([...selectedFilters, value]);
  } else {
    setSelectedFilters(selectedFilters.filter(filter => filter !== value));
  }
};

const filteredItems = items.data && items.data.filter(item => {
  if (selectedFilters.length === 0) {
    return true;
  }
  return selectedFilters.includes(item.status);
});

// const handleDelete = (id) => {
//   axios.delete(`https://ajalireports.onrender.com/incidents/${id}`)
//     .then(() => {
//       const newItems = items.filter(item => item.id !== id);
//       setItems(newItems);
//       setSelectedIncident(null);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };
// const handleDelete = (id) => {
//   axios
//     .delete(`https://ajalireports.onrender.com/incidents/${id}`)
//     .then(() => {
//       const newItems = items.filter(item => item.id !== id);
//       setItems(newItems);
//       setSelectedIncident(null);
//     })
//     .catch(error => {
//       console.log(error);
//       console.log(error.response.data); // Log the server response data
//     });
// };
// const handleDelete = (id) => {
//   console.log(id)
//   if (!id) {
//     console.log('Invalid id:', id);
//     return;
//   }
//   axios
//     .delete(`http://127.0.0.1:3000/incidents/${id}`)
//     .then((response) => {
//       const data = response.data;
//       if (!data) {
//         console.log('Invalid response data:', data);
//         return;
//       }
//       const newItems = items.filter(item => item.id !== id);
//       setItems(newItems);
//       setSelectedIncident(null);
//       navigate("/landingpageclient"); 
//       alert("Deleted Successfully")
//     })
//     .catch(error => {
//       console.log(error);
//       console.log(error.response.data); // Log the server response data
//     });
// };
const handleDelete = (id) => {
  if (!id) {
    alert('Invalid id');
    return;
  }

  axios.delete(`https://ajalireports.onrender.com/incidents/${id}`)
    .then((response) => {
      const newItems = items.filter(item => item.id !== id);
      setItems(newItems);
      setSelectedIncident(null);
      navigate('/landingpageclient');
      alert('Deleted successfully');
    })
    .catch((error) => {
      console.log(error);
      alert('Deleted incident');
    });
};




    return ( 
        <div>
            <Navbar/>
            <div>
                  <div className="flex flex-wrap m-2 w-full">
                <div className="w-full md:w-1/2 h-screen md:order-last">
                  <div id="map" style={{ height: '100%', width: '100%' }}></div>
                </div>
                <div className="w-full md:w-1/2 flex flex-wrap">
                <div className="w-full md:w-1/3 h-screen">
                    <div className="ml-5">
                    <h3 className="font-bold">Filters</h3>
                    <div className="mt-4">
                      <h4 className="font-semibold">Status</h4>
                      <div className="ml-2 mt-2 space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" value="under_investigation" onChange={handleFilterChange}/>
                          <span className="ml-2">Under Investigation</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" value="rejected" onChange={handleFilterChange}/>
                          <span className="ml-2">Rejected</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" value="resolved" onChange={handleFilterChange}/>
                          <span className="ml-2">Resolved</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  </div>
                  <div className="w-full md:w-2/3 h-screen">
                  <div className="card-container w-full flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    {filteredItems && Object.entries(filteredItems).map(([key, value]) => (
                      <div key={key} className="card m-2 flex flex-col md:flex-row">
                        <div className="w-full md:w-48">
                          <img className="h-full object-cover w-full md:rounded-none md:rounded-l-lg" src="https://www.sevenishlaw.com/wp-content/uploads/2020/12/indianapolis-personal-injury-lawyer-what-causes-death-in-motorcycle-accidents.jpg" alt="" />
                        </div>
                        <div className="w-full md:flex-1 card-body p-4">
                          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50 cursor-pointer" onClick={() => setSelectedIncident(value)}>Title: {value.title}</h5>
                          <p className="text-base text-neutral-600 dark:text-neutral-200">Description: {value.description}</p>
                          <p className="text-base text-neutral-500 dark:text-neutral-300">Status: {value.status}</p>
                          <p className="text-base text-neutral-500 dark:text-neutral-300">Location: {value.location}</p>
                          <p className="text-base text-neutral-500 dark:text-neutral-300">Longitude: {value.longitude}</p>
                          <p className="text-base text-neutral-500 dark:text-neutral-300">Location: {value.latitude}</p>
                          <p className="text-base text-neutral-500 dark:text-neutral-300">Incident Date: {value.date}</p>
                        </div>
                        {selectedIncident && selectedIncident.id === value.id && (
                          <IncidentDetails
                            incident={selectedIncident}
                            handleDelete={handleDelete}
                            onClose={() => setSelectedIncident(null)}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>


                </div>
                </div>
                <TawkWidget/>
            </div>
        </div>
      
     );
}
 
export default LandingPageClient;
