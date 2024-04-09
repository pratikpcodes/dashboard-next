import React from 'react'

const ManageUser = () => {
  return (
    <div className=' flex  justify-evenly items-end '>

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

  )
}

export default ManageUser