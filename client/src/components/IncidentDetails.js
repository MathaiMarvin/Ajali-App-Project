
// import { useState } from "react";

// const IncidentDetails = ({ incident, onClose }) => {
  
//   return (
//     <>
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
//                 <p className="text-sm leading-5 text-gray-500">{incident.description}</p>
//                 <p className="text-sm leading-5 text-gray-500">{incident.location}</p>
//                 <p className="text-sm leading-5 text-gray-500">{incident.date}</p>
//               </div>
//             </div>
//             <div className="mt-5 sm:mt-6">
//               <div className="flex">
//                 <span className="flex-1">
//                   <button
//                     type="button"
//                     className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gray-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray transition ease-in-out duration-150 sm:text-sm sm:leading-5"
//                     onClick={handleDelete}
//                     disabled={isDeleting}
//                   >
//                     {isDeleting ? "Deleting..." : "Delete"}
//                   </button>
//                 </span>
//                 <span className="flex-1 ml-3">
//                   <button
//                     type="button"
//                     className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gray-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray transition ease-in-out duration-150 sm:text-sm sm:leading-5"
//                     onClick={onClose}
//                     disabled={isDeleting}
//                   >
//                     Close
//                   </button>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default IncidentDetails;
import { useState } from "react";


const IncidentDetails = ({ incident, onClose, handleDelete, isDeleting }) => {
  
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
                    onClick={() => handleDelete(incident.id)}
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


