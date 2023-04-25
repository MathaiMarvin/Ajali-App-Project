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

  const handleChange = (e, id) => {
    const newIncidents = incidents.data.map((incident) => {
      if (incident.id === id) {
        return { ...incident, status: e.target.value };
      }
      return incident;
    });
    setIncidents({ data: newIncidents });
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
          {incidents.data &&
            incidents.data.map((incident) => (
              <tr key={incident.id}>
                <td>{incident.title}</td>
                <td>{incident.description}</td>
                <td>
                  <select
                    value={incident.status}
                    onChange={(e) => handleChange(e, incident.id)}
                  >
                    <option value="under_investigation">Under Investigation</option>
                    <option value="resolved">Resolved</option>
                    <option value="rejected">Rejected</option>
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
