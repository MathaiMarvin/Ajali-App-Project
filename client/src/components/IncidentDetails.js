// import Navbar from "./Navbar";
// import {useNavigate, useParams} from "react-router-dom"
// import useFetch from "./UseFetch";

// const IncidentDetails = () => {
//     const{id} = useParams();
//     const {data:value, error, isPending} = useFetch("https://ajalireports.onrender.com/incidents/" + id)
//     const navigate = useNavigate()
//     console.log(value)
   
//     return ( <div>
//         <Navbar/>
//         <div className="card m-2 flex flex-col md:flex-row">
//         <div className="w-full md:w-48">
//             <img className="h-full object-cover w-full md:rounded-none md:rounded-l-lg" src="https://www.sevenishlaw.com/wp-content/uploads/2020/12/indianapolis-personal-injury-lawyer-what-causes-death-in-motorcycle-accidents.jpg" alt="" />
//         </div>
//         <div className="w-full md:flex-1 card-body p-4">
//             <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">Title: {value.title}</h5>
//             <p className="text-base text-neutral-600 dark:text-neutral-200">Description: {value.description}</p>
//             <p className="text-base text-neutral-500 dark:text-neutral-300">Status: {value.status}</p>
//             <p className="text-base text-neutral-500 dark:text-neutral-300">Location: {value.location}</p>
//             <p className="text-base text-neutral-500 dark:text-neutral-300">Longitude: {value.longitude}</p>
//             <p className="text-base text-neutral-500 dark:text-neutral-300">Location: {value.latitude}</p>
//             <p className="text-base text-neutral-500 dark:text-neutral-300">Incident Date: {value.date}</p>
//         </div>
//         </div>
//     </div> );
// }
 
// export default IncidentDetails;
// const IncidentDetails = ({ incident, onClose }) => {
//     return (
//         <>
//       <div className="fixed z-50 inset-0 overflow-y-auto">
//         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//           <div className="fixed inset-0 transition-opacity">
//             <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//           </div>
//           <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
//           <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
//             <div>
//               <h3 className="text-lg leading-6 font-medium text-gray-900">{incident.title}</h3>
//               <div className="mt-2">
//                 <p className="text-sm leading-5 text-gray-500">
//                   {incident.description}
//                 </p>
//                 <p className="text-sm leading-5 text-gray-500">
//                   {incident.location}
//                 </p>
//                 <p className="text-sm leading-5 text-gray-500">
//                   {incident.date}
//                 </p>
//               </div>
//             </div>
//             <div className="mt-5 sm:mt-6">
//               <span className="flex w-full rounded-md shadow-sm">
//                 <button
//                   type="button"
//                   className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gray-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray transition ease-in-out duration-150 sm:text-sm sm:leading-5"
//                   onClick={onClose}
//                 >
//                   Close
//                 </button>
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       </>
//     );
//   };
//   export default IncidentDetails;
import { useState } from "react";

const IncidentDetails = ({ incident, onClose }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    fetch(`https://ajalireports.onrender.com/incidents/${incident.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setIsDeleting(false);
        onClose();
        window.location.reload(); // or update the incidents list in the parent component
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">{incident.title}</h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">{incident.description}</p>
                <p className="text-sm leading-5 text-gray-500">{incident.location}</p>
                <p className="text-sm leading-5 text-gray-500">{incident.date}</p>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <div className="flex">
                <span className="flex-1">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gray-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={handleDelete}
                    disabled={isDeleting}
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </button>
                </span>
                <span className="flex-1 ml-3">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gray-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    onClick={onClose}
                    disabled={isDeleting}
                  >
                    Close
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IncidentDetails;
