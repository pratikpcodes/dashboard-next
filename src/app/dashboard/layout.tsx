import React from 'react'
import Navbar from '../ui/dashboard/navbar/Navbar'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'
const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='flex '>
      <div className='  '  >
        <Sidebar />
      </div>
      <div className='flex-grow'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default layout