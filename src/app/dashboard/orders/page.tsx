import React from 'react';
import jsonData from '../../../data/data.json'
import Card from '@/app/components/Card';
const Orders = () => {
  const Customers = jsonData.bookings


  return (
    <div className='relative h-full text-[#462B0A] font-bold font-sans '>
      <div className='absolute  h-16 left-10 right-10  top-20  rounded-md text-3xl  '>
        User Data
      </div>


      <Card data={Customers} col1={"orderId"} col2={"customerId"} col3={"dateTime"} col4={"status"} col5={null}/>




    </div>
  );
};

export default Orders