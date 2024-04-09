import React from 'react'
import PricingCard from '@/app/components/Pricing'
const Pricing = () => {
  return (
    <div className='grid grid-cols-2 px-8'>
      {new Array(6).fill(0).map((element,index) => {

       
        return <PricingCard key={index} />
      })}
    </div>
  )
}

export default Pricing