import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { TbChecklist } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa"
import ManageUser from '@/app/components/manageUser';
const Users = () => {
  return (
    <div >
      <ManageUser />
      <ManageUser />
      <ManageUser />

   <div className=''>
   <button className='bg-[#462B0A] h-[50px] w-[120px] p-0 rounded-lg ml-24 my-20 '>Add User</button>
   </div>

    </div>
  )
}

export default Users

{/* 
      <div className=' flex justify-center  items-end '>

        <div>

          <h4 className='ml-4 text-lg'>   Name</h4>
          <input className='border-2 border-black p-2 rounded-xl bg-[#D8C2A7] mx-4  w-[310px] h-[50px] ' />

        </div>
        <div>

          <h4 className='ml-4 text-lg'>   Email-Id</h4>
          <input className='border-2 border-black p-2 rounded-xl bg-[#D8C2A7] mx-4  w-[310px] h-[50px] ' />

        </div>

        <div>

          <h4 className='ml-4 text-lg'>Password</h4>
          <input className='border-2 border-black p-2 rounded-xl bg-[#D8C2A7] mx-4  w-[310px] h-[50px] ' />

        </div>

        <button className='bg-[#462B0A] h-[50px] w-[80px] p-0 rounded-lg  '>Save</button>


      </div>


      <div className=' flex justify-center  items-end  '>

        <div>

          <h4 className='ml-4 text-lg'>   Name</h4>
          <input className='border-2 border-black p-2 rounded-xl bg-[#D8C2A7] mx-4  w-[310px] h-[50px] ' />

        </div>
        <div>

          <h4 className='ml-4 text-lg'>   Email-Id</h4>
          <input className='border-2 border-black p-2 rounded-xl bg-[#D8C2A7] mx-4  w-[310px] h-[50px] ' />

        </div>

        <div>

          <h4 className='ml-4 text-lg'>Password</h4>
          <input className='border-2 border-black p-2 rounded-xl bg-[#D8C2A7] mx-4  w-[310px] h-[50px] ' />

        </div>

        <button className='bg-[#462B0A] h-[50px] w-[80px] p-0 rounded-lg  '>Save</button>


      </div>
      <div className=' flex justify-center  items-end '>

        <div>

          <h4 className=' text-lg ml-4'>   Name</h4>
          <input className='border-2 border-black p-2 rounded-xl bg-[#D8C2A7] mx-4  w-[310px] h-[50px] ' />

        </div>
        <div>

          <h4 className=' text-lg ml-4'>   Email-Id</h4>
          <input className='border-2 border-black p-2 rounded-xl bg-[#D8C2A7] mx-4  w-[310px] h-[50px] ' />

        </div>

        <div>

          <h4 className=' text-lg ml-4'>Password</h4>
          <input className='border-2 border-black p-2 rounded-xl bg-[#D8C2A7] mx-4  w-[310px] h-[50px] ' />

        </div>

        <button className='bg-[#462B0A] h-[50px] w-[80px] p-0 rounded-lg  '>Save</button>


      </div> */}