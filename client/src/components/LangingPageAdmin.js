import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
function LandingPageAdmin() {
  const Url = "https://ajalireports.onrender.com/incidents";
  const [incidents, setIncidents] = useState([]);
  useEffect(() => {
    const fetchIncidents = async () => {
      const response = await fetch(Url);
      if (response.ok) {
        const data = await response.json();
        setIncidents(data);
        console.log(data);
      } else {
        console.error("Failed to fetch Incidents:", response.status);
      }
    };
    fetchIncidents();
  }, []);
  const handleChange = async (e, id) => {
    const status = parseInt(e.target.value);
    console.log('status:', status);
    console.log('e.target.value:', e.target.value);
    // Check if status value is not null
    if (status !== null) {
      const response = await fetch(`https://ajalireports.onrender.com/incidents/${id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({status}),
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to update incident:", errorText);
        return;
      }
      const updatedIncidents = incidents.data.map((incident) => {
        if (incident.id === id) {
          return { ...incident, status };
        } else {
          return incident;
        }
      });
      setIncidents({ data: updatedIncidents });
    }
  };
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
        <tbody>
          {incidents.data && incidents.data.map((incident) => (
              <tr key={incident.id}>
                <td>{incident.title}</td>
                <td>{incident.description}</td>
                <td>
                  <select
                    value={incident.status}
                    onChange={(e) => handleChange(e, incident.id)}
                  >
                    <option value={0}>Under Investigation</option>
                    <option value={2}>Resolved</option>
                    <option value={1}>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default LandingPageAdmin;