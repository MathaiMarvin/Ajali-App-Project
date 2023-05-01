import React, { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminDetails from "./AdminDetails";


function LandingPageAdmin() {
  const Url = "https://ajalireports.onrender.com/incidents";
  const [incidents, setIncidents] = useState([]);
  const [selectedIncident, setSelectedIncident] = useState(null);

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


  return (
    <div>
      <AdminNavbar />
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
                   
                <td onClick={() => setSelectedIncident(incident)}>{incident.title}</td>
                <td>{incident.description}</td>
                <td>
                  {incident.status}  

                </td>
                 {selectedIncident && selectedIncident.id === incident.id && (
                          <AdminDetails
                            incident={selectedIncident}
                            onClose={() => setSelectedIncident(null)}
                          />
                )}
              </tr>
            ))}

            
        </tbody>
      </table>
    </div>
  );
}

export default LandingPageAdmin;
