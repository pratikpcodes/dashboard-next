import React from 'react'
import Image from 'next/image'
import { FaRegEdit } from "react-icons/fa";
// import PricingImage from '../../../public/PricingImage.jpeg'
import image1 from '../../../public/image1.jpg'
const PricingCard = () => {
    return (
        <div className='w-[530px] h-[217px] border-2 border-[#462B0A] rounded-xl mb-5 '>
            <div className='flex flex-row justify-between p-3'>
                <div className='flex flex-row gap-3'>
                    <Image
                        src={image1}
                        alt="Picture of the author"
                        className='border-2 bg-black w-[124px] h-[119px] rounded-xl -3'
                    />
                    <div>
                        <p className='text-2xl text-[#462B0A]'>Traditional Photography + </p>
                        <p className='text-2xl text-[#462B0A]'>VideoGraphy</p>
                        <p className='mt-5 text-xl text-[#462B0A]'>Current Price : 1,50,000</p>
                    </div>
                </div>
                <div><FaRegEdit size={30} color='#462B0A' /></div>
            </div>
            <div className='flex px-3'>
                <div className='flex-1 text-[#462B0A]'>
                    Updated Price
                    <div className='w-[228px] h-[30px] border-2 border-[#462B0A] rounded-md px-2'>1,30,000</div>
                </div>
                <div className='flex-1'>
                    <div className='flex-1 text-[#462B0A]'>
                        Discount %
                        <div className='w-[228px] h-[30px] border-2 border-[#462B0A] rounded-md px-2'>20</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingCard