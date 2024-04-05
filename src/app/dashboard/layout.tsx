// import React from 'react'
// import Navbar from '../ui/dashboard/navbar/Navbar'
// import Sidebar from '../ui/dashboard/sidebar/Sidebar'
// const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <div className='flex bg-[#EBD1B0] '>
//       <div className='  '  >
//         <Sidebar />
//       </div>
//       <div className='flex-grow'>
//         <Navbar />
//         {children}
//       </div>
//     </div>
//   )
// }

// export default layout

// Layout component
import React from 'react';
import Navbar from '../ui/dashboard/navbar/Navbar';
import Sidebar from '../ui/dashboard/sidebar/Sidebar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex bg-[#EBD1B0] '>
      <Sidebar />
      <div className='flex flex-col flex-grow'>
        <Navbar />
        <div className='flex-grow bg-[#EBD1B0] p-4'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
