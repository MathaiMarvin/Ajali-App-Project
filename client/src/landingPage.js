import React from 'react'
import { useSelector } from 'react-redux';

function LandingPage() {
  const items = useSelector(state => state.items);

  return (
    <div>
      <h2>Incidents</h2>
      <div className="card-container">
        {items.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <div className="card-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <video src={item.video} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default LandingPage;