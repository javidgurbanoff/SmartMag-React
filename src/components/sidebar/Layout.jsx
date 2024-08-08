// import React, { useState } from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const Layout = ({ children }) => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <Header toggleSidebar={toggleSidebar} />
//       <div className="flex flex-grow relative">
//         {/* Sidebar */}
//         <div 
//           className={`fixed inset-y-0 left-0 transform transition-transform duration-300 bg-black ${
//             isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
//           style={{ width: '16rem' }} // or 'w-64' in Tailwind
//         >
//           <Sidebar />
//         </div>

//         {/* Main Content */}
//         <main className="flex-grow p-6 ml-64">
//           {children}
//         </main>

//         {/* Overlay for closing sidebar on click */}
//         {isSidebarOpen && (
//           <div 
//             className="fixed inset-0 bg-black opacity-50 z-10"
//             onClick={toggleSidebar}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Layout;
