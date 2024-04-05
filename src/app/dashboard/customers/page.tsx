
import React from 'react';
import jsonData from '../../../data/data.json'
import Card from '@/app/components/Card';
const Customers = () => {

  const Customers = jsonData.bookings

 
  return (
    <div className='relative h-full text-[#462B0A] font-bold font-sans '>
 

      <Card data={Customers} col1={"customerId"} col2={"name"} col3={"phoneNumber"} col4={"email"} col5={"address"} /> 
      
      
      
      
         </div>
  );
};

export default Customers;
   {/* <div className='absolute top-40 bottom-0 left-10 right-10 bg-[#D8C2A7] flex  justify-around p-10  border-2 rounded-lg  border-black '>

        <div  >
          <h1 className=' opacity-70'>CustomerId</h1>
          {booking.map((booking, index) => (
            <div className='p-2' key={index}>
              <h2 >Booking {booking.bookingId}</h2>

            </div>
          ))}

        </div>
        <div  >
          <h1 className='  text-center opacity-70'>
            Name
          </h1>

          {booking.map((booking, index) => (
            <div className='p-2' key={index}>
              <h2 className='  '> {booking.name}</h2>

            </div>
          ))}




        </div>
        <div  >


          <h1 className=' text-center opacity-70'>  Phone Number</h1>

          {booking.map((booking, index) => (
            <div className='p-2' key={index}>
              <h2 className=' '> {booking.phoneNumber}</h2>

            </div>
          ))}
        </div>
        <div >


          <h1 className=' text-center opacity-70'>    Email</h1>
          {booking.map((booking, index) => (
            <div className='p-2' key={index}>
              <h2 className=' '> {booking.email}</h2>

            </div>
          ))}
        </div>
        <div>


          <h1 className=' text-center opacity-70'>     Address</h1>

          {booking.map((booking, index) => (
            <div className='p-2' key={index}>
              <h2 className=' '> {booking.address}</h2>

            </div>
          ))}
        </div>



      </div> */}