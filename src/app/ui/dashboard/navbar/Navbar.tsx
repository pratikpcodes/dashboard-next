'use client'
import { VscBellDot } from "react-icons/vsc";
import Image from 'next/image'
import user from "../../../../../public/user.jpg"

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-[5rem] bg-[#EBD1B0]  flex justify-between items-center border-2 px-5 rounded-xl">
        <h2>Navbar</h2>
        <div className="flex items-center gap-2 ">
          <div style={{ width: '30px', height: '30px', top: '35px', left: '1134px', gap: '0px', opacity: '0px' }}>
            <VscBellDot size={30} />
          </div>
          <Image
            src={user}
            width={55}
            height={55}
            alt="Picture of the author"
            className="rounded-full"
            style={{ width: '55px', height: '55px', top: '22px', left: '1186px', gap: '0px', opacity: '0px' }}
          />

          <div className="ml-2">
            <h4 className="text-sm font-semibold leading-tight" style={{ fontFamily: 'Open Sans', width: '77px', height: '22px', top: '33px', left: '1258px', gap: '0px', opacity: '0px', textAlign: 'left' }}>John Doe</h4>
            <h6 className="text-xs font-normal leading-tight" style={{ fontFamily: 'Open Sans', width: '147px', height: '16px', top: '54px', left: '1255px', gap: '0px', opacity: '0px', textAlign: 'left' }}>johndoe@gmail.com</h6>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
