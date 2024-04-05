
import React from 'react';
import Link from 'next/link';


const Sidebar = () => {
  return (
    <div className='w-[317px] bg-[#462B0A] h-screen  '>
      <Link href="/dashboard">
        <div className="border rounded-[7px] w-[279px] h-[63px] absolute top-[203px] left-[19px]  p-4   ">
          Dashboard

        </div>
      </Link>
      <Link href="/dashboard/customers">
        <div className="border rounded-[7px] w-[279px] h-[63px] absolute top-[286px] left-[19px] p-4 ">

          Customers

        </div>
      </Link>

      <Link href="/dashboard/bookings">

        <div className="border rounded-[7px] w-[279px] h-[63px] absolute top-[369px] left-[19px] p-4 ">
          Bookings

        </div>
      </Link>
      <Link href="/dashboard/orders">
        <div className="border rounded-[7px] w-[279px] h-[63px] absolute top-[452px] left-[19px] p-4 ">

          Orders

        </div>
      </Link>
      <Link href="/dashboard/pricing">
        <div className="border rounded-[7px] w-[279px] h-[63px] absolute top-[535px] left-[19px] p-4 ">

          Manage Pricing

        </div>
      </Link>
      <Link href="/dashboard/users">
        <div className="border rounded-[7px] w-[279px] h-[63px] absolute top-[618px] left-[19px] p-4 ">

          Manage Users

        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
