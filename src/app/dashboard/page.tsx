
import React from 'react';
import jsonData from '../../data/data.json'
import Card from '@/app/components/Card';
import { FaUsers } from "react-icons/fa6";
import { TbChecklist } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa"

const dashboard = () => {
  const Customers = jsonData.bookings


  return (
    <div className=' dashboard  relative h-full text-[#462B0A] font-bold font-sans '>
      <div className=' h-16 left-10 right-10  top-20  rounded-md text-3xl mx-10  '>
        Dashboard     
        <h1 className='text-base font-sans font-medium'>Welcome back, Joe</h1>
         </div>


      <div className='absolute flex  justify-start gap-24 items-center   h-48 left-10 right-10  rounded-md text-3xl p-0  '>

        <div className='border-2 border-black p-2 rounded-xl bg-[#D8C2A7]   w-[232px] h-[151px] ' >
          <FaUsers className="text-[#462B0A]" size={50} />
          <h4 className=' text-lg'>    Total Customers</h4>
          <h4 className=' text-base'>    800</h4>

        </div>
        <div className='border-2 border-black p-2 rounded-xl w-[232px]  bg-[#D8C2A7] h-[151px] ' >
          <TbChecklist className="text-[#462B0A]" size={50} />
          <h4 className=' text-lg'>    Total Orders</h4>
          <h4 className=' text-base'>    1200</h4>
        </div>
        <div className='border-2  border-black p-2 w-[232px] rounded-xl bg-[#D8C2A7]  h-[151px] ' >
          <FaUserPlus className="text-[#462B0A]" size={50} />
          <h4 className=' text-lg'>    Total Users</h4>
          <h4 className=' text-base'>    200</h4>

        </div>

      </div>



      <Card data={Customers} col1={"customerId"} col2={"name"} col3={"dateTime"} col4={"phoneNumber"} col5={"appointFor"} />




    </div>
  );
};

export default dashboard