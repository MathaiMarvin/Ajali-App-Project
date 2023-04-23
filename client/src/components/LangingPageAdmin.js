import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
function LandingPageAdmin() {
  const Url = "http://[::1]:3000/incidents";
  const [incidents, setIncidents] = useState([]);
  useEffect(() => {
    fetch(Url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(incidents)
        setIncidents(data);
      });
  }, []);
  // const handleStatusChange = (id, status) => {
  //   const updatedIncidents =Object.entries(incidents.data).map((incident) => {
  //     if (incident.id === id) {
  //       return { ...incident, status };
  //     }
  //     return incident;
  //   });
  //   setIncidents(updatedIncidents);
  // };
  return (
    <div>
      <Navbar />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{Object.entries(incidents.data).map(([key, value]) => (
          <tr key={key}>
          <td>{value.title}</td>
         <td>{value.description}</td>
          <td>
          <input
              type="text"   
            value={value.status}
            // onChange={(e) => handleStatusChange(value.id, e.target.value)}
          />
      </td>
    </tr>
  ))}</tbody>
      </table>
    </div>
  );
}
export default LandingPageAdmin;
