import React, { useState, useEffect } from 'react';
function IncidentList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchItems() {
      const response = await fetch('https://ajalireports.onrender.com/incidents');
      const json = await response.json();
      console.log(json)
      setItems(json);
    }
    fetchItems();
  }, []);
  return (
    <div>
      <div
        className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://www.sevenishlaw.com/wp-content/uploads/2020/12/indianapolis-personal-injury-lawyer-what-causes-death-in-motorcycle-accidents.jpg"
            alt="" />
            {items.data && items.data.map((item) => (
        <div key={item.id} className="flex flex-col justify-start p-6">
            <h5
            className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {item.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {item.description}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
            {item.status}
            </p>
        </div>))}
        </div>
      {/* <div className="incidents-container">
      <div className="card-container">
        {items.data && items.data.map((item) => (
          <div key={item.id} className="card">
            <div className="card-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.status}</p>
            </div>
          </div>
        ))}
      </div>
      </div> */}
    </div>
  );
}
export default IncidentList;