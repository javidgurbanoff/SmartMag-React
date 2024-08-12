// import React, { useState } from 'react';

// const Modal = ({ isOpen, onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     imgSrc: '',
//     title: '',
//     date: '',
//     description: '',
//     rating: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSave = () => {
//     onSave(formData);
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-lg font-semibold mb-4">Add New Gadget</h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Image URL</label>
//           <input
//             type="text"
//             name="imgSrc"
//             value={formData.imgSrc}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Date</label>
//           <input
//             type="text"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//             rows="3"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Rating</label>
//           <input
//             type="text"
//             name="rating"
//             value={formData.rating}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           />
//         </div>
//         <div className="flex justify-end">
//           <button
//             onClick={handleSave}
//             className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
//           >
//             Save
//           </button>
//           <button
//             onClick={onClose}
//             className="bg-gray-500 text-white px-4 py-2 rounded"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
